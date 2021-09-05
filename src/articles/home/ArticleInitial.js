import React from 'react'
import ButtonComoFunciona from '../../components/ButtonComoFunciona'
import ButtonLink from '../../components/ButtonLink'
import YoutubeVideo from '../../components/YoutubeVideo'

const ArticleInitial = () => {
    return (
        <article className="bg-gradient-radial w-full min-h-full md:min-h-screen max-h-full from-secundario-1 to-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-6">
            <div className="mt-2 md:mt-20 max-w-xl">
                <h1 className="text-white">
                    Acompañamos a
                    madres y padres
                    durante el embarazo
                    y la crianza de sus hijos/as.
                </h1>
                <p className="mt-3 md:mt-8 text-white" >
                Desarrollamos una app gratuita que acerca a madres y padres todos los conocimientos 
                y herramientas que necesitan durante esta etapa, de forma didáctica y aplicable.
                </p>
                <p className="font-bold text-white">
                    ¡Encontrá más de 400 videos de nutrición, estimulación y cuidados médicos!
                </p>
                <YoutubeVideo autoplay={false} className="flex w-full sm:hidden h-full mt-4 justify-center mb-4" height="190" />
                <div className="flex w-full justify-center sm:justify-start">
                    <img
                        className="h-14 sm:h-16 mt-0 sm:mt-3 select-none"
                        src="/img/download/google-play.png" 
                        alt="google play" 
                    />
                </div>
                <div className="flex flex-col sm:flex-row items-center mt-2 md:mt-4">
                    <ButtonLink className="mb-5 sm:mb-0" text="DESCARGAR LA APP" to="/descargar"/>
                    <ButtonComoFunciona />
                </div>
            </div>
        </div>
    </article>
    )
}

export default ArticleInitial;
