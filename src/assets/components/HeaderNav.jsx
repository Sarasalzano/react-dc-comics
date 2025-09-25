const navigationItems = ["CHARACTERS", "COMICS", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

export default function HeaderNav(){
    return (
        <ul>
            {navigationItems.map((navigationItem, index) => (
            <li key={index}>
                <a href="#" className="blueText">{navigationItem}</a>
            </li>
            ))}
        </ul>
    );
}