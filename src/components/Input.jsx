import React from "react";

const Input = (attributes) => {
    const changeHandler = (event) => {
        const currentText = event.target.value;
    
        if (attributes.name === "title" && currentText.length > 50) {
            attributes.onChange((oldText) => oldText);
        } else {
            attributes.onChange(currentText);
        }
    }

    return (
        <>
            {attributes.type === "textarea" ? (
                <textarea 
                    {...attributes}
                    className="note-input__body"
                    spellCheck={false}
                    onChange={changeHandler}
                />
            ) : (
                <input
                    {...attributes}
                    className="note-input__title"
                    spellCheck={false}
                    onChange={changeHandler}
                />
            )}
        </>
    );
};

export default Input;
