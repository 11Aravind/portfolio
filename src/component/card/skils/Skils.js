import Headding from "../../Headding"
// import Card from "./Card"
import '../skils/Card.css';
export default function Skils() {
  const skillData=[
    {
      'img':'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png',
      'skill':'Html'
    },
    {
      'img':'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
      'skill':'CSS'
    },
    {
      'img':'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png',
      'skill':'Java Script'
    },
    {
      'img':'https://static-00.iconduck.com/assets.00/jquery-icon-1009x1024-21vxaog3.png',
      'skill':'Jquery'
    },
    {
      'img':'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      'skill':'React JS'
    },
    {
      'img':'https://play-lh.googleusercontent.com/eof_QbMfhJxAiqbE2ESWwb1-qJ7Zu6yKbESiUaEs9CfuUA1oxDW0374FVYP6cnZLmw=w600-h300-pc0xffffff-pd',
      'skill':'BOOTSTRAP 4'
    },
    {
      'img':'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/php-512.png',
      'skill':'PHP'
    },
    {
      'img':'https://w7.pngwing.com/pngs/758/884/png-transparent-circle-laravel-programming-round-icon-popular-services-brands-vol-icon-thumbnail.png',
      'skill':'Leravel 8'
    },
    
    {
      'img':'https://banner2.cleanpng.com/20180530/gbf/kisspng-github-repository-git-project-commit-5b0f2dd1efb513.5784673515277214259819.jpg',
      'skill':'GIT'
    },

     
  ];
  return (
    <>
    <Headding number={0.2} headding="Skils" />
    <div className="skilsContainer">
     {
      skillData.map((payload,index)=>(
        <div class="card-col">
          <img src={payload.img} alt="" />
          <h4>{payload.skill}</h4></div>
      ))
     }
    </div> 
    </>
  )
}
 
