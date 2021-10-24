import React from "react" ;
import "./Card.css"
function Card(){
    return <div id="container">
      <img id="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*"/>
      <div id="containt">
        <div id="item1">
            <h1>Pepperoni Pizza</h1>
            <p id="title">Premium Pepperoni and cheese is made with real mozzarella on original hand-tossed crust.</p>
        </div>
        <div id="items2">
            <p>265 cal</p>
            <p>P/F/C: 12/10/21</p>
            <p>53.8 C</p>
        </div>
        <div id="items3">
            <p>$23.90 </p>
            <p id="cut">$29.90</p>
            <button id="btn">ORDER</button>
        </div>
      </div>
    </div>
}

export {Card};