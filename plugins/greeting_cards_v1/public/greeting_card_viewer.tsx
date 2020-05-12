
import React from 'react';
import { EuiPageContent, EuiImage, EuiSpacer, EuiText } from '@elastic/eui';
import { EuiPageContentHeader } from '@elastic/eui';
import { BIRTHDAY } from './types';

export function GreetingCardViewer() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const message = params.get('message');
  const to = params.get('to');
  const from = params.get('from');
  const type = params.get('type');
  const imgType = type === BIRTHDAY ? 'birthday' : 'nurse';
  const greetingText = type === BIRTHDAY ? 'Happy birthday!' : 'Get well soon!';

  return (
    <EuiPageContent>
      <EuiPageContentHeader>{greetingText}</EuiPageContentHeader>
      <EuiText>{`Dear ${to},`}</EuiText>
      <EuiImage
        size="m"
        alt={greetingText}
        hasShadow
        url={`https://source.unsplash.com/2000x1000/?${imgType}`}
      />
      <blockquote>{message}</blockquote>
      <EuiSpacer />
      <EuiText>{`- ${from}`}</EuiText>
    </EuiPageContent>
  );
}
