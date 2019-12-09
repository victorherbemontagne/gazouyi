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
  public bMedium = false;

    public paragraphs1: Ci18nParagraph[] = [{
      PARAGRAPH: 'Loading...',
  }];
  public paragraphs2: Ci18nParagraph[] = [{
    PARAGRAPH: 'Loading...',
}];
public paragraphs3: Ci18nParagraph[] = [{
  PARAGRAPH: 'Loading...',
}];


  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
      this.bMedium = result.matches;
    });
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang()
    translate.use(browserLang.match('/en|/fr') ? browserLang : 'en')
  }

  ngOnInit() {
    this.translate.get('HOME.ABOUT-INTRO.ABOUT1.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.paragraphs1 = [{
          PARAGRAPH: 'Cannot get translation!'
      }];
      } else {
        this.paragraphs1 = res as Ci18nParagraph[];
      }
    });

    this.translate.get('HOME.ABOUT-INTRO.ABOUT2.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.paragraphs2 = [{
          PARAGRAPH: 'Cannot get translation!'
      }];
      } else {
        this.paragraphs2 = res as Ci18nParagraph[];
      }
    });

    this.translate.get('HOME.ABOUT-INTRO.ABOUT3.DESCRIPTION').subscribe((res: Ci18nParagraph[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
        this.paragraphs3 = [{
          PARAGRAPH: 'Cannot get translation!'
      }];
      } else {
        this.paragraphs3 = res as Ci18nParagraph[];
      }
    });
  }

}
