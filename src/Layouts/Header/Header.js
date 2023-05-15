import React from 'react'
import '../../Assets/App.css'
import './Header.css'
import logo from '../../Assets/3135715.png'


const Header = () => {
  return (
    <header>
    <div>
<h1>SmartSpend</h1>
<img src={logo} alt="" className='profilePic'/>
    </div>
    </header>
  )
}
export default Header