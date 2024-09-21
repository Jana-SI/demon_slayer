import './Input.css';

const Input = ({ name, ...props }) => {
    return (
        <div className="input">{/* Container para o campo de input e seu rótulo */}
            <label htmlFor={props.id}>{name}:</label>{/* Rótulo do campo de input associado ao seu ID */}
            <input {...props}/> {/* Passa todas as props, incluindo `type`, `value`, `onChange`, etc. */}
        </div>
    )
}

export default Input;