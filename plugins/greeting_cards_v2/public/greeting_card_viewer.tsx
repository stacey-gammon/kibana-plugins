
import React from 'react';
import { EuiPageContent, EuiCallOut } from '@elastic/eui';
import { GreetingCardTemplate } from './types';

interface Props {
  templates: Array<GreetingCardTemplate>;
}

export function GreetingCardViewer({ templates }: Props) {
  const search = window.location.search;
  const params = new URLSearchParams(search);

  const message = params.get('message');
  const to = params.get('to');
  const from = params.get('from');
  const id = params.get('id');

  if (!message || !to || !from) {
    return <EuiCallOut color="danger">Missing properties</EuiCallOut>;
  }

  const template = templates.find(template => template.id === id);
  if (!template) {
    return <EuiCallOut color="danger">{`Error! No template found with id ${id}`}</EuiCallOut>;
  }
  
  const Card = template.render();
  return (
    <EuiPageContent>
      <Card to={to} message={message} from={from} />
    </EuiPageContent>
  );
}
