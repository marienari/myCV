import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled, {css} from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'
import Slider from 'react-slick'
import Project from './Project.jsx'
import projectsDB from './projectsDB.js'

// Arrows

const ArrowBox = styled(Box)`
	position: absolute;
	top: 40%;
	transform: translate(0, -50%);
	${p =>
		p.direction === 'left'
			? css`
					left: 5%;
				`
			: css`
					right: 5%;
				`};

	width: 30%;
	height: 100%;
	text-align: center;
	font-size: 3rem;
	color: transparent;

	&:hover {
		color: ${colors.c4};
	}

	cursor: pointer;

	// above slider
	z-index: 1000;
`

const Arrow = ({direction, onClick}) => (
	<ArrowBox
		left={direction === 'left'}
		right={direction === 'right'}
		onClick={onClick}
		direction={direction}
	>
		{direction === 'left' ? '<' : '>'}
	</ArrowBox>
)

// Slide content

const SlideImg = styled.img`
	margin: 2rem 0.5rem 0.5rem;
	// width: 80%; // WAŻNE: opcja: 1: rozciągnąć img na cały slajd (100%) i pozwolić na dowolną wysokość (nie okreslać height)
	height: 30rem; // WAŻNE opcja 2: ustawić na sztywno wysokość slajdu (px, rem) i pozwolić na dowolną szerokość (nie okreslać)
	${styles.boxShadow1};
`

const SlideDescription = styled(Box)`
	padding: 2rem 1rem;
`

// Slide

const Slide = ({images}) => (
	<Box column top>
		<SlideImg src={images.url} />

		<SlideDescription images={images}>{images.description}</SlideDescription>
	</Box>
)

// SliderPanel

const SlideWrapper = styled(Box)`
	// .slick-slide => tam wygodniej zapisać cechy tego komponentu
	// BARDZO WAŻNE: każdy pojetynczy slajd musi mieć TEN dodatkowy wrap, aby slider zadziałał
	// Nie jest ważny jego typ - może być Flexbox
`

const SliderWrapper = styled(Box)`
	width: 100%; // BARDZO WAŻNE - określenie szerokości okna z WIDOCZNYMI aktualnie slajdami
	// max-width: 500px; // Można okreslić również konkretną wartość. Ważne aby COKOLWIEK było określone na tym poziomie
	// Nie jest ważny jego typ - może być Flexbox
`

const StyledSlider = styled(Slider)`
	position: relative; // potrzebne do ustawiania kropek i strzałek
	overflow: hidden; // BARDZO WAŻNE do odcięcia aktualnie nie wyświetlanych slajdów

	// width: 100%; // nie zadziała na tym poziomie prawidłowo!
	// max-width: 300px; // może być alternatywą dla określenia granic okna z poziomu SliderWrapper

	.slick-list,
	.slick-track {
		// tu nic nie trzeba dawać...
	}

	.slick-slide {
		display: inline-block; // BARDZO WAŻNE do utrzymania slidera w linii! Ile się tego naszukałam...

		// width: 5rem; // nie zadziała na tym poziomie!
		// height: 10rem; // nie zadziała na tym poziomie!
		// background: blue;

		div {
			// <Slide></Slide>
			// na tym poziomie właściwy kontent pojedynczego slajdu!!!
			// Nie jest ważny jego typ - może być Flexbox
			height: 100%; // rozciagnięcie do wrappera pewnie będzie dobre, zwłaszcza przy zdjęciach
			// background: lightblue;
		}
	}

	.slick-dots {
		// UWAGA: kropki nie pojawią się poza terenem wyświetlanego slidera jeżeli jest ustawione overflow: hidden.
		// ROZWIĄZANIE: kropki muszę być w obszarze okna wyświetlanego slidera, a same slidy muszą być po prostu krótsze...
		position: absolute;
		margin: 0 auto;
		top: 0;
		width: 100%;
		text-align: center;

		li {
			display: inline-block; // kropki w jednej linii
			margin: 0 6px;
		}
		button {
			display: block;
			padding: 0;
			width: 10px;
			height: 10px;
			color: transparent;
			background: transparent;
			box-sizing: content-box;
			border: 1px solid ${colors.c6};
			border-radius: 50%;
			overflow: hidden;
			outline: none;
			cursor: pointer;
		}
		.slick-active {
			button {
				background-color: ${colors.c6}; // kolor aktywnej kropki
			}
		}
	}
`

class SliderPanel extends Component {
	render() {
		const {selectedProject} = this.props
		const settings = {
			infinite: true,
			speed: 1000,
			// cssEase: 'linear',
			fade: true,
			// autoplay: true,

			// centerMode: true,
			// variableWidth: true,

			// slidesToShow: 1,
			// slidesToScroll: 1,

			swipe: true,
			touchMove: false,
			dots: true,

			arrows: true,
			// tu można wstawić całe komponenty, które będą strzałkami slidera, onClick={this.props.onClick}
			prevArrow: <Arrow direction="left" />,
			nextArrow: <Arrow direction="right" />,
		}
		return (
			<SliderWrapper>
				<StyledSlider {...settings}>
					{selectedProject.images.map((item, i) => (
						<SlideWrapper key={i}>
							<Slide key={i} images={item} />
						</SlideWrapper>
					))}
				</StyledSlider>
			</SliderWrapper>
		)
	}
}

export default SliderPanel
