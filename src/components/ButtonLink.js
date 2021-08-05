import { Link } from 'react-router-dom';

const ButtonLink = props => {
    return (
    <Link to={props.to} className={`w-56 select-none flex items-center font-nunito transition justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium uppercase tracking-widest text-white bg-acento-2 hover:bg-gray-900 ${props.className}`}>
        {props.text}
    </Link>
    )
}

export default ButtonLink;