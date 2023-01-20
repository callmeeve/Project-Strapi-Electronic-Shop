import Link from "next/link";

const Nav = () => {
    return (
        <>
            <nav className="navbar py-4 navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="">Elektronika</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link legacyBehavior href="/">
                                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                            </Link>
                            <Link legacyBehavior href="/product">
                                <li className="nav-item"><a className="nav-link" href="">Product</a></li>
                            </Link>
                            <li className="nav-item"><a className="nav-link" href="">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;