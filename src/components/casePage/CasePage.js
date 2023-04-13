import { Link, useNavigate } from 'react-router-dom';
import './casePage.css';

const CasePage = () => {
  const navigate = useNavigate();

  return(
    <section className='casepage'>
      <nav className='casepage__crumbs'>
        <ul>
          <li className='casepage__crumb'><Link to='/cases'>База кейсов</Link></li>
          <li className='casepage__crumb'>Активный начальник</li>
        </ul>
      </nav>
    </section>
  )
}

export default CasePage;