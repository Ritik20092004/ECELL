import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import cross from '../assets/cross.jpg';
import threeLine from '../assets/three_lines.jpg';

function Header() {
    const navigate =useNavigate();
    const navItems=[
        {
           name: "Home",
           slug: "/Home",
           active: true,
        },
        {
            name: "Grid",
            slug: "/",
            active: true,
        },
        {
            name: "LinkedIn",
            slug: "https://www.linkedin.com/in/ritik-tiwari-a2b23029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            active: "true"
        }
    ]

    const handleLine = ()=>{
        const cr = document.querySelector('.cross');
        const threeLine = document.querySelector('.threeLine');
        const downb = document.querySelector('.downbar');
        downb.style.display = 'block';
        threeLine.style.display = 'none';        
        cr.style.display = 'block'
    }
    const handleCross = ()=>{
        const cr = document.querySelector('.cross');
        const threeLine = document.querySelector('.threeLine');
        const downb = document.querySelector('.downbar');
        downb.style.display = 'none';
        threeLine.style.display = 'block';        
        cr.style.display = 'none';
    }
  return (
    <div>
      <header >
        <div className="head">
            <nav >
             <ul>
                {
                    navItems.map((item)=>
                        item.active? (
                            <li key={item.name}>
                                { item.name==="LinkedIn" ?
                                 (
                                    <a href={item.slug}>
                                        {item.name}
                                    </a>
                                 ):
                                 (<button onClick={()=>navigate(item.slug)}>
                                 {item.name}
                                 </button>
                            )}
                            </li>
                        ):null
                    )}
             </ul>
            </nav>
        </div>
        <img className='threeLine' src={threeLine} onClick={handleLine} alt="" />
        <img src={cross} alt="" className="cross" onClick={handleCross}/>
        <div className="downbar">
            <nav >
             <ul>
                {
                    navItems.map((item)=>
                        item.active? (
                            <li key={item.name}>
                                { item.name==="LinkedIn" ?
                                 (
                                    <a href={item.slug}>
                                        {item.name}
                                    </a>
                                 ):
                                 (<button onClick={()=>navigate(item.slug)}>
                                 {item.name}
                                 </button>
                            )}
                            </li>
                        ):null
                    )}
             </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
