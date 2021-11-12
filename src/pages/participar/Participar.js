import {Helmet} from 'react-helmet';
import Formulario from "../../components/forms/Formulario"
import { GrupoParticipante } from "../../components/GrupoParticipante"
import { useEffect } from 'react';
import { firebaseAnalytics } from './../../firebase/firebase.services';



export const Participar = ({image, grupo}) => {

    useEffect(() => {
        firebaseAnalytics("participar_page_visited");
    }, []);

    return(
        <>
            <Helmet>
                
                <title> Dýnamai - Participar </title>

            </Helmet>
            <div>
                <GrupoParticipante image={image} />
                <Formulario grupo={grupo} />
            </div>
        </>
    )
}
