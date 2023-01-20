import Footer from "./Footer";
import Nav from "./Nav";

const UserLayout = ({children}) => {
    return (
        <>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
 
export default UserLayout;