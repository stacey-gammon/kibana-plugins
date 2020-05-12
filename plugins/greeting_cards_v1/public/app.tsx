import React from 'react';
import ReactDOM from 'react-dom';

import { EuiPage } from '@elastic/eui';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppMountParameters } from '../../../src/core/public';
import { GreetingCardCreator } from './greeting_card_creator';
import { GreetingCardViewer } from './greeting_card_viewer';
import { Services } from './services';

interface Props {
  appBasePath: string;
  services: Services;
}

function GreetingCardApp({ appBasePath, services }: Props) {
  return (
    <Router basename={appBasePath}>
      <EuiPage>
        <Route
          path={`/`}
          exact={true}
          render={() => {
            services.showChrome();
            return <GreetingCardCreator />;
          }}
        />
        <Route
          path={`/view`}
          exact={true}
          render={() => {
            services.hideChrome();
            return <GreetingCardViewer />;
          }}
        />
      </EuiPage>
    </Router>
  );
}

export const renderApp = (props: Props, element: AppMountParameters['element']) => {
  ReactDOM.render(<GreetingCardApp {...props} />, element);

  return () => ReactDOM.unmountComponentAtNode(element);
};
