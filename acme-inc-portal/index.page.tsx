import * as React from 'react';

import { Box, FlexSection, Flex, Jumbotron } from '@theme/ui';
import { Button } from '@theme/components/Button';
import { Emphasis, H1, H2, SectionHeader } from '@theme/components/Typography';
import { ThinTile } from '@theme/components/Tiles/ThinTile';

import search from './docs/images/search.svg';
import launch from './docs/images/launch.svg';
import register from './docs/images/register.svg';

export const frontmatter = {
  seo: {
    title: 'Demo API Portal',
  },
};

export default function () {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ':root.dark a img {filter: invert(1);}' }} />
      <Jumbotron bgColor="var(--footer-background-color)">
        <H1>Acme Inc Developer Portal</H1>
        <H2>First step on the journey to reuse...DISCOVERABILITY</H2>
        <Flex p={20} justifyContent="center">
          <Button color="accent" size="large" to="/docs/getting-started/">
            Get started
          </Button>
          <Button color="accent" size="large" to="/catalog/">
            Browse APIs
          </Button>
        </Flex>
      </Jumbotron>
      <Box my={25}>
        <SectionHeader>Create your project using our APIs today!</SectionHeader>
        <FlexSection margin="auto" justifyContent="center">
          <ThinTile to="/catalog/" icon={search} header="Browse">
            Browse our existing services by checking out the available APIs
          </ThinTile>
          <ThinTile to="/apps/" icon={register} header="Register">
            Register your app for keys to any available APIs
          </ThinTile>
          <ThinTile to="/docs/getting-started/" icon={launch} header="Launch">
            Once you have your keys, try out the mocks on the API documentation pages and get ready to launch your
            project
          </ThinTile>
        </FlexSection>
        <SectionHeader>
          <Emphasis>Need help? </Emphasis>
          Contact the team.
        </SectionHeader>
        <FlexSection justifyContent="space-around" flexWrap="wrap" margin="auto"></FlexSection>
      </Box>
    </>
  );
}
