import './apps.css';
import googlePlay from '../../../images/googlePlay.svg';
import appStore from '../../../images/appStore.svg';
import appsImg from '../../../images/apps-img.svg';

function Apps() {
  return (
    <section className='main__apps apps' >
      <div className='container'>
        <div className='apps__inner'>
          <div className='apps__desc'>
            <h3 className='apps__desc_title'>Get Our Apps, Now!</h3>
            <p className='apps__desc__text'>Reach out our apps everywhere and everytime <br /> with Sinauw Mobile Application.</p>
            <div className='apps__desc_imgs'>
              <img className='apps__img' src={googlePlay} />
              <img className='apps__img' src={appStore} />
            </div>
          </div>
          <div className='apps__right'>
            <img className='apps__right_img' src={appsImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apps;