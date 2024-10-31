import classes from "./ProjectsNavigator.module.css";

function ProjectsNavigator(props) {
    return ( 
      <div className={classes.wrap}>
        <div className={classes.controls}>
          <p>Page {props.currentPage} of {props.lastPage}</p>
          {props.currentPage > 1 && (
            <button className={classes.btn} onClick={props.onPrevious}>
              Previous 
            </button>
          )}
          {props.currentPage < props.lastPage && (
            <button className={classes.btn} onClick={props.onNext}>
              Next
            </button>
          )}
        </div>
      </div>
    );
}

export default ProjectsNavigator;