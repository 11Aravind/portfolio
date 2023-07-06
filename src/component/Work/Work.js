import Headding from "../Headding"
import './Work.css'
export default function Work() {
  return (
    <>
      <Headding number={0.3} headding="Some Things I’ve Built" />
      <div className="workContainer">
        <div className="leftImage gradient-border" id="box">
          <img src="https://www.popsci.com/uploads/2021/02/22/45CUIW6ELJFUHEDZYMKMOPBSKY.JPG?auto=webp" alt="pic" />
        </div>
        <div className="rightContent">
<img src="picture/topmenu.png" alt="topmenu" className='dummynavImage' />    
      A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
        </div>
      </div>
    </>
  )
}
