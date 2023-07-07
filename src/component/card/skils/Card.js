import './Card.css'
export default function Card() {
  const skillData=[
    {
      'img':'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png',
      'skill':'Java Script'
    },
    {
      'img':'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      'skill':'React JS'
    },
    {
      'img':'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png',
      'skill':'Anjular'
    },
    {
      'img':'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png',
      'skill':'Java Script'
    },
  ];
  return (
    <>
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
