import comics from "../../../src/comics";
import Card from "./MyCard";

export default function Comics(){
    return (
        <div className="myRow">
            {comics.map(comic => (
            <Card 
            key = {comic.id}
            id = {comic.id}
            thumb = {comic.thumb}
            series = {comic.title}
                />
            ))}
        </div> 
    );
}