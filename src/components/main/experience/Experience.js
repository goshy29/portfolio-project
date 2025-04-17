import classes from "./Experience.module.css";
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInLeft } from "../../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { EXPERIENCE } from "../../../data/experience";
import ExperienceCard from "../../UIElements/experience-card/ExperienceCard";

function Experience() {
    const {ref: titleRef, inView: titleInView} = useInView({triggerOnce: true});

    return ( 
        <>
            <motion.div ref={titleRef} variants={slideInLeft(0.3)} initial="hidden" animate={titleInView ? "show" : "hidden"}>              
                <h1 className={classes.exp_title}>Work Experience</h1>
            </motion.div>

            <div className={classes.verticalLine}>
                <VerticalTimeline>
                    {EXPERIENCE.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}    
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;