import classes from './ExperienceCard.module.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

function ExperienceCard(props) {
    return ( 
        <>
            <VerticalTimelineElement
                contentStyle={{ background: '#252734', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #232631' }}
                date={props.experience.date}
                icon={
                    <div className={classes.image_icon}>
                        <img src={props.experience.icon} alt={props.experience.company_name} />    
                    </div>
                }
            >
                <div>
                    <h3 className={classes.title}>{props.experience.title}</h3>
                    <p className={classes.subtitle}>
                        {props.experience.company_name}
                    </p>    
                </div>

                <ul className={classes.description_list}>
                    {props.experience.descriptions.map((description, index) => (
                        <li key={`experience-description-${index}`} className={classes.description_item}>
                            {description}
                        </li>
                    ))}    
                </ul>
            </VerticalTimelineElement>
        </>
    );
}

export default ExperienceCard;