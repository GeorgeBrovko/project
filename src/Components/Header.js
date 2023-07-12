import React from 'react'

export default function Header(props) {
  return (
    <header>
        <div>
            <span className='logo'>LOGOS</span>
            <ul className='nav'>
                <li>Корзина</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
