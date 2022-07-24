import { arr } from '../data/Deck';

export default function Results({ seq, done }) {
    return (
        <>
            <p>{done}/{arr.length} CONCLUÍDOS</p>
            <div className='icones'>
                {seq.map((elemento, index) => 
                <ion-icon key={index} name={elemento}></ion-icon>
                )}
            </div>
        </>
    )
}