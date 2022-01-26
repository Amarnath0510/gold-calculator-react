import React from "react";
import "./Golds.css";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
// import CardContent from '@mui/material/CardContent';

function Golds (){
    const golds=[

        {
        name:"Geometrical Design Gold Bracelet",
        picture:"https://ae01.alicdn.com/kf/HTB1mI5SrxSYBuNjSsphq6zGvVXap/TrustyLan-Thick-Rolled-Gold-Color-Golden-Chain-Bracelet-Men-16MM-Wide-8-6-Inch-Steel-Wristband.jpg_Q90.jpg_.webp",
        weight:"16 grams",
        availability:"In stock",
        price:" M.R.P ₹82560"
        },
        {
            name:"Design Mangalam Gold bangles",
            picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
            weight:"24 grams",
            availability:"In stock",
            price:"M.R.P ₹112360"
            },
            {
                name:"Sparkling Gold Ring",
                picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
                weight:"4g grams",
                availability:"In stock",
                price:"M.R.P ₹19680"
                }, 
                {
                    name:"Bwewitching Gold with studded necklace",
                    picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
                    weight:"24 grams",
                    availability:"Make to order",
                    price:"M.R.P ₹103237"
                    },
                    {
                        name:"Gilded Conch Gold Earring",
                        picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
                        weight:"11 grams",
                        availability:"In stock",
                        price:"M.R.P ₹45968"
                        },

                        {
                            name:"22Kt carat Cutwork Mens Chain",
                            picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
                            weight:"22 grams",
                            availability:"In stock",
                            price:"M.R.P ₹112000"
                            },

                            {
                                name:"Era uncut necklace set",
                                picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
                                weight:"32 grsms",
                                availability:"Make to order",
                                price:"M.R.P ₹165023"
                                },

                                {
                                    name:"Ethnix Gold Bangle Set",
                                    picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
                                    weight:"14.5 grams",
                                    availability:"In stock",
                                    price:"M.R.P ₹110000"
                                    },

                                   
                    

    ]
  
  return(
   
   
    <Card variant="outlined" className="golds-container">
   
    {golds.map((gold,index)=> (
<div key={index} className="details-container">
        
        <img className="img-container"src= {gold.picture} alt={gold.name}/>
        <h2>{gold.name}</h2>
        <h3>{gold.weight}</h3>
        <h4>{gold.availability}</h4>
        <h5>{gold.price}</h5>

</div>
        ))}
       
    </Card>
  );
  }
export default Golds;