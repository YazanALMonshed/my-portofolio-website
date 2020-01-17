import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Yazan Al Monshed</h1>
				<h4> Full Stack Python / Django Developer</h4>
				<Button as={AnchorLink} href="#contact">
					Contact	Me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
