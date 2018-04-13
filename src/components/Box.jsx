import styled from 'styled-components'

const START = 'flex-start'
const END = 'flex-end'
const MID = 'center'
const topBot = p => (p.top ? START : p.bottom ? END : MID)
const leftRight = p => (p.left ? START : p.right ? END : MID)

const Box = styled.div`
	${p => ({
		position: p.relative ? 'relative' : p.absolute ? 'absolute' : false,

		display: p.inline ? 'inline-flex' : 'flex',

		// Size
		margin: p.margin,
		padding: p.padding,
		width: p.width || p.size || (!(p.fitChildren || p.inline) && `100%`),
		height: p.height || p.size,
		minWidth: p.minWidth,
		maxWidth: p.maxWidth,
		minHeight: p.minHeight,
		maxHeight: p.maxHeight,

		// Children layout
		flexWrap: p.wrap && 'wrap',
		flexDirection: p.column && 'column',
		justifyContent: p.spaceBetween
			? 'space-between'
			: p.spaceAround ? 'space-around' : p.column ? topBot(p) : leftRight(p),
		alignItems: p.stretch ? 'stretch' : p.column ? leftRight(p) : topBot(p),
		flex: p.flex,
	})};
`
export default Box
