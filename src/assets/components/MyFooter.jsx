export default function MyFooter(){
    return (<footer>
        <section className="MainFooter">
            <div className="MainFooterWrapper">
                <div className='ColumnLeft'></div>
                <div className='ColumnRight'></div>
            </div>
        </section>
        <section className="SecondaryFooter">
            <div className='SecondaryFooterWrapper'>
                <div className='SecondaryFooterLeft'>
                    <button>SIGN-UP NOW!</button>
                </div>
                <div className='SecondaryFooterRight'>
                    <span>FOLLOW US</span>
                    <img src="./src/assets/img/footer-facebook.png" alt="facebook icon" />
                    <img src="./src/assets/img/footer-twitter.png" alt="twitter icon" />
                    <img src="./src/assets/img/footer-youtube.png" alt="youtube icon" />
                    <img src="./src/assets/img/footer-pinterest.png" alt="pinterest icon" />
                    <img src="./src/assets/img/footer-periscope.png" alt="periscope icon" />
                </div>
            
            </div>
        </section>
    </footer>)
}