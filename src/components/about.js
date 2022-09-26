import './about.css'
import Image from '../assets/DSC_6045.jpg'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const About = () => {
    return (
        <div className="about" id="about">

            <div className="about__content">
                <div className='header-container'>
                    <h1 className="about__content__title">About Me</h1>
                    <img
                        src={Image} alt="profile-photo"
                        className={'profile-photo'}
                    />
                </div>

                <p className="about__content__text">Student graduated from the national school of electronics and telecommunications, specialized in system and Information and Communication Technologies, and currently a master's student in Computer Science and Telecommunications,
                    I look forward to getting involved in the great challenges and progress in this field.
                    I speak French and English fluently. I am enthusiastic about the prospect of working alongside a professional team, where I could use my technical know-how and my human skills
                    optimistic and self-motivated organized and pays close attention to detail. With a strong capacity for interpersonal and analytical thinking, I am always ready to acquire new knowledge, and wish to seize every opportunity to get out of the comfort zone, take up new challenges and live different experiences. I am also proud of my work, and I see it as a representation of myself.</p>

                <a href='#skills'><div className="about__content__btn">
                <p className='skills'>Check out my skills </p> <div className='vert-move'><KeyboardArrowDownIcon/></div>
                </div></a>
            </div>
        </div>
    )
}
export default About;