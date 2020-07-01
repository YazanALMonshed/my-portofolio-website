import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/about-theme-2.svg'
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
        my experience in Python, Frameworks  Django & Flask. Golang & JavaScript libraries like ReactJs, & Bash. I love open source software especially GNU Linux. my favorite distribution fedora silverblue. working on containerzation technologies like <a href="https://www.docker.com/" target="_blank">docker</a> and <a href="https://kubernetes.io/" target="_blank">kubernetes.</a><a href="https://www.kubeflow.org/" target="_blank"> kubeflow</a>.
        </p>
        <p>Also interested in machine learning, algorithmes, linear algebra. statistics</p>
       /*<Button as={AnchorLink} href="#contact">
        Contact	Me
        </Button>
        */
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
