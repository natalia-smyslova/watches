import { RiCloseCircleLine } from 'react-icons/ri'
import { useEffect, useState } from "react";
import moment from "moment/moment";

function Watch({ watches, removeWatch }) {

    const localTimezone = new Date().getTimezoneOffset() / 60;
    const diffHour = localTimezone + Number(watches.number);

    const [hour, setHour] = useState(Number(moment().format('h')) + diffHour);
    const [minute, setMinute] = useState(moment().format('mm'));
    const [second, setSecond] = useState(moment().format('ss'));

    useEffect(() => {
        const timeout = setInterval(() => {
          setHour(Number(moment().format('h')) + diffHour);
          setMinute(moment().format('mm'));
          setSecond(moment().format('ss'));
        }, 0);
    
        return () => clearInterval(timeout);
      }, [diffHour]);


    return watches.map((watch, index) =>
        <li className="watches-row" key={index}>
            <div className="watch__header">
                <h4 className='watch__name'>{watch.name}</h4>
            <div className="watch__number">({watch.number >= 0 ? '+' : '-'}{Math.abs(watch.number)})</div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeWatch(watch.id)} className="delete-icon" />
            </div>
             </div>
            <div className='watch__body'>
                <div className="watch__center"></div>
                <div className="watch__hourHand" style={{ transform: `rotate(${hour * 30 + minute / 12 * 6}deg)` }}></div>
                <div className="watch__minuteHand" style={{ transform: `rotate(${minute * 6}deg)` }}></div>
                <div className="watch__secondHand" style={{ transform: `rotate(${second * 6}deg)` }}></div>
            </div>
        </li>
    )

}

export default Watch;