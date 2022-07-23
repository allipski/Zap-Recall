import logo from '../assets/images/logo.png'
import Flashcard from './Flashcard';

export default function Telaflash() {

    return (
        <div className="aligning">
            <div className="master2">
                <div className="cabecalho">
                    <img className="logosmall" src={logo} />
                    <h1>ZapRecall</h1>
                </div>
                <div className="cards">
                    <Flashcard />
                </div>
            </div>
        </div>
    )
}