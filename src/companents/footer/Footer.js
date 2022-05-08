import './footer.css';
import footLogo from '../../images/footer-logo.svg';

function Footer() {
  return (
    <div className='container'>
      <div className='footer__inner'>
        <div className='footer__logos'>
          <a className='footer__link' href='#'>
            <img className='footer__logo' src={footLogo} />
          </a>
          <p className='footer__text'>
            Any feedback or questions?Contact us on our social media
          </p>
          <div className='footer__btns'>
            <ul className='footer__btns_list'>
              <li className='footer__btns_item'>
                <a className='footer__btns_link' href='#'>
                  <i class='bx bxl-facebook'></i>
                </a>
              </li>
              <li className='footer__btns_item'>
                <a className='footer__btns_link' href='#'>
                  <i class='bx bxl-twitter'></i>
                </a>
              </li>
              <li className='footer__btns_item'>
                <a className='footer__btns_link' href='#'>
                  <i class='bx bxl-instagram' ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__menus'>
          <div className='footer__menu'>
            <h4 className='footer__menu_tit'>Menu</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Home</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Courses</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Webinar</a>
              </li>
            </ul>
          </div>
          <div className='footer__menu'>
            <h4 className='footer__menu_tit'>Services</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Materials Update</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Trusted Mentor</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Free E-book</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Meeting</a>
              </li>
            </ul>
          </div>
          <div className='footer__menu'>
            <h4 className='footer__menu_tit'>Further Information</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Terms & Conditions</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className='footer__menu'>
            <h4 className='footer__menu_tit'>Apps Download</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href='#'>Google Play Store</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href='#'>App Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='footer__desc'>Copyright ☻
        2021 Sinauw. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;