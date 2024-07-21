import classes from "./About.module.css";
import { ABOUT } from "../../data/about";

function About() {
    ABOUT.about_me = ABOUT.about_me.replace(/\n/g, "<br />");

    return (
        <div className={classes.about}>
            <p dangerouslySetInnerHTML={{
                __html: ABOUT.about_me
            }}></p>
        </div>
    );
}

export default About;