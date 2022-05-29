import React from 'react'
import "./FormInput.style.scss"

const FormInput = ({ChangeHandle,label,...OtherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' onChange={ChangeHandle} {...OtherProps}/>
        {label ?(
            <label className={`${OtherProps.value.length ? "shrink" : ""} form-input-label`}>
            {label}
            </label>
            )
            : null
         }
    </div>
  )
}

export default FormInput