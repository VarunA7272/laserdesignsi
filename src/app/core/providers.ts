import { EnvironmentProviders, Provider } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

/**
 * Core providers function that aggregates all global services and setups
 * acting as the modern equivalent to CoreModule.
 */
export function provideCore(): (Provider | EnvironmentProviders)[] {
  return [
    provideAnimations(),
    // Additional global services, interceptors, or config initializers would be added here.
  ];
}
