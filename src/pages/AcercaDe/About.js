import { Fragment } from "react"
import {MainInfo} from './Scripts/MainInfo/MainInfo'
import { TargetArticle } from "./Scripts/TargetArticle/TargetArticle"

export const About = () => {
    return(
        <Fragment>
            <MainInfo />
            <TargetArticle />
        </Fragment>

    )
}
