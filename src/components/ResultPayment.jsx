import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTimer } from "use-timer";
import { setModal } from "../store/slice/modalSlice";
import { useNavigate } from "react-router-dom";

const ResultPayment = ({
  numberOffer,
  clientPayment,
  inputGive,
  inputTake,
  giveCoin,
  takeCoin,
  statusPayment,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { time, start, pause, reset, status } = useTimer({
    autostart: true,
    initialTime: 600,
    endTime: 0,
    timerType: "DECREMENTAL",
  });

  useEffect(() => {
    if (time === 0) {
      dispatch(setModal(true));
    }
  }, [time]);

  return (
    <div className="container">
      <div className="result__accept">
        <h2 className="result__accept-title">Заявка на обмен</h2>

        <p className="result__accept-head">Номер заявки: №{numberOffer}</p>

        <p className="result__accept-status">
          Статус заявки:{" "}
          <span className="result__accept-status-span">{statusPayment}</span>
        </p>

        <p className="result__accept-date">Время создания: 20.04.2023::20:30</p>

        <p className="result__accept-time">
          Время на оплату:{Math.floor(time / 60)}:{Math.floor(time % 60)}
        </p>

        <p className="result__accept-giveCoin">
          Отдаете: {inputGive} {giveCoin?.code}
        </p>

        <p className="result__accept-takeCoin">
          Получаете: {inputTake} {takeCoin?.code}
        </p>

        <p className="result__accept-clientPayment">
          Ваш кошелек: {clientPayment}
        </p>

        <p className="result__accept-generalPayment">
          Кошелек для оплаты: {giveCoin.payment}
        </p>

        <button
          onClick={() => navigate("/")}
          type="submit"
          className="result__accept-payment"
        >
          Отменить обмен
        </button>
      </div>
    </div>
  );
};

export default ResultPayment;
