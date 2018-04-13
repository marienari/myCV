import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../modulesCSS/styles.js'
import Box from './Box.jsx'

const StyledBox = styled(Box)`
	${styles.contentWidth};
`

const ContentWrapper = ({children, column = true}) => {
	return <StyledBox column={column}>{children}</StyledBox>
}

export default ContentWrapper
