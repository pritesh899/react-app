const Button = (props) => { 
    return (
        <div className='my-2'>
            <button className='bg-red-400 hover:bg-red-900 text-white py-2 rounded-full'>{props.name}</button>
        </div>
    )
}

export default Button;