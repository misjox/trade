import React from "react";
import { useNavigate } from "react-router-dom";
import verif1 from "../images/verif1.jpg";
import verif2 from "../images/verif2.jpg";
import verif3 from "../images/verif3.jpg";
import verif4 from "../images/verif4.jpg";
import verif5 from "../images/verif5.jpg";
import verif6 from "../images/verif6.jpg";
import verif7 from "../images/verif7.jpg";
import verif8 from "../images/verif8.jpg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const VerifyComponent = () => {
  const navigate = useNavigate();

  const errorLogin = () => {
    NotificationManager.error(
      "В данный момент проводятся технические работы",
      "Ошибка"
    );
  };
  return (
    <section className="verify">
      <div className="container">
        <h2 className="verify-title">Как пройти верификацию ?</h2>
        <button
          className="verify-back"
          onClick={() => {
            navigate("/");
          }}
        >
          Обмен валют
        </button>

        <div className="verify__block">
          <div className="verify__manual">
            <div className="verify__manual-padding">
              <p className="verify__text">
                Верификация личности производится только один раз ! Далее все
                обмены доступны после авторизации .
              </p>
              <p className="verify__text">
                Верификация нужна исключительно на направления обменов, где
                пользователь отдает деньги со своей карты.
              </p>
              <p className="verify__text" style={{ marginTop: 10 }}>
                Как пройти Верификацию Личности ?
              </p>

              <ul className="verify__manual-list">
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    1. Пройти регистрацию на сайте, нажать — Регистрация —
                  </p>
                  <img
                    className="verify__manual-item-img"
                    alt="manual"
                    src={verif1}
                  />
                </li>
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    2. После успешной регистрации, нажмите — Аккаунт —
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif2}
                    alt="manual"
                  />
                </li>
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    3. В новой странице нажмите — Пройти верификацию —
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif3}
                    alt="manual"
                  />
                </li>
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    4. Загрузите фотографии согласно правилам сайта:
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif4}
                    alt="manual"
                  />
                </li>
              </ul>

              <p
                className="verify__text"
                style={{ marginTop: 40, marginLeft: 30 }}
              >
                Как пройти Верификацию Карты ?
              </p>

              <ul className="verify__manual-list">
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    1. На странице аккаунт нажмите — Ваши счета —
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif5}
                    alt="manual"
                  />
                </li>
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    2. Выберите нужную валюту и нажмите — Добавить —
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif6}
                    alt="manual"
                  />
                </li>
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    3. Нажмите — Пройти верификацию —
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif7}
                    alt="manual"
                  />
                </li>
                <li className="verify__manual-item">
                  <p className="verify__manual-item-text">
                    4. Загрузите фотографию согласно правилам сайта:
                  </p>
                  <img
                    className="verify__manual-item-img"
                    src={verif8}
                    alt="manual"
                  />
                </li>
              </ul>
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
                <button className="verify__login-form-links-register" onClick={errorLogin}>
                  Регистрация
                </button>
                <button className="verify__login-form-links-forgot" onClick={errorLogin}>
                  Забыли пароль?
                </button>
              </div>
              <button className="verify__login-form-submit" onClick={errorLogin}>Войти</button>
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
      </div>
      <NotificationContainer />
    </section>
  );
};

export default VerifyComponent;
