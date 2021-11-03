import { useField } from "formik"
import '../../pages/AcercaDe/styles/formulario/dist/formulario.css'


export const TextInput = ({ placeholder, label, maxlength, ...props}) => {
    const [field, meta] = useField(props)

    return(
        <div className='input--box'>
            <label className='input--box_label'>{label}</label>
                <input  className='input--box_input' {...field} placeholder={placeholder} maxLength={maxlength}/>
                {
                    meta.touched && meta.error ? <div className='error--message'>{meta.error}</div> : null
                }
        </div>
    )
    
}
