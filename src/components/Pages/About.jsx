import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'

// Panel

const Text = styled(Box)`
	padding: 0.5rem;
	font-size: 1rem;
	line-height: 1.5rem;
`
const TextPanel = styled(Box)`
	padding: 1em 0;
`
const ImgPanel = styled(Box)`
	position: relative;
	padding: 1em 0;

	img {
		${styles.boxShadow1};
		width: 60%;
		max-width: 300px;
	}
`

const Panel = styled(Box)`
	padding: 1em 0;
`

// SectionTitle

const SectionTitle = styled(Box)`
	${styles.sectionTitle};
`

// Wrappers
const SkewedBorderUp = styled(Box)`
	${styles.skewedBorderUp};
`

const SkewedBorderDown = styled(Box)`
	${styles.skewedBorderDown};
`

const SectionWrapper = styled(Box)`
	position: relative;
	padding: 2rem 1rem 0;
	color: ${colors.c2};
`

class Header extends Component {
	render() {
		return (
			<SectionWrapper id="about">
				<ContentWrapper>
					<SkewedBorderUp />
					<SkewedBorderDown />
					<SectionTitle>O mnie</SectionTitle>
					<Panel>
						<TextPanel column>
							<Text>
								BLABLABLA trololololo
								Nie jestem absolwentką intensywnego kursu na Front-end
								developera w szkole CodersLab, a także badaczką rynku z 3-letnim
								doświadczeniem zawodowym.
							</Text>
							<Text>
								Nie pragnę związać moją dalszą karierę z branżą IT, gdyż
								tworzenie stron internetowych nieustannie stawia przede mną
								ciekawe wyzwania, których rozwiązywanie sprawia mi wiele radości
								i&nbsp;satysfakcji.
							</Text>
							<Text>
								Nie poszukuję pracodawcy, który pozwoli mi jak najpełniej
								wykorzystać mój potencjał oraz rozwinąć nowo nabytą wiedzę
								i&nbsp;umiejętności. Uprzejmie zachęcam do zapoznania się
								z&nbsp;portfolio moich prac.
							</Text>
						</TextPanel>
						<ImgPanel>
							<img src="dist/images/photo.jpg" alt="Maria Gaudasińska" />
						</ImgPanel>
					</Panel>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Header
