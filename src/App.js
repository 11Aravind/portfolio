import './App.css';
import {Navbar} from './component/navbar/Navbar'
import {Banner} from './component/slider/Banner'
import {About} from './About/About';
import {Socialmedia} from './component/SocialMediaIcon/Socialmedia'
import Work from './component/Work/Work';
function App() {
  return (
  <>
<Navbar />
<Banner />
<Socialmedia />
{/* <div className="content"> */}

<About />
<Work />
{/* </div> */}


  </>
  );
}

export default App;
