const Button = props => {
    return (
    <a href={props.href} {...props} className={`w-56 select-none flex items-center font-nunito transition justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium uppercase tracking-widest text-white bg-acento-2 hover:bg-primario ${props.className}`}>
        {props.text}
    </a>
    )
}

export default Button;