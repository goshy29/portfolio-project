import classes from "./Topics.module.css";
import { TECHNOLOGIES } from "../../../data/technologies";

function Topics() {
    return ( 
        <>
            <h1 className={classes.topic}>My topics</h1>
            <p className={classes.topic_p}>Frontend | Backend | Databases</p>
            <ul className={classes.topics}>
                {TECHNOLOGIES.map((tech, index) => (
                  <li key={index}>
                    <img src={tech.img_url} alt={tech.name} />
                    <p className={classes.techName}>{tech.name}</p>
                 </li>
                ))}
            </ul>
        </>
    );
}

export default Topics;