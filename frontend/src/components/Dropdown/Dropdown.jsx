import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Dropdown.css"
import { Link } from 'react-router-dom'


function Dropdown() {
  return (
    <div className='flex flex-col dropDownProfile'>
      
        <ul className='flex flex-col gap-4'>
            <li><Link>Profile</Link></li>
            <li><Link>Settings</Link></li>
            <li><Link>Logout</Link></li>
        </ul>
    
    </div>
  )
}

export default Dropdown
