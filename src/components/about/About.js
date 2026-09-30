import classes from "./About.module.css";
import { ABOUT } from "../../data/about";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideIn } from "../utils/motion";
import LinkifiedText from "../utils/LinkifiedText";

function About() {
    const {ref, inView} = useInView({triggerOnce: true});

    return (
        <div className={classes.about_wrap}>
            <motion.div ref={ref} variants={slideIn('left', 'tween', 0.2, 1)} initial="hidden" animate={inView ? "show" : "hidden"}
                    className={classes.about}>
                <p>
                    <LinkifiedText text={ABOUT.about_me.trim()} />
                </p>
            </motion.div>
        </div>
    );
}

export default About;
