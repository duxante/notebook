import "./button.style.css";

const Button = ({buttonText, onClick}) => {
    return(
        <button className="duxanteButton" onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button;