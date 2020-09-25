import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
// import { DemoComponent } from './demo/demo.component';
import { BlogComponent } from './blog/blog.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

//attempt to fix home reload
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    // DemoComponent,
    BlogComponent,
    UnderConstructionComponent,
  ],
  imports: [
    CoreModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
}),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
