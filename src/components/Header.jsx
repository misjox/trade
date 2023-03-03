import React, { useState } from "react";
import logo from "../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import telegramIcon from "../images/telegram.png";
import emailIcon from "../images/email.png";
import mobileButton from "../images/mobileButton.svg";
import closeButton from "../images/close.svg";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobile, setMobile] = useState(false);

  const errorLogin = () => {
    NotificationManager.error(
      "В данный момент проводятся технические работы",
      "Ошибка"
    );
  };

  const changeMobile = () => {
    setMobile(!mobile);
  };
  return (
    <header className="header">
      <div className="header__contact">
        <div className="container">
          <div className="header__contact-up-block">
            <div className="header__contact-block">
              <a
                href="https://t.me/cryptodomorg"
                className="header__contact-block-telegram"
              >
                <img
                  className="header__contact-block-telegram-icon"
                  src={telegramIcon}
                  alt="icon"
                />
                Написать нам
              </a>
              <a
                href="mailto:crypto-dom.org@proton.me"
                className="header__contact-block-email"
              >
                <img
                  className="header__contact-block-telegram-icon"
                  src={emailIcon}
                  alt="icon"
                />
                crypto-dom.org@proton.me
              </a>
            </div>

            <div className="header__login-buttons">
              <button
                className="header__login-buttons-login"
                onClick={errorLogin}
              >
                Войти
              </button>
              <button
                className="header__login-buttons-register"
                onClick={errorLogin}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__block">
        <div className="container">
          <div className="header__navigation">
            <button
              className="header__navigation-logo"
              onClick={() => navigate("/")}
            >
              <img
                className="header__navigation-logo-icon"
                alt="logo"
                src={logo}
              />
            </button>
            <ul className="header__navigation-menu">
              <li className="header__navigation-item">
                <button
                  className="header__navigation-link"
                  onClick={() => navigate("/faq")}
                  style={{
                    borderBottom:
                      location.pathname === "/faq" ? "2px solid #0c72d7" : null,
                  }}
                >
                  Пользовательский "FAQ"
                </button>
              </li>
              <li className="header__navigation-item">
                <button
                  className="header__navigation-link"
                  onClick={() => navigate("/verify")}
                  style={{
                    borderBottom:
                      location.pathname === "/verify"
                        ? "2px solid #0c72d7"
                        : null,
                  }}
                >
                  Как пройти верификацию ?
                </button>
              </li>
            </ul>
            <div className="header__navigation-timework">
              <p className="header__navigation-timework-text">
                Обмен автоматический 24/7 Оператор:
              </p>
              <p className="header__navigation-timework-text">
                Пн. — Пт. с 08:00 до 23:00 по Польше.
              </p>
              <p className="header__navigation-timework-text">
                Сб. — Вск. свободный график.
              </p>
            </div>
            <button className="header__mobile-button" onClick={changeMobile}>
              <img
                className="header__navigation-menu-button-icon"
                alt="mobile-menu"
                src={mobileButton}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`header__mobile ${mobile ? "active" : ""}`}>
        <div className="header__mobile-block">
          <ul className="header__mobile-menu">
            <li className="header__mobile-menu-item">
              <button
                className="header__mobile-menu-link"
                style={{
                  color: location.pathname === "/" ? "#0a9073" : null,
                }}
                onClick={() => navigate("/")}
              >
                Обмен
              </button>
            </li>
            <li className="header__mobile-menu-item">
              <button
                className="header__mobile-menu-link"
                onClick={() => navigate("/reserve")}
                style={{
                  color: location.pathname === "/reserve" ? "#0a9073" : null,
                }}
              >
                Резервы
              </button>
            </li>
            <li className="header__mobile-menu-item">
              <button
                className="header__mobile-menu-link"
                onClick={() => navigate("/faq")}
                style={{
                  color: location.pathname === "/faq" ? "#0a9073" : null,
                }}
              >
                Пользовательский "FAQ"
              </button>
            </li>
            <li className="header__mobile-menu-item">
              <button
                className="header__mobile-menu-link"
                onClick={() => navigate("/verify")}
              >
                Как пройти верификацию ?
              </button>
            </li>
          </ul>
        </div>
        <button className="header__mobile-close" onClick={changeMobile}>
          <img
            className="header__mobile-close-icon"
            src={closeButton}
            alt="close-mobile"
          />
        </button>
      </div>
      <NotificationContainer />
    </header>
  );
};
export default Header;
