import './cases.css';
import CasesList from '../casesList/CasesList';
import iconSearch from '../../images/search.svg';
import CasesTagsList from '../casesTagsList/CasesTagsList';

const Cases = () => {
  return (
    <section className='cases'>
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
      <CasesTagsList />
      <CasesList />
    </section>
  )
}

export default Cases;
