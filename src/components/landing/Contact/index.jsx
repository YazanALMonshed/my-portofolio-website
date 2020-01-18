import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact1.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container}>

    <Details>
      <h1  id="contact">Contact</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="Software Developer. GNU Linux User. Contributor Free & Open Source Software" />
    </Thumbnail>
  </Wrapper>
)
