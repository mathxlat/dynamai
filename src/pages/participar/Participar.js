import Formulario from "../../components/forms/Formulario"
import { GrupoParticipante } from "../../components/GrupoParticipante"
import { useEffect } from 'react';
import { firebaseAnalytics } from './../../firebase/firebase.services';



export const Participar = ({image}) => {

    useEffect(() => {
        firebaseAnalytics("participar_page_visited");
    }, []);

    return(
        <div>
            <GrupoParticipante image={image} />
            <Formulario />
        </div>
    )
}
