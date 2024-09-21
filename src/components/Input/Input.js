import './Input.css';

const Input = ({ name, ...props }) => {
    //Container para input, espera 'name', 'id', 'type', 'value', 'onChange'
      return (
        <div className="input">
            <label htmlFor={props.id}>{name}:</label>
            <input {...props}/>
        </div>
    )
}

export default Input;