//hover
import React, { useState, Component } from "react";
import '../../App.scss';

class Hover extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        skill: 0,
      };
    }

    render(){
        return(
            <div className="skillComponent">
              <div className="skill_inner">
                <div className="item">
                  <img src='./img/hover_icon-glass.png' alt="icon-glass"/>
                </div>
                <div className="item">
                  <img src='./img/hover_lightBtn.png' alt="light Button"/>
                </div>
                <div className="item">
                  <img src='./img/hover_riseup.png' alt="rise up"/>
                </div>
                <div className="item">
                  <img src='./img/hover_text-emphasis.png' alt="text emphasis"/>
                </div>
                <div className="item">
                  <img src='./img/hover_highlight.png' alt="highlight"/>
                </div>
                <div className="item">
                  <img src='./img/hover_readingglasses.png' alt="reading glasses"/>
                </div>
                <div className="item">
                  <img src='./img/hover_shopping.png' alt="shopping"/>
                </div>
                <div className="item">
                  <img src='./img/hover_updown-nav.png' alt="up down nav"/>
                </div>
                <div className="item">
                  <img src='./img/hover_image-border.png' alt="image border"/>
                </div>
                <div className="item">
                  <img src='./img/hover_text-border.png' alt="text border"/>
                </div>
              </div>
            </div>
        )
    }
  }
  
  
  export default Hover;