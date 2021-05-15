import React from 'react'

const RadioButtonThumb = ({ type, name, item, on_change_function }) => {
    return (
        <div>

            <input type={type} name={name} value={item} onChange={on_change_function} className={name} />{item}

        </div>
    )
}

export default RadioButtonThumb
