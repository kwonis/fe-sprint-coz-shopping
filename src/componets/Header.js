import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({menuHandle}) => {
return <header className="headerContainer">
<div className='LogoCon'>
<Link to='/'>
    <span className='Logo'>
      <img src='logo.png' />
    </span></Link>
    <Link to='/'>
      <span className="Logo-title">
    COZ Shopping
</span>
</Link>
</div>
<span className='menu' onClick={menuHandle}>
<img src='menu.png' />
</span>
</header>
}

export default Header