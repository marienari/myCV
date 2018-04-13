import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'
import Project from './Project.jsx'
import projectsDB from './projectsDB.js'

// Panel

const Link = styled.a`
	cursor: pointer;
`

const ProjectBox = styled(Box)`
	margin: 1rem;
	padding: 1rem;
	width: 10rem;
	height: 10rem;

	background-color: ${colors.c5};
	color: ${colors.c1};
	${styles.boxShadow2};

	font-size: 1rem;
	text-align: center;
	line-height: 1.5rem;

	&:hover,
	&:focus {
		background-color: ${colors.c6};
	}
`

const Panel = styled(Box)`
	padding: 1rem 0;
`

// SectionTitle & SectionSubtitle

const SectionSubtitle = styled(Box)`
	${styles.sectionSubtitle};
`

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
	padding: 2rem 1rem;
	color: ${colors.c2};
`

class Portfolio extends Component {
	state = {id: -1}

	handleClick(idx) {
		this.setState({id: idx})
	}
	render() {
		const {id} = this.state
		const {onClick} = this.props
		return (
			<SectionWrapper id="portfolio">
				<ContentWrapper>
					<SkewedBorderUp />

					<SectionTitle>Portfolio</SectionTitle>
					<SectionSubtitle>Prezentacja moich prac</SectionSubtitle>
					<Panel>
						{projectsDB.map((item, idx) => {
							return (
								<ProjectBox key={idx}>
									<Link onClick={() => this.handleClick(idx)}>{item.name}</Link>
								</ProjectBox>
							)
						})}
					</Panel>
					{id != null &&
						projectsDB[id] && <Project selectedProject={projectsDB[id]} />}
					<SkewedBorderDown />
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Portfolio
