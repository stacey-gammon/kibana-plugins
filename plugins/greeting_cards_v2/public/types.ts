export interface GreetingCardPersonalization {
  message: string;
  to: string;
  from: string;
}

export interface GreetingCardTemplate {
  id: string;
  displayName: string;
  render: () => React.ReactType<GreetingCardPersonalization>;
}
