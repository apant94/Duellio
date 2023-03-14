import React from 'react';
import { Link } from 'react-router-dom';

import './pageNotFound.css';

function PageNotFound () {
  return (
    <div className="not-found">
      <Link className="button button_type_to-main" to="/">Перейти на главную</Link>
    </div>
  )
}

export default PageNotFound; 