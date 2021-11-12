import { Fragment, useEffect } from "react"
import {Helmet} from 'react-helmet';
import {MainInfo} from './Scripts/MainInfo/MainInfo'
import { TargetArticle } from "./Scripts/TargetArticle/TargetArticle"
import { firebaseAnalytics } from './../../firebase/firebase.services';

export const About = () => {

    useEffect(() => {
        firebaseAnalytics("acercade_page_visited");
    }, []);

    return(
        <Fragment>
            <Helmet>
                
                <title> Dýnamai - Acerca de </title>

            </Helmet>
            <MainInfo />
            <TargetArticle />
        </Fragment>

    )
}
