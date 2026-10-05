import MainNavigation from "../header/MainNavigation";
import Footer from "./Footer";

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;