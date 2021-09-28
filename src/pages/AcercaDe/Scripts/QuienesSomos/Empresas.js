import '../../styles/QuienesSomos/dist/Empresas.css'

export const Empresas = (info) => {

    const {title, content, picture} = info;

    return(
        <div className='empresas--wrap'>
                <img src={picture}></img>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
    )    
}
