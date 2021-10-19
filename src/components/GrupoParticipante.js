import { Fragment } from 'react'
import '../pages/participar/styles/dist/grupoParticipante.css'
export const GrupoParticipante = ({image}) => {
    return(
        <Fragment>
            <img className='image--group' src={image} alt='imagenparticipante'/>
        </Fragment>
    )
}