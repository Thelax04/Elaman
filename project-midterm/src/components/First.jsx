import Logo from './Logo'
import './First.css'

function First() {
    return <div className='class'>
        <Logo />
        <b>
            <div className='firstclass'>
            <button className='Button1'> 
            <div className='onepicture'></div>
                    Избранное
                </button>
            
                <button className='Button2'> 
                <div className='twopicture'></div>
                    Ваш профиль
                </button>
            </div>
                
        </b>
        

    </div>
}
export default First