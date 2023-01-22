import React from 'react';
import "../Styles/Form.css";
export default function Form({children,className,...rest}) {
  return (
    <div>
        <form className="form" action="#"{...rest}>
            {children}

        </form>
    </div>
  )
}
