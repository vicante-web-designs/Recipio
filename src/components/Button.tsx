interface ButtonProps{
    type: 'button' | 'submit' | 'reset';
    content: string;
    onClick: () => Promise<void>;
}

function Button({type, content, onClick}: ButtonProps){
    return(
        <button type={type} className='bg-blue-900 text-white px-4 py-2 rounded-full active:bg-blue-700 hover:bg-blue-500' onClick={() => {onClick()}}>
            {content}
        </button>
    )
}

export default Button