import classes from "./ProjectsList.module.css";
import ProjectItem from "./ProjectItem";

function ProjectsList(props) {
    return (
        <>
            <h1 className={classes.list_title}>{props.title}</h1>
            <p className={classes.list_subtitle}>{props.subtitle}</p>
            <p className={classes.list_text}>{props.text}</p>
            {props.projects.length > 0 ?
                (<ul className={classes.project_items}>
                    {props.projects.map((project, index) => (
                        <li key={project.id} className="slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProjectItem
                                id={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.description} />
                        </li>
                    ))}
                </ul>) :
                (<h2 className="error">No Projects Available.</h2>)}
        </>
    );
}

export default ProjectsList;