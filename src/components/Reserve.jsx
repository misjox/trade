import React, { useEffect, useState } from "react";
import axios from "axios";

const Reserve = () => {
  const [reserve, setReserve] = useState([]);
  const [hiddenAll,setHiddenAll] = useState(false)

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER}/api/reserve?limit=30`).then((result) => {
      setReserve(result.data.docs);
    });
  }, []);

  const hiddenAllReserve = () => {
    setHiddenAll(!hiddenAll)
  }


  return (
    <section className="reserve">
      <div className="container">
        <h2 className="reserve-title">Резерв валюты</h2>
        <ul className={`reserve-list ${hiddenAll ? 'active' : ''}`}>
          {reserve.map((item) => (
            <li className="reserve-item" key={item.id}>
              <img
                className="reserve-item-img"
                src={item.image.url}
                alt="coin"
              />
              <div className="reserve-item-block">


              <p className="reserve-item-name">{item.title}</p>
              <p className="reserve-item-number">{item.reserve}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="reserve-all">
        <button className="reserve-all-button" onClick={hiddenAllReserve}>
          {!hiddenAll ? "Показать все" : "Скрыть"}
        </button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
