import React, { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handelClick = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <article className="card">
      <header className="card__header">
        <h1 className="card__title">Wheather App</h1>
        <h2 className="card__subtitle">
          {weather?.name}, {weather?.sys.country}
        </h2>
      </header>
      <section className="card__icon-container">
        <img
          className="card__icon"
          src={
            weather &&
            `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
          }
          alt=""
        />
        <h3 className="card__temp">
          {isCelsius ? `${temp?.celsius} C` : `${temp?.farenheit} F`}
        </h3>
      </section>
      <section className="card__info">
        <h3 className="card__description">
          "{weather?.weather[0].description}"
        </h3>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__span">Wind Speed </span>
            {weather?.wind.speed} m/s
          </li>
          <li className="card__item">
            <span className="card__span">Clouds </span>
            {weather?.clouds.all} %
          </li>
          <li className="card__item">
            <span className="card__span">Pressere </span>
            {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <footer className="card__footer">
        <button onClick={handelClick} className="card__btn">
          Change to {isCelsius ? 'F' : 'C'}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;
