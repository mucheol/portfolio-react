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
                  <img src='./img/hover_icon-glass.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_lightBtn.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_riseup.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_text-emphasis.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_highlight.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_readingglasses.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_shopping.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_updown-nav.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_image-border.png' />
                </div>
                <div className="item">
                  <img src='./img/hover_text-border.png' />
                </div>
              </div>
            </div>
        )
    }
  }
  
  
  export default Hover;