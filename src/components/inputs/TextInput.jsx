const TextInput = ({
    label,
    name,
    value,
    onChange,
    required = false
}) => {
    return (
        <div>
            <label>{label}</label>
            <input 
                type="text" 
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required} />
        </div>
    )
}

export default TextInput;