import classes from "./Topics.module.css";
import { TECHNOLOGIES } from "../../../data/technologies";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { useInView } from "react-intersection-observer";

function Topics() {
    const {ref: titleRef, inView: titleInView } = useInView({triggerOnce: true});
    const {ref: techRef, inView: techInView} = useInView({triggerOnce: true});

    return ( 
        <>
            <motion.div ref={titleRef} variants={textVariant(0.1)} initial="hidden" animate={titleInView? "show" : "hidden"}> 
                <h1 className={classes.topic}>TECHNOLOGIES</h1>
                <p className={classes.topic_p}>Frontend | Backend | Databases</p>
            </motion.div>

            <motion.div ref={techRef} variants={fadeIn("up", "tween", 0.1, 1)} initial="hidden" animate={techInView ? "show" : "hidden"}>
                <ul className={classes.topics}>
                    {TECHNOLOGIES.map((tech, index) => (
                    <li key={index}>
                        <img src={tech.img_url} alt={tech.name} />
                        <p className={classes.techName}>{tech.name}</p>
                    </li>
                    ))}
                </ul>
            </motion.div>
        </>
    );
}

export default Topics;