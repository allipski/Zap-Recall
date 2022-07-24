import { arr } from '../data/Deck';
import Results from './Results';
import emojifeliz from '../assets/images/party.png';
import emojitriste from '../assets/images/sad.png';
import React from 'react';

export default function Bottombar({ seq, done }) {

    if (done === arr.length) {   
        return (
            <div className='bottombar'>
                <div className='msg'>
                    <div className='final'>
                        <img src={(seq.some(item => item === 'close-circle') === true) ? emojitriste : emojifeliz} />
                        <p>{(seq.some(item => item === 'close-circle') === true) ? 'Putz...' : 'Parabéns!'}</p>
                    </div>
                    <p>{(seq.some(item => item === 'close-circle') === true) ? 'Ainda faltam alguns... Mas não desanime!' : 'Você não esqueceu de nenhum flashcard!'}</p>
                </div>
                <Results seq={seq} done={done}/>
            </div>
        )
    } else {
        return (
            <div className='bottombar'>
                <Results seq={seq} done={done}/>
            </div>
        )
    }
}