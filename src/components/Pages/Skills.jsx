import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'

const skillsSet1 = [
	{
		name: 'Autodesk AutoCAD',
		rate: 4,
		size: '90%',
		position: '50% 30%',
		url: 'dist/icons/autodesk-autocad-logo-1024x334.png',
	},
	{
		name: 'Autodesk Revit',
		rate: 2,
		size: '80%',
		position: '50% 30%',
		url: 'dist/icons/autodesk-revit-logo-F48FE8A734-seeklogo.com.png',
	},
	{
		name: 'Geomagic',
		rate: 4,
		size: '80%',
		position: '50% 30%',
		url: 'dist/icons/3DS_Geomagic_Logo-2015.png',
	},
	{
		name: 'Z+F Laser Control',
		rate: 4,
		size: '75%',
		position: '50% 30%',
		url: 'dist/icons/zf_logo.png',
	},
	{
		name: 'Cloud Compare',
		rate: 3,
		size: '90%',
		position: '50% 30%',
		url: 'dist/icons/cloudcompare-01_orig.png',
	},
	{
		name: 'Didactic',
		rate: 3,
		size: '80%',
		position: '50% 30%',
		url: 'dist/icons/.png',
	},
	{
		name: 'ArcGIS',
		rate: 4,
		size: '100%',
		position: '50% 30%',
		url: 'dist/icons/arcgis-logo.png',
	},
	{
		name: 'Sketch Up',
		rate: 3,
		size: '80%',
		position: '50% 40%',
		url: 'dist/icons/SU_Logo_Color.png',
	},
]
const skillsSet2 = [
	{
		name: 'MS Excel',
		rate: 4,
		size: '40%',
		position: '50% 30%',
		url: 'dist/icons/2000px-Microsoft_Excel_2013_logo.svg.png',
	},
	{
		name: 'MS Word',
		rate: 5,
		size: '40%',
		position: '50% 30%',
		url: 'dist/icons/Microsoft_Word_logo.png',
	},
	{
		name: 'MS Power-Point',
		rate: 5,
		size: '40%',
		position: '50% 30%',
		url: 'dist/icons/2000px-Microsoft_PowerPoint_2013_logo.svg.png',
	},
	{
		name: 'MS Access',
		rate: 3,
		size: '40%',
		position: '50% 30%',
		url: 'dist/icons/Microsoft_Access_2013_logo.svg.png',
	},
]
const skillsSet3 = [
	{
		name: 'Angielski',
		rate: 5,
		size: '55%',
		position: '50% 0%',
		url: 'dist/icons/uk.png',
	},
	{
		name: 'Niemiecki',
		rate: 2,
		size: '55%',
		position: '50% 0%',
		url: 'dist/icons/ger.png',
	},
	{
		name: 'Szwedzki',
		rate: 1,
		size: '55%',
		position: '50% 0%',
		url: 'dist/icons/swe.png',
	},
]

// Panel

const Cube = styled(Box)`
	margin: 0.2rem;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 10px;
	background-color: ${p =>
		!p.isRated
			? colors.c0
			: p.rate === 1
				? colors.c7
				: p.rate === 2 ? colors.c6 : p.rate === 3 ? colors.c5 : colors.c4};
	${styles.boxShadow4};
`

const Rate = styled(Box).attrs({flex: '4'})`
	position: absolute;
	bottom: 0.5rem;
	padding: 0;
	heigth: 20%;
`

const Name = styled(Box).attrs({flex: '6'})`
	padding: 0.5rem 0;
`

const Item = styled(Box).attrs({column: true})`
	position: relative;
	margin: 0.8rem;
	padding: 0.5rem;
	width: 8rem;
	height: 6rem;
	// border-radius: 5px;
	background-color: ${colors.c1};

	background-image: url('${p => p.item.url}');
	background-size: ${p => p.item.size};
	background-repeat: no-repeat;
	background-position: ${p => p.item.position};

	color: ${colors.c2};

	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;

		${styles.boxShadow3}

	&:hover {
		animation: shake 0.3s 0s 1 linear;
	}

	@keyframes shake {
		0%,
		50%,
		100% {
			transform: translate(0, 0);
		}

		25%,
		75% {
			transform: translate(1%, 2%);
			background-color: #ffffff;
		}
	}
`

const Category = styled(Box)`
	padding: 2rem 0 1rem;
	font-size: 1.2rem;
`

const Panel = styled(Box).attrs({wrap: true})`
	padding: 0.5rem 2rem;
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
	padding: 2rem 1rem 4rem;
	background-color: ${colors.c5};
	color: ${colors.c1};
`

class Skills extends Component {
	render() {
		const RateScale = item => (
			<Rate>
				<Cube rate={1} isRated={item.rate >= 1} />
				<Cube rate={2} isRated={item.rate >= 2} />
				<Cube rate={3} isRated={item.rate >= 3} />
				<Cube rate={4} isRated={item.rate >= 4} />
				<Cube rate={5} isRated={item.rate >= 5} />
			</Rate>
		)

		return (
			<SectionWrapper id="skills">
				<ContentWrapper>
					<SectionTitle>Umiejętności</SectionTitle>
					<SectionSubtitle>Nieustannie poszerzam swoją wiedzę</SectionSubtitle>
					<Panel>
						<Category>Oprogramowanie projektowe:</Category>
						{skillsSet1.map((item, idx) => {
							return (
								<Item key={idx} item={item}>
									{/* <Name>{item.name}</Name> */}
									{RateScale(item)}
								</Item>
							)
						})}
					</Panel>
					<Panel>
						<Category>Microsoft Office:</Category>
						{skillsSet2.map((item, idx) => {
							return (
								<Item key={idx} item={item}>
									{/* <Name>{item.name}</Name> */}
									{RateScale(item)}
								</Item>
							)
						})}
					</Panel>
					<Panel>
						<Category>Języki obce:</Category>
						{skillsSet3.map((item, idx) => {
							return (
								<Item key={idx} item={item}>
									{/* <Name>{item.name}</Name> */}
									{RateScale(item)}
								</Item>
							)
						})}
					</Panel>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Skills
