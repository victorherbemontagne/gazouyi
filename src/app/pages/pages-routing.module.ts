import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { CareersComponent } from './careers/careers.component';
import { AttributionComponent } from './attribution/attribution.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: ErrorPageComponent,
      },
      {
        path: 'contact-us',
        component: FaqComponent,
      },
      {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'attribution',
        component: AttributionComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'about-us',
        component: TeamComponent,
      },
      {
        path: 'terms-of-use',
        component: TermsOfUseComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
