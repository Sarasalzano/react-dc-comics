export default function MyHeader() {
    return (<header> 
        <div className="HeaderWrapper">
        <div className="LogoWrapper">
            <img src="./src/assets/img/dc-logo.png" alt="logo dc" className="LogoHeader"></img>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#">CHARACTERS</a>
                </li>
                <li>
                    <a href="#" className="BlueText">COMICS</a>
                </li>
                <li>
                    <a href="#">TV</a>
                </li>
                <li>
                    <a href="#">GAMES</a>
                </li>
                <li>
                    <a href="#">COLLECTIBLES</a>
                </li>
                <li>
                    <a href="#">VIDEOS</a>
                </li>
                <li>
                    <a href="#">FANS</a>
                </li>
                <li>
                    <a href="#">NEWS</a>
                </li>
                <li>
                    <a href="#">SHOP</a>
                </li>
            </ul>
        </nav>
        </div>
    </header>)
}