import '../../styles/TargetArticle/dist/ArticleBloques.css'
export const ArticleBloques = () => {
    return(
        <div className='bloques--wrap'>
            <h3 className='bloques--title'>EDAD DE LAS MADRES</h3>
            <div className='primer--bloque_wrap'>
                <img className='bloques--grafico1' src="/img/Png/Grafico-usuarios1.png" alt='bloque' />
                <img className='bloques--mothers' src='/img/Png/Madres.png' alt='bloque' />
            </div>
            <h3 className='bloques--title2'>NIVEL EDUCATIVO DE MADRES PRIMERIZAS</h3>
                <div className='bloques--png_wrap'>
                    <img className='bloques' src='/img/Png/bloques.png' alt='bloque' />
                    <img className='bloques--grafico2' src='/img/Png/Grafico-usuarios2.png' alt='bloque' />
                </div>
            <h3 className='bloques--title'>MADRES QUE NO VIVEN CON UNA PAREJA</h3>
                <div className='bloques--grafico3_wrap'>
                    <img className='bloques--grafico3' src='/img/Png/Grafico-usuarios3.png' alt='bloque' />
                    <img className='bloques--mother' src='/img/Png/mother.png' alt='bloque' />
                </div>
        </div>
    )
}
