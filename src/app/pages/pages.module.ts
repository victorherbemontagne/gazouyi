import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { CareersComponent } from './careers/careers.component';
import { AttributionComponent } from './attribution/attribution.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ThankYouComponent,
    ErrorPageComponent,
    FaqComponent,
    CareersComponent,
    AttributionComponent,
    JobsComponent,
    NewsComponent,
    TeamComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent
   ],
   entryComponents: [JobsComponent]
})
export class PagesModule { }
