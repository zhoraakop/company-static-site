import { useState } from "react";
import IM1 from "../images/im1.jpeg"
import IM2 from "../images/im2.jpeg"
import IM3 from "../images/im3.jpeg"
import IM4 from "../images/im4.jpeg"
import IM5 from "../images/im5.jpeg"
import IM6 from "../images/im6.jpeg"
import IM7 from "../images/im7.jpeg"
import IM8 from "../images/im8.jpeg"
import IM9 from "../images/im9.jpeg"
import IM10 from "../images/im10.jpeg"
import IM11 from "../images/im11.jpeg"
import IM12 from "../images/im12.jpeg"
import IM13 from "../images/im13.jpeg"
import IM14 from "../images/im14.jpeg"
import IM15 from "../images/im15.jpeg"
import IM16 from "../images/im16.jpeg"
import IM17 from "../images/im17.jpeg"
import IM18 from "../images/im18.jpeg"
import IM19 from "../images/im19.jpeg"
import IM20 from "../images/im20.jpeg"
import IM21 from "../images/im21.jpeg"
import IM22 from "../images/im22.jpeg"
import IM23 from "../images/im23.jpeg"
import IM24 from "../images/im24.jpeg"
import IM25 from "../images/im25.jpeg"
import IM26 from "../images/im26.jpeg"
import IM27 from "../images/im27.jpeg"
import IM28 from "../images/im28.jpeg"



const IMAGES_PER_PAGE = 4;

const images = [
  { id: 1, image: IM1 },
  { id: 2, image: IM2 },
  { id: 3, image: IM3 },
  { id: 4, image: IM4 },
  { id: 5, image: IM5 },
  { id: 6, image: IM6 },
  { id: 7, image: IM7 },
  { id: 8, image: IM8 },
  { id: 9, image: IM9 },
  { id: 10, image: IM10 },
  { id: 11, image: IM11 },
  { id: 12, image: IM12 },
  { id: 13, image: IM13 },
  { id: 14, image: IM14 },
  { id: 15, image: IM15 },
  { id: 16, image: IM16 },
  { id: 17, image: IM17 },
  { id: 18, image: IM18 },
  { id: 19, image: IM19 },
  { id: 20, image: IM20 },
  { id: 21, image: IM21 },
  { id: 22, image: IM22 },
  { id: 23, image: IM23 },
  { id: 24, image: IM24 },
  { id: 25, image: IM25 },
  { id: 26, image: IM26 },
  { id: 27, image: IM27 },
  { id: 28, image: IM28 },
];


const Images = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const start = page * IMAGES_PER_PAGE;
  const currentImages = images.slice(
    start,
    start + IMAGES_PER_PAGE
  );

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="block__information">
      <h2 className="block__title">Фото</h2>
  <p className="block__subtitle">
       Ниже представлены некоторые выполненные работы:
      </p>
      <ul className="images__grid">
        {currentImages.map((project) => (
          <li key={project.id} className="project__item">
            <img
              src={project.image}
              alt=""
              className="project__image"
            />
          </li>
        ))}
      </ul>

      <div className="images__controls">
        <button onClick={prevPage} className="arrow">←</button>
        <span>{page + 1} / {totalPages}</span>
        <button onClick={nextPage} className="arrow">→</button>
      </div>
    </div>
  );
};

export default Images;

