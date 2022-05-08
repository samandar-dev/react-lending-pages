import './pricing.css';
import priIcon1 from '../../../images/pric-icon1.svg';
import priIcon2 from '../../../images/pric-icon2.svg';
import priIcon3 from '../../../images/pric-icon3.svg';
import priItemImg from '../../../images/pric-img.svg';

function Pricing() {
  return (
    <section className='main__pricing pri' >
      <div className='container'>
        <div className='pri__inner'>
          <h3 className='pri__title title'>Course Pricing</h3>
          <p className='pri__tit tit'>Choose pricing that suits to your need.</p>
          <ul className='pri__list'>
            <li className='pri__item pitem'>
              <div className='pitem__top_box'>
                <img className='pitem__img' src={priIcon1} />
                <div className='pitem__price'>
                  <p className='pitem__tit'>Free</p>
                  <div className='pitem__mony'>
                    <span className='pitem__d'>$</span>
                    <p className='pitem__num'>0</p>
                    <span className='pitem__month'>/ month</span>
                  </div>
                </div>
              </div>
              <ul className='pitem_list pitlis'>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Free e-book for every class</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Materials update every day</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Free download material videos</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Unlock 5 material videos</p>
                </li>
              </ul>
              <button className='pitem__btn'>Your Current Package</button>
            </li>
            <li className='pri__item pitem'>
              <div className='pitem__top_box'>
                <img className='pitem__img' src={priIcon2} />
                <div className='pitem__price'>
                  <p className='pitem__tit'>Express</p>
                  <div className='pitem__mony'>
                    <span className='pitem__d'>$</span>
                    <p className='pitem__num'>75</p>
                    <span className='pitem__month'>/ month</span>
                  </div>
                </div>
              </div>
              <ul className='pitem_list pitlis'>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Free e-book for every class</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Materials update every day</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Free download material videos</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Unlock 5 material videos</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Unlock 15 material videos</p>
                </li>
              </ul>
              <button className='pitem__btn'>Buy Express</button>
            </li>
            <li className='pri__item pitem'>
              <img className='pri__item_img' src={priItemImg} />
              <div className='pitem__top_box'>
                <img className='pitem__img' src={priIcon3} />
                <div className='pitem__price'>
                  <p className='pitem__tit'>Premium</p>
                  <div className='pitem__mony'>
                    <span className='pitem__d'>$</span>
                    <p className='pitem__num'>115</p>
                    <span className='pitem__month'>/ month</span>
                  </div>
                </div>
              </div>
              <ul className='pitem_list pitlis'>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Free e-book for every class</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Materials update every day</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Free download material videos</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Unlock 5 material videos</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Meeting 3 times a week</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Unlock up to 30 material videos</p>
                </li>
                <li className='pitlis__item'>
                  <p className='pitlis__text'>Unlimited saved class</p>
                </li>
              </ul>
              <button className='pitem__btn'>Buy Premium</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pricing;