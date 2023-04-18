import './footer.css';
import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Footer = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <footer className={`footer ${theme === 'day' ? '' : 'footer_theme_dark'}`}>
      <div className='footer__container'>
        <div className='footer__column'>
          <h2 className='footer__title'>Команда разработки</h2>
          <ul className='footer__creators'>
            <li className='footer__creator'>
              <p className='footer__creator-job'>projecrt manager</p>
              <p className='footer__creator-name'>Юлиана Гепалова</p>
              <a href='https://telegram.org/' className='footer__link'>telegram</a>
            </li>
            <li className='footer__creator'>
              <p className='footer__creator-job'>frontend</p>
              <p className='footer__creator-name'>Анна Пантелеева</p>
              <ul className='footer__links'>
                <li><a href='https://telegram.org/' className='footer__link'>telegram</a></li>
                <li><a href='https://github.com/apant94' className='footer__link'>github</a></li>
              </ul>
            </li>
            <li className='footer__creator'>
              <p className='footer__creator-job'>frontend</p>
              <p className='footer__creator-name'>Николай Долгов</p>
              <ul className='footer__links'>
                <li><a href='https://telegram.org/' className='footer__link'>telegram</a></li>
                <li><a href='https://github.com/NikolayDF' className='footer__link'>github</a></li>
              </ul>
            </li>
            <li className='footer__creator'>
              <p className='footer__creator-job'>backend</p>
              <p className='footer__creator-name'>Михаил Мыслицкий</p>
              <ul className='footer__links'>
                <li><a href='https://telegram.org/' className='footer__link'>telegram</a></li>
                <li><a href='https://github.com/mysm' className='footer__link'>github</a></li>
              </ul>
            </li>
            <li className='footer__creator'>
              <p className='footer__creator-job'>UX/UI designer</p>
              <p className='footer__creator-name'>Наталья Ераносян</p>
              <ul className='footer__links'>
                <li><a href='https://telegram.org/' className='footer__link'>telegram</a></li>
                <li><a href='https://www.behance.net/natalya_eranosyan' className='footer__link'>behance</a></li>
              </ul>
            </li>
            <li className='footer__creator'>
              <p className='footer__creator-job'>QA</p>
              <p className='footer__creator-name'>Марина Вовк</p>
              <a href='https://telegram.org/' className='footer__link'>telegram</a>
            </li>
            <li className='footer__creator'>
              <p className='footer__creator-job'>QA</p>
              <p className='footer__creator-name'>Татьяна Захарова</p>
              <a href='https://telegram.org/' className='footer__link'>telegram</a>
            </li>
          </ul>
        </div>
        <div className='footer__column footer__column_small'>
          <h2 className='footer__title'>Клуб Переговоров</h2>
          <nav><a href='https://leaf-canoe-35c.notion.site/Wiki-b8cf3df2087e4ba9922daba055d761ee' className='footer__link'>О клубе</a></nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;