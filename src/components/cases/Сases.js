import './cases.css';
import iconSearch from '../../images/search.svg';
import iconCloseTag from '../../images/closeTag.svg';
import iconUnwrap from '../../images/unwrap.svg';

const Сases = () => {
  return (
    <div className='cases'>
      <h2 className='cases__title'>База кейсов для переговорных поединков</h2>
      <form className='cases__search-form'>
        <img alt="Поиск" src={iconSearch} className='cases__search-form-icon' />
        <input
          id="search"
          type="text"
          placeholder="Введите ключевые слова для поиска"
          className='cases__search-form-input'/>
      </form>
      <div className='cases__search-tags'>
        <div className='cases__tag'>  {/*отделить компонентом*/}
          <p className='cases__tag-text'>Тег</p>
          <img alt="Убрать"  src={iconCloseTag} className='cases__tag-close' />
        </div>
      <div>
      <div className='cases__main'>
        <div>кнопки переключения</div>
        <div className='case'> {/*отделить компонентом*/}
          <h3 className='case__title'>Титул</h3>
          <p className='case__content'>Какой-то текст</p>
          <div className='case__button'>
            <p className='case__button-text'></p>
            <img alt="Развернуть" src={iconUnwrap} className='case__button-icon' />
          </div>
        </div>
      <div>
    </div>
  )
}

export default Сases;
