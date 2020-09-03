import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Ci18nParagraph } from 'src/app/shared/models/ci18n-paragraph';

@Component({
  selector: 'app-about-intro',
  templateUrl: './about-intro.component.html',
  styleUrls: ['./about-intro.component.scss']
})
export class AboutIntroComponent implements OnInit {
  public bError = false;
  public bMobile = false;
  public bMedium = false;



  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    breakpointObserver.observe('(max-width: 991px)').subscribe(result => {
      this.bMedium = result.matches;
    });
    breakpointObserver.observe('(max-width: 767px)').subscribe(result => {
      this.bMobile = result.matches;
    });
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang()
    translate.use(browserLang.match('/en|/fr') ? browserLang : 'fr')
  }

  ngOnInit() {
  }

}
