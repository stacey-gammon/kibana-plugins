import React from 'react';
import { GreetingCardPersonalization } from '../types';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiImage,
} from '@elastic/eui';


export const BirthdayGreetingCard: React.FC<GreetingCardPersonalization> = ({ to, from, message }: GreetingCardPersonalization) => (
  <React.Fragment>
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiImage
            size="m"
            alt="balloons"
            hasShadow
            url="https://source.unsplash.com/200x600/?balloon"
          />
      </EuiFlexItem>
      <EuiFlexItem>
        <h1>{`Happy Birthday ${to}!`}</h1>
        <EuiSpacer />
        <EuiText color="accent">
          <blockquote>
            <p>
            Sending cake, balloons and laughter for your special day.
            </p>
          </blockquote>
        </EuiText>
        <EuiSpacer />
        <EuiImage
          size="m"
          alt="birthday cake"
          hasShadow
          url="https://source.unsplash.com/400x400/?cake"
        />
        <EuiSpacer />
        <EuiText>{message}</EuiText>
        <EuiSpacer />
        <EuiText>{`Love, ${from}`}</EuiText>
      </EuiFlexItem>
    </EuiFlexGroup>
  </React.Fragment>
 )