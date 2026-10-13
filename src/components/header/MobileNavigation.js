import classes from "./MobileNavigation.module.css";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

function MobileNavigation(props) {
    return (
        <motion.aside className={classes.mobile_nav}
                variants={slideIn("left", "tween", 0, 0.3)}
                initial="hidden" animate="show" exit="hidden"
                transition={{ type: "tween", duration: 0.3 }}>
            <button className={classes.close_button} onClick={props.onClose} aria-label="Close menu">
                &times;
            </button>
            {props.children}
        </motion.aside>
    );
}

export default MobileNavigation;
