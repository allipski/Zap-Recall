import logo from '../assets/images/logo.png';

export default function ({cont, go, setGo}) {
    return(
    <div className="master">
        <img className="logo" src={logo} />
        <h1>ZapRecall</h1>
        <button onClick={() => {
            if (cont === 0) {
                setGo(!go);
                cont++;
            }
        }
        } className="startbutton">Iniciar Recall!</button>
    </div>
    )
}