import {Formik, Form} from 'formik'
import { TextInput } from './TextInput'
import '../../pages/AcercaDe/styles/formulario/dist/formulario.css'


function Formulario () {
    const validate = (values) =>{
        
            const errors = {}

            if(!values.institucion){
                errors.institucion = '*'
            }else if(values.institucion.length <3){
                errors.institucion = 'debe escribir más de 3 digitos'
            }
            
            if(!values.contacto){
                errors.contacto = '*'
            }else if(values.contacto.length <3){
                errors.contacto = 'debe escribir más de 5 digitos'
            }

            if(!values.email){
                errors.email = '*'
            }else if(values.email.length <5){
                errors.email = 'debe escribir más de 5 digitos'
            }
            return errors;
    }
    return(
        <div className='formik--box'>
    <Formik  initialValues={{institucion:'', contacto:'',email:'',telefono:'', mensaje:''}}
            validate={validate}
            onSubmit={values => console.log(values)}
    >   
       <Form className='main--form'>
          <TextInput name='institucion' label='institucion' placeholder='Benjamin SRL'/>
          <TextInput name='contacto' label='contacto' placeholder='Benjamin Nievas'/>
          <TextInput name='telefono' label='telefono' placeholder='1135224246'/>
          <TextInput name='email' label='email' placeholder='benjaminnievas@gmail.com'/>
          <div className='optional--box'>
            <label className='optional--label'>mensaje opcional</label>
            <input className='optional--message' />
            <button className='main--form_btn' type='submit'>ENVIAR</button>
          </div>
       </Form>
    </Formik>
    </div>
    )
}
export default Formulario;