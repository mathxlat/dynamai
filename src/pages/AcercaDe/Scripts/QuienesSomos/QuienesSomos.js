import '../../styles/QuienesSomos/dist/QuienesSomos.css'
import {Fragment } from 'react'

export const QuienesSomos = () => {



   return(
       <Fragment>
       <div className='quienesSomos--wrap'>
           <h2>Quienes Somos</h2>
           <img src='/img/carrousel/img_carrusel_1.webp'></img> 
       </div>
       <div className='quienesAcompanan--wrap'>
           <h1 className='quienesAcompanan--title'>Quienes nos acompañan</h1>
           <div className='empresas'>
          <div className='empresa'>
              <img src='/img/Png/mother.png'></img>
              <h4>Ministerio de desarrollo social</h4>
              <p>Secretaria de la niñez, adolescencia y Familia</p>
          </div>
          <div className='empresa'>
              <img src='/img/Png/mother.png'></img>
              <h4>Sirius</h4>
              <p>Soluciones de Software</p>
          </div>
          <div className='empresa'>
              <img src='/img/Png/mother.png'></img>
              <h4>Dynamai App es un emprendimiento de la fundación Horizonte de Máxima</h4>
              <p>fundacion</p>
          </div>
          </div>
       </div>
       </Fragment>
    )
}
