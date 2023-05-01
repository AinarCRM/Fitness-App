import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
       Here we provide you with information about our trajectory in the world of sports.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Story</h1>
            <p>
              We start with the concept of a gym as a facility designed for sports or physical exercises that help you develop, strengthen and give flexibility to the body. Movements can be done with or without equipment.
              The definition of a gym derives from the Greek word gymnos, meaning nudity. Gymnasium means a place to go naked and was used in ancient Greece to refer to the space where sports, arts and sciences were taught. Beyond referring to something explicit with physical nudity, the name referred to a temple where people uncovered their soul, in order to grow spiritually.
              Many of these centers had libraries and were usually surrounded by large gardens, where disciples listened to the talks of their philosopher teachers.
            </p>
          </div>
        </div>
      </section>


      <section className="about__Vision">
        <div className="container about__Vision-container">         
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              To be a leading gym, providing quality and well-being to our members, generating human and professional value for our company, our employees, and our community.
              To be the best sports option in Santo Domingo city, for excellence in services and modern equipment, enhancing customer service processes and personalized attention.
              To offer a pleasant, accessible, practical, and stimulating environment in which every member can express their physical, mental, and spiritual competence.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Contribute to the integral development of clients through the design and implementation of a set of services that strengthen physical and mental health.
              Assist our partners in creating and maintaining excellent physical condition through nutrition and training programs.
              Instill in children, youth, and adults the value of health and exercise.              
            </p>
            <p>
              Improve the quality of life of communities through the philosophy of exercise, nutrition programs, and products.
              Proactively participate in the well-being of individuals in their social and work environment.
              Provide a unique service and facilitate the tools for success.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

