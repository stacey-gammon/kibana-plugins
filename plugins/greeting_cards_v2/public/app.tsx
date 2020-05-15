import React from 'react';
import ReactDOM from 'react-dom';

import { EuiPage } from '@elastic/eui';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppMountParameters } from '../../../src/core/public';
import { GreetingCardCreator } from './greeting_card_creator';
import { GreetingCardViewer } from './greeting_card_viewer';
import { Services } from './services';
import { GreetingCardTemplate } from './types';

interface Props {
  appBasePath: string;
  services: Services;
  templates: Array<GreetingCardTemplate>;
}

function GreetingCardApp({ appBasePath, services, templates }: Props) {
  console.log('Rendering Card app 2 ...');
  return (
    <Router basename={appBasePath}>
      <EuiPage>
        <Route
          path={`/`}
          exact={true}
          render={() => {
            services.showChrome();
            return <GreetingCardCreator templates={templates} />;
          }}
        />
        <Route
          path={`/view`}
          exact={true}
          render={() => {
           services.hideChrome();
           console.log('going to render viewer');
            return <GreetingCardViewer templates={templates} />;
          }}
        />
      </EuiPage>
    </Router>
  );
}

export const renderApp = (props: Props, element: AppMountParameters['element']) => {

  console.log('Rendering app 1 ...');
  ReactDOM.render(<GreetingCardApp {...props} />, element);

  return () => ReactDOM.unmountComponentAtNode(element);
};
