import { useState } from "react";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import ProjectsList from "../components/main/ProjectsList";
import { ALL_PROJECTS } from "../data/all-projects";
import { Helmet } from "react-helmet";
import ProjectsNavigator from "../components/UIElements/projects-list-navigator/ProjectsNavigator";

function ProjectsPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 6;
    const totalPages = Math.ceil(ALL_PROJECTS.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = ALL_PROJECTS.slice(indexOfFirstProject, indexOfLastProject);

    function handlerNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    function handlerPreviousPage() {
        if (currentPage > 1)  {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    return (
        <>
            <Helmet>
                <title>All Projects</title>  
                <meta name="description" content="Explore my projects at My Website." /> 
            </Helmet>

            <MainSectionLayout>
                <ProjectsList projects={currentProjects} title="ALL PROJECTS" subtitle="My Latest Articles" text=""/>
                <ProjectsNavigator onNext={handlerNextPage} onPrevious={handlerPreviousPage} currentPage={currentPage} lastPage={totalPages} />
            </MainSectionLayout>
        </>
    );
}

export default ProjectsPage;