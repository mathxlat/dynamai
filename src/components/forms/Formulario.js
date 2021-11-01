import { useState } from 'react'
import {Formik, Form, useFormik} from 'formik'
import { TextInput } from './TextInput'
import PhoneInput from 'react-phone-number-input'
import '../../pages/AcercaDe/styles/formulario/dist/formulario.css'


function Formulario () {
    const[formularioEnviado, setFormularioEnviado] = useState(false)
    const[telefono, setTelefono] = useState()

    const formik = useFormik({
        initialValues: {
            mensaje:''
        }
    })

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
            if(!values.telefono){
                errors.telefono = '*'
            }else if(!/^[0-9-]{1,10}$/.test(values.telefono)){
                errors.telefono = 'Solo puedes usar numeros'
            }
            return errors;
    }
    return(
        <div className='formik--box'>
             {formularioEnviado == false? 
    <Formik  initialValues={{institucion:'', contacto:'',email:'',telefono:''}}
            validate={validate}
            onSubmit={(values, {resetForm}) => {
                resetForm();
                console.log(values);
                console.log(formik.values.mensaje);
                setFormularioEnviado(true);
            }}
    >   
     <Form className='main--form'>
          <TextInput name='institucion' label='nombre de la institucion' placeholder='Benjamin SRL'/>
          <TextInput name='contacto' label='contacto' placeholder='Benjamin Nievas'/>
          <PhoneInput name='telefono' placeholder='ingrese su numero' onChange={setTelefono} value={telefono} countryCallingCodeEditable={false}  defaultCountry="RU"
            />
          <TextInput name='email' label='email' placeholder='benjaminnievas@gmail.com'/>
          <div className='optional--box'>
            <label className='optional--label'>mensaje opcional</label>
            <input className='optional--message'  name='mensaje' value={formik.values.mensaje} onChange={formik.handleChange}/>
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