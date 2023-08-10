import react, { useState,useEffect } from 'react'
import './index.css'

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [state, setState] = useState(true);
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange); 
        }   
    },);
    const hideAndShowHambugger = () => {
         setState(!state);          
    }
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    return (
        <>
            <div className="navbar">
                <div onClick={() => hideAndShowHambugger()}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className="logo">
                    <img src="https://mannatthemes.com/T-Wind/default/assets/images/logo-sm.png" />
                    
                </div>
                {state &&  (
                    <div className='flex-cls'>
                        <div>
                            <ul>
                                <li><i className='fa fa-home'></i> Dashboards<i className="fa fa-angle-down"></i></li>
                                <li><i className='fa fa-address-card-o'></i>apps <i className="	fa fa-angle-down"></i></li>
                                <li><i className='fa fa-asterisk'></i>ui kit <i className="fa fa-angle-down"></i></li>
                                <li><i className='fa fa-book'></i>pages<i className="fa fa-angle-down"></i></li>
                                <li><i className='	fa fa-bolt'></i>authentication<i className="fa fa-angle-down"></i></li>
                            </ul>
                        </div>
                        <div className="right-nav">
                                <div className='search'><input type="text" placeholder='search' /><i className="fa fa-search" /></div>
                                <div><i class="	fa fa-spinner"></i></div>
                                <div><i class="fa fa-bell"></i></div>
                                <div className="user-info">
                                    <div className="profile">
                                        <img src="https://mannatthemes.com/T-Wind/default/assets/images/users/avatar-3.jpg" />
                                        <div className="Fitbit">
                                            <div>Fitbit Incorporation</div>
                                            <div className="designation">San Diego, California</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                )}
            </div>
       </>
    )
}

export default NavBar;