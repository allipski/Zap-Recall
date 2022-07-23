export default function Second({color, icon}) {
    return (
        <>
            <div className={`cardclosed2 ${color}`}>
                <p>Pergunta X</p>
                <ion-icon name={icon}></ion-icon>
            </div>
        </>
    )
}