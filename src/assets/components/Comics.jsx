import comics from "../../../src/comics";

export default function Comics(){
    return (
        <div className="myRow">
            {comics.map((comic, index) => (
                <div key ={comic.id} className="myColumn">
                    <div className="imgWrapper">
                        <img src={comic.thumb} alt={comic.thumb} />
                    </div>
                    <span>{comic.series}</span>
                </div>
            ))}
        </div> 
    );
}