export default function MyMain() {
    return (<main>
        <section>
            <div className="Jumbotron"></div>
        </section>
        <section className="Content">
            <p> -- Content goes here -- </p>
        </section>
        <section className="Menu">
            <div className="MainWrapper">
                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-digital-comics.png" alt="comics icon" />
                <span>DIGITAL COMICS</span>
                </div>
                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-merchandise.png" alt="tshirt icon" />
                <span>DC MERCHANDISE</span>
                </div>

                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-subscriptions.png" alt="subscription" />
                <span>SUBSCRIPTION</span>
                </div>

                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-comics-shop-locator.png" alt="shop locator" />
                <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="ImgWrapper">
                <img src="./src/assets/img/buy-dc-power-visa.svg" className="MenuSvg" alt="payment icon" />
                <span>DC POWER ERA</span>
                </div>
            </div>
        </section>
    </main>)
}