import { Fragment, useEffect } from "react"
import {MainInfo} from './Scripts/MainInfo/MainInfo'
import { TargetArticle } from "./Scripts/TargetArticle/TargetArticle"
import { firebaseAnalytics } from './../../firebase/firebase.services';

export const About = () => {

    useEffect(() => {
        firebaseAnalytics("acercade_page_visited");
    }, []);

    return(
        <Fragment>
            <MainInfo />
            <TargetArticle />
        </Fragment>

    )
}
