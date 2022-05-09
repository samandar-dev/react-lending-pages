import './webinar.css';
import webImg1 from '../../../images/webinar-img1.png';
import webImg2 from '../../../images/webinar-img2.png';
import webImg3 from '../../../images/webinar-img3.png';
import bgImg2 from '../../../images/bg-img2.svg';


function Webinar() {
  return (
    <section className='main__webinar web'>
      <div className='container'>
        <div className='web__inner'>
          <img className='bg_img2' src={bgImg2} />
          <h2 className='web__title title'>Live Online Webinar</h2>
          <p className='web__tit tit'>You can stream Webinar live on our apps. Stay update on our Webinar, it’s Free!</p>

          <ul className='web__list'>
            <li className='web__item'>
              <img className='web__img' src={webImg1} />
            </li>
            <li className='web__item act-item'>
              <iframe className='web__img' width="620" height="420" src="https://www.youtube.com/embed/IZDV9YHDF58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <img className='web__img' src={webImg2} /> */}
            </li>
            <li className='web__item'>
              <img className='web__img' src={webImg3} />
            </li>
          </ul>
          <div className='web__btn_box'>
            <button className='web__btn'>See more webinar videos <i class='bx bx-right-arrow-alt'></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Webinar;