import './About.css';
import Headding from '../component/Headding';
export  const  About=()=> {
  return (
    <>
<div className="aboutContainer">
<Headding number={0.1} headding="About Me"/>
<div className="aboutContent">
<div className="mySelf">
<p>
  Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta debitis alias expedita amet corrupti beatae quasi ullam sunt officia culpa, velit, omnis in? Mollitia natus accusamus amet, eos corporis deleniti.
  </p>
</div>
<div className="personImage">
<div className="img">
<img src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" alt="pic" />

</div>
</div>
</div>
</div>
    </>
  )
}
