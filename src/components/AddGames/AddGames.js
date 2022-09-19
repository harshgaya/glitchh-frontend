import React, { useState } from 'react';
import classes from './AddGames.module.css';

function AddGames() {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [imgName, setImageName] = useState('No Image Selected')


    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            console.log(e.target.files[0].name);
            setImageName(e.target.files[0].name);
            reader.addEventListener("load", () => {
                setImgData(reader.result);

            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className={classes.AddGames}>
            <div className={classes.header}>
                <div className={classes.AddGameText}>Add Games</div>
                <div className={classes.cancelBtn}>Cancel</div>

            </div>

            <div className={classes.gamesDropDown}>
                <label for="game-select">Games</label>

                <select className={classes.selectGame} name="games" id="game-select">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div className={classes.game_not_on_the_list}>
                <input className={classes.tick_box} type="checkbox" id="account" name="account" value="account" />
                <p>Your game not on the list?</p>
            </div>
            <div className={classes.openGameFromDesktop}>
                <div className={classes.gameName}>
                    <label htmlFor="game-name">Game Name</label>
                    <input type="text" id='game-name' />

                </div>
                <div className={classes.gameImage}>
                    <label htmlFor="game-image">Game Image</label>

                    <div className={classes.center}>
                        <p>{imgName}</p>

                        <label htmlFor="game-image">Choose</label>


                        <input type="file" onChange={onChangePicture} id='game-image' accept="image/png, image/jpeg, image/jpg, image/webp" />
                    </div>

                </div>
            </div>
            {imgData && <img src={imgData} alt="image" />}
            <button>Submit</button>
        </div>
    )
}

export default AddGames