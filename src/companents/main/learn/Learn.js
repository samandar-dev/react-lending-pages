import './learn.css';
import learnImg1 from '../../../images/learn-img1.png';
import learnImg2 from '../../../images/learn-img2.png';
import learnImg3 from '../../../images/learn-img3.png';
import learnImg4 from '../../../images/learn-img4.png';
import learnUser from '../../../images/user.png';

function Leaen() {
  return (
    <section className='main__learn learn'>
      <div className='container'>
        <div className='learn__inner'>
          <h3 className='learn__title title'>What Do You Want to Learn?</h3>
          <p className='learn__tit tit'>Choose the right class as you need. Then enjoy studying.</p>

          <ul className='learn__list'>
            <li className='learn__itme leitem'>
              <a className='learn__link' href='#'>
                <img className='leitem__img' src={learnImg1} />
              </a>
              <span className='leitem__tit'>Technology</span>
              <h4 className='leitem__title'>Digital Marketing Strategy</h4>
              <p className='leitem__text'>This course aims to give you deeper understanding of core processes ...</p>
              <div className='leitem__user_box'>
                <img className='leitem__user_img' src={learnUser} />
                <div className='leitem__user_name'>
                  <p className='leitem__name'>Joey Piere</p>
                  <span className='leitem__name_tit'>Mentor</span>
                </div>
              </div>
              <div className='leitem__btn-box'>
                <button className='leitem__item_btn'>Access Class</button>
              </div>
            </li>
            <li className='learn__itme leitem'>
              <a className='learn__link' href='#'>
                <img className='leitem__img' src={learnImg2} />
              </a>
              <span className='leitem__tit'>Technology</span>
              <h4 className='leitem__title'>Digital Marketing Strategy</h4>
              <p className='leitem__text'>This course aims to give you deeper understanding of core processes ...</p>
              <div className='leitem__user_box'>
                <img className='leitem__user_img' src={learnUser} />
                <div className='leitem__user_name'>
                  <p className='leitem__name'>Joey Piere</p>
                  <span className='leitem__name_tit'>Mentor</span>
                </div>
              </div>
              <div className='leitem__btn-box'>
                <button className='leitem__item_btn'>Access Class</button>
              </div>
            </li>
            <li className='learn__itme leitem'>
              <a className='learn__link' href='#'>
                <img className='leitem__img' src={learnImg3} />
              </a>
              <span className='leitem__tit'>Technology</span>
              <h4 className='leitem__title'>Digital Marketing Strategy</h4>
              <p className='leitem__text'>This course aims to give you deeper understanding of core processes ...</p>
              <div className='leitem__user_box'>
                <img className='leitem__user_img' src={learnUser} />
                <div className='leitem__user_name'>
                  <p className='leitem__name'>Joey Piere</p>
                  <span className='leitem__name_tit'>Mentor</span>
                </div>
              </div>
              <div className='leitem__btn-box'>
                <button className='leitem__item_btn'>Access Class</button>
              </div>
            </li>
            <li className='learn__itme leitem'>
              <a className='learn__link' href='#'>
                <img className='leitem__img' src={learnImg4} />
              </a>
              <span className='leitem__tit'>Technology</span>
              <h4 className='leitem__title'>Digital Marketing Strategy</h4>
              <p className='leitem__text'>This course aims to give you deeper understanding of core processes ...</p>
              <div className='leitem__user_box'>
                <img className='leitem__user_img' src={learnUser} />
                <div className='leitem__user_name'>
                  <p className='leitem__name'>Joey Piere</p>
                  <span className='leitem__name_tit'>Mentor</span>
                </div>
              </div>
              <div className='leitem__btn-box'>
                <button className='leitem__item_btn'>Access Class</button>
              </div>
            </li>
          </ul>
          <div className='learn__btn_box'>
            <button className='learn__btn'>Show All Classes</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leaen;