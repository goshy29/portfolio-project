import classes from "./ProjectItemDetails.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInLeft, slideInRight, fadeIn } from "../utils/motion";

function ProjectItemDetails(props) {
    props.project.summary = props.project.summary.replace(/\n/g, "<br />");

    const {ref, inView} = useInView({triggerOnce: true});

    return (
        <div className={classes.content}>
            <header className={classes.header}>
                <motion.img ref={ref} variants={slideInLeft(0.2)} initial="hidden" animate={inView ? "show" : "hidden"}
                    src={props.project.image} alt={props.project.title} />
                <motion.h1 ref={ref} variants={slideInRight(0.2)} initial="hidden" animate={inView ? "show" : "hidden"}>
                    {props.project.title}
                </motion.h1>
            </header>

            <motion.p ref={ref} variants={fadeIn("up", "tween", 0.1, 1)} initial="hidden" animate={inView ? "show" : "hidden"}
                dangerouslySetInnerHTML={{__html: props.project.summary}}>
            </motion.p>
        </div>
    );
}

export default ProjectItemDetails;