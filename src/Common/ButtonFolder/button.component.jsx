import "./button.style.css";

const Button = ({buttonText, onClick, customClassName}) => {
    return(
        <button className={`duxanteButton ${customClassName ? customClassName : ''}`} onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button;