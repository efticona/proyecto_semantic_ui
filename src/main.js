import React from 'react'
//import {Header} from 'semantic-ui-react'
import {render} from 'react-dom'

import Root from './components/Root'
import 'semantic-ui-css/semantic.min.css'
render(
	<Root />,
	document.getElementById('app')
)