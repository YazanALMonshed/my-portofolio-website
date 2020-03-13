import React from 'react'
import { Container } from 'components/common'
// import twitter from '../../../assets/icons/twitter.svg'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Yazan Al Monshed </h2>
				<span>	
					© MIT License {new Date().getFullYear()} <strong>Email:</strong> yazanmonshed@gmail.com
				</span>
			</Details>
			
			<Links>
				{social.map(({ id, name, link, icon,title}) => (
					<a   
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
						title={title}
					>
						<img width="30" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)


