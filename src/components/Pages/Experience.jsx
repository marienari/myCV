import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {styles, colors} from '../../modulesCSS/styles.js'
import Box from '../Box.jsx'
import ContentWrapper from '../ContentWrapper.jsx'
import Project from './Project.jsx'
import projectsDB from './projectsDB.js'

// JobPanel

const JobPanel = styled(Box)`
	padding: 2rem 0 0;
`

const Date = styled(Box)`
	padding: 1rem 0.5rem;

	color: ${colors.c1};
	text-align: right;
	line-height: 1.1rem;

	border-radius: 5px 0 0 5px;
	background-color: ${colors.c5};
`

const FirstRow = styled(Box)`
	border: 1px solid ${colors.c5};
	border-radius: 5px;
`

const Company = styled(Box).attrs({left: true})`
	padding: 0 0.5rem;
	font-size: 1.4rem;
	font-weight: bold;
`
const JobTitle = styled(Box).attrs({left: true})`
	padding: 0 0.5rem;
	font-style: italic;
	line-height: 1.5rem;
	color: ${colors.c5};
`

const TasksBox = styled(Box).attrs({left: true})`
	padding: 0.5rem 0.5rem 0;
	line-height: 1.5rem;
`
const Tasks = styled(Box).attrs({left: true, top: true})`
	position: relative;
	line-height: 1.5rem;
	padding: 0 1.5rem;

	ul {
		li {
			&::before {
				content: '•';
				display: inline-block;
				width: 1rem;
				margin-left: -1rem;
				color: ${colors.c5};
			}
		}
	}
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
	padding: 2rem 1rem 4rem;
	color: ${colors.c2};
`

class Experience extends Component {
	render() {
		return (
			<SectionWrapper id="experience">
				<ContentWrapper>
					<SkewedBorderUp />

					<SectionTitle>Doświadczenie</SectionTitle>

					<JobPanel top column>
						<FirstRow stretch>
							<Date flex="1" column top stretch>
								07.2017 -&nbsp;12.2017
							</Date>
							<Box flex="5" column left>
								<Company>Municipality of Chios, Grecja</Company>
								<JobTitle>Urban planning intern/land surveying</JobTitle>
							</Box>
						</FirstRow>
						<Box>
							<Box flex="1" column top padding="0 0.5rem" />
							<Box flex="5" column left>
								<TasksBox>Obowiązki:</TasksBox>
								<Tasks>
									<ul>
										<li>
											Digitalizacja map ewidencyjnych wyspy Chios w skali 1:5000
											(baza danych Hellenic Military Geographical Service)
										</li>
										<li>
											Aktualizacja cyfrowego zasobu bazy danych nieruchomości
											gruntowych wyspy Chios
										</li>
										<li>
											Przygotowanie i aktualizacja cyfrowej mapy terenów
											objętych pożarami
										</li>
									</ul>
								</Tasks>
							</Box>
						</Box>
					</JobPanel>

					<JobPanel top column>
						<FirstRow stretch>
							<Date flex="1" column top stretch>
								10.2016 -&nbsp;03.2017
							</Date>
							<Box flex="5" column left>
								<Company>GEO-SYSTEM Sp. z o.o.</Company>
								<JobTitle>Pracownik biurowy w dziale produkcji</JobTitle>
							</Box>
						</FirstRow>
						<Box>
							<Box flex="1" column top padding="0 0.5rem" />
							<Box flex="5" column left>
								<TasksBox>Obowiązki:</TasksBox>
								<Tasks>
									<ul>
										<li>
											Wektoryzacja, nadawanie punktów adresowych, kalibracja
											rastrów{' '}
										</li>
										<li>Aktualizacja bazy danych informacji przestrzennych</li>
									</ul>
								</Tasks>
							</Box>
						</Box>
					</JobPanel>
					<JobPanel top column>
						<FirstRow stretch>
							<Date flex="1" column top stretch>
								08.2015 -&nbsp;09.2015
							</Date>
							<Box flex="5" column left>
								<Company>CODGIK, Dział Fotogrametrii i Teledetekcji</Company>
								<JobTitle>Praktykantka</JobTitle>
							</Box>
						</FirstRow>
						<Box>
							<Box flex="1" column top padding="0 0.5rem" />
							<Box flex="5" column left>
								<TasksBox>Obowiązki:</TasksBox>
								<Tasks>
									<ul>
										<li>Kontrola jakości analogowych zdjęć lotniczych</li>
										<li>
											Szkolenie z realizacji zamówień produktów
											fotogrametrycznych
										</li>
									</ul>
								</Tasks>
							</Box>
						</Box>
					</JobPanel>

										<JobPanel top column>
						<FirstRow stretch>
							<Date flex="1" column top stretch>
							12.2014 -&nbsp;02.2015
							</Date>
							<Box flex="5" column left>
								<Company>eStoreMedia Sp. z o.o.</Company>
								<JobTitle>Analityk rynku telefonów komórkowych - eCommerce</JobTitle>
							</Box>
						</FirstRow>
						<Box>
							<Box flex="1" column top padding="0 0.5rem" />
							<Box flex="5" column left>
								<TasksBox>Obowiązki:</TasksBox>
								<Tasks>
									<ul>
										<li>Aktualizacja bazy danych dot. rynku telefonów komórkowych</li>
										<li>
										Tłumaczenia zagranicznych stron internetowych z angielskiego i niemieckiego
										</li>
									</ul>
								</Tasks>
							</Box>
						</Box>
					</JobPanel>

					<JobPanel top column>
						<FirstRow stretch>
							<Date flex="1" column top stretch>
								07.2013 -&nbsp;08.2013
							</Date>
							<Box flex="5" column left>
								<Company>BUDPLAN Sp. z o.o.</Company>
								<JobTitle>Praktykantka</JobTitle>
							</Box>
						</FirstRow>
						<Box>
							<Box flex="1" column top padding="0 0.5rem" />
							<Box flex="5" column left>
								<TasksBox>Obowiązki:</TasksBox>
								<Tasks>
									<ul>
										<li>
											Wektoryzacja i praca nad SUiKZP oraz planami miejscowymi w
											programie AutoCAD
										</li>
										<li>Sporządzanie dokumentacji planistycznej</li>
									</ul>
								</Tasks>
							</Box>
						</Box>
					</JobPanel>
				</ContentWrapper>
			</SectionWrapper>
		)
	}
}

export default Experience
