import React from "react";
import './clubs.css';
import dota from './dota.jpg'
import cs2 from './cs2.jpg'
import dance from './dance.png'

export default function Clubs() {
    return (
        <div className="main-clubs">
            <div className="container">
                <div className="clubs-text">Clubs</div>
                <div className="cards-list">
                    <div className="card 1">
                        <div className="card_image">
                            <img src={dota} />
                        </div>
                        <div className="card_title title-white">
                            <p>Dota 2</p>
                        </div>
                    </div>
                    <div className="card 2">
                        <div className="card_image">
                            <img src='' />
                        </div>
                        <div className="card_title title-black">
                            <p>Chess</p>
                        </div>
                    </div>
                    <div className="card 3">
                        <div className="card_image">
                            <img src="" />
                        </div>
                        <div className="card_title title-black">
                            <p>Mafia</p>
                        </div>
                    </div>
                    <div className="card 4">
                        <div className="card_image" >
                            <img id="dance-img" src={dance} />
                        </div>
                        <div className="card_title title-black">
                            <p>Dance</p>
                        </div>
                    </div>
                    <div className="card 5">
                        <div className="card_image">
                            <img src={cs2} />
                        </div>
                        <div className="card_title title-white">
                            <p>Counter-Strike 2</p>
                        </div>
                    </div>
                    <div className="card 6">
                        <div className="card_image">
                            <img src="" />
                        </div>
                        <div className="card_title title-black">
                            <p>Hobby Horseing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
