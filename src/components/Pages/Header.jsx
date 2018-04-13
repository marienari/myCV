import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'

// IconsLinks

const Link = styled(Box)`
	margin: 0 0.5rem;
	width: 3rem;
	height: 3rem;
	font-size: 1.6rem;
	font-weight: bold;
	border-radius: 50%;

	background-color: ${colors.c1};
	color: ${colors.c2};
	cursor: pointer;

	${p => p.linkedin && styles.linkedinIcon};
	${p => p.email && styles.emailIcon};
`

const IconsLinks = styled(Box)`
	padding: 1rem;
`

// Panel

const Title = styled(Box)`
	padding: 1rem 0.5rem;
	font-size: 4rem;
	font-weight: bold;
`
const Subtitle = styled(Box)`
	padding: 0 0.5rem 1rem;
	font-size: 1.5rem;
`

const Panel = styled(Box)`
	max-width: 50rem;
	text-align: center;
	border-radius: 10px;
	background-color: ${colors.shadow1};
`

// Wrappers

const SectionWrapper = styled(Box)`
	padding: 16em 1rem 12rem;

	background-color: ${colors.c3};
	${styles.backgroundImg};
	color: ${colors.c1};
`

class Header extends Component {
	render() {
		return (
			<SectionWrapper id="start">
				<ContentWrapper>
					<Panel column>
						<Title>Maria Gaudasińska</Title>
						<Subtitle>
							Urbanistyka &middot; Projektowanie 3D &middot; Coś jeszcze
						</Subtitle>
					</Panel>
					<IconsLinks>
						<Link email>
							<a
								rel="nofollow"
								target="_blank"
								href="mailto: mgaudasinska@gmail.com"
							/>
						</Link>
						<Link linkedin>
							<a rel="nofollow" target="_blank" href="" />
						</Link>
						<Link>
							<a
								rel="nofollow"
								target="_blank"
								href="dist/docs/Hanna_Gaudasińska-Zapaśnik_CV.pdf"
							>
								CV
							</a>
						</Link>
					</IconsLinks>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Header
