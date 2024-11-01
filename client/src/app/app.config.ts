import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAuthentication } from './core/auth/auth.provider';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideNotifications } from './core/notificacao/notificacao.provider';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {
  NgxCurrencyInputMode,
  provideEnvironmentNgxCurrency,
} from 'ngx-currency';
import { providePortugueseBrazilianLocales } from './core/locale/provide-portuguese-brazilian-locale';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),

    provideAuthentication(),
    provideNotifications(),
    providePortugueseBrazilianLocales(),

    provideEnvironmentNgxCurrency({
      align: 'left',
      allowNegative: false,
      allowZero: true,
      decimal: ',',
      precision: 2,
      prefix: 'R$ ',
      suffix: '',
      thousands: '.',
      nullable: false,
      min: 0,
      inputMode: NgxCurrencyInputMode.Financial,
    }),
  ],
};
