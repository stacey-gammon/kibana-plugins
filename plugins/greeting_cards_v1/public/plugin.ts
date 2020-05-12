import { Plugin, CoreSetup, AppMountParameters } from 'kibana/public';
import { createServiceWrapper } from './services';

export class GreetingCardsPlugin implements Plugin<void, void, {}, {}> {
  public setup(core: CoreSetup) {
    core.application.register({
      id: 'greetingCards',
      title: 'Greeting cards',
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
