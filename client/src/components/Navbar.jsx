import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../../images/logo.png';
const NavbarItem = ((title, classProps)) => {
    return(
        <li className={'mx-4 cusor-pointer ${classProps}'}>
            {title }
        </li>
    )

} 
    

const Navbar = ( ) => {
    
    return(
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src='client\images\logo.png' alt='logo' className='w-32 cursor-pointer' />
                <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                    <NavbarItem />

                </ul>

                
            </div>
        </nav>
    );

}

export default Navbar;