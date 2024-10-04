import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/george.jpg";
import classes from "./HeaderAboutSection.module.css";

function HeaderAboutSection() {
    return ( 
        <div className={classes.wrap} >
            <div className={classes.wrap_sec}>
                <div className={classes.section}>                
                    <div className={classes.section_img}>
                        <img src={aboutImg} alt="An image showing myself"/>
                    </div>
                    <div className={classes.section_about}>
                        <h1><span>Hello,</span></h1>
                        <h1>I am <span>Georgi Dobromirov</span></h1>
                        <p>A software developer.</p> 
                    </div>  
                    <div className={classes.btn}>
                        <Link to="/about">MORE ON ME</Link>
                     </div>
                     <div className={classes.btn}>
                        <Link to="/projects">VIEW PORTFOLIO</Link>
                     </div>
                </div> 
            </div>
        </div>
    );
}

export default HeaderAboutSection;