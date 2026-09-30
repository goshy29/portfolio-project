import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useParams } from "react-router-dom";
import { ALL_PROJECTS } from "../data/all-projects";
import ProjectItemDetails from "../components/main/ProjectItemDetails";
import ErrorPage from "./ErrorPage";
import { Helmet } from "react-helmet";

function ProjectDetailsPage() {
    const { projectId } = useParams();
    const project = ALL_PROJECTS.find(p => p.id === projectId);

    if (!project) {
        return <ErrorPage />;
    }

    return (
        <>
            <Helmet>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <MainSectionLayout>
                <ProjectItemDetails project={project} />
            </MainSectionLayout>
        </>
    );
}

export default ProjectDetailsPage;
