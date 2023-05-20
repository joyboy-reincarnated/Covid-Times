import React from "react";
import {Link,NavLink} from 'react-router-dom'
import './header.css'
// import {corona} from "../../images/covid-19.png"

const NavigationLap =()=>(
<div>
    <div>Covid <span>Times</span></div>
    {/* <div><img src={corona} alt="" /></div> */}
    <section>
        <ul className="links">
            <li>
              <NavLink to={'/'}>Home</NavLink>
              {/* <Link to='/'>Home</Link> */}
            </li>
            <li >
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li >
              <NavLink to={'/faqs'}>FAQs</NavLink>
            </li>
            <li >
              <NavLink to={'/updates'}>Updates</NavLink>
            </li>
        </ul>
        <Link to={'/contact'}>
        <button className="btn">Contact Us</button>
        </Link>
    </section> 
  </div>
)
const NavigationPhone =({open, setOpen})=>(
<div>
    <div>Covid <span>Times</span></div>
    <section>
        <ul className="links">
            <li onClick={()=>setOpen(!open)}>
              <NavLink to={'/'}>Home</NavLink>
              {/* <Link to='/'>Home</Link> */}
            </li>
            <li onClick={()=>setOpen(!open)}>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li onClick={()=>setOpen(!open)}>
              <NavLink to={'/faqs'}>FAQs</NavLink>
            </li>
            <li onClick={()=>setOpen(!open)}>
              <NavLink to={'/updates'}>Updates</NavLink>
            </li>
        </ul>
        <Link to={'/contact'} onClick={()=>setOpen(!open)}>
        <button className="btn">Contact Us</button>
        </Link>
    </section> 
  </div>
)
const Header = ({open,setOpen}) => {

  return( <div className="navBar">
  <NavigationLap />
  <span onClick={()=>setOpen(!open)} className="openIcon">
    <i className="fa-solid fa-2x fa-bars">
    </i>
      </span>
  </div>
  );
};

export const HeaderPhone = ({open,setOpen})=>{
  return(<div className={`navPhone ${open? "navPhone_open":""}`}>
    <span onClick={()=>setOpen(!open)}><i className="fa-sharp fas fa-2x fa-regular fa-xmark"></i></span>
    <NavigationPhone open={open} setOpen={setOpen}/>

    </div>
  )
}


export default Header;
