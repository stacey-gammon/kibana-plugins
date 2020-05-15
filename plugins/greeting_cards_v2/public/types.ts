import { UiComponent } from 'src/plugins/kibana_utils/common';

export interface GreetingCardPersonalization {
  message: string;
  to: string;
  from: string;
}

export interface GreetingCardTemplate {
  id: string;
  displayName: string;
  render: (personalization: GreetingCardPersonalization) => UiComponent;
}
