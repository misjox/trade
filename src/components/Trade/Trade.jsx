import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import exchange from "../../images/exchange.png";
import acceptIcon from "../../images/accept.svg";
import acceptFalseIcon from "../../images/acceptFalse.svg";
import { Formik, Form, Field } from "formik";
import { Triangle, Puff } from "react-loader-spinner";
import { publicIpv4 } from "public-ip";

const Trade = React.memo(() => {
  const navigate = useNavigate();
  const [accept, setAccept] = useState(false);
  const [reserve, setReserve] = useState([]);

  // BUTTONS GIVE
  const buttonGive = useRef();
  // BUTTONS TAKE
  const buttonTake = useRef();

  // LIST GIVE
  const [listGive, setListGive] = useState([]);
  // LIST TAKE
  const [listTake, setListTake] = useState([]);

  // GIVE ID
  const [give, setGive] = useState("");
  // TAKE ID
  const [take, setTake] = useState("");

  // GIVE ELEMENT
  const [inputGive, setInputGive] = useState("");

  // CURRENT COURSE: GIVE COIN - TAKE COIN
  const [currentCourse, setCurrentCourse] = useState(0);
  const [currentCourseUSD, setCurrentCourseUSD] = useState(0);

  // GIVE INFORMATION
  const [giveObject, setGiveObject] = useState({});
  // TAKE INFORMATION
  const [takeObject, setTakeObject] = useState({});

  // FILTER GIVE NAME
  const [filterGiveName, setFilterGiveName] = useState("Все");
  // FILTER GIVE BUTTONS
  const buttonsFilterGive = useRef(null);
  // FILTER TAKE NAME
  const [filterTakeName, setFilterTakeName] = useState("Все");
  // FILTER TAKER BUTTONS
  const buttonsFilterTake = useRef(null);

  // FILTER GIVE LIST
  const filterGive = useMemo(() => {
    switch (filterGiveName) {
      case "Все":
        setListTake([]);
        buttonGive?.current?.childNodes?.forEach((elem) => {
          elem.children[0].classList.remove("active");
        });

        return [];
        break;
      case "STABLE":
        setListTake([]);
        buttonGive.current.childNodes.forEach((elem) => {
          elem.children[0].classList.remove("active");
        });
        return listGive.filter((item) => item.typeCoin === filterGiveName);
        break;
      case "CRYPTO":
        setListTake([]);
        return listGive.filter((item) => item.typeCoin === filterGiveName);
        break;
      default:
        return [];
    }
  }, [filterGiveName]);

  // FILTER TAKE LIST
  const [filterTake, setFilterTake] = useState([]);

  useEffect(() => {
    let takeNew = [];
    switch (filterTakeName) {
      case "Все":
        takeNew = [];
        break;
      case "STABLE":
        const stable = listTake.filter(
          (item) => item.typeCoin === filterTakeName
        );
        takeNew = stable;
        break;
      case "CRYPTO":
        const crypto = listTake.filter(
          (item) => item.typeCoin === filterTakeName
        );
        takeNew = crypto;
        break;
      default:
        takeNew = [];
        break;
    }
    setFilterTake(takeNew);
  }, [filterTakeName]);

  const [loadingCourse, setLoadingCourse] = useState(false);

  const actionCurrentCourseUSD = async (giveMoney) => {
    const current = await axios("https://api4.binance.com/api/v3/ticker/price");
    let isCurrentBinance = false;

    current.data.forEach((item) => {
      if (item.symbol === [giveMoney, "USDT"].join("")) {
        setCurrentCourseUSD(item.price);
        isCurrentBinance = true;
        return;
      }
      if (item.symbol === [giveMoney, "USDT"].reverse().join("")) {
        setCurrentCourseUSD(1 / item.price);
        isCurrentBinance = true;
        return;
      }
    });

    if (!isCurrentBinance) {
      const altCurrency = await axios.post(
        `${process.env.REACT_APP_SERVER}/course/get`,
        {
          giveMoney: giveMoney,
          takeMoney: "USDT",
        }
      );

      setCurrentCourseUSD(altCurrency.data.data[0].quote["USDT"].price);
    }
  };

  // FUNCTION RETURN CURRENT COURSE
  const actionCurrentCourse = async (giveMoney, takeMoney) => {
    setLoadingCourse(true);
    const current = await axios("https://api4.binance.com/api/v3/ticker/price");
    actionCurrentCourseUSD(giveMoney);
    let isCurrentBinance = false;

    current.data.forEach((item) => {
      if (item.symbol === [giveMoney, takeMoney].join("")) {
        setCurrentCourse(item.price);
        setLoadingCourse(false);
        isCurrentBinance = true;
        return;
      }
      if (item.symbol === [giveMoney, takeMoney].reverse().join("")) {
        setCurrentCourse(1 / item.price);
        setLoadingCourse(false);
        isCurrentBinance = true;
        return;
      }
    });

    if (!isCurrentBinance) {
      const altCurrency = await axios.post(
        `${process.env.REACT_APP_SERVER}/course/get`,
        {
          giveMoney: giveMoney,
          takeMoney: takeMoney,
        }
      );

      setCurrentCourse(altCurrency.data.data[0].quote[takeMoney].price);
      setLoadingCourse(false);
    }
  };

  // const sliseCurrency = () => {
  //   const test1 = String(
  //     altCurrency.data.data[0].quote[takeMoney].price
  //   ).indexOf(".");
  //   const lengthO = String(
  //     altCurrency.data.data[0].quote[takeMoney].price
  //   ).length;

  //   const number1 = String(
  //     altCurrency.data.data[0].quote[takeMoney].price
  //   ).slice(0, test1);
  //   const number2 = String(
  //     altCurrency.data.data[0].quote[takeMoney].price
  //   ).slice(test1 + 1, lengthO);
  //   console.log(number1);
  // }

  // FUNCTION BUTTON ACTION GIVE FILTER
  const actionFilterGive = ({ target }) => {
    if (target.nodeName !== "BUTTON") return;

    buttonsFilterGive.current.childNodes.forEach((item) => {
      item.classList.remove("active");
    });

    target.classList.add("active");
    setFilterTakeName("Все");

    if (!buttonsFilterTake.current.childNodes[0].classList.contains("active")) {
      buttonsFilterTake.current.childNodes.forEach((item, index) => {
        if (index === 0 && !item.classList.contains("active")) {
          item.classList.add("active");
          return;
        }
        item.classList.remove("active");
      });
    }

    setFilterGiveName(target.innerText);
  };

  // FUNCTION BUTTON ACTION TAKE FILTER
  const actionFilterTake = ({ target }) => {
    if (target.nodeName !== "BUTTON") return;

    buttonsFilterTake.current.childNodes.forEach((item) => {
      item.classList.remove("active");
    });

    target.classList.add("active");

    setFilterTakeName(target.innerText);
  };

  // FUNCTION BUTTON SWITCH "IS ACTIVE BUTTON" - GIVE
  const isActiveButton = ({ target }) => {
    if (target.nodeName !== "BUTTON") return;

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      setListTake([]);
      setGive("");
      setTake("");
      return;
    }
    buttonGive.current.childNodes.forEach((elem) => {
      elem.children[0].classList.remove("active");
    });

    const currentGive = listGive.find((item) => item.id === target.id);
    setGive(currentGive.id);
    setListTake(currentGive.coins);
    document.getElementById(target.id).classList.add("active");
  };

  // FUNCTION BUTTON SWITCH "IS ACTIVE BUTTON" - TAKE
  const isActiveButtonTake = async (element, id) => {
    const { target } = element;
    if (target.nodeName !== "BUTTON") return;

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      setTake("");
      return;
    }
    buttonTake.current.childNodes.forEach((elem) => {
      elem.children[0].classList.remove("active");
    });

    const requestGive = listGive.find((item) => item.id === give);
    const requestTake = listTake.find((item) => item.id === id);
    setTake(id);
    setGiveObject(requestGive);
    setTakeObject(requestTake);
    actionCurrentCourse(requestGive.code, requestTake.code);
    document.getElementById(target.id).classList.add("active");
  };

  // ERRORS FORM
  const [errorCount, setErrorCount] = useState(false);
  const [errorWallet, setErrorWallet] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const [loadRequest, setLoadRequest] = useState(false);
  // SUBMIT FORM DATA COIN
  const submitForm = async (values) => {
    let errorForm = false;

    if (values.email === "") {
      setErrorEmail(true);
      errorForm = true;
    }
    if (values.clientPayment === "") {
      setErrorWallet(true);
      errorForm = true;
    }
    if (inputGive === "") {
      setErrorCount(true);
      errorForm = true;
    }

    if (errorForm) {
      setLoadRequest(false);
      return;
    }

    let country = "Null";

    try {
      setLoadRequest(true);

      const youIp = await publicIpv4();
      country = youIp;
    } catch (err) {
      console.log(err);
    }

    const result = await axios.post(
      `${process.env.REACT_APP_SERVER}/payment/create`,
      {
        country: country,
        clientWallet: values.clientPayment,
        email: values.email,
        giveCoin: giveObject,
        takeCoin: takeObject,
        giveCount: inputGive,
        takeCount: String(
          Number(inputGive) * currentCourse +
            Number(inputGive) * currentCourse * 0.02
        ),
        giveCountUSDT: String(Number(inputGive) * currentCourseUSD),
        giveCode: giveObject.code,
        takeCode: takeObject.code,
      }
    );
    setLoadRequest(false);
    navigate(`/trade/${result.data._id}`);
  };

  // REQUEST COINS
  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/coins?limit=30`).then(
      (result) => {
        setListGive(result.data.docs);
      }
    );

    axios(`${process.env.REACT_APP_SERVER}/api/reserve?limit=30`).then((result) => {
      setReserve(result.data.docs);
    });
  }, []);

  const [notTenCoins, setNotTenCoins] = useState(true);

  const reserveCount = () => {
    const count = reserve.find((item)=> takeObject.code === item.code)
    if(count === undefined) return 0
    return count.reserve
  }
  return (
    <section className="trade">
      <div className="container">
        <h2 className="trade__title">Обмен валют</h2>
        <div className={`trade__block ${take === "" ? "" : "active"}`}>
          {/* TRADE GIVE */}
          <div className="trade__give">
            <div className="trade__give-block">
              <div className="trade__give-filter" ref={buttonsFilterGive}>
                <button
                  className="trade__give-filter-button active"
                  onClick={actionFilterGive}
                >
                  Все
                </button>
                <button
                  className="trade__give-filter-button"
                  onClick={actionFilterGive}
                >
                  Stable
                </button>
                <button
                  className="trade__give-filter-button"
                  onClick={actionFilterGive}
                >
                  Crypto
                </button>
              </div>
              <div className="trade__give-coin">
                <h3 className="trade__give-title">Отдаете</h3>
                <ul className="trade__give-list" ref={buttonGive}>
                  {/* <FilterGiveComponent /> */}
                  {filterGiveName === "Все" ? (
                    <>
                      {listGive.length === 0 ? (
                        <Triangle
                          height="80"
                          width="80"
                          color="#4fa94d"
                          ariaLabel="triangle-loading"
                          wrapperStyle={{ margin: "0 auto" }}
                          wrapperClassName=""
                          visible={true}
                        />
                      ) : (
                        <>
                          {listGive.map((item, index) => (
                            <li
                              className={`trade__give-item ${
                                index > 10 && notTenCoins ? "isNotActive" : ""
                              }`}
                              key={item?.id}
                            >
                              <button
                                className="trade__give-button"
                                onClick={isActiveButton}
                                id={item?.id}
                              >
                                <img
                                  className="trade__give-button-img"
                                  alt="coin"
                                  src={item?.image?.url}
                                />
                                <p className="trade__give-button-text">
                                  {item?.title}
                                </p>
                              </button>
                            </li>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {filterGive.map((item, index) => (
                        <li
                          className={`trade__give-item ${
                            index > 10 && notTenCoins ? "isNotActive" : ""
                          }`}
                          key={item.id}
                        >
                          <button
                            className="trade__give-button"
                            onClick={isActiveButton}
                            id={item?.id}
                          >
                            <img
                              className="trade__give-button-img"
                              alt="coin"
                              src={item?.image?.url}
                            />
                            <p className="trade__give-button-text">
                              {item?.title}
                            </p>
                          </button>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>

              {filterGive.length !== 0 && filterGive.length > 10 ? (
                <button
                  className="trade__give-list-all"
                  onClick={() => {
                    setNotTenCoins(!notTenCoins);
                  }}
                >
                  {notTenCoins ? "Показать все" : "Скрыть"}
                </button>
              ) : null}

              {listGive.length > 10 && filterGive.length === 0 ? (
                <button
                  className="trade__give-list-all"
                  onClick={() => {
                    setNotTenCoins(!notTenCoins);
                  }}
                >
                  {notTenCoins ? "Показать все" : "Скрыть"}
                </button>
              ) : null}
            </div>
          </div>

          {/* TRADE TAKE */}
          <div className="trade__take">
            <div className="trade__take-block">
              <div className="trade__take-filter" ref={buttonsFilterTake}>
                <button
                  className="trade__take-filter-button active"
                  onClick={actionFilterTake}
                >
                  Все
                </button>
                <button
                  className="trade__take-filter-button"
                  onClick={actionFilterTake}
                >
                  Stable
                </button>
                <button
                  className="trade__take-filter-button"
                  onClick={actionFilterTake}
                >
                  Crypto
                </button>
              </div>

              <div className="trade__take-coin">
                <h3 className="trade__take-title">Получаете</h3>
                <ul className="trade__take-list" ref={buttonTake}>
                  {/* <FilterTakeComponent /> */}

                  {filterTakeName === "Все" ? (
                    <>
                      {listTake.map((item) => (
                        <li className="trade__take-item" key={item?.id}>
                          <button
                            className="trade__take-button"
                            onClick={(element) => {
                              isActiveButtonTake(element, item.id);
                            }}
                            id={item?.id}
                          >
                            <img
                              className="trade__take-button-img"
                              alt="coin"
                              src={item?.image?.url}
                            />
                            <p className="trade__take-button-text">
                              {item?.title}
                            </p>
                          </button>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {filterTake.map((item) => (
                        <li className="trade__take-item" key={item.id}>
                          <button
                            className="trade__take-button"
                            onClick={(element) => {
                              isActiveButtonTake(element, item.id);
                            }}
                            id={item?.id}
                          >
                            <img
                              className="trade__take-button-img"
                              alt="coin"
                              src={item?.image?.url}
                            />
                            <p className="trade__take-button-text">
                              {item?.title}
                            </p>
                          </button>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className={`trade__form ${take === "" ? "" : "active"}`}>
            {take ? (
              <div className="trade__form-data">
                <div className="trade__form-data-warning">
                  <h2 className="trade__form-data-warning-title">Внимание!</h2>
                  <p className="trade__form-data-warning-text">
                    Данная операция производится в автоматическом режиме,
                    смотреть{" "}
                    <button
                      onClick={() => navigate("/faq")}
                      className="trade__form-data-warning-text-link"
                    >
                      "FAQ"
                    </button>
                  </p>
                </div>{" "}
                <div className="trade__form-data-payment">
                  <h2 className="trade__form-data-payment-title">
                    Ввод данных
                  </h2>
                  <p className="trade__form-data-payment-course">
                    <span className="trade__form-data-payment-course-span">
                      Курс обмена:
                    </span>{" "}
                    {loadingCourse ? (
                      <Puff
                        height="20"
                        width="20"
                        radius={1}
                        color="#4fa94d"
                        ariaLabel="puff-loading"
                        wrapperStyle={{
                          display: "inline-flex",
                          margin: "auto 5px",
                        }}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      Number(currentCourse).toFixed(5)
                    )}{" "}
                    {takeObject.code} = 1 {giveObject.code}
                  </p>
                  <p className="trade__form-data-payment-reserve">
                    <span className="trade__form-data-payment-reserve-span">
                      {" "}
                      Резерв:
                    </span>{" "}
                    {reserveCount()}{takeObject.code}
                  </p>

                  <Formik
                    initialValues={{
                      givePayment: "",
                      takePayment: "",
                      email: "",
                      clientPayment: "",
                    }}
                    onSubmit={(values) => submitForm(values)}
                  >
                    {() => (
                      <Form classList="trade__form-data-payment-form">
                        <label className="trade__form-data-payment-form-label">
                          <div className="trade__form-data-payment-form-take">
                            <img
                              src={giveObject?.image?.url}
                              className="trade__form-data-payment-form-take-img"
                              alt="takeCoin"
                            />
                            <p className="trade__form-data-payment-form-take-text">
                              {giveObject?.title}
                            </p>
                          </div>
                          <p className="trade__form-data-payment-form-text">
                            Сумма:
                          </p>
                          <Field
                            onInput={({ target }) =>
                              setInputGive(
                                target.value.replace(/[^.0-9]/gi, "")
                              )
                            }
                            onFocus={() => {
                              setErrorCount(false);
                            }}
                            style={
                              errorCount ? { border: "1px solid red" } : {}
                            }
                            name="givePayment"
                            value={inputGive}
                            type="text"
                            class="trade__form-data-payment-form-input"
                          />
                        </label>

                        <label
                          style={{ pointerEvents: "none" }}
                          className="trade__form-data-payment-form-label"
                        >
                          <div className="trade__form-data-payment-form-give">
                            <img
                              src={takeObject?.image?.url}
                              className="trade__form-data-payment-form-give-img"
                              alt="takeCoin"
                            />
                            <p className="trade__form-data-payment-form-give-text">
                              {takeObject?.title}
                            </p>
                          </div>
                          <p className="trade__form-data-payment-form-text">
                            Сумма:
                          </p>
                          <Field
                            value={String(
                              Number(inputGive) * currentCourse +
                                Number(inputGive) * currentCourse * 0.02
                            )}
                            onFocus={() => {
                              setErrorCount(false);
                            }}
                            style={
                              errorCount ? { border: "1px solid red" } : {}
                            }
                            name="takePayment"
                            type="text"
                            class="trade__form-data-payment-form-input"
                            id="takeCoin"
                          />
                        </label>
                        <label className="trade__form-data-payment-form-label">
                          <p className="trade__form-data-payment-form-text">
                            На счет*:
                          </p>
                          <Field
                            onFocus={() => {
                              setErrorWallet(false);
                            }}
                            style={
                              errorWallet ? { border: "1px solid red" } : {}
                            }
                            name="clientPayment"
                            type="text"
                            class="trade__form-data-payment-form-input"
                          />
                        </label>
                        <h3 className="trade__form-data-payment-form-personal">
                          Личные данные
                        </h3>
                        <label className="trade__form-data-payment-form-label">
                          <p className="trade__form-data-payment-form-text">
                            E-mail*:
                          </p>
                          <Field
                            onFocus={() => {
                              setErrorEmail(false);
                            }}
                            style={
                              errorEmail ? { border: "1px solid red" } : {}
                            }
                            name="email"
                            type="email"
                            class="trade__form-data-payment-form-input"
                          />
                        </label>
                        <button
                          type="submit"
                          disabled={loadRequest}
                          className="trade__form-data-payment-form-submit"
                        >
                          Обменять
                        </button>
                        <button
                          type="button"
                          onClick={() => setAccept(!accept)}
                          className="trade__form-data-payment-form-accept"
                        >
                          {accept ? (
                            <>
                              <img
                                className="trade__form-data-payment-form-accept-img"
                                src={acceptIcon}
                                alt="acceptIcon"
                              />
                              <p className="trade__form-data-payment-form-accept-text">
                                Запомнить введенные данные
                              </p>
                            </>
                          ) : (
                            <>
                              <img
                                className="trade__form-data-payment-form-accept-img"
                                src={acceptFalseIcon}
                                alt="acceptFalseIcon"
                              />
                              <p className="trade__form-data-payment-form-accept-text">
                                Запомнить введенные данные
                              </p>
                            </>
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            ) : (
              <div className="trade__form-notification">
                <img
                  src={exchange}
                  className="trade__form-notification-img"
                  alt="exchange"
                />

                <p className="trade__form-notification-text">
                  Выберите валюту "Получаю", чтобы появилась форма обмена
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
export default Trade;
