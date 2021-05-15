import React from 'react'

const BookThumb = ({ name, item, on_change_function }) => {
    return (
        <div>
            <input type="radio" name={name} value={item} onChange={on_change_function} className={name}/>{item}
        </div>
    )
}

export default BookThumb
