import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'

// Copyright

const Copyright = styled(Box)`
	padding: 1rem;
`

// IconsLinks

const IconLink = styled(Box)`
	margin: 0 0.5rem;
	width: 2.5rem;
	height: 2.5rem;
	font-size: 1.2rem;
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

// ContactPanel

const ContactLink = styled(Box).attrs({left: true})`
	padding: 0.2rem 1rem;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
`

const ContactPanel = styled(Box)``

// Wrappers

const SkewedBorderUp = styled(Box)`
	${styles.skewedBorderUp};
`

const SkewedBorderDown = styled(Box)`
	${styles.skewedBorderDown};
`

const SectionWrapper = styled(Box)`
	position: relative;
	padding: 1rem 0 2rem;
	background-color: ${colors.c3};
	color: ${colors.c1};

	${styles.skewedBorderUpFooter};
`

class Header extends Component {
	render() {
		return (
			<SectionWrapper id="contact">
				<ContentWrapper column={false}>
					<ContactPanel column>
						<ContactLink>Kontakt:</ContactLink>
						<ContactLink>
							<a href="tel:+48880212784" rel="nofollow" target="_blank">
								48 880 212 784
							</a>
						</ContactLink>
						<ContactLink>
							<a
								href="mailto: mgaudasinska@gmail.com"
								rel="nofollow"
								target="_blank"
							>
								mgaudasinska@gmail.com
							</a>
						</ContactLink>
					</ContactPanel>
					<IconsLinks>
						<IconLink email>
							<a
								rel="nofollow"
								target="_blank"
								href="mailto: mgaudasinska@gmail.com"
							/>
						</IconLink>
						<IconLink linkedin>
							<a rel="nofollow" target="_blank" href="" />
						</IconLink>
						<IconLink>
							<a
								rel="nofollow"
								target="_blank"
								href="dist/docs/Hanna_Gaudasińska-Zapaśnik_CV.pdf"
							>
								CV
							</a>
						</IconLink>
					</IconsLinks>
					<Copyright>
						<a
							href="mailto: HGZwebdesign@gmail.com"
							rel="nofollow"
							target="_blank"
						>
							HGZwebdesign &copy; 2018
						</a>
					</Copyright>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Header
