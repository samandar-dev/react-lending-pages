import './desc.css';
import icon1 from '../../../images/desc-icon1.svg';
import icon2 from '../../../images/desc-icon2.svg';
import icon3 from '../../../images/desc-icon3.svg';
import bgImg1 from '../../../images/bg-img1.svg';

function Desc() {
  return (
    <section className='main__desc desc'>
      <div className='container'>
        <div className='desc__inner'>
          <img className='bg_img1' src={bgImg1} />
          <ul className='desc__list'>
            <li className='desc__item'>
              <div className='desc__item_top'>
                <img className='desc__icon' src={icon1} />
                <h4 className='desc__item_title'>Get New Friends</h4>
              </div>
              <p className='desc__text'>You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
            </li>
            <li className='desc__item'>
              <div className='desc__item_top'>
                <img className='desc__icon' src={icon2} />
                <h4 className='desc__item_title'>Expert and Fun Mentor</h4>
              </div>
              <p className='desc__text'>Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.</p>
            </li>
            <li className='desc__item'>
              <div className='desc__item_top'>
                <img className='desc__icon' src={icon3} />
                <h4 className='desc__item_title'>Flexible Access</h4>
              </div>
              <p className='desc__text'>You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Desc;