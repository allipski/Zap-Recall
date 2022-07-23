import React from 'react';
import logo from '../assets/images/logo.png'
import Flashcard from './Flashcard';
import {arr} from '../data/Deck';

export default function Telaflash() {
    return (
        <div className="aligning">
            <div className="master2">
                <div className="cabecalho">
                    <img className="logosmall" src={logo} />
                    <h1>ZapRecall</h1>
                </div>
                <div className="cards">
                    {arr.map((arr, index) =><Flashcard questionid={index} pergunta={arr.pergunta} resposta={arr.resposta} key={index}/>)};
                </div>
            </div>
        </div>
    )
}