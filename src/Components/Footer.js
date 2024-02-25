import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className='foot'>
        <span className='logos'> L O G O S </span>
        <div className='foot_1'>&copy; OOO CK & «АПШЕРОН»</div>
        <div className='foot_2'>Все права защищены. 2010-2020</div>
        <li className='ac'>
            <Link style={{color: 'white'}} to='/act'>Акции</Link>
        </li>
    </footer>
  )
}
