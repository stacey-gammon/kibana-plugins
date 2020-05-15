import { CoreStart } from '../../../src/core/public';

export interface Services {
  hideChrome: () => void;
  showChrome: () => void;
}

/**
 * Best Practice!
 *
 * Create functions that wrap the core functionality you need. This will help buffer
 * your app from core API changes.
 *
 * @param coreStart
 */
export function createServiceWrapper(coreStart: CoreStart): Services {
  return {
    hideChrome: () => coreStart.chrome.setIsVisible(false),
    showChrome: () => coreStart.chrome.setIsVisible(true),
  };
}
