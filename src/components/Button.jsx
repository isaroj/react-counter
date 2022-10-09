const Button = ({btnTitle, btnStyle, btnMethod, id}) => {
    return (
        <button
        id={id} 
        onClick={btnMethod} 
        style={btnStyle}
        >{btnTitle}</button>
    )
}

export default Button