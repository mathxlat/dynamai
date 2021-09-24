import React from 'react'

import ArticleInitial from './ArticleInitial';
import ArticleCarousel from './ArticleCarousel';
import ArticleBeneficiarios from './ArticleBeneficiarios';
import ArticleTestimoniosQuieroDonar from './ArticleTestimoniosQuieroDonar';
import {Helmet} from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                
                <title> Dýnamai - Home </title>

            </Helmet>
            <main>
                <ArticleInitial />

                <ArticleCarousel />
                
                <ArticleBeneficiarios />
                
                <ArticleTestimoniosQuieroDonar />
            </main>
        </>
    )
}

export default Home;
