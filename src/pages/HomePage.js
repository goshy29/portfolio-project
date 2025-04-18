import HeaderAboutSection from "../components/header/HeaderAboutSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import AboutPreview from "../components/main/about-preview/AboutPreview";
import ProjectsList from "../components/main/ProjectsList";
import Topics from "../components/main/topics/Topics";
import Experience from "../components/main/experience/Experience";
import { ALL_PROJECTS } from "../data/all-projects";
import { Helmet } from "react-helmet";

const text = `These projects are my fun creations, built during my free time to explore new ideas and technologies. 
    Each one showcases my skills with close to real-world examples, complete with code repositories.`

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home</title>  
                <meta name="description" content="Welcome to the Home Page of My Website." /> 
            </Helmet>

            <HeaderAboutSection/>
            <MainSectionLayout>
                <AboutPreview />
                <Experience />
                <Topics />
                <ProjectsList projects={ALL_PROJECTS.slice(0, 3)} title="PROJECTS" subtitle="My Work" text={text} projectsListCall="homepage"/>
            </MainSectionLayout>
        </>        
    );
}

export default HomePage;