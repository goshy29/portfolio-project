import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/george.png";
import classes from "./HeaderAboutSection.module.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useRef } from "react";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";

function HeaderAboutSection() {
    const wrapRef = useRef(null);

    function handlerScrollDown() {
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"), 10) || 0;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
            top: wrapRef.current.getBoundingClientRect().bottom + window.scrollY - headerHeight,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    }

    return (
        <div className={classes.wrap} ref={wrapRef}>
            <div className={classes.wrap_sec}>
                <motion.div className={classes.section} variants={fadeIn("up", "tween", 0.1, 1)} initial="hidden" animate="show">
                    <motion.div className={classes.section_img} variants={textVariant(0.4)} initial="hidden" animate="show">
                        <img src={aboutImg} alt="Georgi Dobromirov, software developer."/>
                    </motion.div>
                    <div className={classes.section_about}>
                        <h1><span className={classes.highlight}>Hello,</span></h1>
                        <h1>I am <span className={classes.highlight}>Georgi Dobromirov</span></h1>
                        <p>A software developer.</p>
                    </div>
                    <Link to="/about" className={classes.btn}>MORE ON ME</Link>
                    <Link to="/projects" className={classes.btn}>VIEW PORTFOLIO</Link>
                </motion.div>
            </div>

            <button className={classes.scroll_down} onClick={handlerScrollDown} aria-label="Scroll down to the content">
                <ArrowDownIcon aria-hidden="true" />
            </button>
        </div>
    );
}

export default HeaderAboutSection;