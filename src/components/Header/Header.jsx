import { useState } from 'react';
import StyleHeader from './style'
function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
   <StyleHeader openMenu={openMenu}>
    <div className='left-side'>
    <p>Dio chang</p>
    <p>Front-end develope</p>
    </div>
    <div className='right-side'>
        <div className='menu-container' onClick={()=>{setOpenMenu(!openMenu)}}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
   </StyleHeader>
  );
}
export default Header;
