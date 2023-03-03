import React from "react";
import best from "../images/bestchange.gif";
import telegramIcon from "../images/Telegram_logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__partner">
        <div className="container">
          <h2 className="footer__partner-title">Партнеры</h2>
          <ul className="footer__partner-list">
            <li className="footer__partner-item">
              <a
                className="footer__partner-item-link"
                href="https://www.bestchange.com"
              >
                <img
                  src={best}
                  className="footer__partner-item-img"
                  alt="logo-partner"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__information">
        <div className="container">
          <div className="footer__information-block">
            <div className="footer__information-menu">
              <h2 className="footer__information-menu-title">
                Сервис обмена электронных валют.
              </h2>
              <ul className="footer__information-menu-list">
                <li className="footer__information-menu-item">
                  <button className="footer__information-menu-item-link">
                    Карта сайта
                  </button>
                </li>
                <li className="footer__information-menu-item">
                  <button
                    className="footer__information-menu-item-link"
                    onClick={() => navigate("/warning")}
                  >
                    Предупреждение
                  </button>
                </li>
                <li className="footer__information-menu-item">
                  <button
                    className="footer__information-menu-item-link"
                    onClick={() => navigate("/rules")}
                  >
                    Правила сайта
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer__information-social">
              <a
                href="https://t.me/cryptodomorg"
                className="footer__information-social-button"
              >
                <img
                  src={telegramIcon}
                  className="footer__information-social-button-icon"
                  alt="social"
                />
              </a>
            </div>
            <div className="footer__information-timework">
              <p className="footer__information-timework-text">
                Обмен автоматический 24/7 Оператор:
              </p>
              <p className="footer__information-timework-text">
                Пн. — Пт. с 08:00 до 23:00 по Польше.
              </p>
              <p className="footer__information-timework-text">
                Сб. — Вск. свободный график.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
