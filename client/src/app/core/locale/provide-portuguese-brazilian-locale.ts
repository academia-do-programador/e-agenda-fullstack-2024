import {
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

export const providePortugueseBrazilianLocales = (): EnvironmentProviders => {
  return makeEnvironmentProviders([
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]);
};
