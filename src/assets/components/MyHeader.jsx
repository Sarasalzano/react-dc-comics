import Nav from "./HeaderNav"; 

export default function MyHeader() {
    return (
    <header> 
        <div className="HeaderWrapper">
            <div className="LogoWrapper">
                <img src="./src/assets/img/dc-logo.png" alt="logo dc" className="LogoHeader"></img>
            </div>
            <nav>
                <Nav />
            </nav>
        </div>
    </header>
    )
}