import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import { io } from "socket.io-client";
import ResultPayment from "./ResultPayment";
import EndTimeModal from "./EndTimeModal";

const Result = () => {
  const [socket, setSocket] = useState(io);
  const [statusPayment, setStatusPayment] = useState("Ожидание оплаты");
  const getTokenSocket = () => {
    if (!localStorage.getItem("tokenSocket")) {
      const newToken = uuidv4();
      localStorage.setItem("tokenSocket", JSON.stringify(newToken));

      return newToken;
    } else {
      return localStorage.getItem("tokenSocket");
    }
  };

  useEffect(() => {
    const token = getTokenSocket();
    const socketInit = io(`${process.env.REACT_APP_SERVER}`, {
      auth: {
        token: token,
      },
    });
    setSocket(socketInit);
    return () => {
      socketInit.off();
    };
  }, [setStatusPayment]);

  socket.on("payment", (msg) => {
    if (msg === "acceptTrade") {
      setStatusPayment("Ожидание выплаты");
    } else if (msg === "failTrade") {
      setStatusPayment("Обратитесь в тех поддержку");
    }
  });

  const [inputGive, setInputGive] = useState("");
  const [giveCoin, setGiveCoin] = useState({});
  const [takeCoin, setTakeCoin] = useState({});
  const [formAccept, setFormAccept] = useState(false);
  const { idG, idT } = useParams();
  const [currentCourse, setCurrentCourse] = useState(0);
  const [paymentClient, setPaymentClient] = useState("");
  const [numberOffer, setNumberOffer] = useState(0);

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/coins/${idG}`).then((result) => {
      const elementT = result.data.coins.find((item) => item.id === idT);
      setGiveCoin(result.data);
      setTakeCoin(elementT);

      axios("https://api4.binance.com/api/v3/ticker/price").then((total) => {
        total.data.forEach((item) => {
          if (item.symbol === [result.data.code, elementT.code].join("")) {
            setCurrentCourse(item.price);
            return;
          }
          if (
            item.symbol === [result.data.code, elementT.code].reverse().join("")
          ) {
            setCurrentCourse(1 / item.price);
            return;
          }
        });
      });
    });
  }, []);

  const PaymentAccept = async ({ score, email, tel, telegram }) => {
    if ((!email, !tel, !telegram)) return;

    let country = "Null";

    try {
      const youIp = await axios("https://api.ipify.org");
      const countryCurrent = await axios(
        `https://ipapi.co/${youIp.data}/json/`
      );
      country = countryCurrent.data.country_name;
    } catch (err) {
      console.log(err);
    }

    const offer = await axios.post(`${process.env.REACT_APP_SERVER}/payment`, {
      country: country,
      paymentWallet: giveCoin.payment,
      coins: [giveCoin.code, takeCoin.code].join("-"),
      giveCode: giveCoin.code,
      takeCode: takeCoin.code,
      giveCoin: Number(inputGive),
      takeCoin: Number(inputGive) * Number(currentCourse) * 0.02,
      email: email,
      tel: tel,
      telegram: telegram,
    });
    setFormAccept(true);
    setPaymentClient(score);
    setNumberOffer(offer.data.numberOffer);
  };

  return (
    <section className="result">
      <div className="container">
        <div className="result__block">
          <div className="result__trade">
            <form className="result__trade-form">
              <img
                className="result__trade-img"
                alt="coin"
                src={giveCoin?.image?.url}
              />
              <input
                onInput={({ target }) => {
                  const newStr = target.value.replace(/[^,.0-9]/gi, "");
                  setInputGive(newStr);
                }}
                style={{
                  pointerEvents: formAccept ? "none" : "auto",
                }}
                className="result__trade-give"
                type="text"
                placeholder="Вы отдаете"
                value={inputGive}
              />
              <div className="result__trade-icon"></div>
              <img
                className="result__trade-img"
                alt="coin"
                src={takeCoin?.image?.url}
              />
              <input
                className="result__trade-take"
                type="text"
                placeholder="Вы получаете"
                value={
                  inputGive === ""
                    ? ""
                    : Number(inputGive) * Number(currentCourse) +
                      Number(inputGive) * Number(currentCourse) * 0.02
                }
              />
            </form>

            <Formik
              initialValues={{
                score: "",
                email: "",
                tel: "",
                telegram: "",
              }}
              onSubmit={(values) => PaymentAccept(values)}
            >
              {() => (
                <Form className="result__form">
                  {formAccept ? (
                    <ResultPayment
                      numberOffer={numberOffer}
                      clientPayment={paymentClient}
                      inputGive={Number(inputGive)}
                      inputTake={
                        Number(inputGive) * Number(currentCourse) * 0.02
                      }
                      giveCoin={giveCoin}
                      takeCoin={takeCoin}
                      statusPayment={statusPayment}
                    />
                  ) : (
                    <>
                      <label>
                        <p className="result__form-label">
                          Кошелек для получения
                        </p>
                        <Field
                          className="result__form-input"
                          type="text"
                          name="score"
                        />
                      </label>
                      <label>
                        <p className="result__form-label">Ваша почта</p>
                        <Field
                          className="result__form-input"
                          type="text"
                          name="email"
                        />
                      </label>
                      <label>
                        <p className="result__form-label">Ваш телефон</p>
                        <Field
                          className="result__form-input"
                          type="text"
                          name="tel"
                        />
                      </label>
                      <label>
                        <p className="result__form-label">Ваш телеграм</p>
                        <Field
                          className="result__form-input"
                          type="text"
                          name="telegram"
                        />
                      </label>
                      <button type="submit" className="result__trade-submit">
                        Подтвердить
                      </button>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <EndTimeModal />
      </div>
    </section>
  );
};

export default Result;
