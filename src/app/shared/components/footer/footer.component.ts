import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Ci18nFooterCol } from '../../models/ci18n-footer-col';
import { Ci18nSocial } from 'src/app/shared/models/ci18n-social';

// 3rd party
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public bMobile = false;
  public bError = false;
  public footerColumns: Ci18nFooterCol[] = [];
  public socials: Ci18nSocial[] = [{
    IMG: {
      ALT: '',
      SRC: ''
    },
    HREF: ''
  }];

  constructor(breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    breakpointObserver.observe('(max-width: 720px)').subscribe(result => {
      this.bMobile = result.matches;
    });
  }

  ngOnInit() {
    this.translate.get('SHARED.FOOTER.COLUMNS').subscribe((res: Ci18nFooterCol[] | string) => {
      if (typeof(res) === 'string') {
        this.bError = true;
      } else {
        this.footerColumns = res as Ci18nFooterCol[];
      }
    });
  this.translate.get('SHARED.FOOTER.SOCIALS').subscribe((res: Ci18nSocial[] | string) => {
    if (typeof(res) === 'string') {
        this.bError = true;
        this.socials = [{
          IMG: {
              ALT: 'ERROR',
              SRC: ''
          },
          HREF: '',
        }];
    } else {
        this.socials = res as Ci18nSocial[];
    }
});
}
}
