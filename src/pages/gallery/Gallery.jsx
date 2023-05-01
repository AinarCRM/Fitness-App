import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'




const Gallery = () => {
  const galleryLength = 15; 
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        In this section, we provide high-quality images of the martial arts class facilities thanks to our photographer.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <ariticle key={index}>
                <img src={image} alt={`Gallery Image ${index +1}`} />
              </ariticle>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery

