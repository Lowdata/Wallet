import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../../images/logo.png';
const NavbarItem = ({title, classProps}) => {
    return(
        <li className={'mx-4 cusor-pointer ${classProps}'}>
            {title }
        </li>
    );

}
    

const Navbar = ( ) => {
    
    return(
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src='client\images\logo.png' alt='logo' className='w-32 cursor-pointer' />
                <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                    {["Market", "Tutorials", "Wallets"].map((item, index )=> (
                        <NavbarItem key={item+index} title={item}/>
                    ))}
                    <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[2546bd] '>
                        login
                    </li>

                </ul>

                
            </div>
        </nav>
    );

}

export default Navbar;