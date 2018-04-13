import React from 'react'
import {css} from 'styled-components'

const colors = {
	c0: 'rgba(0, 0, 0, 0)',
	c1: 'rgb(255, 255, 255)',
	c2: 'rgb(0, 0, 0)',
	c3: 'rgb(2, 27, 51)',
	c4: 'rgb(6, 43, 78)',
	c5: 'rgb(20, 62, 102)',
	c6: 'rgb(36, 82, 126)',
	c7: 'rgb(63, 104, 143)',
	c8: 'rgb(71, 136, 198)',
	c9: 'rgb(181, 201, 221)',
	c10: 'rgb(209, 209, 209)',
	c11: 'rgb(147, 147, 147)',
	c12: 'rgb(87, 87, 87)',
	shadow1: 'rgba(0, 0, 0, 0.5)',
	shadow2: 'rgba(0, 0, 0, 0.7)',
}

const tightEnd = '100vw'
const wideEnd = '2.5vw'

const styles = {
	page: css`
		min-height: 100vh;
	`,

	contentWidth: css`
		max-width: 1024px;
	`,

	backgroundImg: css`
		/*"More bubbles" designed by tom_bullock from Flickr*/
		background-image: url('dist/images/bubbles2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
	`,

	skewedBorderUp: css`
		&:after,
		&:before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			z-index: 1000;
		}
		&:before {
			top: calc(0.5px - ${wideEnd});
			left: 0;
			border-bottom: ${wideEnd} solid ${colors.c1};
			border-right: ${tightEnd} solid transparent;
			z-index: 2;
		}

		&:after {
			top: calc(-${wideEnd} * 1.5);
			right: 0;
			border-bottom: calc(1.5 * ${wideEnd}) solid ${colors.c8};
			border-left: calc(0.5 * ${tightEnd}) solid transparent;
			z-index: 1;
		}
	`,

	skewedBorderDown: css`
		&:after,
		&:before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
		}

		&:before {
			top: 100%;
			left: 0;
			border-top: calc(1.5 * ${wideEnd}) solid ${colors.c8};
			border-right: calc(0.5 * ${tightEnd}) solid transparent;
			z-index: 1;
		}

		&:after {
			top: calc(100% - 0.5px);
			right: 0;
			border-top: ${wideEnd} solid ${colors.c1};
			border-left: ${tightEnd} solid transparent;
			z-index: 2;
		}
	`,

	skewedBorderUpFooter: css`
		&:after,
		&:before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			z-index: 1000;
		}
		&:before {
			top: calc(0.5px - ${wideEnd});
			left: 0;
			border-bottom: ${wideEnd} solid ${colors.c3};
			border-right: ${tightEnd} solid transparent;
			z-index: 2;
		}
	`,

	sectionTitle: css`
		padding: 1rem 1rem 0.5rem;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
	`,

	sectionSubtitle: css`
		padding: 0.5rem 1rem 1rem;
		font-size: 1.5rem;
		font-style: italic;
		text-align: center;
	`,

	linkedinIcon: css`
		/*linkedin logo" designed by SimpleIcon from Flaticon*/
		background-image: url('dist/icons/linkedin-logo.svg');
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: 50% 40%;
	`,

	emailIcon: css`
		/*linkedin logo" designed by SimpleIcon from Flaticon*/
		background-image: url('dist/icons/email.svg');
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	`,

	boxShadow1: css`
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	`,
	boxShadow2: css`
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	`,
	boxShadow3: css`
		box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.7);
	`,
	boxShadow4: css`
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	`,
}

export {styles, colors}
