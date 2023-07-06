import './About.css';
import Headding from '../component/Headding';

export const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <Headding number={0.1} headding="About Me" />
        <div className="aboutContent">
          <div className="mySelf">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta debitis alias expedita amet corrupti beatae quasi ullam sunt officia culpa, velit, omnis in? Mollitia natus accusamus amet, eos corporis deleniti.
        
    </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta debitis alias expedita amet corrupti beatae quasi ullam sunt officia culpa, velit, omnis in? Mollitia natus accusamus amet, eos corporis deleniti.
            </p>
            <br />
            <p>
            Here are a few technologies I’ve been working with recently:
            
            </p>
          </div>

          <div className="personImage">
            {/* <div> */}
            
              <div className="img">
              
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr-XrtQd52FdpFt92aYHOz8y_ALpTi5iivg&usqp=CAU" alt="pic" />
                <div className="borderImg"></div>
                        </div>
                        
          </div>
        </div>
      </div>
   
    </>
  )
}
