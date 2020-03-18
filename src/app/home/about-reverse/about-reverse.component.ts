import { Component, OnInit } from '@angular/core';

// 3rd party
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-reverse',
  templateUrl: './about-reverse.component.html',
  styleUrls: ['./about-reverse.component.scss']
})
export class AboutReverseComponent implements OnInit {
  public bError = false;


  constructor(public translate: TranslateService) { }

  ngOnInit() {
    
  }

}
