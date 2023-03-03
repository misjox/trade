import React from "react";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const RulesComponent = () => {
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
        <h2 className="verify-title">Правила сайта</h2>
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
              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                1. Стороны соглашения.
              </h2>

              <p
                className="verify__text2"
                style={{ marginBottom: 20, padding: 0 }}
              >
                Договор заключается между интернет сервисом по обмену титульных
                знаков, далее Исполнитель, — с одной стороны, и Заказчик, в лице
                того, кто воспользовался услугами Исполнителя, — с другой
                стороны.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                2. Список терминов.
              </h2>

              <p className="verify__text2" style={{ padding: 0 }}>
                2.1. Обмен титульных знаков — автоматизированный продукт
                интернет обслуживания, который предоставляется Исполнителем на
                основании данных правил.
              </p>

              <p className="verify__text2" style={{ padding: 0 }}>
                2.2. Заказчик — физическое лицо, соглашающееся с условиями
                Исполнителя и данного соглашения, к которому присоединяется.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                2.3. Титульный знак — условная единица той или иной платежной
                системы, которая соответствует расчетам электронных систем и
                обозначает объем прав, соответствующих договору системы
                электронной оплаты и ее Заказчика.
              </p>

              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                2.4. Заявка — сведения, переданные Заказчиком для использования
                средств Исполнителя в электронном виде и свидетельствующие о
                том, что он принимает условия пользования сервисом, которые
                предлагаются Исполнителем в данной заявке.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                3. Условия соглашения.
              </h2>

              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                Данные правила считаются организованными за счет условий
                общественной оферты, которая образуется во время подачи
                Заказчиком заявки и является одной из главных составляющих
                настоящего договора. Общественной офертой именуются отображаемые
                исполнителем сведения об условиях подачи заявки. Главным
                составляющим общественной оферты являются действия, сделанные в
                завершении подачи заявки Заказчиком и говорящие о его точных
                намерениях совершить сделку на условиях предложенных
                Исполнителем перед завершением данной заявки. Время, дата, и
                параметры заявки создаются Исполнителем автоматически в момент
                окончания формирования данной заявки. Предложение должно
                приняться Заказчиком в течение 24 часов от окончания
                формирования заявки. Договор по обслуживанию вступает в силу с
                момента поступления титульных знаков в полном размере, указанном
                в заявке, от Заказчика на реквизиты Исполнителя. Операции с
                титульными знаками учитываются согласно правилам, регламенту и
                формату электронных систем по расчетам. Договор действителен в
                течение срока , который устанавливается с момента подачи заявки
                до расторжения по инициативе одной из сторон.
              </p>
              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                4. Предмет соглашения.
              </h2>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                Путем использования технических методов Исполнитель обязуется
                выполнять обмен титульных знаков за комиссионное вознаграждение
                от Заказчика, после подачи данным лицом заявки и совершает это
                путем продажи титульных знаков лицам, желающим их приобрести по
                сумме, указанной не ниже, чем в заявке поданной Заказчиком.
                Денежные средства Исполнитель обязуется переводить на указанные
                Заказчиком реквизиты. В случае возникновения во время обмена
                прибыли, она остается на счету Исполнителя, как дополнительная
                выгода и премия за комиссионные услуги.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                5. В дополнение.
              </h2>

              <p className="verify__text2" style={{ padding: 0 }}>
                5.1. Если на счет Исполнителя поступает сумма, отличающаяся от
                указанной в заявке, Исполнитель делает перерасчет, который
                соответствует фактическому поступлению титульных знаков. Если
                данная сумма превышает указанную в заявке более чем на 10%,
                Исполнитель расторгает договор в одностороннем порядке и все
                средства возвращаются на реквизиты Заказчика, с учетом вычтенной
                суммы на комиссионные расходы во время перевода.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                5.2. В случае, когда титульные знаки не отправляются
                Исполнителем на указанные реквизиты Заказчика в течение 24
                часов, Заказчик имеет полное право потребовать расторжение
                соглашения и аннулировать свою заявку, тем самым совершая
                возврат титульных знаков на свой счет в полном объеме. Заявка на
                расторжение соглашения и возврата титульных знаков выполняется
                Исполнителем в том случае, если денежные средства еще не были
                переведены на указанные реквизиты Заказчика. В случае
                аннулирования договора, возврат электронной валюты производится
                в течение 24 часов с момента получения требовании о расторжении
                договора. Если задержки при возврате возникли не по вине
                Исполнителя, он не несет за них ответственности.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                5.3. Если титульные знаки не поступаеют от Заказчика на счет
                Исполнителя в течение указанного срока, с момента подачи заявки
                Заказчиком, соглашение между сторонами расторгается Исполнителем
                с одной стороны, так как договор не вступает в действие.
                Заказчик может об этом не уведомляться. Если титульные знаки
                поступает на реквизиты Исполнителя после указанного срока, то
                такие средства переводятся обратно на счет Заказчика, причем все
                комиссионные расходы, связанные с переводом, вычитаются из
                данных средств.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                5.4. Если происходит задержка перевода средств на реквизиты,
                указанные Заказчиком, по вине расчетной системы, Исполнитель не
                несет ответственности за ущерб, возникающий в результате долгого
                поступления денежных средств. В этом случае Заказчик должен
                согласиться с тем, что все претензии будут предъявляться к
                расчетной системе, а Исполнитель оказывает свою помощь по мере
                своих возможностей в рамках закона.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                5.5. В случае обнаружения подделки коммуникационных потоков или
                оказания воздействия, с целью ухудшить работу Исполнителя, а
                именно его программного кода, заявка приостанавливается, а
                переведенные средства подвергаются перерасчету в соответствии с
                действующим соглашением. Если Заказчик не согласен с
                перерасчетом, он имеет полное право расторгнуть договор и
                титульные знаки отправятся на реквизиты указанные Заказчиком.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                5.6. В случае пользования услугами Исполнителя, Заказчик
                полностью соглашается с тем, что Исполнитель несет ограниченную
                ответственность соответствующую рамкам настоящих правил
                полученных титульных знаков и не дает дополнительных гарантий
                Заказчику, а также не несет перед ним дополнительной
                ответственности. Соответственно Заказчик не несет дополнительной
                ответственности перед Исполнителем.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                5.7. Заказчик обязуется выполнять нормы соответствующие
                законодательству, а также не подделывать коммуникационные потоки
                и не создавать препятствий для нормальной работы программного
                кода Исполнителя.
              </p>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                5.8.Исполнитель не несет ответственности за ущерб и последствия
                при ошибочном переводе электронной валюты в том случае, если
                Заказчик указал при подаче заявки неверные реквизиты.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                6. Гарантийный срок
              </h2>

              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                В течение 24 часов с момента исполнения обмена титульных знаков
                Исполнитель дает гарантию на оказываемые услуги при условии,
                если не оговорены иные сроки.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                7. Непредвиденные обстоятельства.
              </h2>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                В случае, когда в процессе обработки заявки Заказчика возникают
                непредвиденные обстоятельства, способствующие невыполнению
                Исполнителем условий договора, сроки выполнения заявки
                переносятся на соответствующий срок длительности форс-мажора. За
                просроченные обязательства Исполнитель ответственности не несет.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                8. Форма соглашения.
              </h2>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                Данное соглашение обе стороны, в лице Исполнителя и Заказчика,
                принимают как равноценный по юридической силе договор,
                обозначенный в письменной форме.
              </p>

              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                9. Работа с картами Англии, Германии и США.
              </h2>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                Для владельцев карт стран Англии, Германии и США условия
                перевода титульных знаков продляются на неопределенный срок,
                соответствующий полной проверке данных владельца карты. Денежные
                средства в течение всего срока не подвергаются никаким операциям
                и в полном размере находятся на счете Исполнителя.
              </p>
              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                10 Претензии и споры.
              </h2>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                Претензии по настоящему соглашению принимаются Исполнителем в
                форме электронного письма, в котором Заказчик указывает суть
                претензии. Данное письмо отправляется на указанные на сайте
                реквизиты Исполнителя.
              </p>
              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                11. Проведение обменных операций.
              </h2>

              <p className="verify__text2" style={{ padding: 0 }}>
                11.1.Категорически запрещается пользоваться услугами Исполнителя
                для проведения незаконных переводов и мошеннических действий.
                При заключении настоящего договора, Заказчик обязуется выполнять
                эти требования и в случае мошенничества нести уголовную
                ответственность, установленную законодательством на данный
                момент.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                11.2. В случае невозможности выполнения заявки автоматически, по
                не зависящим от Исполнителя обстоятельствам, таким как
                отсутствие связи, нехватка средств, или же ошибочные данные
                Заказчика, средства поступают на счет в течение последующих 24
                часов или же возвращается на реквизиты Заказчика за вычетом
                комиссионных расходов.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                11.3.По первому требованию Исполнитель вправе передавать
                информацию о переводе электронной валюты правоохранительным
                органам, администрации расчетных систем, а также жертвам
                неправомерных действий, пострадавшим в результате доказанного
                судебными органами мошенничества.
              </p>
              <p className="verify__text2" style={{ padding: 0 }}>
                11.4. Заказчик обязуется представить все документы,
                удостоверяющие его личность, в случае подозрения о мошенничестве
                и отмывании денег.
              </p>
              <p
                className="verify__text2"
                style={{ padding: 0, marginBottom: 20 }}
              >
                11.5. Заказчик обязуется не вмешиваться в работу Исполнителя и
                не наносить урон его программной и аппаратной части, а также
                Заказчик обязуется передавать точные сведения для обеспечения
                выполнения Исполнителем всех условий договора.
              </p>
              <h2
                className="verify__text2"
                style={{ fontWeight: 600, marginBottom: 10, padding: 0 }}
              >
                12.Отказ от обязательств.
              </h2>
              <p className="verify__text2" style={{ padding: 0 }}>
                Исполнитель имеет право отказа на заключение договора и
                выполнение заявки, причем без объяснения причин. Данный пункт
                применяется по отношению к любому клиенту.
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

export default RulesComponent;