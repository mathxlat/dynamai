import Formulario from "../../components/forms/Formulario"
import { GrupoParticipante } from "../../components/GrupoParticipante"



export const Participar = ({image}) => {


    return(
        <div>
            <GrupoParticipante image={image} />
            <Formulario />
        </div>
    )
}
