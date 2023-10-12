import React from 'react';
import { usePageVersions } from '@portal/hooks';
import { usePreloadHistory } from '@portal/usePreloadHistory';
import { VersionPicker } from '@theme/components';
import { useLocation } from 'react-router-dom';

interface AfterOpenApiTitleProps {
  info: any;
}

export function AfterOpenApiTitle(props: AfterOpenApiTitleProps) {
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

  return versions?.length > 1 && activeVersion ? (
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
  ) : null;
}
