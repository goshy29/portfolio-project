import classes from "./Topics.module.css";

import reactImg from "../../../assets/images/react.jpg";
import nextImg from "../../../assets/images/next.jpg";
import angularImg from "../../../assets/images/angular.jpg";
import htmlImg from "../../../assets/images/html.jpg";
import jsImg from "../../../assets/images/js.jpg";
import nodeImg from "../../../assets/images/node.jpg";
import javaImg from "../../../assets/images/java.jpg"
import springImg from "../../../assets/images/spring.jpg";
import postgreImg from "../../../assets/images/postgresql.jpg";
import mongoImg from "../../../assets/images/mongodb.jpg";

function Topics() {
    return ( 
        <>
            <h1 className={classes.topic}>My topics</h1>
            <p className={classes.topic_p}>Frontend | Backend | Databases</p>
            <ul className={classes.topics}>
                <li>
                    <img src={reactImg} alt="React"/>
                </li>
                <li>
                    <img src={nextImg} alt="Next"/>
                </li>
                <li>
                    <img src={angularImg} alt="Angular"/>
                </li>
                <li>
                    <img src={htmlImg} alt="HTML and CSS"/>
                </li>
                <li>
                    <img src={jsImg} alt="Java Script"/>
                </li>
                <li>
                    <img src={nodeImg} alt="Node"/>
                </li>
                <li>
                    <img src={javaImg} alt="Java"/>
                </li>
                <li>
                    <img src={springImg} alt="Spring"/>
                </li>
                <li>
                    <img src={postgreImg} alt="PostgreSQL"/>
                </li>
                <li>
                    <img src={mongoImg} alt="MongoDB"/>
                </li>
            </ul>
        </>
    );
}

export default Topics;