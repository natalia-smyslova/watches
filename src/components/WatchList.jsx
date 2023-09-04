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
                <Watch
                    watches={watches}
                    removeWatch={removeWatch}
                />
            </ul>
    </>
    )

}

export default WatchList;