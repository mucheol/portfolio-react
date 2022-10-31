import './App.scss';

function App() {
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
						<span className='title_underLine'></span>
					</div>
					<div className='contents'>
						<div className='item'>
							<p className='subject f3'>React</p>
							<p className='explanation f4'>
								웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹사이트 퍼블리싱을 해오고 있습니다.
								특히 웹 표준을 위해 $$$ $$$$$$$ $$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$ $$$$$$ $$$$$$ $$$$ $$
								웹 UI 디자인 작업 후 클래스 네임과 함께 HTML 정보 구조설계를 꼼꼼히 작업한 후 퍼블리싱 작업을 진행합니다.
							</p>
						</div>
						<div className='item'>
							<p className='subject f3'>HTML</p>
							<p className='explanation f4'>
								웹 표준과 웹 접근성을 준수하는 HTML 정보 구조설계로 웹사이트 퍼블리싱을 해오고 있습니다.
								특히 웹 표준을 위해 HTML5에서 권장하는 마크업 방식과 시멘틱 태그를 사용해 전체 레이아웃을 설계합니다.
								웹 UI 디자인 작업 후 클래스 네임과 함께 HTML 정보 구조설계를 꼼꼼히 작업한 후 퍼블리싱 작업을 진행합니다.
							</p>
						</div>
						<div className='item'>
							<p className='subject f3'>CSS</p>
							<p className='explanation f4'>
								CSS 코딩은 IE 지원도 충분히 고려하는 크로스브라우징(Cross Browsing)을 위해 안정적인 CSS속성을 사용해서 HTML Elements를 배치하고 디자인합니다.
								특별한 경우 CSS3에서 새롭게 지원하는 속성을 활용해서 좀 더 다양한 CSS 배치와 디자인을 합니다.
							</p>
						</div>
						<div className='item'>
							<p className='subject f3'>Javascript</p>
							<p className='explanation f4'>
								모듈화를 위해 항상 노력합니다.
								네비게이션, 탭 메뉴, 어코디언 메뉴 등 상호작용을 위한 JAVASCRIPT는 플러그인을 사용하지 않아도 순수한 JAVASCRIPT 코딩으로도 제작 가능합니다.
								많은 JAVASCRIPT 라이브러리들을 사용해 본 경험이 있습니다.
							</p>
						</div>
						<div className='item'>
							<p className='subject f3'>RESPONSIVE WEB</p>
							<p className='explanation f4'>
								반응형 웹 제작에 있어서 크로스브라우징(Cross Browsing)을 위해 안정적인 기존방식인 float, position, Media Query를 활용한 반응형 웹 제작 경험을 충분히 가지고 있습니다.
								필요에 따라 플렉스(Flex)와 그리드(Grid)방식으로 반응형 웹 사이트 제작도 충분히 가능합니다.
							</p>
						</div>
						<div className='item'>
							<p className='subject f3'>MOBILE WEB APP</p>
							<p className='explanation f4'>
								모바일 우선을 위해 Mobile First에 준하는 모바일 웹 앱 제작도 가능합니다.
								UI/UX 측면에서 미적인 디자인 뿐만 아니라 모바일 사용자 경험에 최적화를 위해 효율적인 컨텐츠 배치를 우선적으로 생각합니다.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id='portWeb'>
				<div className='inner'>
					<div className='section_title'>
						<p className='f1'>Portfolio - Web</p>
						<span className='title_underLine'></span>
					</div>
					<div className='contents'>
						ss
					</div>
				</div>
			</section>

			<footer>
				<div className='footer_inner'>
					<p className='f2'>KIM MUCHEOL</p>
					<p className='p1'>E-mail : ancjf0601@gmail.com</p>
				</div>
			</footer>
    </div>
  );
}

export default App;
