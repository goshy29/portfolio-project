import classes from "./ProjectsList.module.css";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant, slideInLeft } from "../utils/motion";

function ProjectsList(props) {
    const {ref: titleRef, inView: titleInView} = useInView({triggerOnce: true});
    const {ref: textRef, inView: textInView} = useInView({triggerOnce: true});
    const {ref: listRef, inView: listInView} = useInView({triggerOnce: true});

    return (
        <>
            <motion.div ref={titleRef} variants={textVariant(0.1)} initial="hidden" animate={titleInView ? "show" : "hidden"}>
                <h1 className={classes.list_title}>{props.title}</h1>
                <p className={classes.list_subtitle}>{props.subtitle}</p>
            </motion.div>

            <motion.p ref={textRef} variants={fadeIn("up", "tween", 0.1, 1)} initial="hidden" animate={textInView ? "show" : "hidden"} 
                    className={classes.list_text}>
                {props.text}
            </motion.p>

            {props.projects.length > 0 ?
                (<ul ref={listRef} className={classes.project_items}>
                    {props.projects.map((project, index) => (
                        <motion.li key={project.id} variants={props.projectsListCall === "homepage" ? slideInLeft(index * 0.5)  : slideInLeft(index * 0.1)} 
                                initial="hidden" animate={listInView ? "show" : "hidden"}> 
                            <ProjectItem
                                id={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.description} />
                        </motion.li>
                    ))}
                </ul>) :
                (<h2 className="error">No Projects Available.</h2>)}
        </>
    );
}

export default ProjectsList;