import './Input.css';

const Input = ({ name, ...props }) => {
    return (
        <div className="input">
            <label htmlFor={props.id}>{name}:</label>
            <input {...props}/> {/* Passa todas as props, incluindo `type`, `value`, `onChange`, etc. */}
        </div>
    )
}

export default Input;