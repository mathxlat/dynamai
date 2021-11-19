import { Fragment } from 'react'
import '../pages/participar/styles/dist/grupoParticipante.css'
export const GrupoParticipante = ({image, image2, text}) => {
    return(
        <Fragment>
            <img className='image--group' src={image} alt='imagenparticipante'/>
            <img className='image--group_responsive' src={image2} alt='imagen de participante' />
            <p className='text--responsive'>{text}</p>
        </Fragment>
    )
}