import React from 'react'
import ButtonComoFunciona from '../../components/ButtonComoFunciona'
import ButtonLink from '../../components/ButtonLink'

const ArticleInitial = () => {
    return (
        <article className="bg-gradient-radial w-full min-h-screen max-h-full from-secundario-1 to-black">
        <div className="max-w-7xl mx-auto px-10 py-6">
            <div className="mt-20 max-w-xl">
                <h1 className="text-white">
                    Acompañamos a
                    madres y padres
                    durante el embarazo
                    y la crianza de sus hijos/as.
                </h1>
                <p className="mt-8 text-white" >
                Desarrollamos una app gratuita que acerca a madres y padres todos los conocimientos 
                y herramientas que necesitan durante esta etapa, de forma didáctica y aplicable.
                </p>
                <p className="font-bold text-white">
                    ¡Encontrá más de 400 videos de nutrición, estimulación y cuidados médicos!
                </p>
                <div className="flex items-center mt-16">
                    <ButtonLink text="DESCARGAR LA APP" to="/descargar"/>
                    <ButtonComoFunciona />
                </div>
            </div>
        </div>
    </article>
    )
}

export default ArticleInitial;
