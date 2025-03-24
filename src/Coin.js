import React from "react";
import head from "./images/head.png";
import tail from "./images/tail.png";
import './Coin.css';

function Coin({side}){
    return(
        <>
            {side==="head"?(
                <img src={head} className="imageStyle" alt="head"/>
            ):
            (
                <img src={tail} className="imageStyle" alt="tail"/>
            )}
        </>
    )
}

export default Coin;