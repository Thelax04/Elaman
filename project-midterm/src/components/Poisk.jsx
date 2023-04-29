import "./Poisk.css"

function Poisk ()
{
    return <div>
        <div className="first">
            <div className="pic"></div>
            <input className="input" type="text" placeholder="2 564 234 обявлений рядом"/>
        </div>
        <div className="second">
            <div className="pic2"></div>
            <input className="input2" type="text" placeholder="Весь Казахстан"/>
        </div>
            <button className="third">Поиск</button>

    </div>
}
export default Poisk