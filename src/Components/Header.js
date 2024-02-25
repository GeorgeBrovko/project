import React from 'react'
import {Link} from 'react-router-dom'

export class Header extends React.Component {
  render(){
  return (
    <header>
        <div>
        <span className='logo'>L O G O S</span>
        <div className='cont'>
          <p>Контакты: </p>
          <p className='num'>+7 (917) 510-57-59</p>
          </div>
            <ul className='nav'>
            <li> 
                  <Link style={{color: 'white'}} to='/cart'>Корзина</Link>
            </li>       
            </ul>
        </div>
        <div className='presentation'></div>  
    </header>
    
  )
}
}
export default Header