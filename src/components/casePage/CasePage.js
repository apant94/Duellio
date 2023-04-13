import { Link, useNavigate } from 'react-router-dom';
import './casePage.css';

const CasePage = ({title}) => {
  const navigate = useNavigate();

  return(
    <section className='casepage'>
      <nav className='casepage__crumbs'>
        <ul>
          <li className='casepage__crumb'><Link to='/cases'>База кейсов</Link></li>
          <li className='casepage__crumb'>Активный начальник</li>
        </ul>
      </nav>
      <h2 className='casepage__title'>Активный начальник</h2>
      <div className='casepage__container'>
        <div className='casepage__filters'>
          
        </div>
        <div className='casepage__articles'>

        </div>
      </div>
    </section>
  )
}

export default CasePage;