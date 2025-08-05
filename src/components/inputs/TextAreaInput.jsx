const TextAreaInput = ({
    label,
    name,
    value,
    onChange,
    required = false
}) => {
    return (
        <div>
            <label>
                {label}
            </label>

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                required={required}></textarea>
        </div>
    )
}

export default TextAreaInput;