import { Plugin, CoreSetup, AppMountParameters } from 'kibana/public';
import { createServiceWrapper } from './services';
import { GreetingCardTemplate, GreetingCardPersonalization } from './types';

export class GreetingCardsV2Plugin implements Plugin<void, void, {}, {}> {
  private greetingCardTemplates: { [key: string]: GreetingCardTemplate } = {};

  public setup(core: CoreSetup) {

    // 
    this.greetingCardTemplates['birthday'] = ({
      id: 'birthday',
      render: async (card: GreetingCardPersonalization) => {
        const { BirthdayGreetingCard } = await import('./templates');
        return <BirthdayGreetingCard {...card} />
      }
    })


    core.application.register({
      id: 'greetingCardsV2',
      title: 'Greeting cards V2',
      async mount(params: AppMountParameters) {
        const [coreStart] = await core.getStartServices();
        const { renderApp } = await import('./app');
        const services = createServiceWrapper(coreStart);
        return renderApp({ appBasePath: params.appBasePath, services }, params.element);
      },
    });
  }

  public start() {}
  public stop() {}
}
