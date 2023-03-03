import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";




const TradeRusult = React.memo(() => {
  const errorLogin = () => {
    NotificationManager.error(
      "В данный момент проводятся технические работы",
      "Ошибка"
    );
  };
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [statusTrade, setStatusTrade] = useState("");

  let checkStatus;

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/payment/`, { id: id })
      .then((result) => {
        setData(result.data);
      });

    let checkStatus = setInterval(() => {
      axios
        .post(`${process.env.REACT_APP_SERVER}/payment/status`, { id: id })
        .then((result) => {
          setStatusTrade(result.data.status);
        });
    }, 8000);

    return () => {
      clearInterval(checkStatus);
    };
  }, []);

  const switchStatus = (message) => {
    let statusText = (
      <span style={{ color: "#46b8da" }}>Принята, ожидает оплаты клиента</span>
    );

    if (message === "Wait") {
      statusText = (
        <span style={{ color: "#46b8da" }}>
          Принята, ожидает оплаты клиента
        </span>
      );
    } else if (message === "Cancel Trade") {
      statusText = <span style={{ color: "#d9534f" }}>Заявка отменена</span>;
    } else if (message === "Accept Trade") {
      NotificationManager.success("Оплата успешна", "Успех", 2000);
      const audio = new Audio();
      audio.src = require("../../images/audio/action.mp3");
      audio.play();
      statusText = <span style={{ color: "#5cb85c" }}>Оплата успешна</span>;

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else if (message === "Fail Trade") {
      NotificationManager.warning("Обратитесь в тех поддержку", "Ошибка", 1000);
      const audio = new Audio();
      audio.src = require("../../images/audio/action.mp3");
      audio.play();

      statusText = (
        <span style={{ color: "#f0ad4e" }}>Обратитесь в тех поддержку</span>
      );
    } else if (message === "Test Trade") {
      statusText = (
        <span style={{ color: "#46b8da" }}>
          Получено подтверждение об оплате от клиента{" "}
        </span>
      );
    }
    return statusText;
  };

  const [loadRequestCancel, setLoadRequestCancel] = useState(false);

  const cancelTrade = async () => {
    setLoadRequestCancel(true);

    NotificationManager.error("Вы отменили оплату", "Отмена", 2000);
    const audio = new Audio();
    audio.src = require("../../images/audio/action.mp3");
    audio.play();
    const result = await axios.patch(
      `${process.env.REACT_APP_SERVER}/payment/cancel`,
      { id: id }
    );

    setTimeout(() => {
      clearInterval(checkStatus);

      if ((result.data.message = "Cancel Trade")) {
        navigate("/");
      }
    }, 5000);
  };

  const [loadRequestAccept, setLoadRequestAccept] = useState(false);

  const acceptTrade = async () => {
    setLoadRequestAccept(true);
    try {
      axios.patch(`${process.env.REACT_APP_SERVER}/payment/acceptTrade`, {
        id: id,
        status: "Test Trade",
      });
      const idNotification = NotificationManager.info(
        "Вы подтвердили оплату",
        "Подтверджение"
      );
      console.log(idNotification);
      // NotificationManager.remove(idNotification);
      const audio = new Audio();
      audio.src = require("../../images/audio/action.mp3");
      audio.play();
    } catch (err) {
      console.log(err);
      setLoadRequestAccept(false);
    }
  };

  return (
    <div className="container">
      <div style={{ padding: "50px 5px" }}>
        <div className="verify__block">
          <div className="trade-result">
            <h2
              className="trade-result-title"
              style={{ textAlign: "center", margin: 0 }}
            >
              Заявка №13{data?.numberOffer}
            </h2>
            <h2 className="trade-result-title">Как оплатить</h2>
            <div className="trade-result-information">
              <div className="trade-result-information-give">
                <p className="trade-result-information-give-text">
                  Сумма платежа: {data?.giveCount} {data?.giveCoin?.title}{" "}
                  {data?.giveCoin?.code}
                </p>
                {/* <p className="trade-result-information-give-text">
            Со счета: 4234234234
          </p> */}
              </div>
              <div className="trade-result-information-take">
                <p className="trade-result-information-take-text">
                  Сумма к получению: {data?.takeCount} {data?.takeCoin?.title}{" "}
                  {data?.takeCoin?.code}
                </p>
                <p className="trade-result-information-take-text">
                  На счет: {data?.giveCoin?.payment}
                </p>
              </div>
              <p className="trade-result-information-warning">
                <span className="trade-result-information-warning-span">
                  Пожалуйста будьте внимательны!
                </span>
                Все поля должны быть заполнены в точном соответствии с
                инструкцие. В противном случае, платеж может не пройти
              </p>
            </div>

            <div className="trade-result-status">
              <h3 className="trade-result-status-date">
                <span className="trade-result-status-date-span">
                  Время создания заявки:
                </span>{" "}
                {day > 10 ? `${day}` : `0${day}`}.
                {month > 10 ? `${month}` : `0${month}`}.{year}{" "}
                {hour > 10 ? `${hour}` : `0${hour}`}:
                {minute > 10 ? `${minute}` : `0${minute}`}
              </h3>
              <h3 className="trade-result-status-offer">
                <span className="trade-result-status-offer-span">
                  Статус заявки:
                </span>{" "}
                {switchStatus(statusTrade)}
              </h3>
            </div>

            <div className="trade-result-buttons">
              <button
                className="trade-result-cancel"
                onClick={() => {
                  cancelTrade();
                }}
                disabled={loadRequestCancel}
              >
                Отменить заявку
              </button>

              <button
                className="trade-result-ok"
                onClick={() => {
                  acceptTrade();
                }}
                disabled={loadRequestAccept}
              >
                Я оплатил
              </button>
            </div>
          </div>
          <div className="verify__login">
            <div className="verify__login-form">
              <h2 className="verify__login-form-title">Авторизация</h2>
              <label className="verify__login-form-label">
                <p className="verify__login-form-text">Логин или e-mail *:</p>
                <input type="text" className="verify__login-form-input" />
              </label>
              <label className="verify__login-form-label">
                <p className="verify__login-form-text">Пароль *:</p>
                <input type="text" className="verify__login-form-input" />
              </label>

              <div className="verify__login-form-links">
                <button
                  className="verify__login-form-links-register"
                  onClick={errorLogin}
                >
                  Регистрация
                </button>
                <button
                  className="verify__login-form-links-forgot"
                  onClick={errorLogin}
                >
                  Забыли пароль?
                </button>
              </div>
              <button
                className="verify__login-form-submit"
                onClick={errorLogin}
              >
                Войти
              </button>
            </div>

            <ul className="verify__login-comment">
              <li className="verify__login-comment-item">
                <h2 className="verify__login-comment-item-title">
                  Konstantin,{" "}
                  <span className="verify__login-comment-item-title-span">
                    02.02.2023, 17:19
                  </span>
                </h2>
                <p className="verify__login-comment-item-message">
                  Спасибо за быстрый и качественный обмен. Процветания вам!
                </p>
              </li>
              <li className="verify__login-comment-item">
                <h2 className="verify__login-comment-item-title">
                  Андрей,,{" "}
                  <span className="verify__login-comment-item-title-span">
                    28.01.2023, 14:30
                  </span>
                </h2>
                <p className="verify__login-comment-item-message">
                  Хороший обменник, быстро всё прошло. Обмен делал первый раз,
                  всё легко и доступно. Оператор всегда…
                </p>
              </li>
              <li className="verify__login-comment-item">
                <h2 className="verify__login-comment-item-title">
                  Дима,{" "}
                  <span className="verify__login-comment-item-title-span">
                    24.01.2023, 07:16
                  </span>
                </h2>
                <p className="verify__login-comment-item-message">
                  Обмен был произведен и мы остались довольны сервисом. Будем
                  пользоваться еще!
                </p>
              </li>
            </ul>
            <button className="verify__login-comment-all">Все отзывы</button>
          </div>
        </div>
        <NotificationContainer />
      </div>
    </div>
  );
});

export default TradeRusult;
