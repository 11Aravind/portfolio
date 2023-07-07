import './App.css';
import {Navbar} from './component/navbar/Navbar'
import {Banner} from './component/slider/Banner'
import {About} from './About/About';
import {Socialmedia} from './component/SocialMediaIcon/Socialmedia'
import Work from './component/Work/Work';
import Skils from './component/card/skils/Skils';
import Headding from "./component/Headding"

// import Card from './component/card/Card';
function App() {
  return (
  <>
<Navbar />
<Banner />
<Socialmedia />
<div className="container">

<About />
<Skils />
<Headding number={0.3} headding="Some Things I’ve Built" />
<Work />
<Work />
<Work />
<Work />
<Work />


</div>

<div className='height'></div>
  </>
  );
}

export default App;
