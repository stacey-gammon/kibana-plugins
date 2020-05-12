import React, { useState } from 'react';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiSuperSelect,
  EuiSpacer,
} from '@elastic/eui';
import { Link } from 'react-router-dom';
import { GET_WELL, BIRTHDAY } from './types';

export function GreetingCardCreator() {
  const [message, setMessage] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [type, setType] = useState<string>(BIRTHDAY);

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
            onChange={e => setType(e)}
            valueOfSelected={type}
            options={[
              {
                value: BIRTHDAY,
                inputDisplay: 'Happy birthday',
              },
              {
                value: GET_WELL,
                inputDisplay: 'Get well soon',
              },
            ]}
          />
        </EuiFormRow>
        <EuiSpacer />
        <Link
          to={{
            pathname: '/view',
            search: `message=${message}&to=${to}&from=${from}&type=${type}`,
          }}
        >
          <EuiButton>View</EuiButton>
        </Link>{' '}
      </EuiForm>
    </EuiPageContent>
  );
}
