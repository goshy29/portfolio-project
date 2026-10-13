import classes from "./MobileNavWrap.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function MobileNavWrap(props) {
    return (
        <motion.div className={classes.wrap} onClick={props.onClick}
                variants={fadeIn("", "tween", 0, 0.3)}
                initial="hidden" animate="show" exit="hidden"
                transition={{ duration: 0.3 }}>
        </motion.div>
    );
}

export default MobileNavWrap;
