import { arr } from '../data/Deck';

export default function Bottombar({ done }) {
    return (
        <div className='bottombar'>
            <p>{done}/{arr.length} CONCLUÍDOS</p>
            <div className=''>
                
            </div>
        </div>
    )
}