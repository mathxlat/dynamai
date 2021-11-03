import { useState } from 'react'
import {Formik, Form} from 'formik'
import { TextInput } from './TextInput'
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import '../../pages/AcercaDe/styles/formulario/dist/formulario.css'


function Formulario ({institucion}) {
    
   
    const[formularioEnviado, setFormularioEnviado] = useState(false)
    const[telefono, setTelefono] = useState('')
    const[mensaje, setMensaje] = useState('')

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
    })

    const onInputMessage = ({target}) =>{

        setMensaje(target.value)
    }

    const validate = (values) =>{
        
            const errors = {}

            if(!values.institucion){
                errors.institucion = '*'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.institucion)){
                errors.institucion = 'El nombre solo puede contener letras y espacios'
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
                  resetForm();
                }
            }}
    >   
     <Form className='main--form'>
          <TextInput name='institucion' label='nombre de la institucion' placeholder='Benjamin SRL' maxlength='20'/>
          <TextInput name='contacto' label='contacto' placeholder='Benjamin Nievas' maxlength='20'/>
          <label name='telefono'>Indique su numero de telefono</label>
          <PhoneInput limitMaxLength defaultCountry='AR' name='telefono' placeholder='ingrese su numero' onChange={setTelefono} value={telefono} error={telefono ? (isPossiblePhoneNumber(telefono) ? undefined : 'Invalid phone number') : 'Phone number required'} international   countryCallingCodeEditable={false}/>
          {telefono && isPossiblePhoneNumber(telefono) ? null : 'Indique un valor valido'}
          <TextInput name='email' label='email' placeholder='benjaminnievas@gmail.com' maxlength='40'/>
          <div className='optional--box'>
            <label className='optional--label'>mensaje opcional</label>
            <input className='optional--message'   value={mensaje} onChange={onInputMessage}/>
            <button className='main--form_btn' type='submit'>ENVIAR</button>
          </div>
       </Form>
     </Formik> 
: <div>enviado¡</div>
        }
    </div>
    )
}
export default Formulario;