import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const WarningComponent = () => {
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
        <h2 className="verify-title">Предупреждение</h2>
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
              <p className="verify__text2" style={{ marginBottom: 20 }}>
                Уважаемые клиенты! Безопасность проведения транзакций может быть
                поставлена под угрозу, в связи с независящими от нашего сервиса
                обстоятельствами. Чтобы этого не произошло, рекомендуем
                ознакомиться со следующими правилами конвертации электронной
                валюты:
              </p>
              <div style={{ marginLeft: 20 }}>
                <p className="verify__text">
                  Всегда требуйте подтверждения личности лица, на реквизиты
                  которого вы собираетесь выполнить перевод средств. Сделать это
                  можно посредством личного звонка на skype, icq либо
                  посредством запроса информации о статусе кошелька оппонента на
                  сайте платежной системы;
                </p>
                <p className="verify__text">
                  Будьте предельно внимательны при заполнении поля «Номер счета»
                  адресата. Допустив ошибку, вы отправляете собственные средства
                  в неизвестном направлении без возможности их возврата;
                </p>
                <p className="verify__text">
                  Никогда не предоставляете займы, используя «безотзывные»
                  электронные системы оплаты. В данном случае шанс столкнуться с
                  фактом мошенничества чрезвычайно велик;
                </p>
                <p className="verify__text">
                  Если вам предлагается сделать оплату способом, отличным от
                  указанного в инструкции к использованию нашего сервиса,
                  откажитесь от выполнения платежа и сообщите о случившемся
                  нашему специалисту. То же касается выплат по заявкам,
                  созданным не лично вами;
                </p>
                <p className="verify__text">
                  Откажитесь от проведения средств, собственниками которых
                  являются третьи лица, через собственные банковские счета.
                  Известны случаи, когда проведение таких транзакций за
                  вознаграждение, приводило к тому, что владелец счета
                  становился соучастником финансового преступления, не
                  подозревая о злом умысле со стороны мошенников;
                </p>
                <p className="verify__text">
                  Всегда уточняйте у сотрудника обменного пункта информацию,
                  приходящую на вашу почту.
                </p>
              </div>
              <p
                className="verify__text2"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                Наш и подобные сервисы не предоставляют займов, не берут
                средства у пользователей в долг или под проценты, не принимают
                пожертвований. При получении сообщений подозрительного характера
                от нашего имени с похожих на наши либо иных реквизитов,
                воздержитесь от выполнения указанных там требований и сообщите о
                произошедшем в нашу службы поддержки.
              </p>
              <p className="verify__text2">
                С заботой о вашем финансовом благополучии.
              </p>
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
      </div>
      <NotificationContainer />
    </section>
  );
};

export default WarningComponent;
