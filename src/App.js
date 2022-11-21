import './App.scss';
import {useState} from 'react';
import React, { Component} from 'react';
import { Hover, Effect, Animation, CardUI, ETC } from './asset/html';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';

const skillList = {
  0: <Hover />,
  1: <Effect />,
  2: <Animation />,
  3: <CardUI />,
  4: <ETC />,
};

let baseUrl = "./img/mockup"

const settings = {
  arrows: true,
  // dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  focusOnSelect : true,
  centerMode : true,
  slidesToShow: 5,
  slidesToScroll: 1
};



// function App() {
  class App extends React.Component{
    
    constructor(props) {
      super();
      this.state = {
        skill: 0,
        nav1: null,
        nav2: null
      };
    }
    changeSkill = (skillIndex) => {
      this.setState({skill : skillIndex})
    }
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
    
    render(){
    return (
      <div className="App">
        <header>
          <div className='header_inner'>
            <div className='logo'><a href='#' className='f2'>KIM MUCHEOL</a></div>
            <nav>
              <div className='nav_inner'>
                <ul>
                  <li><a href='#main' className='f4'>About</a></li>
                  <li><a href='#skill' className='f4'>Skill</a></li>
                  <li><a href='#portWeb' className='f4'>Portfolio-Web</a></li>
                  <li><a href='#' className='f4'>Portfolio-Skill</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <section id='main'>
          <div className='main_screen'>
            <div className='main_inner'>
              <div className="intro-textBox">
                <span className="dropText1">Hi,</span><br/>
                <span className="dropText2">I'm</span>&nbsp;
                <span className="dropText3">Mucheol</span>
              </div>
              <div className='mainImg'>
                <img src='./img/main_profileImg.png'/>
              </div>
              <p>안녕하세요 평생개발자를 꿈꾸는 김무철입니다.</p>
            </div>
            <div className='scrollText'>
              <p>Scroll down</p>
              <span className='line'></span>
            </div>
          </div>
          <div className='main_bg'></div>
        </section>
        <section id='skill'>
          <div className='inner'>
            <div className='section_title'>
              <p className='f1'>Skill</p>
            </div>
            <div className='contents'>
              <div className='item'>
                <p className='subject f3'>React</p>
                <p className='explanation'>
                  웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹사이트 퍼블리싱을 해오고 있습니다.
                  특히 웹 표준을 위해 $$$ $$$$$$$ $$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$ $$$$$$ $$$$$$ $$$$ $$
                  웹 UI 디자인 작업 후 클래스 네임과 함께 HTML 정보 구조설계를 꼼꼼히 작업한 후 퍼블리싱 작업을 진행합니다.
                </p>
                <span className='hole'></span>
              </div>
              <div className='item'>
                <p className='subject f3'>HTML</p>
                <p className='explanation'>
                  웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹사이트 퍼블리싱을 해오고 있습니다.
                  특히 웹 표준을 위해 HTML5에서 권장하는 마크업 방식과 시멘틱 태그를 사용해 전체 레이아웃을 설계합니다.
                  웹 UI 디자인 작업 후 클래스 네임과 함께 HTML 정보 구조설계를 꼼꼼히 작업한 후 퍼블리싱 작업을 진행합니다.
                </p>
                <span className='hole'></span>
              </div>
              <div className='item'>
                <p className='subject f3'>CSS</p>
                <p className='explanation'>
                  CSS 코딩은 IE 지원도 충분히 고려하는 크로스브라우징(Cross Browsing)을 위해 안정적인 CSS속성을 사용해서 HTML Elements를 배치하고 디자인합니다.
                  특별한 경우 CSS3에서 새롭게 지원하는 속성을 활용해서 좀 더 다양한 CSS 배치와 디자인을 합니다.
                </p>
                <span className='hole'></span>
              </div>
              <div className='item'>
                <p className='subject f3'>Javascript</p>
                <p className='explanation'>
                  모듈화를 위해 항상 노력합니다.
                  네비게이션, 탭 메뉴, 어코디언 메뉴 등 상호작용을 위한 JAVASCRIPT는 플러그인을 사용하지 않아도 순수한 JAVASCRIPT 코딩으로도 제작 가능합니다.
                  많은 JAVASCRIPT 라이브러리들을 사용해 본 경험이 있습니다.
                </p>
                <span className='hole'></span>
              </div>
              <div className='item'>
                <p className='subject f3'>RESPONSIVE WEB</p>
                <p className='explanation'>
                  반응형 웹 제작에 있어서 크로스브라우징(Cross Browsing)을 위해 안정적인 기존방식인 float, position, Media Query를 활용한 반응형 웹 제작 경험을 충분히 가지고 있습니다.
                  필요에 따라 플렉스(Flex)와 그리드(Grid)방식으로 반응형 웹 사이트 제작도 충분히 가능합니다.
                </p>
                <span className='hole'></span>
              </div>
              <div className='item'>
                <p className='subject f3'>MOBILE WEB APP</p>
                <p className='explanation'>
                  모바일 우선을 위해 Mobile First에 준하는 모바일 웹 앱 제작도 가능합니다.
                  UI/UX 측면에서 미적인 디자인 뿐만 아니라 모바일 사용자 경험에 최적화를 위해 효율적인 컨텐츠 배치를 우선적으로 생각합니다.
                </p>
                <span className='hole'></span>
              </div>
            </div>
          </div>
        </section>
        {/* PORTFOLIO - WEB */}
        <section id='portWeb'>
          <div className='inner'>
            <div className='section_title'>
              <p className='flexBox f1'>Portfolio <span className='hole'></span> Web</p>
            </div>
            <div className='contents flexBox'>
              <div className='imgBox'>
                <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                  <div className='mockup'>
                    <img src={baseUrl + "_01.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_leopatra.png"/></div>
                        <p className='title'>Leopatra</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>Morrobogi의 NFT 판매 홈페이지.<br/> 로그인, 상세페이지, 모달창 등 인터넷 쇼핑몰과 같은 양식으로 퍼블리싱 되었습니다.</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.07 ~ 2022.09(5주) + 추가개발</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100%</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS + Javascript<br/>
                                        Size : Desktop</p>
                      <div className='btnBox'>
                        <button><a href="https://leopatrademo.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/leopatra" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                  <div className='mockup'>
                    <img src={baseUrl + "_02.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_dnf.png"/></div>
                        <p className='title'>Dubai NFT Festival</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>VAEX에서 주최한 Dubai NFT Festival 공식 홈페이지.<br/>행사 내용, 연사 등 행사정보들과 컨러런스 참가신청서를 포함한 정보를 알리기 위해 개발되었습니다.</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.07 ~ 2022.08(2주)</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100% + 호스팅 + 구글 스프레드시트 연동</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS + Javascript<br/>
                                        Size : Desktop / Laptop / Mobile</p>
                      <div className='btnBox'>
                        <button><a href="https://dnf.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/Dubai_NFT_Festival.git" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                  <div className='mockup'>
                    <img src={baseUrl + "_03.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_pivn.png"/></div>
                        <p className='title'>PIVN</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>PIVN 토큰 공식 홈페이지.<br/>PIVN 토큰의 정보, 로드맵 등 백서에 대한 정보를 홈페이지로 제작</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.06 ~ 2022.07 (3주)</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100%</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS + Javascript<br/>
                                        Plugin : Particles.js + Fullpage.js<br/>
                                        Size : Desktop + Laptop + Mobile</p>
                      <div className='btnBox'>
                        <button><a href="https://pivn.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/PIVN.git" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                  <div className='mockup'>
                    <img src={baseUrl + "_04.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_homeMeta.png"/></div>
                        <p className='title'>Home Number Meta</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>Home Number Meta의 운송장 시스템 홈페이지.<br/>관리자, 유저 페이지 모두 개발하였으며 정보관리, 택배접수, 회원가입, 로그인페이지 등</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.05 ~ 2022.06 (1주)</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100%</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS<br/>
                                        Size : Desktop</p>
                      <div className='btnBox'>
                        <button><a href="https://hommeta.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/homeMeta-user.git" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                  <div className='mockup'>
                    <img src={baseUrl + "_05.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_vaex.png"/></div>
                        <p className='title'>VAEX Manual</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>VAEX에서 주최한 Dubai NFT Festival 공식 홈페이지.<br/>행사 내용과 참가자, 참가방법 등이 상세히 적혀있다.</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.02.22 ~ 2033.03.33</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100%</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS + Javascript<br/>
                                        Size : 1920 * 1080</p>
                      <div className='btnBox'>
                        <button><a href="https://vaexmanual.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/manualPage.git" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                  <div className='mockup'>
                    <img src={baseUrl + "_06.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_vaex.png"/></div>
                        <p className='title'>VAEX</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>VAEX에서 주최한 Dubai NFT Festival 공식 홈페이지.행사 내용과 참가자, 참가방법 등이 상세히 적혀있다.</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.02.22 ~ 2033.03.33</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100%</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS + Javascript<br/>
                                        Size : 1920 * 1080</p>
                      <div className='btnBox'>
                        <button><a href="https://vaex.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/vaex.git" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                  <div className='mockup'>
                    <img src={baseUrl + "_07.png"} className="mockupScreen"/>
                    <div className='textBox'>
                      <div className='projectTitle'>
                        <div className='logo'><img src="./img/logo_thinkblock.png"/></div>
                        <p className='title'>THINKBLOCK</p>
                      </div>
                      <span className="horLine"></span>
                      <p className='p1'>프로젝트 개요</p>
                      <p className='p2'>VAEX에서 주최한 Dubai NFT Festival 공식 홈페이지.행사 내용과 참가자, 참가방법 등이 상세히 적혀있다.</p>
                      <p className='p1'>작업기간</p>
                      <p className='p2'>2022.02.22 ~ 2033.03.33</p>
                      <p className='p1'>작업 참여도</p>
                      <p className='p2'>퍼블리싱 100%</p>
                      <p className='p1'>제작방식</p>
                      <p className='p2'>Publishing : HTML + CSS + Javascript<br/>
                                        Size : 1920 * 1080</p>
                      <div className='btnBox'>
                        <button><a href="https://thinkblock.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></button>
                        <button><a href="https://github.com/mucheol/Think-Block.git" target="_blank" rel="noopener noreferrer">Github</a></button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            
            <div id="carousel">
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings}>
          <div className='mockup'>
            <img src={baseUrl + "_001.png"} className="mockupScreen"/>
          </div>
          <div className='mockup'>
            <img src={baseUrl + "_002.png"} className="mockupScreen"/>
          </div>
          <div className='mockup'>
            <img src={baseUrl + "_003.png"} className="mockupScreen"/>
          </div>
          <div className='mockup'>
            <img src={baseUrl + "_004.png"} className="mockupScreen"/>
          </div>
          <div className='mockup'>
            <img src={baseUrl + "_005.png"} className="mockupScreen"/>
          </div>
          <div className='mockup'>
            <img src={baseUrl + "_006.png"} className="mockupScreen"/>
          </div>
          <div className='mockup'>
            <img src={baseUrl + "_007.png"} className="mockupScreen"/>
          </div>
        </Slider>
      </div>
            {/* <div id='carousel'>
              <Slider {...settings}>
                <div className='mockup'>
                  <img src={baseUrl + "_001.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
                <div className='mockup'>
                  <img src={baseUrl + "_002.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
                <div className='mockup'>
                  <img src={baseUrl + "_003.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
                <div className='mockup'>
                  <img src={baseUrl + "_004.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
                <div className='mockup'>
                  <img src={baseUrl + "_005.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
                <div className='mockup'>
                  <img src={baseUrl + "_006.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
                <div className='mockup'>
                  <img src={baseUrl + "_007.png"} className="mockupScreen" onClick={chgImg}/>
                </div>
              </Slider>
            </div> */}
          </div>
        </section>
        <section id='portSkill'>
          <div className='inner'>
            <div className='section_title'>
              <p className='flexBox f1'>Portfolio <span className='hole'></span> Skill</p>
            </div>
            <div className='contents'>
              <div className='tabMenuBar'>
                <ul className='tabs'>
                  <li className={`${this.state.skill === 0? 'active': ''}`} onClick={() => this.changeSkill(0)}>Hover</li>
                  <li className={`${this.state.skill === 1? 'active': ''}`} onClick={() => this.changeSkill(1)}>Effect</li>
                  <li className={`${this.state.skill === 2? 'active': ''}`} onClick={() => this.changeSkill(2)}>Animation</li>
                  <li className={`${this.state.skill === 3? 'active': ''}`} onClick={() => this.changeSkill(3)}>Card UI</li>
                  <li className={`${this.state.skill === 4? 'active': ''}`} onClick={() => this.changeSkill(4)}>ETC</li>
                </ul>
              </div>
              <div className='contentArea'>
                {skillList[this.state.skill]}
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className='footer_inner'>
            <p className='f2'>KIM MUCHEOL</p>
            <p className='p1'>e-mail : ancjf0601@gmail.com</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
