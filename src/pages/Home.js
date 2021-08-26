import React from 'react'
import ArticleBeneficiarios from '../articles/home/ArticleBeneficiarios'
import ArticleCarousel from '../articles/home/ArticleCarousel'
import ArticleInitial from '../articles/home/ArticleInitial'
import ArticleTestimoniosQuieroDonar from '../articles/home/ArticleTestimoniosQuieroDonar'

function Home() {
    return (
        <main>
            <ArticleInitial />

            <ArticleCarousel />
            
            <ArticleBeneficiarios />
            
            <ArticleTestimoniosQuieroDonar />
        </main>
    )
}

export default Home;
