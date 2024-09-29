import MainSectionLayout from "../components/layout/MainSectionLayout";
import ProjectsList from "../components/main/ProjectsList";
import { ALL_PROJECTS } from "../data/all-projects";
import { Helmet } from "react-helmet";

function ProjectsPage() {
    return (
        <>
            <Helmet>
                <title>All Projects</title>  
                <meta name="description" content="Explore my projects at My Website." /> 
            </Helmet>

            <MainSectionLayout>
                <ProjectsList projects={ALL_PROJECTS} title="All Projects"/>
            </MainSectionLayout>
        </>
    );
}

export default ProjectsPage;