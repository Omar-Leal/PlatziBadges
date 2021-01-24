import React from 'react';

import './styles/PageError.css';

function PageError (props) {

  return <di className="PageError">{props.error.message}</di>;
}

export default PageError;