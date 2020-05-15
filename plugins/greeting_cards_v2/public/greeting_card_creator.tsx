import React, { useState } from 'react';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,EuiSpacer,
  EuiSuperSelect,
} from '@elastic/eui';
import { Link } from 'react-router-dom';
import { GreetingCardTemplate } from './types';

interface Props {
  templates: Array<GreetingCardTemplate>;
}

export function GreetingCardCreator({ templates }: Props) {

  if (templates.length === 0) {
    return <div>Sorry, you have no templates!</div>
  }

  const [message, setMessage] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [templateId, setTemplateId] = useState<string>(templates[0].id);

  return (
    <EuiPageContent>
      <EuiPageContentHeader>Create and send a greeting card.</EuiPageContentHeader>
      <EuiForm>
        <EuiFormRow label="To">
          <EuiFieldText name="to" value={to} onChange={e => setTo(e.target.value)} />
        </EuiFormRow>
        <EuiFormRow label="Message">
          <EuiFieldText name="message" value={message} onChange={e => setMessage(e.target.value)} />
        </EuiFormRow>
        <EuiFormRow label="From">
          <EuiFieldText name="from" value={from} onChange={e => setFrom(e.target.value)} />
        </EuiFormRow>
        <EuiFormRow label="Select type of greeting card">
          <EuiSuperSelect
            onChange={e => setTemplateId(e)}
            valueOfSelected={templateId}
            options={templates.map(template => ({ value: template.id, inputDisplay: template.displayName }))}
          />
        </EuiFormRow>
        <EuiSpacer />
        <Link
          to={{
            pathname: '/view',
            search: `message=${message}&to=${to}&from=${from}&id=${templateId}`,
          }}
        >
          <EuiButton>View</EuiButton>
        </Link>{' '}
      </EuiForm>
    </EuiPageContent>
  );
}
