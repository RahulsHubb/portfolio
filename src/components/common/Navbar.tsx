import React from 'react'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-5 gap-4 items-center p-4 shadow-md'>
        <div className="logo">
          <img className='w-10 h-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="logo" />
        </div>
        <div className="menu">
            <ul className=' grid grid-cols-5 gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="lets-talk">
            <button>Let's Talk</button>
        </div>
      
    </nav>
  )
}

export default Navbar
