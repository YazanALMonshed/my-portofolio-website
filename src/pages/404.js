import React from 'react';
import { Layout, SEO } from 'components/common';
import {Container, ContainerCenter} from './styles.js'
export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Container>
      <ContainerCenter>
      <h1>NOT FOUND PAGE</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
     </ContainerCenter>
    </Container>
  </Layout>
);
