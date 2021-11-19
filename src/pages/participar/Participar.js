import {Helmet} from 'react-helmet';
import Formulario from "../../components/forms/Formulario"
import { GrupoParticipante } from "../../components/GrupoParticipante"
import { useEffect } from 'react';
import { firebaseAnalytics } from './../../firebase/firebase.services';



export const Participar = ({image, grupo, image2, text}) => {

    useEffect(() => {
        firebaseAnalytics("participar_page_visited");
    }, []);

    return(
        <>
            <Helmet>
                
                <title> Dýnamai - Participar </title>

            </Helmet>
            <div>
                <GrupoParticipante image={image} image2={image2} text={text} />
                <Formulario grupo={grupo} />
            </div>
        </>
    )
}
