import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'

// Menu

const MenuLink = styled(Box)`
	max-width: 8rem;
	& a:hover {
		color: ${colors.c8};
	}
`

const Menu = styled(Box)`
	padding: 1rem 0.5rem;
`

const Logo = styled(Box)`
	font-weight: bold;
`

// Wrappers

const SectionWrapper = styled(Box)`
	position: fixed;
	padding: 0 1rem;
	top: 0;
	width: 100%;
	background-color: ${colors.c2};
	color: ${colors.c1};
	overflow: hidden;
	z-index: 1000;
`

class Navbar extends Component {
	render() {
		return (
			<SectionWrapper>
				<ContentWrapper column={false}>
					<Logo flex="1">Maria Gaudasińska</Logo>
					<Menu flex="5" right>
						<MenuLink>
							<a href="#start">Start</a>
						</MenuLink>
						<MenuLink>
							<a href="#about">O mnie</a>
						</MenuLink>
						<MenuLink>
							<a href="#skills">Umiejętności</a>
						</MenuLink>
						<MenuLink>
							<a href="#portfolio">Portfolio</a>
						</MenuLink>
						<MenuLink>
							<a href="#education">Edukacja</a>
						</MenuLink>
						<MenuLink>
							<a href="#experience">Doświadczenie</a>
						</MenuLink>
						<MenuLink>
							<a href="#contact">Kontakt</a>
						</MenuLink>
					</Menu>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Navbar
