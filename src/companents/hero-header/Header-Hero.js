import logo from '../../images/logo.svg';
import book from '../../images/book.svg';
import lamp from '../../images/lamp.svg';
import student from '../../images/student-img.png';
import user from '../../images/user.png';
import './header-hero.css';

function Header__Hero() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__inner'>
            <div className='header__logo'>
              <a className='header__link' href='#'>
                <img className='header__logo_img' src={logo} alt='logo' />
              </a>
            </div>
            <nav className='header__nav nav'>
              <ul className='nav__list'>
                <li className='nav__item'>
                  <a className='nav__link nav__link-act' href='#'>Home</a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#'>Courses</a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#'>Webinar</a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#'>Pricing</a>
                </li>
              </ul>
            </nav>
            <div className='header__btns_box btns'>
              <select className='btns__selec'>
                <option value='Eng'>Eng</option>
                <option value='Rus'>Rus</option>
                <option value='Uzb'>Uzb</option>
              </select>
              <button className='btns__log'>Login</button>
            </div>
          </div>
        </div>
      </header>

      <div className='hero'>
        <div className='container'>
          <div className='hero__inner'>
            <div className='hero__left'>
              <span className='hero__icons lamp'>
                <img className='hero__icon_img' src={lamp} />
              </span>
              <span className='hero__icons book'>
                <img className='hero__icon_img' src={book} />
              </span>

              <img className='hero__student_img' src={student} />

              <div className='hero__users_box'>
                <button className='hero__user'>
                  <img className='hero__user_img' src={user} />
                </button>
                <button className='hero__user userimg'>
                  <img className='hero__user_img' src={user} />
                </button>
                <button className='hero__user userimg'>
                  <img className='hero__user_img' src={user} />
                </button>
                <button className='hero__user userimg'>
                  <img className='hero__user_img' src={user} />
                </button>
                <button className='hero__user user_add'>+</button>
                <p className='hero__users_text'>
                  More than 80k+ <br />
                  Students <span>joined!</span>
                </p>
              </div>
            </div>
            <div className='hero__right'>
              <h2 className='hero__title'>
                Grow Your Skills To Advance Your Career Path.
              </h2>
              <p className='hero__tit'>We have something big for you who want to level up!</p>

              <div className='hero__search_box'>
                <input className='hero__search_inp' name='search' placeholder='What do you want to learn...' />
                <button className='hero__search_btn'>
                  <i class='bx bx-search'></i>
                </button>
              </div>
              <p className='hero__btns_tit'>Suggestions</p>
              <div className='hero__btns_box'>
                <button className='hero__btn'>UI UX Design</button>
                <button className='hero__btn'>CSS Fundamental</button>
                <button className='hero__btn'>3D Design Illustration</button>
                <button className='hero__btn'>Website Development</button>
                <button className='hero__btn'>Logo Design</button>
                <button className='hero__btn'>Icon Design</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header__Hero