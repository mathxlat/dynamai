import ArticleBeneficiarios from '../../../Home/ArticleBeneficiarios'
import { ArticleBloques } from './ArticleBloques'
import { ArticlePropuesta } from './ArticlePropuesta'
import { QuienesSomos } from '../QuienesSomos/QuienesSomos'

export const TargetArticle = () => {

    return(
        <div className='target--article_wrap'>
            <ArticleBeneficiarios />
            <ArticleBloques />
            <ArticlePropuesta />
            <QuienesSomos />
        </div>
    )
}
