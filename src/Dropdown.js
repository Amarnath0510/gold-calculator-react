import React from "react";
import { useState } from "react";
import './Dropdown.css'
function Dropdown({selected,setSelected}) {

    const[isActive,setIsActive]=useState(false)
    const options=[
      "INR ₹4392.00 (INDIAN RUPEES)",
      "USD $59.026 (US DOLLARS)",
      "JPY 6721.8 ( JAPANESE YEN)",
      "CNY 374.18 (CHINESE YUAN RENBIMI)",
      "CAD 74.199 (CANADIAN DOLLAR)",
      "GBP 43.45 (UK POUND STERLING)",
      "SGD $79.32 (SINGAPORE DOLLAR)",
      "AED 216.75 (UAE DIRHAM)",
      "PKR 9,538.75 (PAKISTANI RUPEES)",
      "LKR 11,953 (LANKAN RUPEES)"
    ];
  return (

    <div className="dropdown">
    <div className="dropdown-btn" 
      onClick={(e)=> setIsActive(!isActive)}>

 {selected}

<span className="fas fa-caret-down"></span>
 </div>

      {isActive && (
        <div className="dropdown-content">
        {options.map((option)=> (
          <div 
          onClick={(e) => {
            setSelected(option);
            setIsActive(false);
        }}
          className="dropdown-item"
          >
      {option}

      </div>
      
        )
        )}
 </div>
      )}
  </div>
  )
}
export default Dropdown;



