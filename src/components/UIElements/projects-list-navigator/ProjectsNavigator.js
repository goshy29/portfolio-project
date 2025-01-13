import classes from "./ProjectsNavigator.module.css";

function ProjectsNavigator(props) {
    return ( 
      <div className={classes.wrap}>
        <div className={classes.controls}>
          <p>Page {props.currentPage} of {props.lastPage}</p>
          <div className={classes.buttons}>
            <button 
              className={`${classes.btn} ${props.currentPage === 1 ? classes.disabled : ""}`}
              onClick={props.currentPage > 1 ? props.onPrevious : null} disabled={props.currentPage === 1}>
                Previous
            </button>
            <button 
              className={`${classes.btn} ${props.currentPage === props.lastPage ? classes.disabled : ""}`}
              onClick={props.currentPage < props.lastPage ? props.onNext : null} disabled={props.currentPage === props.lastPage}>
                Next
            </button>
          </div>
        </div>
      </div>
    );
}

export default ProjectsNavigator;