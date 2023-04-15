import Logo from './Logo'
import './First.css'

function First() {
    return <div className='class'>
        <Logo />
        <div className="firstclass">
        <b>
            <div id='myBtn' className='Buttonone'>
                <div className="onepicture"></div>
                <div id="class1">Избранное</div>
            </div>
            
            
            
            <div className='Buttontwo'>
                <div className="twopicture"></div>
                <div id="class2">Ваш профиль</div>
            </div>
            
        </b>
        </div>
        

    </div>
}
export default First