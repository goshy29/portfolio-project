import aboutImg from "../../assets/images/george.jpg";
import classes from "./HeaderAboutSection.module.css";

function HeaderAboutSection() {
    return ( 
        <div className={classes.wrap} >
            <div className={classes.section}>
                <div className={classes.section_img}>
                    <img src={aboutImg} alt="An image showing myself"/>
                </div>
                <div className={classes.section_about}>
                    <h1><span>Hi, I am Georgi Dobromirov</span></h1>
                    <p>I am a software developer.</p> 
                </div>  
            </div> 
        </div>
    );
}

export default HeaderAboutSection;