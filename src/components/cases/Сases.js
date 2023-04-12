import './cases.css';
import CasesList from '../casesList/CasesList';
import iconSearch from '../../images/search.svg';
import iconCloseTag from '../../images/closeTag.svg';

const Cases = () => {
  return (
    <div className='cases'>
      <h2 className='cases__title'>База кейсов для переговорных поединков</h2>
      <form className='cases__search-form'>
        <input
          id="search"
          type="text"
          placeholder="Введите ключевые слова для поиска"
          className='cases__search-form-input'
        />
        <img alt="Поиск" src={iconSearch} className='cases__search-form-icon' />
      </form>
      <div className='cases__search-tags'>
        <div className='cases__tag'>  {/*отделить компонентом*/}
          <p className='cases__tag-text'>Теги</p>
          <img alt="Убрать"  src={iconCloseTag} className='cases__tag-close' />
        </div>
      </div>
      <CasesList />
    </div>
  )
}

export default Cases;
