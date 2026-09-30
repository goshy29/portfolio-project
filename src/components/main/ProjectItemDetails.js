import classes from "./ProjectItemDetails.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInLeft, slideInRight, fadeIn } from "../utils/motion";
import LinkifiedText from "../utils/LinkifiedText";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";

function ProjectItemDetails(props) {
    const {ref: imageRef, inView: imageInView} = useInView({triggerOnce: true});
    const {ref: titleRef, inView: titleInView} = useInView({triggerOnce: true});
    const {ref: contentRef, inView: contentInView} = useInView({triggerOnce: true});

    return (
        <div className={classes.content}>
            <header className={classes.header}>
                <motion.img ref={imageRef} variants={slideInLeft(0.2)} initial="hidden" animate={imageInView ? "show" : "hidden"}
                    src={props.project.image} alt={props.project.title} />
                <motion.h1 ref={titleRef} variants={slideInRight(0.2)} initial="hidden" animate={titleInView ? "show" : "hidden"}>
                    {props.project.title}
                </motion.h1>
            </header>

            <motion.div ref={contentRef} variants={fadeIn("up", "tween", 0.1, 1)} initial="hidden" animate={contentInView ? "show" : "hidden"}>
                {props.project.github && (
                    <a className={classes.github_link} href={props.project.github} target="_blank" rel="noopener noreferrer"
                        aria-label="View source code on GitHub" title="View on GitHub">
                        <GithubIcon aria-hidden="true" />
                    </a>
                )}

                <p>
                    <LinkifiedText text={props.project.summary.trim()} />
                </p>
            </motion.div>
        </div>
    );
}

export default ProjectItemDetails;
