import './Input.css';

const Input = ({ name, ...props }) => {
    return (
        <div className="input">
            <label htmlFor={props.id}>{name}:</label>
            <input type={props.type}/>
        </div>
    )
}

export default Input;