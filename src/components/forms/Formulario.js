import { useState, useEffect } from 'react'
import {Formik, Form} from 'formik'
import { TextInput } from './TextInput'
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import { createUser } from '../../firebase/firebase.services'
import { Link } from 'react-router-dom'
import '../../pages/AcercaDe/styles/formulario/dist/formulario.css'


function Formulario ({ grupo }) {
    
   
    const[formularioEnviado, setFormularioEnviado] = useState(false)
    const[telefono, setTelefono] = useState('')
    const[mensaje, setMensaje] = useState('')

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
    })

    useEffect(() => {
       
const uploadUser= () =>{
    if(user.name === ''){
                
    }else{
    createUser(grupo, user)
    }
}
        uploadUser();
    }, [user])


    const onInputMessage = ({target}) =>{

        setMensaje(target.value)
    }

    const validate = (values) =>{
        
            const errors = {}

            if(grupo !== 'voluntariado'){
            if(!values.institucion){
                errors.institucion = '*'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.institucion)){
                errors.institucion = 'El nombre solo puede contener letras y espacios'
            }
        }
            
            if(!values.contacto){
                errors.contacto = '*'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.contacto)){
                errors.contacto = 'El nombre solo puede contener letras y espacios'
            }

            if(!values.email){
                errors.email = '*'
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                errors.email = "Se debe respetar la estructura de un e-mail"
            }
          
            return errors;
    }
    
 
    return(
        <div className='formik--box'>
             {formularioEnviado === false? 
    <Formik  initialValues={{institucion:'', contacto:'',email:''}}
            validate={validate}
            onSubmit={(values, {resetForm}) => {
                if(telefono && isPossiblePhoneNumber(telefono)){
                    setFormularioEnviado(true);
                    setUser({...values, telefono, mensaje})
                    values.institucion ='asd'

                  resetForm();
                }
            }}  
    >   
     <Form className='main--form'>
         {grupo === 'voluntariado'?
         null
         : <TextInput name='institucion' label='Nombre de la institucion' placeholder='Benjamin SRL' maxlength='20'/>
         }
          <TextInput name='contacto' label='Nombre de contacto' placeholder='Benjamin Nievas' maxlength='20'/>
          <label name='telefono'>Telefono de contacto</label>
          <PhoneInput limitMaxLength defaultCountry='AR' name='telefono' placeholder='ingrese su numero' onChange={setTelefono} value={telefono} error={telefono ? (isPossiblePhoneNumber(telefono) ? undefined : 'Invalid phone number') : 'Phone number required'} international   countryCallingCodeEditable={false}/>
          {telefono && isPossiblePhoneNumber(telefono) ? null : '*'}
          <TextInput name='email' label='Email' placeholder='benjaminnievas@gmail.com' maxlength='40'/>
          <div className='optional--box'>
            <label className='optional--label'>mensaje (opcional)</label>
            <input className='optional--message'   value={mensaje} onChange={onInputMessage}/>
            <button className='main--form_btn' type='submit'>ENVIAR</button>
          </div>
       </Form>
     </Formik> 
: <div className='send--message-box'>
    <img className='image-mother' src='img/Png/mother.png' alt='dibujo de mujer'/>
    <h1 className='send--message-title'>Mensaje enviado</h1>    
    <p className='message--text'>Tu mensaje fue enviado correctamente ¡Pronto recibiras una respuesta!</p>
    <Link to='/'><div className='btn--return-home'>Volver al inicio</div></Link>
</div>
        }
    </div>
    )
}
export default Formulario;