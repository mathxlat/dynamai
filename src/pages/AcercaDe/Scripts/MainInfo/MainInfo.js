import '../../styles/MainInfo/dist/MainInfo.css'
import {InfoPhrases} from '../MainInfo/InfoPhrases'

export const MainInfo = () => {

const info = [
{
    id:'info1',
    content:'"Las habilidades cognitivas y socio-emocionales fundamentales son adquiridas en la niñez"',
},
{
    id:'info2',
    content:'"El desarrollo de la primera infancia quiebra el ciclo de la pobreza y la desigualdad"'
},
{
    id:'info3',
    content:'"Los responsables de la crianza necesitan ser empoderados por medio del acceso a la información"'
}
]

    return(
        <div className='main--info'>
            <div className='info--left'>
            <div className='info--problem'>
                <h3 className='info--titles'>EL PROBLEMA</h3>
                <p className='info--text'>En nuestro país, muchas madres y padres no acceden a toda la informacion que necesitan respecto al cuidado y al desarrollo de sus hijos durante el embarazo y la primera infancia, especialmente en los sectores de mayor vulnerabilidad.</p>
            </div>
            <div className='info--vision'>
                <h3 className='info--titles'>NUESTRO PROPOSITO Y VISION</h3>
                <p className='info--text'>Acompañar a madres y padres en la tarea de criar a sus hijos, acercando todos los conocimientos y herramientas que necesiten durante el embarazo e infancia, de forma didáctica y aplicable.</p>
                <p className='info--text'>Creemos en un mundo en el que todos puedan desarrollar al máximo su potencial y, así tambien, contribuir a mejorar la sociedad en su conjunto.</p>
            </div>
            </div>
            <div className='info--right'>
                {
                info.map(info => <InfoPhrases info={info.content} id={info.id}></InfoPhrases>)
                }
                <p className='quote'>(*citas de la inicitiva del G20 por el desarrollo de la primera infancia.)</p>
            </div>
        </div>
    )
}
