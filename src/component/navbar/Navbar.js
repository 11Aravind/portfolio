import './Navbar.css';
//import './logo.svg'
export  const Navbar=()=> {
  return (
    <div className="navContainer">
        <div className="left">
<div className="logo">
&#60;&#8725;&#62;
{/* <img  src="https://static.vecteezy.com/system/resources/previews/006/816/978/original/code-icon-coding-symbol-coding-programming-sign-free-vector.jpg" alt="logo" /> */}
{/* <i class="fa-solid fa-code"></i> */}
</div>
        </div>
        <div className="right">
            <ul className='menuCOntainer'>
              {
                menuDetails.map((menu,key)=>{
                 return   <li><div><i class="fa fa-home" aria-hidden="true"></i></div> <a href={menu.url}>{menu.menuItem}</a></li> 


})
              }   

              
                        
            </ul>
        </div>
    </div>
  )
}
const menuDetails=[
  {
    menuItem:'Home',
    url:"./"
  },
  {
    menuItem:'About',
    url:"./"
  },
  {
    menuItem:'Project',
    url:"./"
  },
  {
    menuItem:'Contact',
    url:"./"
  },
  ];

