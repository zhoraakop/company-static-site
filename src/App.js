import logo from "./images/logo-main.png";
import "./App.css";
import { useState } from "react";
import Information from "./components/Information";
import { Routes, Route, Link, Navigate } from "react-router";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import FirstServices from "./components/FirstServices";
import SecondServices from "./components/SecondServices";
import ThirdServices from "./components/ThirdServices";
import FourthServices from "./components/FourthServices";
import FifthServices from "./components/FifthServices";
import SixthServices from "./components/SixthServices";
import Images from "./components/Images";
import EighthServices from "./components/EighthServices";
import SeventhServices from "./components/SeventhServices";
import Certificates from "./components/Сertificates";
function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="header__number">8(812)-578-52-95</p>
        <img src={logo} className="header__logo" alt="logo" />
        <div>
          <p className="header__title">Доверь строительство</p>
          <p className="header__title">профессионалам!</p>
        </div>
      </header>
      <main className="main">
        <div className="main__services">
          <button className="contacts__button" disabled>
            Услуги
          </button>
          <h2 className="main__title">
            Устройство внутренних и наружных инженерных сетей:
          </h2>
          <ul>
            <li>
              <Link className="services__link" to="/firstServices">
                Монтажные работы
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/secondServices">
                Земляные работы
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/thirdServices">
                Устройство бетонных и железобетонных монолитных конструкций
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/fourthServices">
                Монтаж сборных бетонных и железобетонных конструкций
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/fifthServices">
                Монтаж металлических конструкций
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/sixthServices">
                Производство электромонтажных работ
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/seventhServices">
                Монтаж, ремонт, реконструкция, и модернизация котельных и
                тепловых пунктов
              </Link>
            </li>
            <li>
              <Link className="services__link" to="/eighthServices">
                Проектно-изыскательные работы инженерных сетей
              </Link>
            </li>
          </ul>
        </div>
        <div className="block">
          <ul className="block__menu">
            <li className="item">
              <Link to="/" className="item__button">
                ТЭС Инновации
              </Link>
            </li>
            <li className="item dropdown">
              <Link to="/services" className="item__button">
                Услуги
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-link" to="/firstServices">
                    Монтажные работы
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/secondServices">
                    Земляные работы{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/thirdServices">
                    Устройство бетонных и железобетонных монолитных конструкций
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/fourthServices">
                    Монтаж сборных бетонных и железобетонных конструкций
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/fifthServices">
                    Монтаж металлических конструкций
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/sixthServices">
                    Производство электромонтажных работ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/seventhServices">
                    Монтаж, ремонт, реконструкция, и модернизация котельных и
                    тепловых пунктов{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link" to="/eighthServices">
                    Проектно-изыскательные работы инженерных сетей
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item">
              <Link to="/projects" className="item__button">
                Проекты
              </Link>
            </li>
            <li className="item">
              <Link to="/images" className="item__button">
                Фото
              </Link>
            </li>
            <li className="item">
              <Link to="/certificates" className="item__button">
                Сертификаты
              </Link>
            </li>
            <li className="item">
              <Link to="/contacts" className="item__button">
                Контакты
              </Link>
            </li>
          </ul>
          <div className="block__main">
            <Routes>
              <Route path="/" element={<Information />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/images" element={<Images />}></Route>
              <Route path="/firstServices" element={<FirstServices />}></Route>
              <Route
                path="/secondServices"
                element={<SecondServices />}
              ></Route>
              <Route path="/thirdServices" element={<ThirdServices />}></Route>
              <Route
                path="/fourthServices"
                element={<FourthServices />}
              ></Route>
              <Route path="/fifthServices" element={<FifthServices />}></Route>
              <Route path="/sixthServices" element={<SixthServices />}></Route>
              <Route
                path="/seventhServices"
                element={<SeventhServices />}
              ></Route>
              <Route
                path="/eighthServices"
                element={<EighthServices />}
              ></Route>
                            <Route path="/certificates" element={<Certificates />}></Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>

        <div className="main__contacts">
          <button className="contacts__button" disabled>
            Наши контакты
          </button>
          <ul>
            <li>
              <strong>Адрес:</strong> г.Санкт-Петербург, набережная Обводного
              канала, дом 118А, литер Ж, офис №12
            </li>
            <li>
              <strong>Тел./факс:</strong> +7(921)-409-26-45,
              <br />
              8(812)-578-52-95
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:tesi.info@mail.ru" target="blank">
                tesi.info@mail.ru
              </a>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <p className="footer__title">ТЭС Инновации</p>
        <p className="footer__subtitle">
          <strong>Адрес: </strong>г.Санкт-Петербург, набережная Обводного
          канала, дом 118А, литер Ж, офис №12
        </p>
        <p className="footer__number">
          <strong>Тел./факс:</strong> +7(921)-409-26-45,
          <br />
          8(812)-578-52-95
        </p>
        <p className="footer__mail">
          <strong>E-mail:</strong>{" "}
          <a href="mailto:tesi.info@mail.ru" target="blank">
            tesi.info@mail.ru
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
