import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { rout } from './SPA/SPA-routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httperror, tokenInterceptor } from './SPA/token.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

const combineRout=[...routes,...rout]

export function createTranslate(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(combineRout),provideHttpClient(withInterceptors([tokenInterceptor,httperror])),provideAnimations(),
importProvidersFrom(
 TranslateModule.forRoot({
    loader:{
      provide:TranslateLoader,
      useFactory:createTranslate,
      deps:[HttpClient]
    },
    defaultLanguage:'en'
  })
)]
};
