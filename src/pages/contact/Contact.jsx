import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'



const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        In these sections, you can contact us, with a 24-hour availability.
      </Header>
      <section className="contact">
        <div className="comtainer contact__container">
          <div className="contact__wrapper">
            <a href="mailto:ainar414244@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
            <a href="https://www.facebook.com/ainar.cristobalruizdemartin" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
            <a href="https://wa.me/+34675471499" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

