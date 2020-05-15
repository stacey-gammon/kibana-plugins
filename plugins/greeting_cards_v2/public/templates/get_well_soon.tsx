import React from 'react';
import { GreetingCardPersonalization } from '../types';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiImage,
} from '@elastic/eui';

export const GetWellSoonGreetingCard: React.FC<GreetingCardPersonalization> =
  ({ to, from, message }: GreetingCardPersonalization) => (
  <React.Fragment>
    <EuiFlexGroup>
      <EuiFlexItem style={{backgroundColor: '#EF8068'}}>
        &nbsp;
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiImage
            size="m"
            alt="apple"
            hasShadow
            url="https://source.unsplash.com/200x200/?apple"
          />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiText color="accent">
          <blockquote>
            <p>
            An apple a day keeps the doctor away.
            </p>
          </blockquote>
        </EuiText>
        <EuiSpacer />

        <h1>{`Dear ${to},`}</h1>
        <EuiSpacer />
        <EuiText>{message}</EuiText>
        <EuiSpacer />
        <EuiText>{`~ ${from}`}</EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiImage
            size="m"
            alt="medicine"
            hasShadow
            url="https://source.unsplash.com/200x200/?flowers"
          />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiFlexGroup>
      <EuiFlexItem style={{backgroundColor: '#EF8068'}}>
        &nbsp;
      </EuiFlexItem>
    </EuiFlexGroup>
  </React.Fragment>
 )