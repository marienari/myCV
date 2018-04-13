import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styled from 'styled-components'

import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'
import projectsDB from './projectsDB.js'
import ProjectSlider from './ProjectSlider.jsx'

// SectionTitle & Description

const Description = styled(Box)`
	padding: 1rem 0;
	line-height: 1.5;
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
	padding: 0 1rem;
	color: ${colors.c2};
	${styles.boxShadow1};
`

class Project extends Component {
	render() {
		const {selectedProject} = this.props

		return (
			<SectionWrapper>
				<ContentWrapper>
					<SectionTitle>{selectedProject.name}</SectionTitle>
					<Description>{selectedProject.description}</Description>
					<ProjectSlider selectedProject={selectedProject} />
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Project
