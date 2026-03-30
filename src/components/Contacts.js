const Contacts = () => {
  return (
    <div className="block__information">
      <h2 className="block__title">Контакты</h2>
      <p className="block__subtitle">
        <strong>Как нас найти:</strong> 190005, город Санкт-Петербург,
        набережная Обводного канала, дом 118А, литер Ж, офис №12
      </p>
      <p className="block__subtitle">
        <strong>телефон/факс: </strong>+7(921)-409-26-45,<br/>8(812)-578-52-95
      </p>
      <p className="block__subtitle">
        <strong>E-mail:</strong>{" "}
        <a href="mailto:tesi.info@mail.ru" target="blank">
          tesi.info@mail.ru
        </a>
      </p>
    </div>
  );
};

export default Contacts;
