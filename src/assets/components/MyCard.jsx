const Card = (props) => {
    return(
        <div key ={props.id} className="myColumn">
            <div className="imgWrapper">
                <img src={props.thumb} alt={props.thumb} />
            </div>
            <span>{props.series}</span>
        </div>
    );
}

export default Card