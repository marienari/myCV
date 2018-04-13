import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled, {css} from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'

// Panel

const ImageBox = styled(Box)`
	margin: 1rem;
	width: 10rem;
	height: 10rem;
	background-color: ${colors.c1};
	${p =>
		p.pw
			? css`
					background-image: url('dist/icons/PW2.png');
					background-size: 40%;
					background-repeat: no-repeat;
					background-position: center;
					transform: rotate(90deg);
				`
			: p.ul &&
				css`
					background-image: url('dist/icons/UL1.jpg');
					background-size: 90%;
					background-repeat: no-repeat;
					background-position: center;
				`};
	${styles.boxShadow3};
`
const Text = styled(Box)`
	line-height: 1.5;

	&:nth-child(2) {
		font-size: 1.3rem;
		font-weight: bold;
	}
	&:nth-child(3) {
		font-size: 1rem;
		font-weight: bold;
	}
	&:nth-child(4) {
		font-size: 1rem;
		font-weight: bold;
	}
`

const Panel = styled(Box)`
	padding: 2rem 2rem;
`
// SectionTitle & SectionSubtitle

const SectionSubtitle = styled(Box)`
	${styles.sectionSubtitle};
`

const SectionTitle = styled(Box)`
	${styles.sectionTitle};
`

// Wrappers

const SectionWrapper = styled(Box)`
	padding: 2rem 1rem;
	background-color: ${colors.c5};
	color: ${colors.c1};
`

class Education extends Component {
	render() {
		return (
			<SectionWrapper id="education">
				<ContentWrapper>
					<SectionTitle>Wykształcenie</SectionTitle>
					<Panel top>
						<Box column>
							<ImageBox pw />
							<Text>Geodezja i Kartografia</Text>
							<Text>Wydział Geodezji i Kartografii</Text>
							<Text>Politechnika Warszawska</Text>
							<Box>&middot; &middot; &middot;</Box>
							<Text>Dyplom inżyniera</Text>
							<Text>2012-2017</Text>
						</Box>
						<Box column>
							<ImageBox pw />
							<Text>Gospodarka Przestrzenna</Text>
							<Text>Specjalność: Urbanistyka w planowaniu przestrzennym</Text>
							<Text>Wydział Geodezji i Kartografii</Text>
							<Text>Politechnika Warszawska</Text>
							<Box>&middot; &middot; &middot;</Box>
							<Text>Dyplom magistra inżyniera</Text>
							<Text>2010-2017</Text>
						</Box>
						<Box column>
							<ImageBox ul />
							<Text>Urban Planning</Text>
							<Text>Department of Civil and Geodetic Engineering</Text>
							<Text>University of Ljubljana, Słowenia</Text>
							<Box>&middot; &middot; &middot;</Box>
							<Text>Erasmus+</Text>
							<Text>2016</Text>
						</Box>
					</Panel>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Education
