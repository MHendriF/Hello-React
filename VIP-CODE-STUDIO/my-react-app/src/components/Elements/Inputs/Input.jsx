const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
            id={name}
            type={type}
            className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50'
            placeholder={placeholder}
            name={name}></input>
    );
};

export default Input;
