import * as React from 'react';
import styled from 'styled-components';

import type { SentimentProps, ReasonsProps } from '@theme/components/Feedback';
import { Comment, Reasons } from '@theme/components/Feedback';
import { useTranslate } from '@portal/hooks';

export const Sentiment = ({
  settings,
  onSubmit,
  className,
}: SentimentProps): JSX.Element => {
  const {
    label,
    submitText,
    comment: commentSettings,
    reasons: reasonsSettings,
  } = settings || {};
  const [score, setScore] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [reasons, setReasons] = React.useState(
    [] as ReasonsProps['settings']['items']
  );
  const { translate } = useTranslate();
  const translationKeys = {
    submitText: 'theme.feedback.settings.submitText',
    label: 'theme.feedback.settings.label',
    likeLabel: 'theme.feedback.settings.comment.likeLabel',
    dislikeLabel: 'theme.feedback.settings.comment.dislikeLabel',
  };

  if (score && reasonsSettings?.enable && !reasons.length) {
    const { label: reasonsLabel, items, multi } = reasonsSettings;
    const buttonText = commentSettings?.enable ? 'Next' : 'Send';
    return (
      <Reasons
        onSubmit={({ reasons }) => setReasons(reasons)}
        settings={{ label: reasonsLabel, items, multi, buttonText }}
      />
    );
  }

  if (score && commentSettings?.enable && !comment) {
    const commentLabel =
      score === 1
        ? translate(
            translationKeys.likeLabel,
            commentSettings.likeLabel || 'What was most helpful?'
          )
        : translate(
            translationKeys.dislikeLabel,
            commentSettings.dislikeLabel || 'What can we improve?'
          );
    return (
      <Comment
        onSubmit={({ comment }) => setComment(comment)}
        settings={{ label: commentLabel }}
      />
    );
  }

  if (score) {
    onSubmit({
      score,
      comment,
      reasons,
    });
    return (
      <Wrapper>
        <Label data-translation-key={translationKeys.submitText}>
          {translate(
            translationKeys.submitText,
            submitText || 'Thank you for helping improve our documentation!'
          )}
        </Label>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-component-name="Feedback/Sentiment" className={className}>
      <Label data-translation-key={translationKeys.label}>
        {translate(
          translationKeys.label,
          label || 'Got any feedback or bugs to report?'
        )}
      </Label>
      <Vote
        onClick={() => {
          setScore(1);
        }}>
        ☺
      </Vote>
      <Vote
        onClick={() => {
          setScore(-1);
        }}>
        ☹
      </Vote>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: var(--font-family-base);
  display: flex;
  align-items: center;
  padding: 10px;

  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0;
  }
`;

const Label = styled.h3`
  margin-right: 15px;
`;

const Vote = styled.div`
  cursor: pointer;
  margin: 0 10px;

  font-size: 35px;
`;
