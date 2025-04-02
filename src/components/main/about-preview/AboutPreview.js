import classes from "./AboutPreview.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInLeft } from "../../utils/motion";

const text = `I'm an experienced Software Developer. In real life I am a complex person who always challenges myself with different things and 
    I try to bring this same complexity to my work. With my Java knowledge accumulated on Android projects and expertise in relational databases 
    in my job I broaded my skill set by diving into modern web development technologies. I combined all this to create several nice looking 
    projects with different backgrounds and configurations of databases. Let's work together to bring your ideas to life!`

function AboutPreview() {
    const {ref: titleRef, inView: titleInView} = useInView({triggerOnce: true});
    const {ref: textRef, inView: textInView} = useInView({triggerOnce: true});

    return ( 
        <>
            <motion.div ref={titleRef} variants={slideInLeft(0.3)} initial="hidden" animate={titleInView ? "show" : "hidden"}>              
                <h1 className={classes.about_title}>Overview</h1>
                <p className={classes.about_subtitle}>Introduction</p>
            </motion.div>

            <motion.p ref={textRef} variants={slideInLeft(0.3)} initial="hidden" animate={textInView ? "show" : "hidden"}
                    className={classes.about_text}>
                {text}
            </motion.p>
        </>
    );
}

export default AboutPreview;
