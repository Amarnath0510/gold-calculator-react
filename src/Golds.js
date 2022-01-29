import React from "react";
import "./Golds.css";
import Card from "@mui/material/Card";
// import { CardContent } from "@mui/material";
import CardContent from "@mui/material/CardContent";

function Golds() {
  const golds = [
    {
      name: "Geometrical Bracelet",
      picture:"https://static-01.daraz.com.bd/p/28a4c0ddc62f26de1522f84d9fb270c4.jpg",
        
      weight: "16 grams",
      availability: "In stock",
      price: " M.R.P ₹82560",
    },
    {
      name: "Mangalam Gold bangles",
      picture:"https://i.pinimg.com/originals/2a/1e/c3/2a1ec37597a1b2092e31ffb85893302e.jpg",
        
      weight: "24 grams",
      availability: "In stock",
      price: "M.R.P ₹112360",
    },
    {
      name: "Sparkling Gold Ring",
      picture:"https://ae01.alicdn.com/kf/HTB1k4CAXU_rK1Rjy0Fcq6zEvVXar.jpg",
        

      weight: "4g grams",
      availability: "In stock",
      price: "M.R.P ₹19680",
    },
    {
      name: "Bewitch Studded necklace",
      picture:   "https://www.dailyexcelsior.com/wp-content/uploads/2020/09/necklace.jpg",
        
      weight: "24 grams",
      availability: "Make to order",
      price: "M.R.P ₹103237",
    },
    {
      name: "Gilded Gold Earring",
      picture:  "https://i.pinimg.com/originals/71/86/04/718604e669d5a650f361774bcde04de9.jpg",
      
      weight: "11 grams",
      availability: "In stock",
      price: "M.R.P ₹45968",
    },

    {
      name: "22Kt  Cutwork Mens Chain",
      picture:      "https://www.anuradhaartjewellery.com/assets/images/product/100757/original/CH-176_NET_RS-3800_Q-2_31_white.jpeg",
       
      weight: "22 grams",
      availability: "In stock",
      price: "M.R.P ₹112000",
    },

    {
      name: "Era uncut necklace set",
      picture:"https://i.pinimg.com/736x/bd/00/d3/bd00d3afac2857b336498ca6f2a1baff.jpg",
        
      weight: "32 grams",
      availability: "Make to order",
      price: "M.R.P ₹165023",
    },

    {
      name: "Ethnix Gold Bangle Set",
      picture:   "https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg",
        
      weight: "14.5 grams",
      availability: "In stock",
      price: "M.R.P ₹110000",
    },
  ];

  return (
    <div className="Golds">
      <Card className="golds-list-container ">
        <CardContent />
        {golds.map((gold, index) => (
          <div key={index} className="gold-container">
            <img className="img-container" src={gold.picture} alt={gold.name} />
            <h2 className="gold.name">{gold.name}</h2>
            <h3>{gold.weight}</h3>
            <h4>{gold.availability}</h4>
            <h5>{gold.price}</h5>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Golds;
