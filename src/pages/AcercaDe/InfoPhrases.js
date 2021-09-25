import './styles/dist/InfoPhrases.css'

export const InfoPhrases = ({info, id}) => {


    return(
        <div id={id} className='info--wrap'>
            
            <p  className='info--wrap_text'>{info}</p>

        </div>
    )
}
