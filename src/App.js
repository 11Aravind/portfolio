import './App.css';
import {Navbar} from './component/navbar/Navbar'
import {Banner} from './component/slider/Banner'
import {About} from './About/About';
import {Socialmedia} from './component/SocialMediaIcon/Socialmedia'
import Work from './component/Work/Work';
import Skils from './component/card/skils/Skils';
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
<Work />


</div>


  </>
  );
}

export default App;
