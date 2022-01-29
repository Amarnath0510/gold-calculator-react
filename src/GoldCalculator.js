import React from "react";
import Card from "@mui/material/Card";

import "./gold-calculator-container.css";
import { useState, useEffect } from "react";
function GoldCalculator() {
  const initialPrice = Number(localStorage.getItem("price") || 0);
  const initialGrams = Number(localStorage.getItem("grams") || 0);
 


  const [price, setPrice] = useState(initialPrice);
  const [grams, setGrams] = useState(initialGrams);
  
  useEffect(() => {
    localStorage.setItem("price", price);
    localStorage.setItem("grams", grams);
    
 let netPrice=(grams*4392);
 setPrice(netPrice)
  }, [grams, price]);


  return (
    <Card className="gold-calculator-container">
      <h1 className="title">Gold-Rate-Calculator</h1>
      <div className="price">Your Gold Price is ₹{initialPrice+4392}</div>
     
      <form className="form1">
      <label>
      Grams
      <input
        type="number"
        value={grams}
        onChange={(e) => setGrams(parseInt(e.target.value) || 0)}
      />
    </label>
        <label>
          Price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
          />
        </label>
        
       
      </form>
    </Card>
  );
}
export default GoldCalculator;
// import React from "react";

// import "./gold-calculator-container.css";
// import { useState, useEffect } from "react";
// function GoldCalculator() {
//   const initialQuantity = Number(localStorage.getItem("quantity") || 0);
//   const initialGrams = Number(localStorage.getItem("grams") || 0);
 


//   const [quantity, setQuantity] = useState(initialQuantity);
//   const [grams, setGrams] = useState(initialGrams);
  
//   useEffect(() => {
//     localStorage.setItem("quantity", quantity);
//     localStorage.setItem("grams", grams);
    
//  let netPrice=(grams*4392.00);
//  setQuantity(netPrice)
//   }, [grams, quantity]);


//   return (
//     <div className="gold-calculator-container">
//       <h1>Gold-Rate-Calculator</h1>
//       <div>Your Gold Price is ₹{initialQuantity+4392.00}</div>
     
//       <form>
//         <label>
//           Quantity
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
//           />
//         </label>
//         <label>
//           Grams
//           <input
//             type="number"
//             value={grams}
//             onChange={(e) => setGrams(parseInt(e.target.value) || 0)}
//           />
//         </label>
       
//       </form>
//     </div>
//   );
// }
// export default GoldCalculator;
