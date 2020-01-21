import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/about.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
        I’ve long been interested in software development and design, and always enjoy learning about new and exciting technologies.
        my experience in Django/Python and JavaScript & libraries like ReactJs, and  Bash. I love open source software especially GNU Linux, my favorite distribution of fedora sliverblue.
        </p>
        <p>Also interested in machine learning, algorithmes, linear algebra</p>
        <Button as={AnchorLink} href="#contact">
        Contact	Me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
