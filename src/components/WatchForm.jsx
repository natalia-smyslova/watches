import { useState } from "react";
import { nanoid } from "nanoid";

function WatchForm(props){

    const [nameInput, setNameInput] = useState('');
    const [numberInput, setNumberInput] = useState('');

    const handleChange = e => {
        setNameInput(e.target.value);

    };
    const handleNumberChange = e => {

        setNumberInput(e.target.value);

    };


    const handleSubmit = e => {
        e.preventDefault();

            props.onSubmit({
                name: nameInput,
                number: numberInput,
                id: nanoid()
            });


        setNameInput('');
        setNumberInput('');
    }



    return(
        <form className="form" onSubmit={handleSubmit} >
            <label className="form__label"  htmlFor="watchName">Название
                <input className="form__input" type="text" value={nameInput}  id="watchName" onChange={handleChange} required></input>
            </label>
            <label className="form__label" htmlFor="number">Временная зона
                <input className="form__input" type="number" value={numberInput}  id="number" onChange={handleNumberChange} required min="-12" max="12"></input>
            </label>
            <button className="form__btn">Добавить</button>
        </form>
    )
}

export default WatchForm;