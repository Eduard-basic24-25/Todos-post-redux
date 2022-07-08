

function Btn ({type, className, clickHandler, label}) {

    return (
        <button 
            type={type}
            className={className}  
            onClick={clickHandler}
        >
            {label}
        </button>
    )
};

export default Btn;