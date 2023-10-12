import React from 'react';
import styled from 'styled-components';

import { useBreadcrumbs } from '@portal/Sidebar/useBreadcrumbs';
import { telemetry } from '@portal/telemetry';
import { Breadcrumb } from '@theme/components/Breadcrumbs/Breadcrumb';
import { usePageVersions } from '@portal/hooks';
import { usePreloadHistory } from '@portal/usePreloadHistory';
import { VersionPicker } from '@theme/components';
import { useLocation } from 'react-router-dom';
import { usePageSharedData } from '@portal/hooks';

export const Breadcrumbs = (props: { className?: string }) => {
  const breadcrumbs = useBreadcrumbs();
  const catalogInfo = usePageSharedData<{ title: string; slug: string }>(
    'catalog-info'
  );
  const { versions = [] } = usePageVersions() || {};
  const location = useLocation();
  const history = usePreloadHistory();
  const activeVersion = versions.find((version) => version?.active);
  const versionsComponents = versions.map((version) => {
    return {
      element: version.label || version.version,
      value: version,
    };
  });
  console.log('catalogInfo', catalogInfo);
  console.log('activeVersion', activeVersion);
  console.log('versions?.length', versions?.length);
  if (breadcrumbs.length === 0 && catalogInfo) {
    return null;
  }

  return (
    <Container
      data-component-name="Breadcrumbs/Breadcrumbs"
      className={props.className}
    >
      <BreadcrumbsContainer>
        {breadcrumbs.map((breadcrumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <React.Fragment key={idx}>
              <Breadcrumb
                link={breadcrumb.link}
                label={breadcrumb.label}
                isActive={isLast}
                onClick={() => {
                  telemetry.send('breadcrumb_clicked', {
                    link: breadcrumb.link,
                    position: idx + 1,
                    total_breadcrumbs: breadcrumbs.length,
                  });
                }}
              />
              {isLast ? null : <span>/</span>}
            </React.Fragment>
          );
        })}
      </BreadcrumbsContainer>
      {!catalogInfo && versions?.length > 1 && activeVersion ? (
        <VersionPicker
          options={versionsComponents}
          value={activeVersion}
          onChange={(version: typeof activeVersion) => {
            const link = location.hash
              ? version.link + location.hash
              : version.link;
            history.push(link);
          }}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--breadcrumbs-text-color);
  font-size: var(--breadcrumbs-font-size);
`;

const BreadcrumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;

  > div {
    padding: var(--breadcrumbs-padding);
  }

  > span {
    padding: var(--breadcrumbs-gap);
  }

  @media print {
    display: none;
  }
`;
