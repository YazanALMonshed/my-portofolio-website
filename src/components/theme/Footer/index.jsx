import React from 'react'
import { Container } from 'components/common'
// import twitter from '../../../assets/icons/twitter.svg'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Yazan Monshed</h2>
				<span>	
					© All rights are reserved  {new Date().getFullYear()} 
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


