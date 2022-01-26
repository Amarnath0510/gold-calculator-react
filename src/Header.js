import React from "react";
import "./Header.css";
import CalculateIcon from '@mui/icons-material/Calculate';
import {  IconButton } from "@mui/material";
function Header() {
  return (
    <div className="header-container">
    <h2>Estimate Your Gold</h2>
    <h1>KnowYourGoldVAlueToday.com</h1>
    <div className="header-detail-container">
    <IconButton> <CalculateIcon className="header-logo"/></IconButton>
    
    <h3>GoldCalculator helps you here</h3>
    </div>
    
    </div>
  )
}
export default Header
