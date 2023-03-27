import './App.css';
import {Navbar} from './component/navbar/Navbar'
import {Banner} from './component/slider/Banner'
import {About} from './About/About';
import {Socialmedia} from './component/SocialMediaIcon/Socialmedia'
function App() {
  return (
  <>
<Navbar />
<Banner />
<Socialmedia />
<About />

  </>
  );
}

export default App;
