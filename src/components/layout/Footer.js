import classes from "./Footer.module.css";
import { CONTACTS } from "../../data/about";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";

function Footer() {
    return (
        <footer className={classes.footer}>
            <ul className={classes.links}>
                <li>
                    <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                        <GithubIcon aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                        <LinkedinIcon aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href={`mailto:${CONTACTS.email}`} aria-label="Email" title="Email">
                        <EmailIcon aria-hidden="true" />
                    </a>
                </li>
            </ul>
            <p className={classes.copyright}>&copy; 2024&ndash;{new Date().getFullYear()} Georgi Dobromirov</p>
        </footer>
    );
}

export default Footer;
