import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	browserHistory,
	Route,
	Link,
} from 'react-router-dom'
import scrollToElement from 'scroll-to-element'
import styled from 'styled-components'
import {styles, colors} from './modulesCSS/styles.js'
import Box from './components/Box.jsx'
import ContentWrapper from './components/ContentWrapper.jsx'

import BlankPage from './components/Pages/BlankPage.jsx'
import Navbar from './components/Pages/Navbar.jsx'
import Header from './components/Pages/Header.jsx'
import About from './components/Pages/About.jsx'
import Skills from './components/Pages/Skills.jsx'
import Portfolio from './components/Pages/Portfolio.jsx'
import Education from './components/Pages/Education.jsx'
import Experience from './components/Pages/Experience.jsx'
import Footer from './components/Pages/Footer.jsx'

const Wrapper = styled(Box)`
	${styles.page};
`

const PageWrapper = ({children}) => {
	return (
		<Wrapper column top>
			{children}
		</Wrapper>
	)
}

class Root extends Component {
	render() {
		return (
			<PageWrapper>
				<Navbar />
				<Header />
				<About />
				<Skills />
				<Portfolio />
				<Education />
				<Experience />
				<Footer />
			</PageWrapper>
		)
	}
}

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Root />, document.getElementById('root'))
})
