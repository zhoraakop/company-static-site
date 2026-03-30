import cert1Preview from '../images/certificate1Prev.png';
import cert1Pdf from '../images/certificate1.pdf';
import cert2Preview from '../images/certificate2Prev.png';
import cert2Pdf from '../images/certificate2.pdf';
import cert3Preview from '../images/certificate3Prev.png';
import cert3Pdf from '../images/certificate3.pdf';
import cert4Preview from '../images/certificate4Prev.png';
import cert4Pdf from '../images/certificate4.pdf';

const Certificates = () => {
    return (
        <div className="certificates">
            <a
                href={cert1Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate"
            >
                <img
                    src={cert1Preview}
                    alt="Свидетельство"
                    className="certificate__image"
                />
            </a>
             <a
                href={cert2Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate"
            >
                <img
                    src={cert2Preview}
                    alt="Свидетельство"
                    className="certificate__image"
                />
            </a>
             <a
                href={cert3Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate"
            >
                <img
                    src={cert3Preview}
                    alt="Свидетельство"
                    className="certificate__image"
                />
            </a>
             <a
                href={cert4Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate"
            >
                <img
                    src={cert4Preview}
                    alt="Свидетельство"
                    className="certificate__image"
                />
            </a>
        </div>
    );
};

export default Certificates;
