interface ButtonProps{
    type: 'button' | 'submit' | 'reset';
    content: string
}

function Button({type, content}: ButtonProps){
    return(
        <button type={type} className='bg-blue-700 text-white px-4 py-2 rounded-full'>
            {content}
        </button>
    )
}

export default Button