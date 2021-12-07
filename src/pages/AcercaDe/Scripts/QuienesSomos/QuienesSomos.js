import "../../styles/QuienesSomos/dist/QuienesSomos.css";
import { Fragment } from "react";

export const QuienesSomos = () => {
    return (
        <Fragment>
            <div className="quienesSomos--wrap">
                <h2 className="bg-secundario-1 rounded p-2">Quiénes Somos</h2>
                <img
                    src="/img/pages/donar/acercaDe/quienes-somos.jpg"
                    alt="iconos"
                />
            </div>
            <div className="quienesAcompanan--wrap">
                <h1 className="quienesAcompanan--title">
                    Quiénes nos acompañan
                </h1>
                <div className="empresas">
                    <div className="empresa">
                        <img
                            src="/img/pages/donar/acercaDe/ministerio.jpg"
                            alt="iconos"
                        />
                        <h4>Ministerio de Desarrollo Social</h4>
                        <p>Secretaría de la Niñez, Adolescencia y Familia</p>
                    </div>
                    <div className="empresa">
                        <img
                            className="sirius--image"
                            src="/img/pages/donar/acercaDe/sirius.jpg"
                            alt="iconos"
                        />
                        <h4>Sirius</h4>
                        <p>Soluciones de Software</p>
                    </div>
                    <div className="empresa" id="fundacionHorizonte">
                        <img
                            className="horizonte--maxima_image"
                            src="/img/pages/donar/acercaDe/horizonte-maxima.png"
                            alt="iconos"
                        />
                        <h4>
                            Dýnamai es un emprendimiento de la Fundación
                            Horizonte de Máxima
                        </h4>
                    </div>
                </div>
            </div>
            <img
                className="fundacion--imagen_responsive"
                src="/img/Png/fundacion-horizonte.png"
                alt="fundacion horizonte"
            ></img>
        </Fragment>
    );
};
