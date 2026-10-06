import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import MobileNavigation from "./MobileNavigation";
import { useState, useEffect } from "react";
import MobileNavWrap from "../UIElements/MobileNavWrap";
import NavLinks from "./NavLinks";

function MainNavigation() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function handlerOpenMobileNav() {
        setIsMobileNavOpen(true);
    }

    function handlerCloseMobileNav() {
        setIsMobileNavOpen(false);
    }

    useEffect(() => {
        if (!isMobileNavOpen) {
            return;
        }

        function handlerKeyDown(event) {
            if (event.key === "Escape") {
                setIsMobileNavOpen(false);
            }
        }

        document.addEventListener("keydown", handlerKeyDown);
        return () => document.removeEventListener("keydown", handlerKeyDown);
    }, [isMobileNavOpen]);

    return (
        <>
            {isMobileNavOpen && (<MobileNavWrap onClick={handlerCloseMobileNav}/>)}
            {isMobileNavOpen && 
                (<MobileNavigation onClose={handlerCloseMobileNav}>
                    <nav className={classes.mobile_navbar}>
                        <ul className={classes.mobile_navbar_list}>
                            <NavLinks onClick={handlerCloseMobileNav} />
                        </ul>    
                    </nav>        
                </MobileNavigation>)
            }
        
            <header className={classes.main_header}>
                <div className={classes.navigation}>
                    <nav className={classes.navbar}>
                        <button className={classes.mobileNav_btn_menu} onClick={handlerOpenMobileNav}
                            aria-label="Open menu" aria-expanded={isMobileNavOpen}>
                            <span />
                            <span />
                            <span />
                        </button>

                        <div className={classes.navbar_logo}>
                            <Link to="/" className={classes.navbar_logo_link}>GD</Link>
                        </div>
                        <ul className={classes.navbar_list}>
                            <NavLinks/>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default MainNavigation;