import { Link } from "react-router";

const Services = () => {
  return (
    <div className="block__information">
      <h2 className="block__title" style={{ marginBottom: 0 }}>
        Услуги
      </h2>
      <p className="block__subtitle">
        Устройство внутренних и наружных инженерных сетей:
      </p>

      <ul className="block__list">
        <li>
          <Link to="/firstServices" className="block__link-list">
            Монтажные работы
          </Link>
        </li>
        <li>
          <Link to="/secondServices" className="block__link-list">
            Земляные работы
          </Link>
        </li>
        <li>
          <Link to="/thirdServices" className="block__link-list">
            Устройство бетонных и железобетонных монолитных конструкций
          </Link>
        </li>
        <li>
          <Link to="/fourthServices" className="block__link-list">
            Монтаж сборных бетонных и железобетонных конструкций
          </Link>
        </li>
        <li>
          <Link to="/fifthServices" className="block__link-list">
            Монтаж металлических конструкций
          </Link>
        </li>
        <li>
          <Link to="/sixthServices" className="block__link-list">
            Производство электромонтажных работ
          </Link>
        </li>
        <li>
          <Link to="/seventhServices" className="block__link-list">
            Монтаж, ремонт, реконструкция, и модернизация котельных и тепловых
            пунктов
          </Link>
        </li>

        <li>
          <Link to="/eighthServices" className="block__link-list">
            Проектно-изыскательные работы инженерных сетей
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Services;
