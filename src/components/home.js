import './home.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Home = () => {
    return (
        <div className="home" id='home'>
            <header id="welcome-section">
                <h1>Hello !</h1>
                <p>My name is Youssef Kaffel</p>
                <p>and I am a Web Developer</p>
                <a href='#about'><div className='vert-move'><KeyboardArrowDownIcon fontSize='large'/></div></a>
            </header>
        </div>
    )
}
export default Home;