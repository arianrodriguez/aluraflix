import Category from '../Category'
import VideoCard from '../VideoCard'
import './Header.css'

const Header = () => {

    return <header className='header'>
        <div className='header__content'>
            <div className='header__content-flexrow'>
            
                <div>
                    <Category
                        title="Front End"
                        color="#6BD1FF"
                    />
                    <div className='header__content-info'>
                        <h2>Challenge React</h2>
                        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </div>
                </div>

                <VideoCard
                    src="images/videocard.png"
                    alt="videocard"
                    width="500"
                    className="videocategory"
                />

            </div>

        </div>
    </header>
}

export default Header