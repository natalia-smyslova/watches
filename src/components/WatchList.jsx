import WatchForm from "./WatchForm";
import Watch from "./Watch";
import { useState } from "react"

function WatchList(){

    const [watches, setWatches] = useState([]);

    const addWatch = watch => {
        let newWatches = [watch, ...watches];
        setWatches(newWatches);
    };

    const removeWatch = id => {
        const removeArr = [...watches].filter(watch => watch.id !== id);

        setWatches(removeArr);
    };


    return(
        <>
        <WatchForm onSubmit={addWatch} />
            <ul className="list">
                {watches.map(( watch, index ) => 
                <Watch
                newWatch = {watch}
                removeWatch={removeWatch}
                key={index}
            />
                )}
                
            </ul>
    </>
    )

}

export default WatchList;