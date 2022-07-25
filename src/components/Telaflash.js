import React from 'react';
import logo from '../assets/images/logo.png'
import Flashcard from './Flashcard';
import Bottombar from './Bottombar';
import { arr } from '../data/Deck';
import shuffleArray from '../data/Deck';

const shuffled = shuffleArray(arr);

export default function Telaflash() {
    const [done, setDone] = React.useState(0);
    const [seq, setSeq] = React.useState([]);
    
    return (
        <div className="aligning">
            <div className="master2">
                <div className="cabecalho">
                    <img className="logosmall" src={logo} />
                    <h1>ZapRecall</h1>
                </div>
                <div className="cards">
                    {shuffled.map((arr, index) => 
                    <Flashcard 
                        seq={seq}
                        setSeq={setSeq}
                        done={done} 
                        setDone={setDone} 
                        questionid={index + 1} 
                        pergunta={arr.pergunta} 
                        resposta={arr.resposta} 
                        key={index} 
                    />)}
                </div>
                <Bottombar seq={seq} done={done}/>
            </div>
        </div>
    )
}