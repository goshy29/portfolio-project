import HeaderAboutSection from "../components/header/HeaderAboutSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import ProjectsList from "../components/main/ProjectsList";
import Topics from "../components/main/topics/Topics";
import { ALL_PROJECTS } from "../data/all-projects";
import { Helmet } from "react-helmet";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home</title>  
                <meta name="description" content="Welcome to the Home Page of My Website." /> 
            </Helmet>

            <HeaderAboutSection/>
            <MainSectionLayout>
                <Topics />
                <ProjectsList projects={ALL_PROJECTS.slice(0, 3)} title="Latest Projects"/>
            </MainSectionLayout>
        </>        
    );
}

export default HomePage;