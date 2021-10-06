import '../../styles/TargetArticle/dist/ArticlePropuesta.css'

export const ArticlePropuesta = () => {
    return(
        <div className='propuesta--wrap'>
            <img className='propuesta--app' src='/img/mock/mock-mobile-back.webp' alt='propuesta' />
            <div className='propuesta--info'>
                <h1 className='propuesta--title'>Qué les ofrecemos</h1>
                <p className='propuesta--main_text'>Una aplicación movil con contenido relevante y accesible respecto a la estimulación, la nutrición y el cuidado médico de sus hijos, acompañando cada etapa del desarrollo durante el embarazo y la niñez.</p>
                <h3 className='propuesta--secondary_text'>Nuestros diferenciales</h3>
                <div className='diferenciales--wrap'>
                    <img className='diferenciales--img' src='/img/Png/correcto.png' alt='propuesta' />
                    <p className='diferenciales--text'>100% contenido audiovisual</p>
                </div>
                <div className='diferenciales--wrap'>
                    <img className='diferenciales--img' src='/img/Png/correcto.png' alt='propuesta' />
                    <p className='diferenciales--text'>Información integral</p>
                </div>
                <div className='diferenciales--wrap'>
                    <img className='diferenciales--img' src='/img/Png/correcto.png' alt='propuesta' />
                    <p className='diferenciales--text'>Diseño y contenido adaptado a poblaciones vulnerables</p>
                </div>
            </div>
        </div>
    )    
}
