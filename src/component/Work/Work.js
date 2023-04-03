import Headding from "../Headding"
import './Work.css'
export default function Work() {
  return (
    <>
    <Headding number={0.2} headding="Some Things I’ve Built" />
      <div className="workContainer">
        <div className="leftImage">
          <img src="https://www.popsci.com/uploads/2021/02/22/45CUIW6ELJFUHEDZYMKMOPBSKY.JPG?auto=webp" alt="" />
        </div>
        <div className="rightContent">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
        </div>
      </div>
    </>
  )
}
