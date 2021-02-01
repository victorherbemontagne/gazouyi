(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/attribution/attribution.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/attribution/attribution.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!--FAQ Section start-->\r\n<div class=\"page-margin\">\r\n  <!--breadcrumb start-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\r\n        <h2 class=\"title\"><span>Image Attributions</span></h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--breadcrumb end -->\r\n  <section id=\"intro\" class=\"attribution\">\r\n    <div class=\"container\">\r\n      <div class=\"row align-items-center\">\r\n\r\n        <div class=\"col-md-11 col-lg-11 mx-auto\">\r\n          <div>Microphone Icon made by <a href=\"https://www.flaticon.com/authors/smashicons\" title=\"Smashicons\">Smashicons</a> from <a href=\"https://www.flaticon.com/\" \t\t\t    title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" \t\t\t    title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0</a></div>\r\n          <div>Secure Lock Icon made by <a href=\"https://www.flaticon.com/authors/kiranshastry\" title=\"Kiranshastry\">Kiranshastry</a> from <a href=\"https://www.flaticon.com/\" \t\t\t    title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" \t\t\t    title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0</a></div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n<!--FAQ Section start-->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/attribution/attribution.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/attribution/attribution.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-accent: #73cac3;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --color-fairy: #e1eaf0;\n  --color-rose: #D69292 ;\n  --text-very-dark: #184753;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #92A3AC;\n  --text-very-light: #c8cbce;\n  --text-white: #ffffff;\n  --filter-text-light: brightness(0) saturate(100%) invert(69%) sepia(16%) saturate(290%) hue-rotate(156deg) brightness(92%) contrast(82%);\n  --filter-text-medium: brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(465%) hue-rotate(155deg) brightness(91%) contrast(87%);\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-small: url('/assets/images/backgrounds/home02.png');\n  --background-blog: url('/assets/images/backgrounds/blog01.png');\n  --background-blog-small: url('/assets/images/backgrounds/blog02.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg');\n  --background-parents: url('/assets/images/backgrounds/parents01.png');\n  --background-parents-small: url('/assets/images/backgrounds/parents02.png');\n  --background-speech-bubble-left-top: url('/assets/images/illus/parents-speech-left-top.png');\n  --background-speech-bubble-left-bottom: url('/assets/images/illus/parents-speech-left-bottom.png');\n  --background-speech-bubble-right-top: url('/assets/images/illus/parents-speech-right-top.png');\n  --background-speech-bubble-right-bottom: url('/assets/images/illus/parents-speech-right-bottom.png');\n  --background-spacer: url('/assets/images/backgrounds/spacer.png');\n  --background-benefits: url('/assets/images/backgrounds/benefits-bkg.svg');\n  --background-feature: url('/assets/images/checkout/feature-pkg.svg');\n  --background-feature-round1: url('/assets/images/checkout/round1.svg');\n  --background-feature-round2: url('/assets/images/checkout/round2.svg');\n  --background-feature-round3: url('/assets/images/checkout/round3.svg');\n  --background-feature-round4: url('/assets/images/checkout/round4.svg');\n  --background-contact01: url('/assets/images/backgrounds/contact01.svg');\n  --background-login: url('/assets/images/backgrounds/login.svg'); }\n\n.attribution {\n  padding-top: 15vh; }\n\n.attribution .attribution-img {\n    width: 50%; }\n\n.attribution .position-listings {\n    box-shadow: 0 0 65px 0 rgba(170, 170, 170, 0.25);\n    margin-top: 10px;\n    height: 125px; }\n\n.attribution .position-title {\n    text-align: left; }\n\n.attribution .position-location {\n    text-align: right; }\n\n#positions {\n  padding-bottom: 15vh; }\n\n#contact-us {\n  padding-bottom: 15vh;\n  background-color: var(--color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXR0cmlidXRpb24vQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxHYXpvdXlpXFxzaXRlLXZpdHJpbmUvc3JjXFxhcHBcXGNvcmVcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXR0cmlidXRpb24vQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxHYXpvdXlpXFxzaXRlLXZpdHJpbmUvc3JjXFxhcHBcXHBhZ2VzXFxhdHRyaWJ1dGlvblxcYXR0cmlidXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F0dHJpYnV0aW9uL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcc2l0ZS12aXRyaW5lL3NyY1xcYXBwXFxjb3JlXFxzY3NzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3QkFBYztFQUNkLHNCQUFhO0VBQ2IsMkJBQW9CO0VBQ3BCLDBCQUFtQjtFQUNuQix5QkFBZ0I7RUFDaEIsaUNBQXdCO0VBRXhCLGdDQUF1QjtFQUN2QixzQkFBYTtFQUNiLGtCQUFhO0VBRWIsd0JBQWU7RUFFZix1QkFBYztFQUNkLHNCQUFhO0VBQ2IseUJBQWdCO0VBQ2hCLHlCQUFnQjtFQUNoQix3QkFBZTtFQUNmLHNCQUFhO0VBQ2IsdUJBQWM7RUFDZCx1QkFBYTtFQUdiLDBCQUFpQjtFQUNqQixxQkFBWTtFQUNaLHVCQUFjO0VBQ2Qsc0JBQWE7RUFDYiwyQkFBa0I7RUFDbEIsc0JBQWE7RUFFYix5SUFBb0I7RUFDcEIsMElBQXFCO0VBRXJCLG1GQUEyQjtFQUMzQixtRUFBdUI7RUFDdkIscUVBQXdCO0VBRXhCLG1GQUFrQztFQUNsQyx1RkFBb0M7RUFDcEMsdUVBQXdCO0VBQ3hCLDRFQUE4QjtFQUM5QixnRUFBa0I7RUFDbEIsc0VBQXdCO0VBQ3hCLHFGQUErQjtFQUMvQiw4RUFBMEI7RUFDMUIsc0VBQXFCO0VBQ3JCLDRFQUEyQjtFQUMzQiw2RkFBb0M7RUFDcEMsbUdBQXVDO0VBQ3ZDLCtGQUFxQztFQUNyQyxxR0FBd0M7RUFDeEMsa0VBQW9CO0VBRXBCLDBFQUFzQjtFQUN0QixxRUFBcUI7RUFDckIsdUVBQTRCO0VBQzVCLHVFQUE0QjtFQUM1Qix1RUFBNEI7RUFDNUIsdUVBQTRCO0VBRzVCLHdFQUF1QjtFQUN2QixnRUFBbUIsRUFDdEI7O0FDaEVEO0VBQ0Usa0JBQWlCLEVBeUJsQjs7QUExQkQ7SUFRTSxXQUFVLEVBRVg7O0FBVkw7SUFjTSxpRENRNkM7SURQN0MsaUJBQWdCO0lBQ2hCLGNBQWEsRUFDZDs7QUFqQkw7SUFvQk0saUJBQWdCLEVBQ2pCOztBQXJCTDtJQXVCTSxrQkFBaUIsRUFDbEI7O0FBR0w7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsdUNBQXNDLEVBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXR0cmlidXRpb24vYXR0cmlidXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC8vIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3ItYWNjZW50OiAjNzNjYWMzO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuICAgIC0tY29sb3ItZmFpcnk6ICNlMWVhZjA7XHJcbiAgICAtLWNvbG9yLXJvc2U6ICNENjkyOTIgO1xyXG5cclxuXHJcbiAgICAtLXRleHQtdmVyeS1kYXJrOiAjMTg0NzUzO1xyXG4gICAgLS10ZXh0LWRhcms6ICMwNzYwNzc7XHJcbiAgICAtLXRleHQtbWVkaXVtOiAjNWY3MDdhO1xyXG4gICAgLS10ZXh0LWxpZ2h0OiAjOTJBM0FDO1xyXG4gICAgLS10ZXh0LXZlcnktbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1maWx0ZXItdGV4dC1saWdodDogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNjklKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDI5MCUpIGh1ZS1yb3RhdGUoMTU2ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODIlKTtcclxuICAgIC0tZmlsdGVyLXRleHQtbWVkaXVtOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg0NSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoNDY1JSkgaHVlLXJvdGF0ZSgxNTVkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NyUpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXBhcnRuZXJzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcnRuZXJzLWRlZmF1bHQuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0uc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtMi5zdmcnKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZC1ob21lLXRlc3RpbW9uaWFsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3Rlc3RpbW9uaWFsLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1iYWJ5OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItY2xvdWRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2Nsb3Vkcy1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm86IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2hvbWUwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ibG9nOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Jsb2cwMS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ibG9nLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Jsb2cwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLW1vYmlsZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLW1vYmlsZS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1jb25zdHJ1Y3Rpb246IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29uc3RydWN0aW9uLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXBhcmVudHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFyZW50czAxLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXBhcmVudHMtc21hbGw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFyZW50czAyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtbGVmdC10b3A6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtbGVmdC10b3AucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1sZWZ0LWJvdHRvbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9wYXJlbnRzLXNwZWVjaC1sZWZ0LWJvdHRvbS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGVlY2gtYnViYmxlLXJpZ2h0LXRvcDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9wYXJlbnRzLXNwZWVjaC1yaWdodC10b3AucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1yaWdodC1ib3R0b206IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtcmlnaHQtYm90dG9tLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwYWNlcjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9zcGFjZXIucG5nJyk7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWJlbmVmaXRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2JlbmVmaXRzLWJrZy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L2ZlYXR1cmUtcGtnLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQxOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kMS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDIuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZS1yb3VuZDM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlY2tvdXQvcm91bmQzLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQ0OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kNC5zdmcnKTtcclxuXHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnRhY3QwMTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb250YWN0MDEuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtbG9naW46IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbG9naW4uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uYXR0cmlidXRpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxNXZoO1xyXG5cclxuICAgIC5yb3cge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYXR0cmlidXRpb24taW1ne1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnBvc2l0aW9uLWxpc3Rpbmdze1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgNjVweCAwICRjb2xvcl9zaWx2ZXJfY2hhbGljZV8yNTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAucG9zaXRpb24tdGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAucG9zaXRpb24tbG9jYXRpb257XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxufVxyXG4jcG9zaXRpb25ze1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXZoO1xyXG59XHJcblxyXG4jY29udGFjdC11c3tcclxuICBwYWRkaW5nLWJvdHRvbTogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4iLCIvLyBUT0RPIHJlbW92ZSB0aGVzZSBwcm9ncmVzc2l2bHksIHRvbyBjb21wbGljYXRlZC4gU3RpY2sgdG8gNSBtYWluIGNvbG9ycyArIEFuZ3VsYXIgbWF0ZXJpYWwgY3VzdG9tIHRoZW1lXHJcblxyXG4vL2NvbG9yc1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZ3JheTogI2VlZTtcclxuJGJsYWNrOiAjMDAwO1xyXG4kY29sb3JfYm9uX2pvdXI6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMSk7XHJcbiRjb2xvcl9ib25fam91cl82MDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjYpO1xyXG4kY29sb3JfY2FyYXJyYTogcmdiYSgyMzYsIDIzNiwgMjM2LCAxKTtcclxuJGNvbG9yX2NhcmFycmFfNjA6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC42KTtcclxuJGNvbG9yX2NhcmFycmFfMTE6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC4xMSk7XHJcbiRjb2xvcl9ib25fam91cjogcmdiYSgyMjQsIDIyNCwgMjI0LCAxKTtcclxuJGNvbG9yX3R3aWxpZ2h0X2JsdWU6ICNmM2ZmZmQ7XHJcbiRjb2xvcl90dW5kb3JhOiAjNDQ0NDQ0O1xyXG4kY29sb3JfdGFwYTogIzc3Nzc3NztcclxuJGNvbG9yX2JsYWNrX2hhemU6ICNmN2Y3Zjc7XHJcbiRjb2xvcl9tb3VudGFpbl9taXN0OiAjOTk5O1xyXG4kY29sb3JfbWluZV9zaGFmdDogIzMzMztcclxuJGNvbG9yX2FsdG86IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuJGNvbG9yX2dhbGxlcnk6ICNlZWVlZWU7XHJcbiRibGFja18xMzogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuJGNvbG9yX2dyYXlfbnVyc2U6IHJnYmEoMjMyLCAyMzIsIDIzMiwgMSk7XHJcbiR3aWxkX3NhbmRfMTAwOiByZ2JhKDI0NCwgMjQ0LCAyNDQsIDEpO1xyXG4kY29sb3JfbWVyY3VyeTogI2U2ZTZlNjtcclxuJGJsYWNrXzU6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiRjb2xvcl9zaWx2ZXJfY2hhbGljZV8yNTogcmdiYSgxNzAsIDE3MCwgMTcwLCAwLjI1KTtcclxuJGNvbG9yX3NpbHZlcl9jaGFsaWNlXzE1OiByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMTUpO1xyXG4kY29sb3Jfc2lsdmVyX2NoYWxpY2U6ICNhYWFhYWE7XHJcblxyXG4kY29sb3JfYnJpZ2h0X3R1cnF1b2lzZTogIzE4ZTdkMztcclxuJGNvbG9yX3Njb290ZXI6ICMxOWQwZGU7XHJcbiRjb2xvcl90dXJxdW9pc2U6ICMyYmQ0ZGY7XHJcbiRjb2xvcl9jeWFuX2FxdWE6ICMyMWVkZmY7XHJcbiRjb2xvcl9waWN0b25fYmx1ZTogIzJjYzZmZjtcclxuXHJcbiRjb2xvcl9zcHJpbmdfZ3JlZW46ICMyMGY5OGE7XHJcbiRjb2xvcl9jYXJpYmJlYW5fZ3JlZW46ICMxMWQ4OWM7XHJcbiRjb2xvcl90dXJxdW9pc2VfYmx1ZTogIzU5ZjdkZjtcclxuXHJcbiRjb2xvcl9jaGFybG90dGU6ICNiM2Y5ZmI7XHJcbiRjb2xvcl9qYXZhOiAjMTRiZGI0O1xyXG5cclxuLy9vdGhlciBjb2xvcnNcclxuJGJvcmRlcl9ncmF5OiAjZGRkZGRkO1xyXG5cclxuLy91cmxzXHJcbiR1cmxfMDogdXJsKC9hc3NldHMvaW1hZ2VzL2xhbm5kLWJnLnBuZyk7XHJcbiR1cmxfMTogdXJsKC9hc3NldHMvaW1hZ2VzL3NjcmVlbjEucG5nKTtcclxuJHVybF8yOiB1cmwoL2Fzc2V0cy9pbWFnZXMvMS5wbmcpO1xyXG4kdXJsXzM6IHVybCgvYXNzZXRzL2ltYWdlcy9ob21lMi9ob21lMi1zbGlkZXIucG5nKTtcclxuJHVybF80OiB1cmwoL2Fzc2V0cy9pbWFnZXMvaG9tZTMvaG9tZTMtc2xpZGVyLnBuZyk7XHJcbiR1cmxfNTogdXJsKC9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLnBuZyk7XHJcbiR1cmxfNjogdXJsKC9hc3NldHMvaW1hZ2VzL2ZlYXR1cmUtYmcucG5nKTtcclxuJHVybF83OiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdC1iZy5wbmcpO1xyXG4kdXJsXzg6IHVybCgvYXNzZXRzL2ltYWdlcy90ZWFtLWJnLnBuZyk7XHJcbiR1cmxfOTogdXJsKC9hc3NldHMvaW1hZ2VzL3RlYW0taW1nLWJnLnBuZyk7XHJcbiR1cmxfMTA6IHVybCgvYXNzZXRzL2ltYWdlcy9wcmljZS5wbmcpO1xyXG4kdXJsXzExOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHJpY2UtYmcucG5nKTtcclxuJHVybF8xMjogdXJsKC9hc3NldHMvaW1hZ2VzL3Rlc3RpbW9uaWFsLWJnLnBuZyk7XHJcbiR1cmxfMTM6IHVybCgvYXNzZXRzL2ltYWdlcy9UZXN0aW1vbmlhbC5wbmcpO1xyXG4kdXJsXzE0OiB1cmwoL2Fzc2V0cy9pbWFnZXMvQ29udGFjdC5wbmcpO1xyXG5cclxuJWV4dGVuZF8xIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6ICRjb2xvcl9tb3VudGFpbl9taXN0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuJWV4dGVuZF8yIHtcclxuICBoZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4cHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IC00cHggMCAwIC00cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3JfdGFwYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4lZXh0ZW5kXzMge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02NSUsIDApO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/attribution/attribution.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/attribution/attribution.component.ts ***!
  \************************************************************/
/*! exports provided: AttributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionComponent", function() { return AttributionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var AttributionComponent = /** @class */ (function () {
    function AttributionComponent(translate) {
        this.translate = translate;
        this.bError = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
        this.positions = [{
                POSITION: 'Loading...',
                LOCATION: 'Loading...'
            }];
    }
    AttributionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.CAREERS.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
        this.translate.get('PAGES.CAREERS.POSITIONS').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.positions = [{
                        POSITION: 'Cannot get translation!',
                        LOCATION: 'Cannot get translation!'
                    }];
            }
            else {
                _this.positions = res;
            }
        });
    };
    AttributionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attribution',
            template: __webpack_require__(/*! ./attribution.component.html */ "./src/app/pages/attribution/attribution.component.html"),
            styles: [__webpack_require__(/*! ./attribution.component.scss */ "./src/app/pages/attribution/attribution.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AttributionComponent);
    return AttributionComponent;
}());



/***/ }),

/***/ "./src/app/pages/careers/careers.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/careers/careers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!--FAQ Section start-->\r\n<div class=\"page-margin\">\r\n  <!--breadcrumb start-->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\r\n        <h2 class=\"title\"><span>{{ 'PAGES.CAREERS.SECTION-TITLE' | translate }}</span></h2>\r\n      </div>\r\n      <!-- <div class=\"col-md-6 col-sm-6 col-text-center\">\r\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\r\n          <ol class=\"breadcrumb bg-transparent mb-0\">\r\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\r\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'pages/faq'\">Careers</a></li>\r\n          </ol>\r\n        </nav>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n  <!--breadcrumb end -->\r\n  <!-- careers -->\r\n  <section id=\"intro\" class=\"careers\">\r\n    <div class=\"container\">\r\n      <div class=\"row align-items-center\">\r\n\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div class=\"careers-img mx-auto\">\r\n            <img class=\"img-fluid\" src=\"assets/images/pages/careers.png\" alt=\"careers image\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-6\" >\r\n          <h2 class=\"title\">{{ 'PAGES.CAREERS.SECTION-TITLE' | translate }}</h2>\r\n          <p class=\"caption-careers\" *ngFor=\"let paragraph of paragraphs\">{{ paragraph.PARAGRAPH }}</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"positions\" class=\"careers\">\r\n    <div class=\"container-positions\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <h2 class=\"title text-center\">{{ 'PAGES.CAREERS.MESSAGE' | translate }}</h2>\r\n          <div class=\"position-listings col-xs-10 col-sm-10 col-md-10 col-lg-10 d-flex mx-auto align-items-center\" (click)=\"openDialog()\" *ngFor=\"let position of positions\">\r\n            <h5 class=\"position-title d-inline-block col-md-6\">{{ position.POSITION }}</h5>\r\n            <p class=\"position-location d-inline-block col-md-6\">{{ position.LOCATION }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"contact-us\" class=\"careers\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12 text-center\">\r\n          <h2 class=\"title col-md-8 col-lg-8 mx-auto\">{{ 'PAGES.CAREERS.CALLTOACTION' | translate }}</h2>\r\n          <p class=\"caption-careers col-md-6 col-lg-6 mx-auto\">{{ 'PAGES.CAREERS.INFORMATION1' | translate  }} <a target=\"_blank\" href=\"https://www.google.com\">{{ 'PAGES.CAREERS.EMAIL' | translate  }}</a>{{ 'PAGES.CAREERS.INFORMATION2' | translate  }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n  <!-- careers -->\r\n</div>\r\n<!--FAQ Section start-->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/careers/careers.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/careers/careers.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-accent: #73cac3;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --color-fairy: #e1eaf0;\n  --color-rose: #D69292 ;\n  --text-very-dark: #184753;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #92A3AC;\n  --text-very-light: #c8cbce;\n  --text-white: #ffffff;\n  --filter-text-light: brightness(0) saturate(100%) invert(69%) sepia(16%) saturate(290%) hue-rotate(156deg) brightness(92%) contrast(82%);\n  --filter-text-medium: brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(465%) hue-rotate(155deg) brightness(91%) contrast(87%);\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-small: url('/assets/images/backgrounds/home02.png');\n  --background-blog: url('/assets/images/backgrounds/blog01.png');\n  --background-blog-small: url('/assets/images/backgrounds/blog02.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg');\n  --background-parents: url('/assets/images/backgrounds/parents01.png');\n  --background-parents-small: url('/assets/images/backgrounds/parents02.png');\n  --background-speech-bubble-left-top: url('/assets/images/illus/parents-speech-left-top.png');\n  --background-speech-bubble-left-bottom: url('/assets/images/illus/parents-speech-left-bottom.png');\n  --background-speech-bubble-right-top: url('/assets/images/illus/parents-speech-right-top.png');\n  --background-speech-bubble-right-bottom: url('/assets/images/illus/parents-speech-right-bottom.png');\n  --background-spacer: url('/assets/images/backgrounds/spacer.png');\n  --background-benefits: url('/assets/images/backgrounds/benefits-bkg.svg');\n  --background-feature: url('/assets/images/checkout/feature-pkg.svg');\n  --background-feature-round1: url('/assets/images/checkout/round1.svg');\n  --background-feature-round2: url('/assets/images/checkout/round2.svg');\n  --background-feature-round3: url('/assets/images/checkout/round3.svg');\n  --background-feature-round4: url('/assets/images/checkout/round4.svg');\n  --background-contact01: url('/assets/images/backgrounds/contact01.svg');\n  --background-login: url('/assets/images/backgrounds/login.svg'); }\n\n.careers {\n  padding-top: 15vh; }\n\n.careers .careers-img {\n    width: 50%; }\n\n.careers .position-listings {\n    box-shadow: 0 0 65px 0 rgba(170, 170, 170, 0.25);\n    margin-top: 10px;\n    height: 125px;\n    cursor: pointer; }\n\n.careers .position-listings:hover {\n    background-color: var(--color-primary); }\n\n.careers .position-title {\n    text-align: left; }\n\n.careers .position-location {\n    text-align: right; }\n\n#positions {\n  padding-bottom: 15vh; }\n\n#contact-us {\n  padding-bottom: 15vh;\n  background-color: var(--color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZWVycy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXHNpdGUtdml0cmluZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJlZXJzL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcc2l0ZS12aXRyaW5lL3NyY1xcYXBwXFxwYWdlc1xcY2FyZWVyc1xcY2FyZWVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZWVycy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXHNpdGUtdml0cmluZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksd0JBQWM7RUFDZCxzQkFBYTtFQUNiLDJCQUFvQjtFQUNwQiwwQkFBbUI7RUFDbkIseUJBQWdCO0VBQ2hCLGlDQUF3QjtFQUV4QixnQ0FBdUI7RUFDdkIsc0JBQWE7RUFDYixrQkFBYTtFQUViLHdCQUFlO0VBRWYsdUJBQWM7RUFDZCxzQkFBYTtFQUNiLHlCQUFnQjtFQUNoQix5QkFBZ0I7RUFDaEIsd0JBQWU7RUFDZixzQkFBYTtFQUNiLHVCQUFjO0VBQ2QsdUJBQWE7RUFHYiwwQkFBaUI7RUFDakIscUJBQVk7RUFDWix1QkFBYztFQUNkLHNCQUFhO0VBQ2IsMkJBQWtCO0VBQ2xCLHNCQUFhO0VBRWIseUlBQW9CO0VBQ3BCLDBJQUFxQjtFQUVyQixtRkFBMkI7RUFDM0IsbUVBQXVCO0VBQ3ZCLHFFQUF3QjtFQUV4QixtRkFBa0M7RUFDbEMsdUZBQW9DO0VBQ3BDLHVFQUF3QjtFQUN4Qiw0RUFBOEI7RUFDOUIsZ0VBQWtCO0VBQ2xCLHNFQUF3QjtFQUN4QixxRkFBK0I7RUFDL0IsOEVBQTBCO0VBQzFCLHNFQUFxQjtFQUNyQiw0RUFBMkI7RUFDM0IsNkZBQW9DO0VBQ3BDLG1HQUF1QztFQUN2QywrRkFBcUM7RUFDckMscUdBQXdDO0VBQ3hDLGtFQUFvQjtFQUVwQiwwRUFBc0I7RUFDdEIscUVBQXFCO0VBQ3JCLHVFQUE0QjtFQUM1Qix1RUFBNEI7RUFDNUIsdUVBQTRCO0VBQzVCLHVFQUE0QjtFQUc1Qix3RUFBdUI7RUFDdkIsZ0VBQW1CLEVBQ3RCOztBQ2hFRDtFQUNFLGtCQUFpQixFQTZCbEI7O0FBOUJEO0lBUU0sV0FBVSxFQUVYOztBQVZMO0lBY00saURDUTZDO0lEUDdDLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsZ0JBQWUsRUFDaEI7O0FBbEJMO0lBb0JNLHVDQUFzQyxFQUN2Qzs7QUFyQkw7SUF3Qk0saUJBQWdCLEVBQ2pCOztBQXpCTDtJQTJCTSxrQkFBaUIsRUFDbEI7O0FBR0w7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsdUNBQXNDLEVBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9sbG93IGFuZ3VsYXIgbWF0ZXJpYWwgdGhlbWUgY2xhc3MgYXBwbGllZCBvbiBib2R5XHJcbi8vIEZvciBtb3IgZGV0YWlscyBjaGVjayBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci90aGUtY29sb3Itc3lzdGVtLmh0bWwjY29sb3ItdGhlbWUtY3JlYXRpb25cclxuXHJcbi5kZWZhdWx0IHtcclxuICAgIC0tY29sb3ItdGl0bGU6ICAjMzQzNDNDO1xyXG4gICAgLS1jb2xvci10ZXh0OiAjNzc3Nzc3O1xyXG4gICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRDlFRUYzO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6ICM3MGEyZjI7XHJcbiAgICAvLyAtLWNvbG9yLWFjY2VudDogI2ZmYTg5YztcclxuICAgIC0tY29sb3ItYWNjZW50LXZhcmlhbnQ6ICMzOTZhYzU7XHJcbiAgICAtLWNvbG9yLWdyYXk6ICNmNGY0ZjQ7XHJcbiAgICAtLWNvbG9yLXdhcm46IHJlZDtcclxuXHJcbiAgICAtLWNvbG9yLWFjY2VudDogIzczY2FjMztcclxuXHJcbiAgICAtLWNvbG9yLW9jZWFuOiAjMTI3ZTliO1xyXG4gICAgLS1jb2xvci1iZWF1OiAjYzJkOGUzO1xyXG4gICAgLS1jb2xvci1iYXlzaWRlOiAjNzNjYWMzO1xyXG4gICAgLS1jb2xvci1ibG9zc29tOiAjZmNkMmMwO1xyXG4gICAgLS1jb2xvci1nb2xkZW46ICNmY2Q0ODU7XHJcbiAgICAtLWNvbG9yLW1pbnQ6ICNjNWU2ZGE7XHJcbiAgICAtLWNvbG9yLWZhaXJ5OiAjZTFlYWYwO1xyXG4gICAgLS1jb2xvci1yb3NlOiAjRDY5MjkyIDtcclxuXHJcblxyXG4gICAgLS10ZXh0LXZlcnktZGFyazogIzE4NDc1MztcclxuICAgIC0tdGV4dC1kYXJrOiAjMDc2MDc3O1xyXG4gICAgLS10ZXh0LW1lZGl1bTogIzVmNzA3YTtcclxuICAgIC0tdGV4dC1saWdodDogIzkyQTNBQztcclxuICAgIC0tdGV4dC12ZXJ5LWxpZ2h0OiAjYzhjYmNlO1xyXG4gICAgLS10ZXh0LXdoaXRlOiAjZmZmZmZmO1xyXG5cclxuICAgIC0tZmlsdGVyLXRleHQtbGlnaHQ6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDY5JSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSgyOTAlKSBodWUtcm90YXRlKDE1NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDgyJSk7XHJcbiAgICAtLWZpbHRlci10ZXh0LW1lZGl1bTogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNDUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDQ2NSUpIGh1ZS1yb3RhdGUoMTU1ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODclKTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1kZWZhdWx0LnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbTIuc3ZnJyk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQtaG9tZS10ZXN0aW1vbmlhbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZXN0aW1vbmlhbC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItYmFieTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWNsb3VkczogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9jbG91ZHMtbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmcucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1zbWFsbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ob21lMDIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtYmxvZzogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ibG9nMDEucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtYmxvZy1zbWFsbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ibG9nMDIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1tb2JpbGU6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy1tb2JpbGUucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtY29uc3RydWN0aW9uOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2NvbnN0cnVjdGlvbi5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1wYXJlbnRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcmVudHMwMS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1wYXJlbnRzLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcmVudHMwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGVlY2gtYnViYmxlLWxlZnQtdG9wOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL3BhcmVudHMtc3BlZWNoLWxlZnQtdG9wLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtbGVmdC1ib3R0b206IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtbGVmdC1ib3R0b20ucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1yaWdodC10b3A6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtcmlnaHQtdG9wLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtcmlnaHQtYm90dG9tOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL3BhcmVudHMtc3BlZWNoLXJpZ2h0LWJvdHRvbS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGFjZXI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvc3BhY2VyLnBuZycpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1iZW5lZml0czogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZW5lZml0cy1ia2cuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9mZWF0dXJlLXBrZy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kMTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDEuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZS1yb3VuZDI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlY2tvdXQvcm91bmQyLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kMy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kNDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDQuc3ZnJyk7XHJcblxyXG5cclxuICAgIC0tYmFja2dyb3VuZC1jb250YWN0MDE6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29udGFjdDAxLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWxvZ2luOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2xvZ2luLnN2ZycpO1xyXG59XHJcblxyXG4vLyAubmlnaHQge1xyXG4vLyAgICAgLS1jb2xvci10aXRsZTogIHJlZDtcclxuLy8gICAgIC0tY29sb3ItdGV4dDogcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbi8vICAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGJsdWU7XHJcbi8vICAgICAtLWNvbG9yLXByaW1hcnk6IDtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeS12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudDogO1xyXG4vLyAgICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogO1xyXG4vLyAgICAgLS1jb2xvci13YXJuOiA7XHJcblxyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1uaWdodC5zdmcnKTtcclxuLy8gfVxyXG4iLCJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLmNhcmVlcnMge1xyXG4gIHBhZGRpbmctdG9wOiAxNXZoO1xyXG5cclxuICAgIC5yb3cge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZWVycy1pbWd7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucG9zaXRpb24tbGlzdGluZ3N7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA2NXB4IDAgJGNvbG9yX3NpbHZlcl9jaGFsaWNlXzI1O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAucG9zaXRpb24tbGlzdGluZ3M6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3NpdGlvbi10aXRsZXtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5wb3NpdGlvbi1sb2NhdGlvbntcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiNwb3NpdGlvbnN7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1dmg7XHJcbn1cclxuXHJcbiNjb250YWN0LXVze1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiIsIi8vIFRPRE8gcmVtb3ZlIHRoZXNlIHByb2dyZXNzaXZseSwgdG9vIGNvbXBsaWNhdGVkLiBTdGljayB0byA1IG1haW4gY29sb3JzICsgQW5ndWxhciBtYXRlcmlhbCBjdXN0b20gdGhlbWVcclxuXHJcbi8vY29sb3JzXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRncmF5OiAjZWVlO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRjb2xvcl9ib25fam91cjogcmdiYSgyMjQsIDIyNCwgMjI0LCAxKTtcclxuJGNvbG9yX2Jvbl9qb3VyXzYwOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuNik7XHJcbiRjb2xvcl9jYXJhcnJhOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpO1xyXG4kY29sb3JfY2FyYXJyYV82MDogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjYpO1xyXG4kY29sb3JfY2FyYXJyYV8xMTogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjExKTtcclxuJGNvbG9yX2Jvbl9qb3VyOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xyXG4kY29sb3JfdHdpbGlnaHRfYmx1ZTogI2YzZmZmZDtcclxuJGNvbG9yX3R1bmRvcmE6ICM0NDQ0NDQ7XHJcbiRjb2xvcl90YXBhOiAjNzc3Nzc3O1xyXG4kY29sb3JfYmxhY2tfaGF6ZTogI2Y3ZjdmNztcclxuJGNvbG9yX21vdW50YWluX21pc3Q6ICM5OTk7XHJcbiRjb2xvcl9taW5lX3NoYWZ0OiAjMzMzO1xyXG4kY29sb3JfYWx0bzogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4kY29sb3JfZ2FsbGVyeTogI2VlZWVlZTtcclxuJGJsYWNrXzEzOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4kY29sb3JfZ3JheV9udXJzZTogcmdiYSgyMzIsIDIzMiwgMjMyLCAxKTtcclxuJHdpbGRfc2FuZF8xMDA6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMSk7XHJcbiRjb2xvcl9tZXJjdXJ5OiAjZTZlNmU2O1xyXG4kYmxhY2tfNTogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuJGNvbG9yX3NpbHZlcl9jaGFsaWNlXzI1OiByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMjUpO1xyXG4kY29sb3Jfc2lsdmVyX2NoYWxpY2VfMTU6IHJnYmEoMTcwLCAxNzAsIDE3MCwgMC4xNSk7XHJcbiRjb2xvcl9zaWx2ZXJfY2hhbGljZTogI2FhYWFhYTtcclxuXHJcbiRjb2xvcl9icmlnaHRfdHVycXVvaXNlOiAjMThlN2QzO1xyXG4kY29sb3Jfc2Nvb3RlcjogIzE5ZDBkZTtcclxuJGNvbG9yX3R1cnF1b2lzZTogIzJiZDRkZjtcclxuJGNvbG9yX2N5YW5fYXF1YTogIzIxZWRmZjtcclxuJGNvbG9yX3BpY3Rvbl9ibHVlOiAjMmNjNmZmO1xyXG5cclxuJGNvbG9yX3NwcmluZ19ncmVlbjogIzIwZjk4YTtcclxuJGNvbG9yX2NhcmliYmVhbl9ncmVlbjogIzExZDg5YztcclxuJGNvbG9yX3R1cnF1b2lzZV9ibHVlOiAjNTlmN2RmO1xyXG5cclxuJGNvbG9yX2NoYXJsb3R0ZTogI2IzZjlmYjtcclxuJGNvbG9yX2phdmE6ICMxNGJkYjQ7XHJcblxyXG4vL290aGVyIGNvbG9yc1xyXG4kYm9yZGVyX2dyYXk6ICNkZGRkZGQ7XHJcblxyXG4vL3VybHNcclxuJHVybF8wOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbGFubmQtYmcucG5nKTtcclxuJHVybF8xOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2NyZWVuMS5wbmcpO1xyXG4kdXJsXzI6IHVybCgvYXNzZXRzL2ltYWdlcy8xLnBuZyk7XHJcbiR1cmxfMzogdXJsKC9hc3NldHMvaW1hZ2VzL2hvbWUyL2hvbWUyLXNsaWRlci5wbmcpO1xyXG4kdXJsXzQ6IHVybCgvYXNzZXRzL2ltYWdlcy9ob21lMy9ob21lMy1zbGlkZXIucG5nKTtcclxuJHVybF81OiB1cmwoL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcucG5nKTtcclxuJHVybF82OiB1cmwoL2Fzc2V0cy9pbWFnZXMvZmVhdHVyZS1iZy5wbmcpO1xyXG4kdXJsXzc6IHVybCgvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90LWJnLnBuZyk7XHJcbiR1cmxfODogdXJsKC9hc3NldHMvaW1hZ2VzL3RlYW0tYmcucG5nKTtcclxuJHVybF85OiB1cmwoL2Fzc2V0cy9pbWFnZXMvdGVhbS1pbWctYmcucG5nKTtcclxuJHVybF8xMDogdXJsKC9hc3NldHMvaW1hZ2VzL3ByaWNlLnBuZyk7XHJcbiR1cmxfMTE6IHVybCgvYXNzZXRzL2ltYWdlcy9wcmljZS1iZy5wbmcpO1xyXG4kdXJsXzEyOiB1cmwoL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwtYmcucG5nKTtcclxuJHVybF8xMzogdXJsKC9hc3NldHMvaW1hZ2VzL1Rlc3RpbW9uaWFsLnBuZyk7XHJcbiR1cmxfMTQ6IHVybCgvYXNzZXRzL2ltYWdlcy9Db250YWN0LnBuZyk7XHJcblxyXG4lZXh0ZW5kXzEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogJGNvbG9yX21vdW50YWluX21pc3Q7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4lZXh0ZW5kXzIge1xyXG4gIGhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogLTRweCAwIDAgLTRweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcl90YXBhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiVleHRlbmRfMyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY1JSwgMCk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/careers/careers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/careers/careers.component.ts ***!
  \****************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobs/jobs.component */ "./src/app/pages/jobs/jobs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party



var CareersComponent = /** @class */ (function () {
    function CareersComponent(translate, dialog) {
        this.translate = translate;
        this.dialog = dialog;
        this.bError = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
        this.positions = [{
                POSITION: 'Loading...',
                LOCATION: 'Loading...'
            }];
    }
    CareersComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"], {
            position: { top: '15vh' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CareersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.CAREERS.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
        this.translate.get('PAGES.CAREERS.POSITIONS').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.positions = [{
                        POSITION: 'Cannot get translation!',
                        LOCATION: 'Cannot get translation!'
                    }];
            }
            else {
                _this.positions = res;
            }
        });
    };
    CareersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/pages/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.scss */ "./src/app/pages/careers/careers.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\t<section style=\"padding-top: 100px;\">\r\n\t\t<div>\r\n\t\t\t<h3>Merci !</h3>\r\n\t\t\t<p>Votre achat à été réalisé avec succès, bienvenue sur Gazouyi Premium !</p>\r\n\t\t</div>\r\n\t</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/confirmation/confirmation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(httpClient, ActivatedRoute, router) {
        this.httpClient = httpClient;
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this.success = false;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var params = this.ActivatedRoute.snapshot.queryParamMap['params'];
        console.log(Object.keys(params).length > 0);
        console.log(Object.keys(params).length);
        if (Object.keys(params).length > 0) {
            this.init_user(params['email'], params['exp_date'], (parseInt(params['montant']) / 100).toString());
        }
        else {
            console.log('ok');
            this.success = true;
        }
    };
    ConfirmationComponent.prototype.init_user = function (email, exp_date, montant) {
        return __awaiter(this, void 0, void 0, function () {
            var form, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = new FormData();
                        form.append('email', email);
                        return [4 /*yield*/, this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + "/users/commande/info/get", form).toPromise()];
                    case 1:
                        req = _a.sent();
                        if (req['res']) {
                            this.add_cmd_to_server(req['data'].token, req['data'].uid, exp_date, montant);
                        }
                        else {
                            alert(req['message']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationComponent.prototype.add_cmd_to_server = function (token, uid, exp_date, montant) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, form, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'token': token,
                        };
                        form = new FormData();
                        form.append('uid', uid);
                        form.append('exp_date', exp_date);
                        form.append('partenaire', 'Gazouyi');
                        form.append('montant', montant);
                        return [4 /*yield*/, this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + "/users/commandes/create", form, { headers: headers }).toPromise()];
                    case 1:
                        req = _a.sent();
                        if (req['res']) {
                            this.router.navigateByUrl('/pages/confirmation');
                        }
                        else {
                            alert(req['message']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/pages/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/pages/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-form not-found\">\r\n  <div class=\"innerpage-decor\">\r\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\r\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <h2 class=\"error-font\">4<span>0</span>4</h2>\r\n    <h2 class=\"f-bold\">Not found</h2>\r\n    <div class=\"col-md-8 offset-md-2 col-12\">\r\n      <h3>The page you are attempting to reach is currently not available. This may be because\r\n        the page does not exist or has been moved.\r\n      </h3>\r\n    </div>\r\n    <div class=\"mt-5\">\r\n      <a [routerLink]=\"'/demo'\" class=\"btn btn-custom theme-color theme-color pt-2 pb-2\">BACK TO HOME PAGE</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/pages/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (messageEvent)=\"receiveMessage($event)\"></app-header>\r\n<section id=\"contact-us\" class=\"contact-us d-flex align-items-center\">\r\n    <div class=\"container-fluid pt-5 pb-5\">\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-11 col-lg-9 mx-auto\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <h2 class=\"text-center text-md-left\">{{ 'PAGES.CONTACT.TITLE' | translate }}</h2>\r\n              <h5 class=\"mb-5 text-center text-md-left\">{{ 'PAGES.CONTACT.SUBTITLE' | translate }}</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"row d-flex align-items-center\">\r\n              <div class=\"col-12 col-sm-6 d-flex align-self-start order-sm-first mt-5 mt-sm-0\">\r\n                  <table class=\"mx-auto mx-md-0\">\r\n                    <tr>\r\n                      <td class=\"contact-icon pb-2\"><img src=\"{{ 'PAGES.CONTACT.PHONE.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.CONTACT.PHONE.IMG.ALT' | translate }}\"></td>\r\n                      <td><p class=\"mb-0 pb-2\">{{ 'PAGES.CONTACT.PHONE.NUMBER' | translate }}</p></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"contact-icon\"><img src=\"{{ 'PAGES.CONTACT.LOCATION.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.CONTACT.LOCATION.IMG.ALT' | translate }}\"></td>\r\n                      <td><p class=\"mb-0\">{{ 'PAGES.CONTACT.LOCATION.ADDRESS1' | translate }}</p></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td></td>\r\n                      <td><p class=\"mb-0\">{{ 'PAGES.CONTACT.LOCATION.ADDRESS2' | translate }}</p></td>\r\n                    </tr>\r\n\r\n                  </table>\r\n              </div>\r\n              <div class=\"col-12 col-sm-6 order-first\">\r\n                  <div class=\"form-group\">\r\n                      <input [(ngModel)]=\"email\" id=\"email\" placeholder=\"E-mail\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <textarea [(ngModel)]=\"message\" name=\"message\" id=\"message\" placeholder=\"Inserez votre message!\" onfocus=\"this.value=''\" rows=\"5\" cols=\"33\" class=\"form-control\"></textarea>\r\n                  </div>\r\n                  <div class=\"form-group text-center\">\r\n                      <button (click)=\"submit()\" mat-flat-button>Envoyer</button>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n            <!-- <div class=\"col-12 col-md-8 mx-auto mt-5 contact-image text-center\">\r\n              <img src=\"{{ 'PAGES.CONTACT.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.CONTACT.IMG.ALT' | translate }}\">\r\n            </div> -->\r\n          </div>\r\n          \r\n          <div class=\"row d-flex align-items-center justify-content-between mt-4 mt-sm-0 mb-0 mb-sm-n5\">\r\n            <div class=\"col-4 col-sm-3 col-md-2\">\r\n              <img src=\"assets/images/illus/bird_envelope.svg\" alt=\"yellow bird with blue envelope\">\r\n            </div>\r\n            <div class=\"col-4 col-sm-3 col-md-2\">\r\n              <img src=\"assets/images/illus/contact_cloud.svg\" alt=\"blue cloud\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </section>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us {\n  padding-top: 80px;\n  min-height: 100vh;\n  background-image: var(--background-contact01);\n  background-position: center bottom;\n  background-repeat: no-repeat; }\n  .contact-us .contact-image img {\n    width: 70%;\n    margin: auto; }\n  .contact-us .contact-icon img {\n    height: 1.25rem; }\n  .contact-us .contact-info h2, .contact-us .contact-info h4 {\n    width: auto !important; }\n  .contact-us .form-group textarea {\n    background-color: #f7f7f7;\n    border-color: #f0f0f0; }\n  .contact-us .form-group input {\n    background-color: #f7f7f7;\n    border-color: #f0f0f0; }\n  .contact-us button {\n    margin-top: 10px;\n    padding: 5px 40px;\n    max-width: 70%;\n    background-color: var(--color-bayside);\n    text-transform: uppercase;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: white;\n    transition: color 0.4s; }\n  .contact-us button:hover {\n    color: rgba(255, 255, 255, 0.6); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcc2l0ZS12aXRyaW5lL3NyY1xcYXBwXFxwYWdlc1xcZmFxXFxmYXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBRWpCLDhDQUE2QztFQUM3QyxtQ0FBa0M7RUFDbEMsNkJBQTRCLEVBK0MvQjtFQXJERDtJQVVZLFdBQVU7SUFDVixhQUFZLEVBQ2Y7RUFaVDtJQWlCWSxnQkFBZSxFQUNsQjtFQWxCVDtJQXVCWSx1QkFBc0IsRUFDekI7RUF4QlQ7SUE2QlksMEJBQW9DO0lBQ3BDLHNCQUFnQyxFQUNuQztFQS9CVDtJQWlDWSwwQkFBb0M7SUFDcEMsc0JBQWdDLEVBQ25DO0VBbkNUO0lBd0NRLGlCQUFnQjtJQUNoQixrQkFBaUI7SUFDakIsZUFBYztJQUNkLHVDQUFzQztJQUN0QywwQkFBeUI7SUFDekIsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osdUJBQXNCLEVBQ3pCO0VBakRMO0lBbURRLGdDQUE0QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11c3tcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmFja2dyb3VuZC1jb250YWN0MDEpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgLmNvbnRhY3QtaW1hZ2V7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWljb257XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm97XHJcbiAgICAgICAgaDIsaDR7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpIDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmF5c2lkZSk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




window.addEventListener('scroll', function () {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY + "px");
});
var FaqComponent = /** @class */ (function () {
    function FaqComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
    }
    FaqComponent.prototype.receiveMessage = function ($event) {
        this.loginWindow = $event;
        if (this.loginWindow) {
            var scrollY_1 = document.documentElement.style.getPropertyValue('--scroll-y');
            var body = document.body;
            body.style.position = 'fixed';
            body.style.top = "-" + scrollY_1;
        }
        else {
            var body = document.body;
            var scrollY_2 = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY_2 || '0') * -1);
        }
    };
    FaqComponent.prototype.ngOnInit = function () {
        this.userMessage = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    FaqComponent.prototype.submit = function () {
        if (!(this.email == null || this.message == null || this.email == "" || this.message == "")) {
            this.sendMessage();
        }
    };
    FaqComponent.prototype.sendMessage = function () {
        var _this = this;
        var route = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + '/admin/contact';
        var formData = new FormData();
        formData.append('email', this.email);
        formData.append('message', this.message);
        //const headers = {}
        this.httpClient.post(route, formData).toPromise()
            .then(function (data) {
            if (data['res'].toString() == 'true') {
                _this.email = null;
                _this.message = null;
                alert('Message envoyé!');
            }
            else {
                alert('Message non envoyé. Veuillez réessayez!');
            }
        })
            .catch(function (error) {
            alert('Problem on our side. Please try again later! ');
        });
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/jobs/jobs.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/jobs/jobs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"jobs\" class=\"jobs\">\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>X</button>\r\n  </mat-dialog-actions>\r\n  <mat-dialog-content>\r\n    <div class=\"general\">\r\n      <h2>Position</h2>\r\n      <h3><i>Level</i></h3>\r\n      <h3>Salary</h3>\r\n    </div>\r\n    <div class=\"col-11 mx-auto\">\r\n      <p>Under the direction of the Technical Director your role is to ensure the organisation, monitoring and implementation of the system and computer infrastructure of the various branches of Biborg.</p>\r\n      <p>You are responsible for the following actions:</p>\r\n      <ul>\r\n        <li>System and server administration, network configuration, back-up etc..</li>\r\n        <li>Intervention on client projects / design / hardware installation recommendations</li>\r\n        <li>Security: protocol, method, training, testing</li>\r\n        <li>Management of internal/ external data transfers</li>\r\n        <li>Management of computing equipment (orders, installations, fixing, inventory, classification, optimisation, recycling)</li>\r\n        <li>Managing the entire phone pool</li>\r\n        <li>Management and optimisation of licenses and contracts (fiber, telephone systems ...)</li>\r\n        <li>Management of meeting room equipment</li>\r\n        <li>Keep up to date with technological developments</li>\r\n      </ul>\r\n    </div>\r\n  </mat-dialog-content>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/jobs/jobs.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/jobs/jobs.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobs ul {\n  list-style-type: disc; }\n\n.jobs .general {\n  background-color: var(--color-gray); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9icy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXHNpdGUtdml0cmluZS9zcmNcXGFwcFxccGFnZXNcXGpvYnNcXGpvYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBcUIsRUFDdEI7O0FBSEg7RUFLSSxvQ0FBbUMsRUFDcEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2JzL2pvYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9ic3tcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgfVxyXG4gIC5nZW5lcmFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/jobs/jobs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/jobs/jobs.component.ts ***!
  \**********************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/pages/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.scss */ "./src/app/pages/jobs/jobs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section style=\"padding-top: 100px;\">\r\n\t<div *ngIf=\"!forget\">\r\n\t\t<div>\r\n\t\t\t<h3>Se connecter</h3>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div>\r\n\t\t\t\t<label>Votre adresse email</label>\r\n\t\t\t\t<input type=\"email\" [(ngModel)]=\"user.email\" />\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<label>Votre mot de passe</label>\r\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"user.password\" />\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<button (click)=\"submit()\" >Valider</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<p (click)=\"show_forget()\"><u>Mot de passe oublié ?</u></p>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<p (click)=\"router.navigateByUrl('/pages/signup')\"><u>Je n'ai pas encore de compte</u></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"forget\">\r\n\t\t<h3>Demande d'un nouveau mot de passe</h3>\r\n\t\t<p>Saissez l'adresse email associée à votre compte. Nous vous enverrons un nouveau mot de passe par email</p>\r\n\t\t<input type=\"email\" ([ngModel])=\"email_forget\" /><br/>\r\n\t\t<button (click)=\"init_new_pass()\">Réinitialiser le mot de passe</button>\r\n\t</div>\r\n</section>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_user_mgmt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-mgmt.service */ "./src/app/core/services/user-mgmt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, userMgmt) {
        this.http = http;
        this.router = router;
        this.userMgmt = userMgmt;
        this.user = {
            email: '',
            password: '',
        };
        this.forget = false;
        this.email_forget = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hash_pass, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash_pass = crypto_js__WEBPACK_IMPORTED_MODULE_4__["SHA256"](this.user.password).toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Hex);
                        return [4 /*yield*/, this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + "/auth/session/email", {
                                'email': this.user.email,
                                'password_hash': hash_pass,
                            }).toPromise()];
                    case 1:
                        req = _a.sent();
                        if (req['res']) {
                            localStorage.setItem(this.userMgmt.tokenKey, req['token']);
                            localStorage.setItem(this.userMgmt.expDateKey, req['exp_date']);
                            this.router.navigateByUrl('/account/moncompte');
                        }
                        else {
                            alert(req['message']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.show_forget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.forget = true;
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.init_new_pass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var form, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = new FormData();
                        form.append('email', this.email_forget);
                        return [4 /*yield*/, this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + "/users/forget/password", form).toPromise()];
                    case 1:
                        req = _a.sent();
                        if (req['results'] == '1') {
                            alert('Votre requête a été reçue. Vous receverez un mail contenant votre mot de passe.');
                            this.email_forget = '';
                        }
                        else {
                            alert('Cette adresse email ne possède pas de compte');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_services_user_mgmt_service__WEBPACK_IMPORTED_MODULE_5__["UserMgmtService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/news/news.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section id=\"news\" class=\"news\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12 title-area\">\r\n          <h2 class=\"title\">{{ 'PAGES.NEWS.TITLE' | translate }}</h2>\r\n          <p>{{ 'PAGES.NEWS.SUBTITLE' | translate }}</p>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row col-12 mx-auto\">\r\n        <div class=\"mx-auto filter-btns\">\r\n            <button mat-flat-button color=\"accent\" class=\"mx-1\" *ngFor=\"let filter of filters\" ng-hide=\"all\" ng-show=\"filter.FILTER\">{{ filter.FILTER }}</button>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"row col-10 mx-auto\">\r\n      <div class=\"gallery-item col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 {{ article.FILTER }}\" *ngFor=\"let article of articles\">\r\n          <mat-card class=\"gallery-card\">\r\n        <a href=\"{{ article.HREF }}\" target=\"_blank\">\r\n            <div mat-card-image class=\"news-image\" [style.backgroundImage]=\"'url('+article.IMG.SRC+')'\"></div>\r\n            <h6>{{ article.HEADLINE }}</h6>\r\n            <p>{{ article.PUBLISHER }} &nbsp;  {{ article.LANGUAGE }}</p>\r\n            <!-- <mat-card-title>{{ article.HEADLINE }}</mat-card-title>\r\n            <mat-card-subtitle>{{ article.PUBLISHER }} {{ article.LANGUAGE }}</mat-card-subtitle> -->\r\n          </a>\r\n          </mat-card>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-6\" >\r\n            <h2 class=\"title\">Social Media</h2>\r\n            <p>Check out what is happening on our Facebook and Twitter pages.</p>\r\n        </div>\r\n        <div>\r\n          <a class=\"twitter-timeline\" href=\"https://twitter.com/ENS_ULM?ref_src=twsrc%5Etfw\">Tweets by ENS_ULM</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n        </div>\r\n    </div> -->\r\n  </div>\r\n</section>\r\n\r\n\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/news/news.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-accent: #73cac3;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --color-fairy: #e1eaf0;\n  --color-rose: #D69292 ;\n  --text-very-dark: #184753;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #92A3AC;\n  --text-very-light: #c8cbce;\n  --text-white: #ffffff;\n  --filter-text-light: brightness(0) saturate(100%) invert(69%) sepia(16%) saturate(290%) hue-rotate(156deg) brightness(92%) contrast(82%);\n  --filter-text-medium: brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(465%) hue-rotate(155deg) brightness(91%) contrast(87%);\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-small: url('/assets/images/backgrounds/home02.png');\n  --background-blog: url('/assets/images/backgrounds/blog01.png');\n  --background-blog-small: url('/assets/images/backgrounds/blog02.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg');\n  --background-parents: url('/assets/images/backgrounds/parents01.png');\n  --background-parents-small: url('/assets/images/backgrounds/parents02.png');\n  --background-speech-bubble-left-top: url('/assets/images/illus/parents-speech-left-top.png');\n  --background-speech-bubble-left-bottom: url('/assets/images/illus/parents-speech-left-bottom.png');\n  --background-speech-bubble-right-top: url('/assets/images/illus/parents-speech-right-top.png');\n  --background-speech-bubble-right-bottom: url('/assets/images/illus/parents-speech-right-bottom.png');\n  --background-spacer: url('/assets/images/backgrounds/spacer.png');\n  --background-benefits: url('/assets/images/backgrounds/benefits-bkg.svg');\n  --background-feature: url('/assets/images/checkout/feature-pkg.svg');\n  --background-feature-round1: url('/assets/images/checkout/round1.svg');\n  --background-feature-round2: url('/assets/images/checkout/round2.svg');\n  --background-feature-round3: url('/assets/images/checkout/round3.svg');\n  --background-feature-round4: url('/assets/images/checkout/round4.svg');\n  --background-contact01: url('/assets/images/backgrounds/contact01.svg');\n  --background-login: url('/assets/images/backgrounds/login.svg'); }\n\n.news {\n  padding-top: 80px; }\n\n.news .title {\n    padding-top: 50px; }\n\n.news .title-area {\n    padding-bottom: 30px; }\n\n.gallery-item {\n  margin-bottom: 30px;\n  display: flex; }\n\n.gallery-item img {\n    -o-object-fit: cover !important;\n       object-fit: cover !important; }\n\n.gallery-item p {\n    margin-bottom: 0; }\n\n.gallery-item .news-image {\n    padding-bottom: 100%;\n    background-color: var(--color-primary);\n    background-size: cover;\n    background-position: center; }\n\n.gallery-item .gallery-card {\n    width: 100%; }\n\n.filter-btns {\n  padding-bottom: 30px; }\n\n.mat-card {\n  font-family: 'Open sans', Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXHNpdGUtdml0cmluZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdzL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcc2l0ZS12aXRyaW5lL3NyY1xcYXBwXFxwYWdlc1xcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdCQUFjO0VBQ2Qsc0JBQWE7RUFDYiwyQkFBb0I7RUFDcEIsMEJBQW1CO0VBQ25CLHlCQUFnQjtFQUNoQixpQ0FBd0I7RUFFeEIsZ0NBQXVCO0VBQ3ZCLHNCQUFhO0VBQ2Isa0JBQWE7RUFFYix3QkFBZTtFQUVmLHVCQUFjO0VBQ2Qsc0JBQWE7RUFDYix5QkFBZ0I7RUFDaEIseUJBQWdCO0VBQ2hCLHdCQUFlO0VBQ2Ysc0JBQWE7RUFDYix1QkFBYztFQUNkLHVCQUFhO0VBR2IsMEJBQWlCO0VBQ2pCLHFCQUFZO0VBQ1osdUJBQWM7RUFDZCxzQkFBYTtFQUNiLDJCQUFrQjtFQUNsQixzQkFBYTtFQUViLHlJQUFvQjtFQUNwQiwwSUFBcUI7RUFFckIsbUZBQTJCO0VBQzNCLG1FQUF1QjtFQUN2QixxRUFBd0I7RUFFeEIsbUZBQWtDO0VBQ2xDLHVGQUFvQztFQUNwQyx1RUFBd0I7RUFDeEIsNEVBQThCO0VBQzlCLGdFQUFrQjtFQUNsQixzRUFBd0I7RUFDeEIscUZBQStCO0VBQy9CLDhFQUEwQjtFQUMxQixzRUFBcUI7RUFDckIsNEVBQTJCO0VBQzNCLDZGQUFvQztFQUNwQyxtR0FBdUM7RUFDdkMsK0ZBQXFDO0VBQ3JDLHFHQUF3QztFQUN4QyxrRUFBb0I7RUFFcEIsMEVBQXNCO0VBQ3RCLHFFQUFxQjtFQUNyQix1RUFBNEI7RUFDNUIsdUVBQTRCO0VBQzVCLHVFQUE0QjtFQUM1Qix1RUFBNEI7RUFHNUIsd0VBQXVCO0VBQ3ZCLGdFQUFtQixFQUN0Qjs7QUNoRUQ7RUFDRSxrQkFBaUIsRUFTbEI7O0FBVkQ7SUFJSSxrQkFBaUIsRUFDbEI7O0FBTEg7SUFRSSxxQkFBb0IsRUFDckI7O0FBR0g7RUFFSSxvQkFBbUI7RUFDbkIsY0FBYSxFQXNCaEI7O0FBekJEO0lBT00sZ0NBQTZCO09BQTdCLDZCQUE2QixFQUM5Qjs7QUFSTDtJQVdNLGlCQUFnQixFQUNqQjs7QUFaTDtJQWVNLHFCQUFvQjtJQUNwQix1Q0FBc0M7SUFDdEMsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM1Qjs7QUFuQkw7SUFzQk0sWUFBVyxFQUNaOztBQUlMO0VBQ0UscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsdURBQXNELEVBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9sbG93IGFuZ3VsYXIgbWF0ZXJpYWwgdGhlbWUgY2xhc3MgYXBwbGllZCBvbiBib2R5XHJcbi8vIEZvciBtb3IgZGV0YWlscyBjaGVjayBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci90aGUtY29sb3Itc3lzdGVtLmh0bWwjY29sb3ItdGhlbWUtY3JlYXRpb25cclxuXHJcbi5kZWZhdWx0IHtcclxuICAgIC0tY29sb3ItdGl0bGU6ICAjMzQzNDNDO1xyXG4gICAgLS1jb2xvci10ZXh0OiAjNzc3Nzc3O1xyXG4gICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRDlFRUYzO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6ICM3MGEyZjI7XHJcbiAgICAvLyAtLWNvbG9yLWFjY2VudDogI2ZmYTg5YztcclxuICAgIC0tY29sb3ItYWNjZW50LXZhcmlhbnQ6ICMzOTZhYzU7XHJcbiAgICAtLWNvbG9yLWdyYXk6ICNmNGY0ZjQ7XHJcbiAgICAtLWNvbG9yLXdhcm46IHJlZDtcclxuXHJcbiAgICAtLWNvbG9yLWFjY2VudDogIzczY2FjMztcclxuXHJcbiAgICAtLWNvbG9yLW9jZWFuOiAjMTI3ZTliO1xyXG4gICAgLS1jb2xvci1iZWF1OiAjYzJkOGUzO1xyXG4gICAgLS1jb2xvci1iYXlzaWRlOiAjNzNjYWMzO1xyXG4gICAgLS1jb2xvci1ibG9zc29tOiAjZmNkMmMwO1xyXG4gICAgLS1jb2xvci1nb2xkZW46ICNmY2Q0ODU7XHJcbiAgICAtLWNvbG9yLW1pbnQ6ICNjNWU2ZGE7XHJcbiAgICAtLWNvbG9yLWZhaXJ5OiAjZTFlYWYwO1xyXG4gICAgLS1jb2xvci1yb3NlOiAjRDY5MjkyIDtcclxuXHJcblxyXG4gICAgLS10ZXh0LXZlcnktZGFyazogIzE4NDc1MztcclxuICAgIC0tdGV4dC1kYXJrOiAjMDc2MDc3O1xyXG4gICAgLS10ZXh0LW1lZGl1bTogIzVmNzA3YTtcclxuICAgIC0tdGV4dC1saWdodDogIzkyQTNBQztcclxuICAgIC0tdGV4dC12ZXJ5LWxpZ2h0OiAjYzhjYmNlO1xyXG4gICAgLS10ZXh0LXdoaXRlOiAjZmZmZmZmO1xyXG5cclxuICAgIC0tZmlsdGVyLXRleHQtbGlnaHQ6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDY5JSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSgyOTAlKSBodWUtcm90YXRlKDE1NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDgyJSk7XHJcbiAgICAtLWZpbHRlci10ZXh0LW1lZGl1bTogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNDUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDQ2NSUpIGh1ZS1yb3RhdGUoMTU1ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODclKTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1kZWZhdWx0LnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbTIuc3ZnJyk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQtaG9tZS10ZXN0aW1vbmlhbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZXN0aW1vbmlhbC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItYmFieTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWNsb3VkczogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9jbG91ZHMtbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmcucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1zbWFsbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ob21lMDIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtYmxvZzogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ibG9nMDEucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtYmxvZy1zbWFsbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ibG9nMDIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1tb2JpbGU6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy1tb2JpbGUucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtY29uc3RydWN0aW9uOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2NvbnN0cnVjdGlvbi5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1wYXJlbnRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcmVudHMwMS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1wYXJlbnRzLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcmVudHMwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGVlY2gtYnViYmxlLWxlZnQtdG9wOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL3BhcmVudHMtc3BlZWNoLWxlZnQtdG9wLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtbGVmdC1ib3R0b206IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtbGVmdC1ib3R0b20ucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1yaWdodC10b3A6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtcmlnaHQtdG9wLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtcmlnaHQtYm90dG9tOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL3BhcmVudHMtc3BlZWNoLXJpZ2h0LWJvdHRvbS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGFjZXI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvc3BhY2VyLnBuZycpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1iZW5lZml0czogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZW5lZml0cy1ia2cuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9mZWF0dXJlLXBrZy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kMTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDEuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZS1yb3VuZDI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlY2tvdXQvcm91bmQyLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kMy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kNDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDQuc3ZnJyk7XHJcblxyXG5cclxuICAgIC0tYmFja2dyb3VuZC1jb250YWN0MDE6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29udGFjdDAxLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWxvZ2luOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2xvZ2luLnN2ZycpO1xyXG59XHJcblxyXG4vLyAubmlnaHQge1xyXG4vLyAgICAgLS1jb2xvci10aXRsZTogIHJlZDtcclxuLy8gICAgIC0tY29sb3ItdGV4dDogcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbi8vICAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGJsdWU7XHJcbi8vICAgICAtLWNvbG9yLXByaW1hcnk6IDtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeS12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudDogO1xyXG4vLyAgICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogO1xyXG4vLyAgICAgLS1jb2xvci13YXJuOiA7XHJcblxyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1uaWdodC5zdmcnKTtcclxuLy8gfVxyXG4iLCJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLm5ld3Mge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG5cclxuICAudGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1hcmVhe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50IDtcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXdzLWltYWdle1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FsbGVyeS1jYXJke1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5maWx0ZXItYnRuc3tcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party


var NewsComponent = /** @class */ (function () {
    function NewsComponent(translate, dialog) {
        this.translate = translate;
        this.dialog = dialog;
        this.bError = false;
        this.articles = [{
                IMG: {
                    ALT: '',
                    SRC: ''
                },
                HEADLINE: 'Loading',
                PUBLISHER: 'Loading...',
                HREF: 'Loading...',
                FILTER: 'Loading...',
                LANGUAGE: 'Loading...'
            }];
        this.filters = [{
                FILTER: 'Loading...'
            }];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.NEWS.ARTICLES').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.articles = [{
                        HEADLINE: 'An error occured',
                        PUBLISHER: 'Cannot get translation',
                        HREF: 'Cannot get translation',
                        FILTER: 'Cannot get translation',
                        LANGUAGE: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                _this.articles = res;
            }
        });
        this.translate.get('PAGES.NEWS.FILTERS').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.filters = [{
                        FILTER: 'An error occured'
                    }];
            }
            else {
                _this.filters = res;
            }
        });
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/pages/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/pages/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/pages/careers/careers.component.ts");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/pages/attribution/attribution.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/pages/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/pages/confirmation/confirmation.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/store.component */ "./src/app/pages/store/store.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__["ErrorPageComponent"],
            },
            {
                path: 'contact-us',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"],
            },
            {
                path: 'careers',
                component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"],
            },
            {
                path: 'attribution',
                component: _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_5__["AttributionComponent"],
            },
            {
                path: 'news',
                component: _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
            },
            {
                path: 'about-us',
                component: _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"],
            },
            {
                path: 'terms-of-use',
                component: _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_8__["TermsOfUseComponent"],
            },
            {
                path: 'privacy-policy',
                component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyComponent"],
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            },
            {
                path: 'confirmation',
                component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationComponent"],
            },
            {
                path: 'store',
                component: _store_store_component__WEBPACK_IMPORTED_MODULE_13__["StoreComponent"],
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/pages/thank-you/thank-you.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/pages/careers/careers.component.ts");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/pages/attribution/attribution.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/pages/jobs/jobs.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/pages/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/pages/confirmation/confirmation.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/store.component */ "./src/app/pages/store/store.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["ThankYouComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_7__["FaqComponent"],
                _careers_careers_component__WEBPACK_IMPORTED_MODULE_8__["CareersComponent"],
                _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_9__["AttributionComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__["JobsComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"],
                _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_13__["TermsOfUseComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__["PrivacyPolicyComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_18__["StoreComponent"]
            ],
            entryComponents: [_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__["JobsComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n  <section id=\"privacy-policy\" class=\"privacy-policy\">\r\n    <div class=\"container\">\r\n      <div class=\"row \">\r\n        <div class=\"outline col-12 col-lg-9 mx-auto\" >\r\n          <h1>Engagement de confidentialit&eacute; de Gazouyi</h1>\r\n          <br>\r\n          <p><strong>Date de r&eacute;daction: 13/05/2020</strong></p>\r\n          <p><strong>Derni&egrave;re modification: 27/05/2020</strong></p>\r\n          <br>\r\n          <p>Gazouyi est un livre pour b&eacute;b&eacute; s&eacute;curis&eacute; et partag&eacute; par toute la famille, dans lequel vous pouvez ajouter et rassembler tout ce qui concerne votre vie avec votre b&eacute;b&eacute;, des moments mignons de tous les jours &agrave; ceux qui repr&eacute;sentent une &eacute;tape importante de son d&eacute;veloppement. Mais votre Gazouyi est plus qu'un livre de b&eacute;b&eacute; passif. Il vous propose aussi &agrave; vous et &agrave; votre proche des id&eacute;es d&rsquo;activit&eacute;s adapt&eacute;es au d&eacute;veloppement de votre enfant, pour cr&eacute;er encore plus de ces grands moments.</p>\r\n          <p>Con&ccedil;ues par des experts, ces activit&eacute;s se veulent ludiques et appropri&eacute;es pour permettre &agrave; toutes les personnes qui s'occupent de l'enfant de participer et de s'amuser en cr&eacute;ant des liens avec l'enfant et en construisant des souvenirs inoubliables.</p>\r\n          <p>Comme Gazouyi est une entreprise de partage et de construction, nous nous engageons &agrave; vous donner la s&eacute;curit&eacute; et l'assurance concernant vos donn&eacute;es priv&eacute;es. Vos donn&eacute;es ne sont pas utilis&eacute;es pour servir des publicit&eacute;s ou vendues &agrave; des entreprises priv&eacute;es. Nous appliquons les normes de s&eacute;curit&eacute; et de confidentialit&eacute; les plus strictes pour vous prot&eacute;ger.</p>\r\n          <p>La protection de votre vie priv&eacute;e est une priorit&eacute; pour Gazouyi. C&rsquo;est la raison pour laquelle nous avons &eacute;labor&eacute; un engagement de confidentialit&eacute; qui r&eacute;git la mani&egrave;re dont nous recueillons, utilisons, transf&eacute;rons et stockons vos donn&eacute;es personnelles.</p>\r\n          <p>Veuillez prendre le temps de vous familiariser avec nos pratiques en mati&egrave;re de confidentialit&eacute; et n&rsquo;h&eacute;sitez pas &agrave; nous contacter si vous avez des questions.</p>\r\n          <p>Les responsables de traitement de vos donn&eacute;es personnelles sont M. Victor D&rsquo;herbemont (<u><a href=\"mailto:victor@gazouyi.com\" target=\"_blank\">victor@gazouyi.com</a></u>) et Xuan-Nga Cao (<u><a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></u>), co-fondateurs de Gazouyi.</p>\r\n          <h2>Votre Consentement</h2>\r\n          <p>L&rsquo;ensemble des donn&eacute;es sont collect&eacute;es sur la base de consentement. Gazouyi s&rsquo;est assur&eacute; de la validit&eacute; de votre consentement en vous expliquant lors du t&eacute;l&eacute;chargement de l&rsquo;application et de la cr&eacute;ation de votre compte, les conditions d&rsquo;utilisation. Vous avez la possibilit&eacute; de revenir sur ce consentement &agrave; tout moment.</p>\r\n          <h2>Qui a acc&egrave;s &agrave; quoi dans Gazouyi?</h2>\r\n          <p>Dans l&rsquo;application Gazouyi, il y a des utilisateurs et des familles. Les familles sont des groupes d&rsquo;utilisateurs qui partagent des informations de fa&ccedil;on priv&eacute;e &agrave; propos d&rsquo;un enfant. Lorsque vous arrivez sur l&rsquo;application Gazouyi, vous devez d&rsquo;abord cr&eacute;er un compte utilisateur, puis vous pouvez rejoindre ou cr&eacute;er une nouvelle famille.</p>\r\n          <ul>\r\n          <li>Si vous cr&eacute;ez une famille, vous &ecirc;tes alors le responsable de la famille et vous contr&ocirc;lez qui acc&egrave;de &agrave; votre espace et ce qui est partag&eacute;. Il ne peut y avoir qu&rsquo;un seul responsable par famille.</li>\r\n          </ul>\r\n          <ul>\r\n          <li>Si vous rejoignez une famille, vous &ecirc;tes alors un membre et vous pouvez contribuer &agrave; l&rsquo;espace et jouer aux activit&eacute;s.</li>\r\n          </ul>\r\n          <p>Les donn&eacute;es contribu&eacute;es par les membres de la famille appartiennent &agrave; cette famille et par cons&eacute;quent, au responsable de la famille qui peut ainsi d&eacute;cider de les supprimer de l&rsquo;espace.</p>\r\n          <p>L&rsquo;auteur d&rsquo;un contenu en est bien s&ucirc;r propri&eacute;taire et peut le supprimer ou le r&eacute;cup&eacute;rer mais ne peut pas s&rsquo;opposer si le responsable d&eacute;cide de le supprimer.</p>\r\n          <h2>Les donn&eacute;es que vous partagez dans Gazouyi</h2>\r\n          <h3>Quelles donn&eacute;es collectons-nous?</h3>\r\n          <p>Nous collectons <strong>des donn&eacute;es </strong>en respect avec la l&eacute;gislation europ&eacute;enne et fran&ccedil;aise en vigueur afin de vous garantir une utilisation optimale du service.</p>\r\n          <p><em>Gazouyi </em>collecte<strong> les donn&eacute;es n&eacute;cessaires </strong>au fonctionnement du service.</p>\r\n          <p>Ces donn&eacute;es sont:</p>\r\n          <ul>\r\n          <li>L'identit&eacute; (nom et pr&eacute;nom) et l'adresse email que vous renseignez sur votre compte utilisateur</li>\r\n          </ul>\r\n          <ul>\r\n          <li>L&rsquo;identit&eacute; (nom et pr&eacute;nom) et la date de naissance de l&rsquo;enfant que vous renseignez lors de la cr&eacute;ation du compte famille.</li>\r\n          </ul>\r\n          <h4>Les donn&eacute;es suivantes sont facultatives:</h4>\r\n          <ul>\r\n          <li>Autres informations sur l&rsquo;enfant, renseign&eacute;es pendant la cr&eacute;ation de compte<strong>:</strong></li>\r\n          </ul>\r\n          <ul>\r\n          <li>Photo de profil (peut &ecirc;tre ajout&eacute;e apr&egrave;s la cr&eacute;ation de compte)</li>\r\n          </ul>\r\n          <ul>\r\n          <li>genre de l&rsquo;enfant</li>\r\n          </ul>\r\n          <ul>\r\n          <li>Les donn&eacute;es de d&eacute;veloppement, renseign&eacute;es quand l&rsquo;utilisateur ajoute les mesures sur le dashboard</li>\r\n          </ul>\r\n          <ul>\r\n          <li>Les donn&eacute;es physiologiques (taille, poids) et celles rajout&eacute;es par l&rsquo;utilisateur lors de la cr&eacute;ation d&rsquo;&eacute;ventuels graphiques suppl&eacute;mentaires. Ces donn&eacute;es sont utilis&eacute;es pour tracer les courbes de suivi de l&rsquo;enfant qui sont uniquement accessibles par la famille.</li>\r\n          <li>Les souvenirs photos, vid&eacute;os et textes, ajout&eacute;s par les utilisateurs dans le baby book<strong>. </strong>Ces donn&eacute;es sont utilis&eacute;es pour construire le journal de naissance de l&rsquo;enfant qui peut &ecirc;tre ensuite partag&eacute; ou export&eacute; de l&rsquo;application.</li>\r\n          </ul>\r\n          <h3>A quel moment collectons-nous vos donn&eacute;es?</h3>\r\n          <p>Nous collectons l&rsquo;adresse mail et le pseudonyme au moment de la cr&eacute;ation de votre compte Gazouyi pour pouvoir vous identifier dans l&rsquo;application. Nous collectons une photo pour votre profil utilisateur, si vous en ajoutez une, au moment o&ugrave; vous l&rsquo;ajoutez dans les param&egrave;tres de votre compte.</p>\r\n          <p>Nous collectons le pseudonyme et la date de naissance de l&rsquo;enfant au moment de la cr&eacute;ation de la famille, ainsi qu&rsquo;&eacute;ventuellement l&rsquo;information sur son sexe et sa photo de profile.</p>\r\n          <p>Nous stockons vos photos et vid&eacute;os import&eacute;es sur notre cloud.</p>\r\n          <p>Nous collectons les informations de l'interaction avec nos contenus (telles les mesures et les activit&eacute;s effectu&eacute;es) que vous ajoutez et nous les s&eacute;curisons sur notre cloud. Seuls, les membres de la famille y ont acc&egrave;s.</p>\r\n          <p>Nous ne stockons aucune information de localisation.</p>\r\n          <p>Nous conservons l&rsquo;historique des connexions pour contr&ocirc;ler le trafic de Gazouyi et vous prot&eacute;ger d&rsquo;&eacute;ventuelles attaques.</p>\r\n          <h2>Le traitement de vos donn&eacute;es</h2>\r\n          <p>Les donn&eacute;es n&eacute;cessaires ne sont ni vendues &agrave; des entreprises priv&eacute;s, ni utilis&eacute;es pour faire de la publicit&eacute;. Ce sont vos donn&eacute;es et vous pouvez les r&eacute;cup&eacute;rer, supprimer ou modifier &agrave; tout moment dans l&rsquo;application.</p>\r\n          <p>Parmi vos donn&eacute;es de compte, la seule donn&eacute;e que l&rsquo;on utilise est l&rsquo;&acirc;ge de votre enfant pour adapter le contenu que l&rsquo;on vous propose et ainsi am&eacute;liorer votre exp&eacute;rience. Par exemple si votre enfant a 4 mois, nous n&rsquo;allons pas vous proposer une activit&eacute; ou un contenu qui est adapt&eacute; &agrave; un enfant de 3 ans.</p>\r\n          <p>Les donn&eacute;es facultatives pourraient &ecirc;tre analys&eacute;es par Gazouyi et &eacute;ventuellement par ses partenaires pour vous proposer un contenu adapt&eacute;. En effet, les donn&eacute;es li&eacute;es &agrave; votre utilisation de l&rsquo;application sont trait&eacute;es afin de mieux comprendre vos besoins et vous proposer un contenu adapt&eacute;. D&rsquo;autre part, ces donn&eacute;es li&eacute;es &agrave; votre interaction peuvent &ecirc;tre utilis&eacute;es pour r&eacute;aliser des &eacute;tudes d&rsquo;usage. Par exemple pour savoir quel activit&eacute; marche bien, quelle recette ne marche pas, etc.. Avant le traitement, toutes ces informations sont anonymis&eacute;es et les r&eacute;sultats sont aggr&eacute;g&eacute;s.</p>\r\n          <p><em>Par exemple:</em> si une activit&eacute; que nous vous avons propos&eacute;e ne vous pla&icirc;t pas, nous ne vous la proposerons plus. Ou bien si l&rsquo;on observe que vous appr&eacute;ciez particuli&egrave;rement les activit&eacute;s li&eacute;s au d&eacute;veloppement du langage, nous vous en proposerons plus.</p>\r\n          <h2>La conservation de vos donn&eacute;es</h2>\r\n          <h3>Comment conservons-nous vos donn&eacute;es ?</h3>\r\n          <p>Vos donn&eacute;es sont crypt&eacute;es puis conserv&eacute;es chez un prestataire cloud pour vous permettre de les acc&eacute;der &agrave; tout moment (pour les consulter, les supprimer ou les rectifier). Ces donn&eacute;es crypt&eacute;es ne permettent pas de vous identifier et elles ne pourront pas &ecirc;tre utilis&eacute;es par des tierces personnes.</p>\r\n          <h3>Combien de temps nous conservons vos donn&eacute;es?</h3>\r\n          <p>Les donn&eacute;es sont conserv&eacute;es sur les serveurs de <em>Gazouyi</em> jusqu&rsquo;&agrave; ce que l&rsquo;utilisateur ou le responsable de famille d&eacute;cide de les supprimer/modifier et &agrave; d&eacute;faut, apr&egrave;s 3 ans d&rsquo;inactivit&eacute; du compte<em> Gazouyi</em>.</p>\r\n          <h2>Vos droits sur vos donn&eacute;es</h2>\r\n          <p>Vous &ecirc;tes propri&eacute;taire de vos donn&eacute;es: elles vous sont donc accessibles &agrave; tout moment et vous d&eacute;cidez de leur usage.</p>\r\n          <h3>Comment avez-vous acc&egrave;s &agrave; vos donn&eacute;es ?</h3>\r\n          <ul>\r\n          <li>Vous pouvez acc&eacute;der &agrave; vos donn&eacute;es de fa&ccedil;on s&eacute;curis&eacute;e au sein de l&rsquo;app Gazouyi.</li>\r\n          </ul>\r\n          <ul>\r\n          <li>Vous pouvez partager ces donn&eacute;es &agrave; l&rsquo;ext&eacute;rieur de l&rsquo;app Gazouyi gr&acirc;ce &agrave; notre service <em><strong>Share it! </strong></em> qui vous permet de partager avec des gens ext&eacute;rieurs sur les r&eacute;seaux sociaux par exemple, tout en contr&ocirc;lant qui voit quand ces donn&eacute;es.</li>\r\n          <li>Vous pouvez nous faire la demande d&rsquo;exporter vos donn&eacute;es. Dans ce cas nous demandons un d&eacute;lai d&rsquo;une semaine afin de d&eacute;crypter, rassembler et organiser vos informations pour que vous puissiez les utiliser.</li>\r\n          </ul>\r\n          <h3>Quelles donn&eacute;es pouvez-vous rectifier ?</h3>\r\n          <p>Vous pouvez &agrave; tout moment demander la rectification de vos informations et de vos photos sur votre compte. Concernant vos informations personnelles, vous pouvez les modifier directement dans l&rsquo;application. Les photos publi&eacute;es dans le journal de souvenirs peuvent &ecirc;tre supprim&eacute;es mais ne sont pas modifiables.</p>\r\n          <h3>Quelles donn&eacute;es pouvez-vous supprimer?</h3>\r\n          <p>Vous pouvez &agrave; tout moment demander la suppression de vos donn&eacute;es &agrave; caract&egrave;re personnel en nous en faisant la demande directement &agrave; <u><a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></u> en renseignant votre adresse email de compte et votre nom</p>\r\n          <h3>Comment pouvez-vous exercer votre droit &agrave; la portabilit&eacute; des donn&eacute;es?</h3>\r\n          <p>Vous pouvez demander une copie de l&rsquo;ensemble de vos donn&eacute;es que vous avez fournies &agrave; Gazouyi en nous contactant &agrave; <u><a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></u> en sp&eacute;cifiant dans l'objet: &ldquo;Portabilit&eacute; de mes donn&eacute;es&rdquo; et en renseignant dans l&rsquo;email: votre email utilisateur.</p>\r\n          <p>La portabilit&eacute; de vos donn&eacute;es consiste &eacute;galement &agrave; accorder l&rsquo;acc&egrave;s de vos donn&eacute;es &agrave; un autre responsable de traitement.</p>\r\n          <h3>Que se passe-t-il lorsque Gazouyi souhaite supprimer vos donn&eacute;es?</h3>\r\n          <p>En cas d&rsquo;effacement de vos donn&eacute;es par Gazouyi, un email vous sera envoy&eacute; pour vous en informer. Vous pouvez exercer vos droits dans le d&eacute;lai indiqu&eacute; dans l&rsquo;email.</p>\r\n          <h3>Pouvez-vous retirer votre consentement?</h3>\r\n          <p>Vous pouvez &agrave; tout moment retirer votre consentement en nous envoyant un email &agrave; <u><a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></u>. Dans ce cas, nous supprimerons les donn&eacute;es de nos serveurs.</p>\r\n          <h2>Les destinataires de vos donn&eacute;es</h2>\r\n          <h3>Qui sont les destinataires de vos donn&eacute;es et pourquoi?</h3>\r\n          <ul>\r\n          <li>Votre famille: lorsque vous ajoutez un utilisateur &agrave; votre famille, vous partagez avec lui les donn&eacute;es relatives &agrave; votre famille et publi&eacute;es dans l&rsquo;application.</li>\r\n          </ul>\r\n          <ul>\r\n          <li>Vous pouvez &eacute;galement partager vos donn&eacute;es &agrave; l&rsquo;ext&eacute;rieur de l&rsquo;app Gazouyi gr&acirc;ce &agrave; notre service Share it! Cette fonctionnalit&eacute; vous permet de partager sur les r&eacute;seaux sociaux par exemple, tout en contr&ocirc;lant qui voit ces donn&eacute;es et pour quelle dur&eacute;e.</li>\r\n          <li>Les donn&eacute;es secondaires (issues de votre utilisation de de nos activit&eacute;s et autres contenus) sont utilis&eacute;s pour adapter le contenu que nous vous proposons et peuvent-&ecirc;tre utilis&eacute;s pour r&eacute;aliser des &eacute;tudes d&rsquo;usages (quelle activit&eacute; marche bien, etc&hellip;). Ces &eacute;tudes peuvent &ecirc;tre r&eacute;alis&eacute;s en collaboration avec nos partenaires</li>\r\n          </ul>\r\n          <p>Vos donn&eacute;es de compte personnelles et de familles (photos, vid&eacute;os, souvenirs, informations de profils) ne sont pas transmises ou vendues &agrave; des acteurs commerciaux ou publicitaires.</p>\r\n          <h2>Modification de notre politique de confidentialit&eacute;</h2>\r\n          <p>La pr&eacute;sente politique de confidentialit&eacute; est amen&eacute;e &agrave; &eacute;voluer occasionnellement. Nous vous en informerons et solliciterons votre accord via l&rsquo;application.</p>\r\n            \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-accent: #73cac3;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --color-fairy: #e1eaf0;\n  --color-rose: #D69292 ;\n  --text-very-dark: #184753;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #92A3AC;\n  --text-very-light: #c8cbce;\n  --text-white: #ffffff;\n  --filter-text-light: brightness(0) saturate(100%) invert(69%) sepia(16%) saturate(290%) hue-rotate(156deg) brightness(92%) contrast(82%);\n  --filter-text-medium: brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(465%) hue-rotate(155deg) brightness(91%) contrast(87%);\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-small: url('/assets/images/backgrounds/home02.png');\n  --background-blog: url('/assets/images/backgrounds/blog01.png');\n  --background-blog-small: url('/assets/images/backgrounds/blog02.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg');\n  --background-parents: url('/assets/images/backgrounds/parents01.png');\n  --background-parents-small: url('/assets/images/backgrounds/parents02.png');\n  --background-speech-bubble-left-top: url('/assets/images/illus/parents-speech-left-top.png');\n  --background-speech-bubble-left-bottom: url('/assets/images/illus/parents-speech-left-bottom.png');\n  --background-speech-bubble-right-top: url('/assets/images/illus/parents-speech-right-top.png');\n  --background-speech-bubble-right-bottom: url('/assets/images/illus/parents-speech-right-bottom.png');\n  --background-spacer: url('/assets/images/backgrounds/spacer.png');\n  --background-benefits: url('/assets/images/backgrounds/benefits-bkg.svg');\n  --background-feature: url('/assets/images/checkout/feature-pkg.svg');\n  --background-feature-round1: url('/assets/images/checkout/round1.svg');\n  --background-feature-round2: url('/assets/images/checkout/round2.svg');\n  --background-feature-round3: url('/assets/images/checkout/round3.svg');\n  --background-feature-round4: url('/assets/images/checkout/round4.svg');\n  --background-contact01: url('/assets/images/backgrounds/contact01.svg');\n  --background-login: url('/assets/images/backgrounds/login.svg'); }\n\n.privacy-policy {\n  padding-top: 150px; }\n\n.privacy-policy p {\n    margin-bottom: 0; }\n\n.privacy-policy ul > li {\n    list-style-type: disc;\n    font-size: 0.9em; }\n\n.privacy-policy h2 {\n    padding-top: 30px; }\n\n.privacy-policy h3 {\n    font-size: 1.5em;\n    padding-top: 5px; }\n\n.privacy-policy h4 {\n    font-size: 1.25em; }\n\n.privacy-policy .title {\n    padding-bottom: 50px; }\n\n.privacy-policy .outline {\n    padding-bottom: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmFjeS1wb2xpY3kvQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxHYXpvdXlpXFxzaXRlLXZpdHJpbmUvc3JjXFxhcHBcXGNvcmVcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJpdmFjeS1wb2xpY3kvQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxHYXpvdXlpXFxzaXRlLXZpdHJpbmUvc3JjXFxhcHBcXHBhZ2VzXFxwcml2YWN5LXBvbGljeVxccHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3QkFBYztFQUNkLHNCQUFhO0VBQ2IsMkJBQW9CO0VBQ3BCLDBCQUFtQjtFQUNuQix5QkFBZ0I7RUFDaEIsaUNBQXdCO0VBRXhCLGdDQUF1QjtFQUN2QixzQkFBYTtFQUNiLGtCQUFhO0VBRWIsd0JBQWU7RUFFZix1QkFBYztFQUNkLHNCQUFhO0VBQ2IseUJBQWdCO0VBQ2hCLHlCQUFnQjtFQUNoQix3QkFBZTtFQUNmLHNCQUFhO0VBQ2IsdUJBQWM7RUFDZCx1QkFBYTtFQUdiLDBCQUFpQjtFQUNqQixxQkFBWTtFQUNaLHVCQUFjO0VBQ2Qsc0JBQWE7RUFDYiwyQkFBa0I7RUFDbEIsc0JBQWE7RUFFYix5SUFBb0I7RUFDcEIsMElBQXFCO0VBRXJCLG1GQUEyQjtFQUMzQixtRUFBdUI7RUFDdkIscUVBQXdCO0VBRXhCLG1GQUFrQztFQUNsQyx1RkFBb0M7RUFDcEMsdUVBQXdCO0VBQ3hCLDRFQUE4QjtFQUM5QixnRUFBa0I7RUFDbEIsc0VBQXdCO0VBQ3hCLHFGQUErQjtFQUMvQiw4RUFBMEI7RUFDMUIsc0VBQXFCO0VBQ3JCLDRFQUEyQjtFQUMzQiw2RkFBb0M7RUFDcEMsbUdBQXVDO0VBQ3ZDLCtGQUFxQztFQUNyQyxxR0FBd0M7RUFDeEMsa0VBQW9CO0VBRXBCLDBFQUFzQjtFQUN0QixxRUFBcUI7RUFDckIsdUVBQTRCO0VBQzVCLHVFQUE0QjtFQUM1Qix1RUFBNEI7RUFDNUIsdUVBQTRCO0VBRzVCLHdFQUF1QjtFQUN2QixnRUFBbUIsRUFDdEI7O0FDaEVEO0VBQ0UsbUJBQWtCLEVBMEJuQjs7QUEzQkQ7SUFHSSxpQkFBZ0IsRUFDakI7O0FBSkg7SUFNSSxzQkFBcUI7SUFDckIsaUJBQWdCLEVBQ2pCOztBQVJIO0lBVUksa0JBQWlCLEVBQ2xCOztBQVhIO0lBYUksaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNqQjs7QUFmSDtJQWlCSSxrQkFBaUIsRUFDbEI7O0FBbEJIO0lBcUJJLHFCQUFvQixFQUNyQjs7QUF0Qkg7SUF5QkkscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC8vIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3ItYWNjZW50OiAjNzNjYWMzO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuICAgIC0tY29sb3ItZmFpcnk6ICNlMWVhZjA7XHJcbiAgICAtLWNvbG9yLXJvc2U6ICNENjkyOTIgO1xyXG5cclxuXHJcbiAgICAtLXRleHQtdmVyeS1kYXJrOiAjMTg0NzUzO1xyXG4gICAgLS10ZXh0LWRhcms6ICMwNzYwNzc7XHJcbiAgICAtLXRleHQtbWVkaXVtOiAjNWY3MDdhO1xyXG4gICAgLS10ZXh0LWxpZ2h0OiAjOTJBM0FDO1xyXG4gICAgLS10ZXh0LXZlcnktbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1maWx0ZXItdGV4dC1saWdodDogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNjklKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDI5MCUpIGh1ZS1yb3RhdGUoMTU2ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODIlKTtcclxuICAgIC0tZmlsdGVyLXRleHQtbWVkaXVtOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg0NSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoNDY1JSkgaHVlLXJvdGF0ZSgxNTVkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NyUpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXBhcnRuZXJzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcnRuZXJzLWRlZmF1bHQuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0uc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtMi5zdmcnKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZC1ob21lLXRlc3RpbW9uaWFsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3Rlc3RpbW9uaWFsLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1iYWJ5OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItY2xvdWRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2Nsb3Vkcy1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm86IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2hvbWUwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ibG9nOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Jsb2cwMS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ibG9nLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Jsb2cwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLW1vYmlsZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLW1vYmlsZS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1jb25zdHJ1Y3Rpb246IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29uc3RydWN0aW9uLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXBhcmVudHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFyZW50czAxLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXBhcmVudHMtc21hbGw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFyZW50czAyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtbGVmdC10b3A6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtbGVmdC10b3AucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1sZWZ0LWJvdHRvbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9wYXJlbnRzLXNwZWVjaC1sZWZ0LWJvdHRvbS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGVlY2gtYnViYmxlLXJpZ2h0LXRvcDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9wYXJlbnRzLXNwZWVjaC1yaWdodC10b3AucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1yaWdodC1ib3R0b206IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtcmlnaHQtYm90dG9tLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwYWNlcjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9zcGFjZXIucG5nJyk7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWJlbmVmaXRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2JlbmVmaXRzLWJrZy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L2ZlYXR1cmUtcGtnLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQxOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kMS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDIuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZS1yb3VuZDM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlY2tvdXQvcm91bmQzLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQ0OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kNC5zdmcnKTtcclxuXHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnRhY3QwMTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb250YWN0MDEuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtbG9naW46IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbG9naW4uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4ucHJpdmFjeS1wb2xpY3kge1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgdWw+bGl7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxuICBoMntcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICBoNHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxle1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5cclxuICAub3V0bGluZXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(translate) {
        this.translate = translate;
        this.bError = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
        this.points = [{
                MAIN_POINT: 'Loading...',
                DESCRIPTION: {
                    PARAGRAPH: ''
                }
            }];
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.PRIVACY-POLICY.OUTLINE.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
        this.translate.get('PAGES.PRIVACY-POLICY.OUTLINE').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.points = [{
                        MAIN_POINT: 'An error occured',
                        DESCRIPTION: {
                            PARAGRAPH: ''
                        }
                    }];
            }
            else {
                _this.points = res;
            }
        });
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/pages/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.scss */ "./src/app/pages/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section style=\"padding-top: 100px;\">\r\n\t<div *ngIf=\"!validated\">\r\n\t\t<div>\r\n\t\t\t<h3>Inscription</h3>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Email</label>\r\n\t\t\t<input [(ngModel)]=\"user.email\" />\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Prenom</label>\r\n\t\t\t<input [(ngModel)]=\"user.firstName\" />\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Nom</label>\r\n\t\t\t<input [(ngModel)]=\"user.name\" />\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<label>Mot de passe</label>\r\n\t\t\t<input type=\"password\" [(ngModel)]=\"user.password\" />\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<button (click)=\"signup()\">Valider</button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<a (click)=\"router.navigateByUrl('/pages/login')\"><u>J'ai déjà un compte</u></a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"validated\">\r\n\t\t<div>\r\n\t\t\t<h3>Votre inscription à bien été prise en compte</h3>\r\n\t\t\t<p>Souhaitez-vous dès maintenant acceder à Gazouyi Premium ?</p>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<div>\r\n\t\t\t\t<button (click)=\"gotopremium()\" >Pourquoi pas</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_user_mgmt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user-mgmt.service */ "./src/app/core/services/user-mgmt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(HttpClient, router, userMgmt) {
        this.HttpClient = HttpClient;
        this.router = router;
        this.userMgmt = userMgmt;
        this.user = {
            email: '',
            password: '',
            firstName: '',
            name: '',
        };
        this.validated = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.verif_email = function (email) {
        if (email === '') {
            alert('Vous devez renseigner une adresse email');
            return false;
        }
        return true;
    };
    SignupComponent.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hashedPassword, form, req, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.verif_email(this.user.email)) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        hashedPassword = crypto_js__WEBPACK_IMPORTED_MODULE_4__["SHA256"](this.user.password).toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Hex);
                        form = new FormData();
                        form.append('email', this.user.email);
                        form.append('password', hashedPassword);
                        form.append('name', this.user.name);
                        form.append('firstName', this.user.firstName);
                        return [4 /*yield*/, this.HttpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + "/users/create", form).toPromise()];
                    case 2:
                        req = _a.sent();
                        if (req['results'] == 'GOOD') {
                            // localStorage.setItem(this.userMgmt.tokenKey, this.user.email);
                            localStorage.setItem(this.userMgmt.tokenKey, req['token']);
                            localStorage.setItem(this.userMgmt.expDateKey, req['exp_date']);
                            this.router.navigateByUrl('/account/moncompte');
                        }
                        else {
                            alert(req['message']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        alert('Il y a eu une erreur, veuillez réessayer plus tard');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent.prototype.gotopremium = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigateByUrl('/pages/store');
                return [2 /*return*/];
            });
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_services_user_mgmt_service__WEBPACK_IMPORTED_MODULE_5__["UserMgmtService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/store/store.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/store/store.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section style=\"padding-top: 100px;\">\r\n\t<div>\r\n\t\t<button (click)=\"checkout('9.99')\" >Acheter Gazouyi Premium 1 mois</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button (click)=\"checkout('24.99')\" >Acheter Gazouyi Premium 3 mois</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button (click)=\"checkout('49.99')\" >Acheter Gazouyi Premium 6 mois</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button (click)=\"checkout('79.99')\" >Acheter Gazouyi Premium 1 an</button>\r\n\t</div>\r\n</section>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/store/store.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/store/store.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/store/store.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/store/store.component.ts ***!
  \************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var StoreComponent = /** @class */ (function () {
    function StoreComponent(httpClient) {
        this.httpClient = httpClient;
        this.email = '';
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent.prototype.checkout = function (price) {
        return __awaiter(this, void 0, void 0, function () {
            var stripePromise, stripe, formData, url, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].my_key);
                        return [4 /*yield*/, stripePromise];
                    case 1:
                        stripe = _a.sent();
                        formData = new FormData();
                        formData.append('priceTitle', price);
                        formData.append('premium', '1');
                        formData.append('email', localStorage.getItem('email'));
                        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + "/users/payment/init";
                        return [4 /*yield*/, this.httpClient.post(url, formData).toPromise()];
                    case 2:
                        req = _a.sent();
                        if (req['id']) {
                            stripe.redirectToCheckout({ sessionId: req['id'] });
                        }
                        else {
                            alert('Il y à eu une erreur, veuillez réessayer plus tard');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/pages/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/pages/store/store.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/pages/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header (messageEvent)=\"receiveMessage($event)\"></app-header>\r\n\r\n<!-- <section id=\"whole-team\" class=\"whole-team\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12 title-area\">\r\n          <h2 class=\"title\">{{ 'PAGES.TEAM.TITLE' | translate }}</h2>\r\n          <p>{{ 'PAGES.TEAM.SUBTITLE' | translate }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row col-10 mx-auto\">\r\n\r\n      <div class=\"gallery-item col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center\" *ngFor=\"let member of members\">\r\n        <mat-card class=\"gallery-card\">\r\n            <div class=\"team-avtar mx-auto\">\r\n                <img mat-card-image src=\"{{ member.IMG.SRC }}\" alt=\"{{ member.IMG.ALT }}\">\r\n            </div>\r\n\r\n            <mat-card-title>{{ member.NAME }}</mat-card-title>\r\n            <mat-card-subtitle>{{ member.DESCRIPTION }}</mat-card-subtitle>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n</section> -->\r\n\r\n<section id=\"whole-team\" class=\"whole-team\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row mt-5 pb-5\">\r\n        <div class=\"col-12 col-md-9 mx-auto\">\r\n          <div class=\"row text-center mb-3\">\r\n            <div class=\"col-12\">\r\n            <h2>{{ 'PAGES.MORE-ABOUT-US.TITLE' | translate }}</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-5\">\r\n            <div class=\"col-12\">\r\n            <p>{{ 'PAGES.MORE-ABOUT-US.INTRODUCTION2' | translate }}</p>\r\n            <p class=\"mt-2\">{{ 'PAGES.MORE-ABOUT-US.INTRODUCTION1' | translate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-5 bird d-flex justify-content-center align-items-center\">\r\n            <div class=\"mr-4 about-divider\"></div>\r\n              <img src=\"assets/images/illus/bird.png\" alt=\"yellow Gazouyi bird\">\r\n              <div class=\"ml-4 about-divider\"></div>\r\n          </div>\r\n          <div class=\"row VDH\">\r\n            <div class=\"col-8 col-md-3 mx-auto profile-image p-3\">\r\n                <img src=\"{{ 'PAGES.MORE-ABOUT-US.PERSON1.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.PERSON1.IMG.ALT' | translate }}\">\r\n            </div>\r\n            <div class=\"col-12 col-md-9 mx-auto p-3\">\r\n              <h3>{{ 'PAGES.MORE-ABOUT-US.PERSON1.NAME' | translate }}</h3>\r\n              <h5>{{ 'PAGES.MORE-ABOUT-US.PERSON1.POSITION' | translate }}</h5>\r\n              <p [innerHTML]=\"'PAGES.MORE-ABOUT-US.PERSON1.DESCRIPTION' | translate\"></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row salom pt-5 mb-5\">\r\n              <div class=\"col-8 col-md-3 mx-auto profile-image p-3\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.PERSON2.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.PERSON2.IMG.ALT' | translate }}\">\r\n              </div>\r\n              <div class=\"col-12 col-md-9 mx-auto p-3\">\r\n                <h3>{{ 'PAGES.MORE-ABOUT-US.PERSON2.NAME' | translate }}</h3>\r\n                <h5>{{ 'PAGES.MORE-ABOUT-US.PERSON2.POSITION' | translate }}</h5>\r\n                <p [innerHTML]=\"'PAGES.MORE-ABOUT-US.PERSON2.DESCRIPTION' | translate\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row XN pt-5 mb-5\">\r\n              <div class=\"col-8 col-md-3 mx-auto profile-image p-3\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.PERSON3.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.PERSON3.IMG.ALT' | translate }}\">\r\n              </div>\r\n              <div class=\"col-12 col-md-9 mx-auto p-3\">\r\n                <h3>{{ 'PAGES.MORE-ABOUT-US.PERSON3.NAME' | translate }}</h3>\r\n                <h5>{{ 'PAGES.MORE-ABOUT-US.PERSON3.POSITION' | translate }}</h5>\r\n                <p [innerHTML]=\"'PAGES.MORE-ABOUT-US.PERSON3.DESCRIPTION' | translate\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row XN pt-5 mb-5\">\r\n              <div class=\"col-8 col-md-3 mx-auto profile-image p-3\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.PERSON4.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.PERSON4.IMG.ALT' | translate }}\">\r\n              </div>\r\n              <div class=\"col-12 col-md-9 mx-auto p-3\">\r\n                <h3>{{ 'PAGES.MORE-ABOUT-US.PERSON4.NAME' | translate }}</h3>\r\n                <h5>{{ 'PAGES.MORE-ABOUT-US.PERSON4.POSITION' | translate }}</h5>\r\n                <p [innerHTML]=\"'PAGES.MORE-ABOUT-US.PERSON4.DESCRIPTION' | translate\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row XN pt-5 mb-5\">\r\n              <div class=\"col-8 col-md-3 mx-auto profile-image p-3\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.PERSON5.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.PERSON5.IMG.ALT' | translate }}\">\r\n              </div>\r\n              <div class=\"col-12 col-md-9 mx-auto p-3\">\r\n                <h3>{{ 'PAGES.MORE-ABOUT-US.PERSON5.NAME' | translate }}</h3>\r\n                <h5>{{ 'PAGES.MORE-ABOUT-US.PERSON5.POSITION' | translate }}</h5>\r\n                <p [innerHTML]=\"'PAGES.MORE-ABOUT-US.PERSON5.DESCRIPTION' | translate\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-5 bird d-flex justify-content-center align-items-center\">\r\n              <div class=\"mr-4 about-divider\"></div>\r\n                <img src=\"assets/images/illus/bird.png\" alt=\"yellow Gazouyi bird\">\r\n                <div class=\"ml-4 about-divider\"></div>\r\n            </div>\r\n            <div class=\"row text-center mb-3\">\r\n              <div class=\"col-12\">\r\n              <h3>{{ 'PAGES.MORE-ABOUT-US.TEAM' | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-5\">\r\n              <div class=\"col-8 col-md-5 mx-auto pb-2\">\r\n                <div class=\"mx-auto profile-image p-4\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR1.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR1.IMG.ALT' | translate }}\">\r\n                </div>\r\n                <div class=\"d-table mx-auto\">\r\n                  <h6>{{ 'PAGES.MORE-ABOUT-US.ADVISOR1.NAME' | translate }}</h6>\r\n                  <p><b>{{ 'PAGES.MORE-ABOUT-US.ADVISOR1.POSITION' | translate }}</b></p>\r\n                  <p>{{ 'PAGES.MORE-ABOUT-US.ADVISOR1.DESCRIPTION' | translate }}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8 col-md-5 mx-auto pb-2\">\r\n                <div class=\"mx-auto profile-image p-4\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR2.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR2.IMG.ALT' | translate }}\">\r\n                </div>\r\n                <div class=\"d-table mx-auto\">\r\n                  <h6>{{ 'PAGES.MORE-ABOUT-US.ADVISOR2.NAME' | translate }}</h6>\r\n                  <p><b>{{ 'PAGES.MORE-ABOUT-US.ADVISOR2.POSITION' | translate }}</b></p>\r\n                  <p>{{ 'PAGES.MORE-ABOUT-US.ADVISOR2.DESCRIPTION' | translate }}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8 col-md-5 mx-auto pb-2\">\r\n                <div class=\"mx-auto profile-image p-4\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR3.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR3.IMG.ALT' | translate }}\">\r\n                </div>\r\n                <div class=\"d-table mx-auto\">\r\n                  <h6>{{ 'PAGES.MORE-ABOUT-US.ADVISOR3.NAME' | translate }}</h6>\r\n                  <p><b>{{ 'PAGES.MORE-ABOUT-US.ADVISOR3.POSITION' | translate }}</b></p>\r\n                  <p>{{ 'PAGES.MORE-ABOUT-US.ADVISOR3.DESCRIPTION' | translate }}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-8 col-md-5 mx-auto pb-2\">\r\n                <div class=\"mx-auto profile-image p-4\">\r\n                  <img src=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR4.IMG.SRC' | translate }}\" alt=\"{{ 'PAGES.MORE-ABOUT-US.ADVISOR4.IMG.ALT' | translate }}\">\r\n                </div>\r\n                <div class=\"d-table mx-auto\">\r\n                  <h6>{{ 'PAGES.MORE-ABOUT-US.ADVISOR4.NAME' | translate }}</h6>\r\n                  <p><b>{{ 'PAGES.MORE-ABOUT-US.ADVISOR4.POSITION' | translate }}</b></p>\r\n                  <p>{{ 'PAGES.MORE-ABOUT-US.ADVISOR4.DESCRIPTION' | translate }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </section>\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/team/team.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/team/team.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-accent: #73cac3;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --color-fairy: #e1eaf0;\n  --color-rose: #D69292 ;\n  --text-very-dark: #184753;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #92A3AC;\n  --text-very-light: #c8cbce;\n  --text-white: #ffffff;\n  --filter-text-light: brightness(0) saturate(100%) invert(69%) sepia(16%) saturate(290%) hue-rotate(156deg) brightness(92%) contrast(82%);\n  --filter-text-medium: brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(465%) hue-rotate(155deg) brightness(91%) contrast(87%);\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-small: url('/assets/images/backgrounds/home02.png');\n  --background-blog: url('/assets/images/backgrounds/blog01.png');\n  --background-blog-small: url('/assets/images/backgrounds/blog02.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg');\n  --background-parents: url('/assets/images/backgrounds/parents01.png');\n  --background-parents-small: url('/assets/images/backgrounds/parents02.png');\n  --background-speech-bubble-left-top: url('/assets/images/illus/parents-speech-left-top.png');\n  --background-speech-bubble-left-bottom: url('/assets/images/illus/parents-speech-left-bottom.png');\n  --background-speech-bubble-right-top: url('/assets/images/illus/parents-speech-right-top.png');\n  --background-speech-bubble-right-bottom: url('/assets/images/illus/parents-speech-right-bottom.png');\n  --background-spacer: url('/assets/images/backgrounds/spacer.png');\n  --background-benefits: url('/assets/images/backgrounds/benefits-bkg.svg');\n  --background-feature: url('/assets/images/checkout/feature-pkg.svg');\n  --background-feature-round1: url('/assets/images/checkout/round1.svg');\n  --background-feature-round2: url('/assets/images/checkout/round2.svg');\n  --background-feature-round3: url('/assets/images/checkout/round3.svg');\n  --background-feature-round4: url('/assets/images/checkout/round4.svg');\n  --background-contact01: url('/assets/images/backgrounds/contact01.svg');\n  --background-login: url('/assets/images/backgrounds/login.svg'); }\n\n.whole-team {\n  padding-top: 80px; }\n\n.whole-team h6, .whole-team p {\n    margin-bottom: 0 !important; }\n\n.whole-team .profile-image img {\n    border-radius: 5px;\n    width: 100%;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.whole-team .bird img {\n    width: 45px; }\n\n.whole-team .about-divider {\n    width: 35px;\n    background-color: var(--color-ocean);\n    height: 10px;\n    border-radius: 5px; }\n\n.whole-team .title {\n    padding-top: 50px; }\n\n.whole-team .title-area {\n    padding-bottom: 30px; }\n\n.whole-team .gallery-item {\n    margin-bottom: 30px;\n    display: flex;\n    align-items: stretch;\n    width: 100%; }\n\n.whole-team .gallery-item p {\n      margin-bottom: 0; }\n\n.whole-team .gallery-item .gallery-card {\n      width: 100%; }\n\n.whole-team .gallery-background {\n    padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXHNpdGUtdml0cmluZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWFtL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcc2l0ZS12aXRyaW5lL3NyY1xcYXBwXFxwYWdlc1xcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdCQUFjO0VBQ2Qsc0JBQWE7RUFDYiwyQkFBb0I7RUFDcEIsMEJBQW1CO0VBQ25CLHlCQUFnQjtFQUNoQixpQ0FBd0I7RUFFeEIsZ0NBQXVCO0VBQ3ZCLHNCQUFhO0VBQ2Isa0JBQWE7RUFFYix3QkFBZTtFQUVmLHVCQUFjO0VBQ2Qsc0JBQWE7RUFDYix5QkFBZ0I7RUFDaEIseUJBQWdCO0VBQ2hCLHdCQUFlO0VBQ2Ysc0JBQWE7RUFDYix1QkFBYztFQUNkLHVCQUFhO0VBR2IsMEJBQWlCO0VBQ2pCLHFCQUFZO0VBQ1osdUJBQWM7RUFDZCxzQkFBYTtFQUNiLDJCQUFrQjtFQUNsQixzQkFBYTtFQUViLHlJQUFvQjtFQUNwQiwwSUFBcUI7RUFFckIsbUZBQTJCO0VBQzNCLG1FQUF1QjtFQUN2QixxRUFBd0I7RUFFeEIsbUZBQWtDO0VBQ2xDLHVGQUFvQztFQUNwQyx1RUFBd0I7RUFDeEIsNEVBQThCO0VBQzlCLGdFQUFrQjtFQUNsQixzRUFBd0I7RUFDeEIscUZBQStCO0VBQy9CLDhFQUEwQjtFQUMxQixzRUFBcUI7RUFDckIsNEVBQTJCO0VBQzNCLDZGQUFvQztFQUNwQyxtR0FBdUM7RUFDdkMsK0ZBQXFDO0VBQ3JDLHFHQUF3QztFQUN4QyxrRUFBb0I7RUFFcEIsMEVBQXNCO0VBQ3RCLHFFQUFxQjtFQUNyQix1RUFBNEI7RUFDNUIsdUVBQTRCO0VBQzVCLHVFQUE0QjtFQUM1Qix1RUFBNEI7RUFHNUIsd0VBQXVCO0VBQ3ZCLGdFQUFtQixFQUN0Qjs7QUMvREQ7RUFDRSxrQkFBaUIsRUF5RGxCOztBQTFERDtJQUtJLDRCQUEyQixFQUM1Qjs7QUFOSDtJQVVNLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsNkVBQXNFLEVBQ3ZFOztBQWJMO0lBa0JNLFlBQVcsRUFDWjs7QUFuQkw7SUF1QkksWUFBVztJQUNYLHFDQUFvQztJQUNwQyxhQUFZO0lBQ1osbUJBQWtCLEVBQ25COztBQTNCSDtJQThCSSxrQkFBaUIsRUFDbEI7O0FBL0JIO0lBa0NJLHFCQUFvQixFQUNyQjs7QUFuQ0g7SUF1Q0ksb0JBQW1CO0lBQ25CLGNBQWE7SUFDYixxQkFBb0I7SUFDcEIsWUFBVyxFQVNaOztBQW5ESDtNQTZDTSxpQkFBZ0IsRUFDakI7O0FBOUNMO01BaURNLFlBQVcsRUFDWjs7QUFsREw7SUF1REksYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9sbG93IGFuZ3VsYXIgbWF0ZXJpYWwgdGhlbWUgY2xhc3MgYXBwbGllZCBvbiBib2R5XHJcbi8vIEZvciBtb3IgZGV0YWlscyBjaGVjayBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci90aGUtY29sb3Itc3lzdGVtLmh0bWwjY29sb3ItdGhlbWUtY3JlYXRpb25cclxuXHJcbi5kZWZhdWx0IHtcclxuICAgIC0tY29sb3ItdGl0bGU6ICAjMzQzNDNDO1xyXG4gICAgLS1jb2xvci10ZXh0OiAjNzc3Nzc3O1xyXG4gICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRDlFRUYzO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6ICM3MGEyZjI7XHJcbiAgICAvLyAtLWNvbG9yLWFjY2VudDogI2ZmYTg5YztcclxuICAgIC0tY29sb3ItYWNjZW50LXZhcmlhbnQ6ICMzOTZhYzU7XHJcbiAgICAtLWNvbG9yLWdyYXk6ICNmNGY0ZjQ7XHJcbiAgICAtLWNvbG9yLXdhcm46IHJlZDtcclxuXHJcbiAgICAtLWNvbG9yLWFjY2VudDogIzczY2FjMztcclxuXHJcbiAgICAtLWNvbG9yLW9jZWFuOiAjMTI3ZTliO1xyXG4gICAgLS1jb2xvci1iZWF1OiAjYzJkOGUzO1xyXG4gICAgLS1jb2xvci1iYXlzaWRlOiAjNzNjYWMzO1xyXG4gICAgLS1jb2xvci1ibG9zc29tOiAjZmNkMmMwO1xyXG4gICAgLS1jb2xvci1nb2xkZW46ICNmY2Q0ODU7XHJcbiAgICAtLWNvbG9yLW1pbnQ6ICNjNWU2ZGE7XHJcbiAgICAtLWNvbG9yLWZhaXJ5OiAjZTFlYWYwO1xyXG4gICAgLS1jb2xvci1yb3NlOiAjRDY5MjkyIDtcclxuXHJcblxyXG4gICAgLS10ZXh0LXZlcnktZGFyazogIzE4NDc1MztcclxuICAgIC0tdGV4dC1kYXJrOiAjMDc2MDc3O1xyXG4gICAgLS10ZXh0LW1lZGl1bTogIzVmNzA3YTtcclxuICAgIC0tdGV4dC1saWdodDogIzkyQTNBQztcclxuICAgIC0tdGV4dC12ZXJ5LWxpZ2h0OiAjYzhjYmNlO1xyXG4gICAgLS10ZXh0LXdoaXRlOiAjZmZmZmZmO1xyXG5cclxuICAgIC0tZmlsdGVyLXRleHQtbGlnaHQ6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDY5JSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSgyOTAlKSBodWUtcm90YXRlKDE1NmRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDgyJSk7XHJcbiAgICAtLWZpbHRlci10ZXh0LW1lZGl1bTogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNDUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDQ2NSUpIGh1ZS1yb3RhdGUoMTU1ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODclKTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1kZWZhdWx0LnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbTIuc3ZnJyk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQtaG9tZS10ZXN0aW1vbmlhbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZXN0aW1vbmlhbC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItYmFieTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWNsb3VkczogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9jbG91ZHMtbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmcucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1zbWFsbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ob21lMDIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtYmxvZzogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ibG9nMDEucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtYmxvZy1zbWFsbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9ibG9nMDIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1tb2JpbGU6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy1tb2JpbGUucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtY29uc3RydWN0aW9uOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2NvbnN0cnVjdGlvbi5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1wYXJlbnRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcmVudHMwMS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1wYXJlbnRzLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcmVudHMwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGVlY2gtYnViYmxlLWxlZnQtdG9wOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL3BhcmVudHMtc3BlZWNoLWxlZnQtdG9wLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtbGVmdC1ib3R0b206IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtbGVmdC1ib3R0b20ucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1yaWdodC10b3A6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtcmlnaHQtdG9wLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtcmlnaHQtYm90dG9tOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL3BhcmVudHMtc3BlZWNoLXJpZ2h0LWJvdHRvbS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGFjZXI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvc3BhY2VyLnBuZycpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1iZW5lZml0czogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZW5lZml0cy1ia2cuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9mZWF0dXJlLXBrZy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kMTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDEuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZS1yb3VuZDI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlY2tvdXQvcm91bmQyLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kMy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kNDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDQuc3ZnJyk7XHJcblxyXG5cclxuICAgIC0tYmFja2dyb3VuZC1jb250YWN0MDE6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29udGFjdDAxLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWxvZ2luOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2xvZ2luLnN2ZycpO1xyXG59XHJcblxyXG4vLyAubmlnaHQge1xyXG4vLyAgICAgLS1jb2xvci10aXRsZTogIHJlZDtcclxuLy8gICAgIC0tY29sb3ItdGV4dDogcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbi8vICAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGJsdWU7XHJcbi8vICAgICAtLWNvbG9yLXByaW1hcnk6IDtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeS12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudDogO1xyXG4vLyAgICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogO1xyXG4vLyAgICAgLS1jb2xvci13YXJuOiA7XHJcblxyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1uaWdodC5zdmcnKTtcclxuLy8gfVxyXG4iLCJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuXHJcbi53aG9sZS10ZWFtIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibG9zc29tKTtcclxuICBcclxuICBoNixwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJvZmlsZS1pbWFnZXtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGltZ3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iaXJke1xyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogNDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hYm91dC1kaXZpZGVye1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vY2Vhbik7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1hcmVhe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZ2FsbGVyeS1pdGVte1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5nYWxsZXJ5LWNhcmR7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdhbGxlcnktYmFja2dyb3VuZHtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMCA2NXB4IDAgJGNvbG9yX3NpbHZlcl9jaGFsaWNlXzI1O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party


window.addEventListener('scroll', function () {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY + "px");
});
var TeamComponent = /** @class */ (function () {
    function TeamComponent(translate, dialog) {
        this.translate = translate;
        this.dialog = dialog;
        this.bError = false;
        // Team Carousel
        this.members = [{
                NAME: 'Loading',
                DESCRIPTION: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
    }
    TeamComponent.prototype.receiveMessage = function ($event) {
        this.message = $event;
        if (this.message) {
            var scrollY_1 = document.documentElement.style.getPropertyValue('--scroll-y');
            var body = document.body;
            body.style.position = 'fixed';
            body.style.top = "-" + scrollY_1;
        }
        else {
            var body = document.body;
            var scrollY_2 = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY_2 || '0') * -1);
        }
    };
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.TEAM.MEMBERS').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.members = [{
                        NAME: 'An error occured',
                        DESCRIPTION: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                _this.members = res;
            }
        });
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/pages/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/pages/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n  <section id=\"terms-of-use\" class=\"terms-of-use\">\r\n    <div class=\"container\">\r\n      <div class=\"row \">\r\n        <div class=\"outline col-12 col-lg-9 mx-auto\" >\r\n            \r\n            <h1>CGU de l&rsquo;application Gazouyi</h1>\r\n            <br>\r\n            <p><strong>Date de r&eacute;daction: 13/05/2020</strong></p>\r\n            <p><strong>Derni&egrave;re modification: 27/05/2020</strong></p>\r\n            <br>\r\n            <h2>1. Mentions l&eacute;gales</h2>\r\n            <h3>Conform&eacute;ment aux dispositions de l&rsquo;article 6 III 1&deg; de la loi n&deg;2004-575 du 21 juin 2004 pour la confiance dans l&rsquo;&eacute;conomie num&eacute;rique, nous vous informons que:</h3>\r\n            <p>L'application <em>Gazouyi</em> est &eacute;dit&eacute;e par &ldquo;<em>Gazouyi</em>&rdquo; situ&eacute; au 12 rue Simone Iff, 75012 Paris cedex 12.</p>\r\n            <br>\r\n            <p>Directeur de publication: Victor D&rsquo;herbemont&nbsp;</p>\r\n            <p>Mail: <a href=\"mailto:victor@gazouyi.com\" target=\"_blank\">victor@gazouyi.com</a></p>\r\n            <p>Telephone: 06 67 69 16 64</p>\r\n            <br>\r\n            <p>Responsables de traitement: Xuan-Nga Cao et Victor d&rsquo;Herbemont</p>\r\n            <p>mail: <u><a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></u> /<u><a href=\"mailto:victor@gazouyi.com\" target=\"_blank\">victor@gazouyi.com</a></u></p>\r\n            <br>\r\n            <p>D&eacute;l&eacute;gu&eacute;e &agrave; la protection des donn&eacute;es: Xuan-Nga Cao</p>\r\n            <p>mail: <a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></p>\r\n            <br>\r\n            <p>Notre prestataire de service pour le stockage est Amazon Web Service (AWS) depuis ses serveurs localis&eacute;s &agrave; Paris (zone 1).</p>\r\n            <p>&nbsp;</p>\r\n            <h2>2. Objet CGU</h2>\r\n            <h3>2.1. Utilisation</h3>\r\n            <p>Les CGU visent &agrave; r&eacute;gir l&rsquo;utilisation de l&rsquo;application par tout utilisateur.</p>\r\n            <p>En naviguant sur l&rsquo;application, <strong>vous reconnaissez avoir pris pleinement connaissance et sans r&eacute;serve </strong><strong>d</strong><strong>es pr&eacute;sentes CGU de l</strong><strong>&rsquo;</strong><strong>application. Pour plus de d&eacute;tails sur notre politique de confidentialit&eacute; vous pouvez la lire ici.</strong><strong><sup>[METTRE LIEN]</sup></strong></p>\r\n            <h3>2.2. Mise &agrave; jour des CGU</h3>\r\n            <p><em>Gazouyi </em>est libre de modifier les CGU afin notamment de prendre en compte toute &eacute;volution l&eacute;gale, r&eacute;glementaire, jurisprudentielle et/ou technique. La version qui pr&eacute;vaut est celle qui est accessible en ligne au jour de la navigation sur le site. Tout utilisateur est donc tenu de se r&eacute;f&eacute;rer &agrave; la version en vigueur &agrave; la date de sa navigation.</p>\r\n            <h2>3. D&eacute;finitions</h2>\r\n            <p><strong>RGPD</strong> (R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es &agrave; caract&egrave;re personnel): D&eacute;signe la l&eacute;gislation europ&eacute;enne en vigueur depuis le 25 mai 2018 en mati&egrave;re de protection des donn&eacute;es personnelles.</p>\r\n            <p><strong>Editeur</strong>: D&eacute;signe la personne responsable du contenu pr&eacute;sent sur l&rsquo;application.</p>\r\n            <p><strong>Plateforme</strong>: D&eacute;signe la plateforme mobile ou web, collaborative <em>Gazouyi</em>.</p>\r\n            <p><strong>Utilisateur</strong>: Personne ayant cr&eacute;&eacute; un compte sur la plateforme mobile ou web de <em>Gazouyi</em>.</p>\r\n            <p><strong>Famille</strong>: Groupe d&rsquo;utilisateurs partageant des informations sur un enfant.</p>\r\n            <p><strong>Responsable de famille</strong>: Utilisateur ayant cr&eacute;&eacute; une famille et contr&ocirc;lant les acc&egrave;s et les contenus partag&eacute;s. Il/elle doit &ecirc;tre titulaire de l&rsquo;autorit&eacute; parentale.</p>\r\n            <p><strong>Baby Book:</strong> D&eacute;signe la fonctionnalit&eacute; permettant de construire les souvenirs se rapportant &agrave; l&rsquo;enfant avec des photos, vid&eacute;os et autres souvenirs. Dans l&rsquo;application elle est organis&eacute;e sous la forme d&rsquo;un calendrier de souvenirs collaboratif partag&eacute; par des membres d&rsquo;une m&ecirc;me famille.</p>\r\n            <p><strong>Dashboard</strong><strong>:</strong> D&eacute;signe la page regroupant les informations contenues dans l&rsquo;application et ajout&eacute;es par les Utilisateurs</p>\r\n            <p><strong>D</strong><strong>onn&eacute;e &agrave; caract&egrave;re personnel</strong><strong>:</strong> D&eacute;signe toute information permettant d&rsquo;identifier directement ou indirectement une personne physique (enregistrement audio, nom, pr&eacute;nom etc..).</p>\r\n            <p><strong>Donn&eacute;e &agrave; caract&egrave;re non personnel:</strong> D&eacute;signe toute information ne permettant pas d&rsquo;identifier directement ou indirectement une personne physique (courbe physiologiques, enregistrements d&rsquo;activit&eacute;s, ..).</p>\r\n            <p><strong>DP</strong><strong>D</strong>: D&eacute;l&eacute;gu&eacute; &agrave; la protection des donn&eacute;es en charge d&rsquo;assurer le respect de la confidentialit&eacute; des donn&eacute;es personnelles collect&eacute;es et trait&eacute;es dans le cadre de <em>Gazouyi</em>.</p>\r\n            <p><strong>CNIL:</strong> La Commission Nationale Informatique et Libert&eacute; est une autorit&eacute; administrative ind&eacute;pendante qui veille au respect des l&eacute;gislations sur les donn&eacute;es &agrave; caract&egrave;re personnel.</p>\r\n            <p><strong>Token</strong>: Cha&icirc;ne de caract&egrave;re associ&eacute;e &agrave; un utilisateur qui permet de l&rsquo;identifier dans l&rsquo;application et donc de lui donner acc&egrave;s aux informations lui correspondant.</p>\r\n            <p><strong>Identifiant famille</strong>: Cha&icirc;ne de caract&egrave;re identifiant une famille, permettant aux utilisateurs de partager des informations communes.</p>\r\n            <h2>4. Votre compte</h2>\r\n            <p>Pour acc&eacute;der &agrave; votre compte <em>Gazouyi</em>, vous devez renseigner votre adresse email et votre mot de passe dans les champs correspondants. Une fois connect&eacute;.e, vous pouvez cr&eacute;er une famille ou rejoindre une famille d&eacute;j&agrave; existante.</p>\r\n            <p>Dans une famille, vous pouvez acc&eacute;der aux fonctionnalit&eacute;s suivantes:</p>\r\n            <ul>\r\n            <li>Importer des souvenirs de l&rsquo;enfant sur l&rsquo;application via photos, vid&eacute;os, textes</li>\r\n            <li>Suivre l&rsquo;&eacute;volution des progr&egrave;s de l&rsquo;enfant via l&rsquo;application</li>\r\n            <li>G&eacute;rer votre profil utilisateur (ajouter une photo, changer votre email ou votre mot de passe)</li>\r\n            <li>Jouer aux activit&eacute;s propos&eacute;es dans la partie &ldquo;Playground&rdquo; de l&rsquo;application</li>\r\n            </ul>\r\n            <p>Si vous &ecirc;tes un responsable de famille, vous pouvez aussi acc&eacute;der aux fonctionnalit&eacute;s suivantes:</p>\r\n            <ul>\r\n            <li>Ajouter ou supprimer des utilisateurs &agrave; votre espace</li>\r\n            <li>Supprimer du contenu</li>\r\n            </ul>\r\n            <h4>La session unique:</h4>\r\n            <p>Un utilisateur peut se connecter de fa&ccedil;on s&eacute;curis&eacute;e &agrave; son compte gr&acirc;ce &agrave; un token, qui est associ&eacute; &agrave; une session unique. Ce token a une dur&eacute;e de validit&eacute; de 2h. Une fois la date d'expiration d&eacute;pass&eacute;e, l&rsquo;utilisateur devra de nouveau prouver son identit&eacute; en entrant son email et mot de passe.</p>\r\n            <h2>5. Donn&eacute;es personnelles</h2>\r\n            <h3>5.1. Finalit&eacute; du traitement</h3>\r\n            <p>L&rsquo;ensemble des donn&eacute;es sont collect&eacute;es sur la base de consentement.</p>\r\n            <p><strong>La finalit&eacute; du traitement</strong> est de s&eacute;curiser, d&rsquo;organiser et de partager les informations autour de l&rsquo;enfant entre les membres d&rsquo;une m&ecirc;me famille. Les informations peuvent &ecirc;tre physiologiques (poids, tailles, etc..), li&eacute;s &agrave; la vie de tous les jours (photos, vid&eacute;os, plus g&eacute;n&eacute;ralement souvenirs) ou au d&eacute;veloppement (&eacute;tapes de d&eacute;veloppement acquis, activit&eacute;s jou&eacute;es). L&rsquo;ensemble des donn&eacute;es sont collect&eacute;es sur la base de consentement.</p>\r\n            <p>L&rsquo;application <em>Gazouyi</em> est aussi un espace de partage pour des informations sur la petite enfance en g&eacute;n&eacute;ral. Chaque utilisateur peut partager une activit&eacute;, un article, une information qu&rsquo;il peut ensuite faire profiter &agrave; la communaut&eacute;. Le r&ocirc;le de l&rsquo;&eacute;quipe de <em>Gazouyi</em> est de contr&ocirc;ler et d&rsquo;organiser ces informations, qui seront sont ensuite publi&eacute;es dans l&rsquo;application.</p>\r\n            <h3>5.2. Personnes concern&eacute;es</h3>\r\n            <p>Familles de jeunes enfants (entre 0 et 5 ans) et professionnels de la petite enfance.</p>\r\n            <h3>5.3. Donn&eacute;es collect&eacute;es</h3>\r\n            <p><em>Gazouyi </em>collecte<strong> les donn&eacute;es n&eacute;cessaires </strong>au fonctionnement du service.</p>\r\n            <p>Ces donn&eacute;es sont:</p>\r\n            <ul>\r\n            <li>L'identit&eacute; (nom et pr&eacute;nom) et l'adresse email que vous renseignez sur votre compte utilisateur</li>\r\n            <li>L&rsquo;identit&eacute; (nom et pr&eacute;nom) et la date de naissance de l&rsquo;enfant que vous renseignez lors de la cr&eacute;ation du compte famille.</li>\r\n            </ul>\r\n            <h4>Les donn&eacute;es suivantes sont facultatives:</h4>\r\n            <ul>\r\n            <li>Autres informations sur l&rsquo;enfant, renseign&eacute;es pendant la cr&eacute;ation de compte<strong>:</strong></li>\r\n            <li>Photo de profil (peut &ecirc;tre ajout&eacute;e apr&egrave;s la cr&eacute;ation de compte)</li>\r\n            <li>genre de l&rsquo;enfant</li>\r\n            <li>Les donn&eacute;es de d&eacute;veloppement, renseign&eacute;es quand l&rsquo;utilisateur ajoute les mesures sur le dashboard</li>\r\n            <li>Les donn&eacute;es physiologiques (taille, poids) et celles rajout&eacute;es par l&rsquo;utilisateur lors de la cr&eacute;ation d&rsquo;&eacute;ventuels graphiques suppl&eacute;mentaires. Ces donn&eacute;es sont utilis&eacute;es pour tracer les courbes de suivi de l&rsquo;enfant qui sont uniquement accessibles par la famille.</li>\r\n            <li>Les souvenirs photos, vid&eacute;os et textes, ajout&eacute;s par les utilisateurs dans le baby book<strong>. </strong>Ces donn&eacute;es sont utilis&eacute;es pour construire le journal de naissance de l&rsquo;enfant qui peut &ecirc;tre ensuite partag&eacute; ou export&eacute; de l&rsquo;application.</li>\r\n            <li>Les photos de profil utilisateur: ces donn&eacute;es sont utilis&eacute;es pour repr&eacute;senter un utilisateur dans l&rsquo;application.</li>\r\n            </ul>\r\n            <p>L&rsquo;application <em>Gazouyi</em> <strong>ne fait pas l&rsquo;usage de cookies</strong> pour collecter des donn&eacute;es &agrave; des fins publicitaires ou commerciales. L&rsquo;application n&rsquo;utilise pas non plus de cookies pour le fonctionnement de l&rsquo;application.</p>\r\n            <h2>6. Traitement des donn&eacute;es</h2>\r\n            <p>Comme indiqu&eacute; ci-dessus, nous ne vendons ni analysons vos donn&eacute;es personnelles (donn&eacute;es primaires). Nous traiterons les informations relatives &agrave; votre comportement, vos dispositifs et vos interactions aux fins suivantes :</p>\r\n            <ul>\r\n            <li>Fournir, maintenir, prot&eacute;ger et am&eacute;liorer les produits et services, et en d&eacute;velopper de nouveaux :</li>\r\n            <li>Par exemple, les informations sur la mani&egrave;re dont vous naviguez sur nos sites web et applications ou dont vous recherchez des produits peuvent &ecirc;tre utilis&eacute;es pour l'analyse des donn&eacute;es et la recherche, pour offrir de meilleurs parcours aux utilisateurs, fournir des r&eacute;sultats de recherche plus pertinents ou structurer la mani&egrave;re dont les informations sont pr&eacute;sent&eacute;es dans nos services.</li>\r\n            <li>Par exemple votre utilisation de nos activit&eacute;s propos&eacute;s sur l&rsquo;application sont analys&eacute;s afin de comprendre celle qui vous correspondent le plus et</li>\r\n            <li>Pour am&eacute;liorer votre exp&eacute;rience d'utilisateur et la qualit&eacute; globale de nos services</li>\r\n            <li>Votre activit&eacute; telle que les pages que vous visitez ou les &eacute;l&eacute;ments que vous visualisez nous apprend ce que vous trouvez important et le plus int&eacute;ressant pour vous sur nos Services afin que nous puissions adapter votre exp&eacute;rience &agrave; ce qui vous importe le plus et afficher un contenu personnalis&eacute;.</li>\r\n            </ul>\r\n            <p>Le stockage des donn&eacute;es en local sur votre appareil nous permet d'am&eacute;liorer des &eacute;l&eacute;ments tels que les performances du site web et le chargement de contenu m&ecirc;me lorsque vous &ecirc;tes hors ligne.</p>\r\n            <h2>7. Destinataire des donn&eacute;es</h2>\r\n            <p>Toutes les donn&eacute;es confi&eacute;es &agrave; <em>Gazouyi</em> ou bien calcul&eacute;es par <em>Gazouyi</em> sont stock&eacute;es au sein des serveurs d'Amazon Web Service (AWS) situ&eacute;s &agrave; Paris (France).</p>\r\n            <ul>\r\n            <li>Toutes les donn&eacute;es correspondant &agrave; une famille sont accessibles uniquement par les utilisateurs associ&eacute;s &agrave; la famille.</li>\r\n            <li>A tout moment, le.a responsable de la famille peut retirer l&rsquo;acc&egrave;s &agrave; un utilisateur et peut supprimer les informations ajout&eacute;s par un utilisateur.</li>\r\n            <li>L&rsquo;utilisateur est aussi propri&eacute;taire des donn&eacute;es qu&rsquo;il.elle ajoute dans l&rsquo;application et peut demander de les supprimer ou de les rectifier. Dans le cas o&ugrave; l&rsquo;utilisateur est retir&eacute; d&rsquo;une famille, il.elle peut d&eacute;cider de laisser ou supprimer les informations qu&rsquo;il.elle a ajout&eacute;es.</li>\r\n            </ul>\r\n            <h3>7.1. Transfert des donn&eacute;es</h3>\r\n            <p>Aucun transfert de vos donn&eacute;es personnelles en dehors du territoire fran&ccedil;ais ou &agrave; des fins commerciales ou publicitaires n&rsquo;est pr&eacute;vu par <em>Gazouyi</em>.</p>\r\n            <h2>8. Dur&eacute;e de conservation</h2>\r\n            <p>Les donn&eacute;es sont conserv&eacute;es sur les serveurs de <em>Gazouyi</em> jusqu&rsquo;&agrave; ce que l&rsquo;utilisateur ou le responsable de famille d&eacute;cide de les supprimer/modifier et &agrave; d&eacute;faut, apr&egrave;s 3 ans d&rsquo;inactivit&eacute; du compte<em> Gazouyi</em>.</p>\r\n            <h2>9. Vos droits</h2>\r\n            <ul>\r\n            <li>Droit &agrave; l&rsquo;information:</li>\r\n            </ul>\r\n            <p>Vous pouvez vous r&eacute;f&eacute;rer &agrave; cette CGU, ainsi qu&rsquo;aux vid&eacute;os explicatives disponibles sur la plateforme.</p>\r\n            <ul>\r\n            <li>Droit d&rsquo;acc&egrave;s:</li>\r\n            </ul>\r\n            <p>Les informations relatives &agrave; votre compte et les informations publi&eacute;es sont directement accessibles sur votre <em>Timeline</em>.</p>\r\n            <ul>\r\n            <li>Droit de rectification:</li>\r\n            </ul>\r\n            <p>Vous pouvez &agrave; tout moment rectifier les informations de votre compte depuis votre espace personnel.</p>\r\n            <p>Vous pouvez modifier vos informations personnelles (nom, pr&eacute;nom, adresse email, etc..) via un formulaire de rectification disponible sur l&rsquo;application ou en contactant <em>Gazouyi</em>.</p>\r\n            <ul>\r\n            <li>Droit de suppression:</li>\r\n            </ul>\r\n            <p>Vous pouvez &agrave; tout moment demander la suppression de vos donn&eacute;es &agrave; caract&egrave;re personnel en envoyant un email &agrave; <a href=\"mailto:pdp@gazouyi.com\" target=\"_blank\">pdp@gazouyi.com</a>.</p>\r\n            <ul>\r\n            <li>Droit &agrave; la portabilit&eacute; des donn&eacute;es:</li>\r\n            </ul>\r\n            <p>Vous pouvez demander une copie de l&rsquo;ensemble des donn&eacute;es fournies &agrave; <em>Gazouyi.</em></p>\r\n            <p>Ces donn&eacute;es sont:</p>\r\n            <ul>\r\n            <li>vos informations de compte</li>\r\n            <li>vos informations personnelles (nom, pr&eacute;nom, &eacute;tat civil)</li>\r\n            <li>vos souvenirs</li>\r\n            <li>Droit de retrait:</li>\r\n            </ul>\r\n            <p>Vous pouvez retirer votre consentement &agrave; tout moment en contactant <em>Gazouyi </em>par email en renseignant votre adresse email de compte et votre nom : <a href=\"mailto:gdp@gazouyi.com\" target=\"_blank\">gdp@gazouyi.com</a></p>\r\n            <h3>9.1. Comment exercer vos droits</h3>\r\n            <p>Vous pouvez exercer l&rsquo;ensemble de vos droits en contactant le DPD &agrave; l&rsquo;adresse mail suivante: <u><a href=\"mailto:xn@gazouyi.com\" target=\"_blank\">xn@gazouyi.com</a></u>.</p>\r\n            <p>Votre demande sera trait&eacute;e dans un d&eacute;lai d'un mois &agrave; compter de sa r&eacute;ception. Au besoin, ce d&eacute;lai pourra &ecirc;tre prolong&eacute; de deux mois, compte tenu de la complexit&eacute; et du nombre de demandes. Dans ce cas, vous serez inform&eacute; de cette prolongation et des motifs du report dans un d&eacute;lai d'un mois &agrave; compter de la r&eacute;ception de la demande.</p>\r\n            <p>Aucun paiement ne sera exig&eacute; pour l&rsquo;exercice de vos droits sauf en cas de demande manifestement infond&eacute;e ou excessive. Dans ce cas, Gazoui se r&eacute;serve &eacute;galement la possibilit&eacute; de ne pas donner suite &agrave; votre demande.</p>\r\n            <p>Dans le cas o&ugrave; vous seriez toujours insatisfait de notre r&eacute;ponse, nous vous rappelons que vous pouvez introduire un recours devant la Commission Informatique et Libert&eacute;s (CNIL) : <a href=\"https://www.cnil.fr/\" target=\"_blank\" data-saferedirecturl=\"https://www.google.com/url?q=https://www.cnil.fr/&amp;source=gmail&amp;ust=1590672176237000&amp;usg=AFQjCNGKZnV4xXLD00y_oFyx2KvsTg8AIg\">https://www.cnil.fr/</a></p>\r\n            <h2>10. Engagement</h2>\r\n            <p><em>Gazouyi </em> s&rsquo;est assur&eacute; de la validit&eacute; de votre consentement (par acceptation de la pr&eacute;sente CGU) en vous expliquant les conditions de votre engagement &agrave; travers des <strong>&eacute;changes</strong> avec ses membres, avec la<strong> vid&eacute;o d&rsquo;explication de </strong><em><strong>Gazouyi</strong></em>.</p>\r\n            <p>Toute utilisation de cette application qui irait &agrave; l&rsquo;encontre de la finalit&eacute; de <em>Gazouyi </em>est strictement interdite. Vous vous engagez &agrave; ne pas commercialiser les donn&eacute;es collect&eacute;es, trait&eacute;es et conserv&eacute;es &agrave; partir de cette application.</p>\r\n            <p>En particulier, vous vous engagez &agrave; :</p>\r\n            <ul>\r\n            <li>Ne pas publier, transmettre ni diffuser aucune information pr&eacute;judiciable, obsc&egrave;ne, diffamatoire ou illicite aussi bien sur l&rsquo;application <em>Gazouyi</em> qu&rsquo;&agrave; partir de ce dernier ;</li>\r\n            <li>Ne pas utiliser de logiciel, &laquo; routine &raquo; ou dispositif en vue d&rsquo;entraver ou d&rsquo;essayer d&rsquo;entraver le bon fonctionnement de l&rsquo;app,</li>\r\n            <li>Ne pas d&eacute;grader, alt&eacute;rer, ni modifier l&rsquo;aspect graphique de l&rsquo;app ou les codes sources</li>\r\n            </ul>\r\n            <p>Vous acceptez que si vous choisissez de partager votre contenu de <em>Gazouyi</em> vers un site ou un service tiers, vous le faites &agrave; vos propres risques, et vous comprenez que cet accord et la politique de confidentialit&eacute; de <em>Gazouyi </em>ne s'appliquent pas &agrave; votre utilisation de ces sites.</p>\r\n            <p>Conform&eacute;ment &agrave; la loi en vigueur, lorsque l&rsquo;enfant atteint la majorit&eacute; num&eacute;rique (15 ans), il pourra exercer ses droits sur les donn&eacute;es pr&eacute;sentes dans l&rsquo;application et celles stock&eacute;es par <em>Gazouyi</em>.</p>\r\n            <h2>11. S&eacute;curit&eacute;</h2>\r\n            <p><em>Gazouyi </em>assure l<strong>a s&eacute;curit&eacute;</strong><strong>, la confidentialit&eacute; et l&rsquo;int&eacute;grit&eacute;</strong> de vos donn&eacute;es.</p>\r\n            <p>N&eacute;anmoins vous &ecirc;tes responsables de votre mot de passe, identifiant et des souvenirs (vid&eacute;os, photos, textes) que vous importez sur l&rsquo;application et des failles de s&eacute;curit&eacute; provenant de votre appareil.</p>\r\n            <h4>Mot de passe</h4>\r\n            <p>Conform&eacute;ment aux recommandations de la CNIL, il vous est conseill&eacute; lors de la cr&eacute;ation de votre mot de passe d&rsquo;utiliser au minimum 8 caract&egrave;res contenant au moins une majuscule, un chiffre, une minuscule et un symbole.</p>\r\n            <h4>Proc&eacute;dure de r&eacute;cup&eacute;ration du mot de passe</h4>\r\n            <p>En cas de perte de votre mot de passe, vous pouvez en r&eacute;cup&eacute;rer un nouveau en cliquant sur &ldquo;mot de passe oubli&eacute;&rdquo;. Nous nous occupons alors de changer votre mot de passe et vous envoyer un nouveau mot de passe temporaire, que vous pouvez ensuite changer dans votre espace personnel.</p>\r\n            <h4>Envoi des informations</h4>\r\n            <p>L&rsquo;envoi des informations du t&eacute;l&eacute;phone des utilisateurs jusqu&rsquo;au serveur de <em>Gazouyi</em> est s&eacute;curis&eacute; et les acc&egrave;s sont v&eacute;rifi&eacute;s &agrave; deux reprises par les deux identifiants: utilisateur et famille.</p>\r\n            <p>Les m&eacute;dias (photos/vid&eacute;os) sont enti&egrave;rement crypt&eacute;es et ne sont accessibles que par vous gr&acirc;ce &agrave; des URLs crypt&eacute;s et temporaires que nous g&eacute;n&eacute;rons.</p>\r\n            <h4>En cas de piratage du compte</h4>\r\n            <p>En cas de piratage de votre compte, vous pouvez vous connecter sur un autre appareil, afin de d&eacute;connecter l&rsquo;ancienne session ouverte.</p>\r\n            <h4>En cas de fuite de donne&eacute;es</h4>\r\n            <p>Un email vous sera envoy&eacute; pour vous informer des circonstances et de l&rsquo;ampleur de la fuite de donn&eacute;es. Le mail contiendra toutes les dispositions et mesures prises par <em>Gazouyi </em>pour g&eacute;rer au mieux la fuite de donn&eacute;es.</p>\r\n            <h2>12. Propri&eacute;t&eacute; Intellectuelle</h2>\r\n            <p>Tous les &eacute;l&eacute;ments qui composent l&rsquo;application <em>Gazouyi</em> sont la <strong>propri&eacute;t&eacute; exclusive</strong> de <em>Gazouyi</em>. Toutes les marques et tous les logos <em>Gazouyi </em>ne peuvent &ecirc;tre utilis&eacute;s par l&rsquo;utilisateur sans le consentement pr&eacute;alable &eacute;crit de <em>Gazouyi</em>.</p>\r\n            <p>En cons&eacute;quence, en application des dispositions du Code de la propri&eacute;t&eacute; intellectuelle, des dispositions l&eacute;gislatives et r&eacute;glementaires de tous les pays et des conventions internationales, toute reproduction, diffusion ou repr&eacute;sentation, int&eacute;grale ou partielle, d&rsquo;un quelconque &eacute;l&eacute;ment de <em>Gazouyi</em> est interdite de m&ecirc;me que son alt&eacute;ration.</p>\r\n            <p>A ce titre, il est notamment <strong>interdit</strong> &agrave; l&rsquo;utilisateur d&rsquo;adapter, arranger, modifier, corriger, associer, traduire en tout langage, mettre sur le march&eacute; &agrave; titre gratuit ou on&eacute;reux, commercialiser, tout ou partie des &eacute;l&eacute;ments qui composent <em>Gazouyi</em>, quels qu&rsquo;en soient le moyen et le support.</p>\r\n            <p>Aucune stipulation des CGU ne peut &ecirc;tre interpr&eacute;t&eacute;e comme une cession de droits de propri&eacute;t&eacute; intellectuelle que ce soit tacitement ou d&rsquo;une autre fa&ccedil;on.</p>\r\n            <h2>13. Contribuer &agrave; <em>Gazouyi</em> une id&eacute;e d&rsquo;activit&eacute;</h2>\r\n            <p>En tant qu&rsquo;utilisateur de <em>Gazouyi</em>, vous pouvez contribuer &agrave; des propositions d&rsquo;activit&eacute;s. L&rsquo;int&eacute;r&ecirc;t est multiple, si l&rsquo;activit&eacute; est publi&eacute;e par <em>Gazouyi</em>:</p>\r\n            <ul>\r\n            <li>Vous pouvez aider d&rsquo;autres parents qui connaissent des situations similaires et qui recherchent eux-aussi des activit&eacute;s.</li>\r\n            <li>Vous recevrez une explication scientifique du contexte de votre activit&eacute;.</li>\r\n            <li>Chaque contributeur sera cr&eacute;dit&eacute; de l&rsquo;id&eacute;e sur l&rsquo;activit&eacute; qui sera publi&eacute;e sur l&rsquo;application. Ces contributions pourront donc &ecirc;tre valoris&eacute;es pour votre parcours professionnel.</li>\r\n            <li>Vous entrez dans la communaut&eacute; des contributeurs &agrave; <em>Gazouyi</em>. Dans ce cadre vous avez acc&egrave;s &agrave; du contenu et des services suppl&eacute;mentaires. Par exemple, acc&egrave;s &agrave; des formations et conf&eacute;rences avec des experts publics et priv&eacute;s reconnus autour de la petite enfance et rencontre avec la communaut&eacute; des autres contributeurs.</li>\r\n            </ul>\r\n            <p>L&rsquo;activit&eacute; que vous proposez sous la forme d&rsquo;un texte ou d&rsquo;une vid&eacute;o explicative sera valid&eacute;e par l&rsquo;&eacute;quipe de <em>Gazouyi</em> en particulier pour envisager son int&eacute;r&ecirc;t p&eacute;dagogique, &eacute;ventuellement th&eacute;rapeutique et surtout sa compl&eacute;mentarit&eacute; avec l&rsquo;offre d&eacute;j&agrave; existante sur <em>Gazouyi</em>. Enfin si l&rsquo;id&eacute;e est retenue, nous l&rsquo;adapterons au format de l&rsquo;application (le format d&rsquo;une activit&eacute; dans l&rsquo;application est un texte de mise en contexte de l&rsquo;activit&eacute; + instructions pour r&eacute;aliser l&rsquo;activit&eacute;) et l&rsquo;int&eacute;grerons dans le syst&egrave;me de recommendation de <em>Gazouyi </em>afin de la faire profiter &agrave; tous les utilisateurs de <em>Gazouyi</em>. En fonction de la validation ou non, vous recevrez une notification par email. D&rsquo;autres part, en proposant une activit&eacute; &agrave; <em>Gazouyi</em> vous entrez dans la communaut&eacute; des contributeurs &agrave; <em>Gazouyi</em>.</p>\r\n            <p>En soumettant &agrave; <em>Gazouyi</em> toute id&eacute;e, suggestion, document et/ou proposition par l'interm&eacute;diaire de l'interface <em><strong>Contribute</strong></em> ou autrement (collectivement, formulaires), vous reconnaissez et acceptez que:</p>\r\n            <ul>\r\n            <li>(a) Vos contributions ne contiennent pas d'informations confidentielles ou propri&eacute;taires ;</li>\r\n            <li>(b) <em>Gazouyi</em> n'a aucune obligation de confidentialit&eacute;, expresse ou implicite, en ce qui concerne les contributions ;</li>\r\n            <li>(c) <em>Gazouyi</em> est autoris&eacute; &agrave; utiliser (ou choisir de ne pas utiliser) telles contributions &agrave; n'importe quelle fin, de n'importe quelle mani&egrave;re, dans n'importe quel m&eacute;dia &agrave; travers le monde ;</li>\r\n            <li>(d)<em> Gazouyi</em> peut avoir quelque chose de similaire aux contributions d&eacute;j&agrave; en cours d'examen ou en d&eacute;veloppement ;</li>\r\n            <li>(e) Vos contributions deviennent la propri&eacute;t&eacute; de <em>Gazouyi</em> sans aucune obligation de <em>Gazouyi</em> envers vous ;</li>\r\n            <li>(f) Vous n'avez droit &agrave; aucune comptabilit&eacute;, compensation ou remboursement de quelque nature que ce soit de la part de <em>Gazouyi.</em></li>\r\n            </ul>\r\n            <h2>14. Responsabilit&eacute;</h2>\r\n            <p><em>Gazouyi </em>s&rsquo;engage &agrave; veiller au bon fonctionnement de la plateforme ainsi qu&rsquo;&agrave; la <strong>s&eacute;curit&eacute;, la confidentialit&eacute; et l&rsquo;int&eacute;grit&eacute;</strong> des donn&eacute;es pr&eacute;sentes sur l&rsquo;app.</p>\r\n            <p>Cependant sa responsabilit&eacute; ne saurait &ecirc;tre engag&eacute;e pour tous les inconv&eacute;nients ou dommages inh&eacute;rents &agrave; l'utilisation du r&eacute;seau internet, notamment une rupture de service, une intrusion ext&eacute;rieure ou la pr&eacute;sence de virus sur votre mat&eacute;riel.</p>\r\n            <p>Bien que <em>Gazouyi</em> s'efforce de fournir une app fiable et malgr&eacute; tout le soin apport&eacute; &agrave; son fonctionnement, il se peut que des erreurs subsistent dans l&rsquo;app. En aucun cas la responsabilit&eacute; de <em>Gazouyi </em>ne saurait &ecirc;tre engag&eacute;e pour des dommages directs ou indirects qui pourraient r&eacute;sulter de l'acc&egrave;s &agrave; l&rsquo;app ou de l'utilisation des informations qu'il pr&eacute;sente. En cons&eacute;quence, vous &ecirc;tes invit&eacute; &agrave; proc&eacute;der &agrave; toutes v&eacute;rifications utiles.</p>\r\n            <h2>15. Site web de <em>Gazouyi</em></h2>\r\n            <p>Conditions sp&eacute;cifiques au site web <u><a href=\"http://www.gazouyi.com\" target=\"_blank\" data-saferedirecturl=\"https://www.google.com/url?q=http://www.gazouyi.com&amp;source=gmail&amp;ust=1590672176237000&amp;usg=AFQjCNG-QLDg0XKoHYhhVLD0coUZPHECTA\">www.gazouyi.com</a></u></p>\r\n            <h3>15.1 Abonnement</h3>\r\n            <p>Le traitement a pour objet la gestion de l&rsquo;envoi de la lettre d&rsquo;information de <em>Babycloud </em>&agrave; tous les abonn&eacute;s de la liste de diffusion pour les informer sur l&rsquo;&eacute;volution du projet. Par cons&eacute;quent, les seules donn&eacute;es trait&eacute;es sont les adresses &eacute;lectroniques des internautes qui ont souscrit &agrave; la liste de diffusion d&rsquo;email de <em>Babycloud</em>. Aucune adresse IP n&rsquo;est conserv&eacute;e. Aucune utilisation de cookies commerciaux n&rsquo;est faite sur ce site.</p>\r\n            <h3>15.2 Cookies</h3>\r\n            <p>Comme tout autre site web, <u><a href=\"http://www.gazouyi.com\" target=\"_blank\" data-saferedirecturl=\"https://www.google.com/url?q=http://www.gazouyi.com&amp;source=gmail&amp;ust=1590672176237000&amp;usg=AFQjCNG-QLDg0XKoHYhhVLD0coUZPHECTA\">www.gazouyi.com</a></u> utilise des \"cookies\". Ces cookies sont utilis&eacute;s pour adapter la vue du site web en fonction du type de navigateur utilis&eacute; par les visiteurs.</p>\r\n            <h3>15.3 Nom de domaine</h3>\r\n            <p><u><a href=\"http://www.gazouyi.com\" target=\"_blank\" data-saferedirecturl=\"https://www.google.com/url?q=http://www.gazouyi.com&amp;source=gmail&amp;ust=1590672176237000&amp;usg=AFQjCNG-QLDg0XKoHYhhVLD0coUZPHECTA\">www.gazouyi.com</a></u> est un nom de domaine r&eacute;serv&eacute;. Toute utilisation non autoris&eacute;e du mat&eacute;riel prot&eacute;g&eacute; par le droit d'auteur est passible de sanctions p&eacute;nales et civiles.</p>\r\n            <h2>16. Contentieux</h2>\r\n            <p>En cas de litige la loi applicable est la <strong>loi fran&ccedil;aise. </strong>La juridiction comp&eacute;tente est le <strong>Tribunal de Grande Instance de Paris</strong>.</p>\r\n          \r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-accent: #73cac3;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --color-fairy: #e1eaf0;\n  --color-rose: #D69292 ;\n  --text-very-dark: #184753;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #92A3AC;\n  --text-very-light: #c8cbce;\n  --text-white: #ffffff;\n  --filter-text-light: brightness(0) saturate(100%) invert(69%) sepia(16%) saturate(290%) hue-rotate(156deg) brightness(92%) contrast(82%);\n  --filter-text-medium: brightness(0) saturate(100%) invert(45%) sepia(15%) saturate(465%) hue-rotate(155deg) brightness(91%) contrast(87%);\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-small: url('/assets/images/backgrounds/home02.png');\n  --background-blog: url('/assets/images/backgrounds/blog01.png');\n  --background-blog-small: url('/assets/images/backgrounds/blog02.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg');\n  --background-parents: url('/assets/images/backgrounds/parents01.png');\n  --background-parents-small: url('/assets/images/backgrounds/parents02.png');\n  --background-speech-bubble-left-top: url('/assets/images/illus/parents-speech-left-top.png');\n  --background-speech-bubble-left-bottom: url('/assets/images/illus/parents-speech-left-bottom.png');\n  --background-speech-bubble-right-top: url('/assets/images/illus/parents-speech-right-top.png');\n  --background-speech-bubble-right-bottom: url('/assets/images/illus/parents-speech-right-bottom.png');\n  --background-spacer: url('/assets/images/backgrounds/spacer.png');\n  --background-benefits: url('/assets/images/backgrounds/benefits-bkg.svg');\n  --background-feature: url('/assets/images/checkout/feature-pkg.svg');\n  --background-feature-round1: url('/assets/images/checkout/round1.svg');\n  --background-feature-round2: url('/assets/images/checkout/round2.svg');\n  --background-feature-round3: url('/assets/images/checkout/round3.svg');\n  --background-feature-round4: url('/assets/images/checkout/round4.svg');\n  --background-contact01: url('/assets/images/backgrounds/contact01.svg');\n  --background-login: url('/assets/images/backgrounds/login.svg'); }\n\n.terms-of-use {\n  padding-top: 150px; }\n\n.terms-of-use p {\n    margin-bottom: 0; }\n\n.terms-of-use ul > li {\n    list-style-type: disc;\n    font-size: 0.9em; }\n\n.terms-of-use h2 {\n    padding-top: 30px; }\n\n.terms-of-use h3 {\n    font-size: 1.5em;\n    padding-top: 5px; }\n\n.terms-of-use h4 {\n    font-size: 1.25em; }\n\n.terms-of-use .title {\n    padding-bottom: 50px; }\n\n.terms-of-use .outline {\n    padding-bottom: 50px; }\n\n.terms-of-use .point {\n    margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybXMtb2YtdXNlL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcc2l0ZS12aXRyaW5lL3NyY1xcYXBwXFxjb3JlXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rlcm1zLW9mLXVzZS9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXHNpdGUtdml0cmluZS9zcmNcXGFwcFxccGFnZXNcXHRlcm1zLW9mLXVzZVxcdGVybXMtb2YtdXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksd0JBQWM7RUFDZCxzQkFBYTtFQUNiLDJCQUFvQjtFQUNwQiwwQkFBbUI7RUFDbkIseUJBQWdCO0VBQ2hCLGlDQUF3QjtFQUV4QixnQ0FBdUI7RUFDdkIsc0JBQWE7RUFDYixrQkFBYTtFQUViLHdCQUFlO0VBRWYsdUJBQWM7RUFDZCxzQkFBYTtFQUNiLHlCQUFnQjtFQUNoQix5QkFBZ0I7RUFDaEIsd0JBQWU7RUFDZixzQkFBYTtFQUNiLHVCQUFjO0VBQ2QsdUJBQWE7RUFHYiwwQkFBaUI7RUFDakIscUJBQVk7RUFDWix1QkFBYztFQUNkLHNCQUFhO0VBQ2IsMkJBQWtCO0VBQ2xCLHNCQUFhO0VBRWIseUlBQW9CO0VBQ3BCLDBJQUFxQjtFQUVyQixtRkFBMkI7RUFDM0IsbUVBQXVCO0VBQ3ZCLHFFQUF3QjtFQUV4QixtRkFBa0M7RUFDbEMsdUZBQW9DO0VBQ3BDLHVFQUF3QjtFQUN4Qiw0RUFBOEI7RUFDOUIsZ0VBQWtCO0VBQ2xCLHNFQUF3QjtFQUN4QixxRkFBK0I7RUFDL0IsOEVBQTBCO0VBQzFCLHNFQUFxQjtFQUNyQiw0RUFBMkI7RUFDM0IsNkZBQW9DO0VBQ3BDLG1HQUF1QztFQUN2QywrRkFBcUM7RUFDckMscUdBQXdDO0VBQ3hDLGtFQUFvQjtFQUVwQiwwRUFBc0I7RUFDdEIscUVBQXFCO0VBQ3JCLHVFQUE0QjtFQUM1Qix1RUFBNEI7RUFDNUIsdUVBQTRCO0VBQzVCLHVFQUE0QjtFQUc1Qix3RUFBdUI7RUFDdkIsZ0VBQW1CLEVBQ3RCOztBQ2hFRDtFQUNFLG1CQUFrQixFQStCbkI7O0FBaENEO0lBSUksaUJBQWdCLEVBQ2pCOztBQUxIO0lBT0ksc0JBQXFCO0lBQ3JCLGlCQUFnQixFQUNqQjs7QUFUSDtJQVdJLGtCQUFpQixFQUNsQjs7QUFaSDtJQWNJLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFDakI7O0FBaEJIO0lBa0JJLGtCQUFpQixFQUNsQjs7QUFuQkg7SUFzQkkscUJBQW9CLEVBQ3JCOztBQXZCSDtJQTBCSSxxQkFBb0IsRUFDckI7O0FBM0JIO0lBOEJJLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zLW9mLXVzZS90ZXJtcy1vZi11c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC8vIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3ItYWNjZW50OiAjNzNjYWMzO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuICAgIC0tY29sb3ItZmFpcnk6ICNlMWVhZjA7XHJcbiAgICAtLWNvbG9yLXJvc2U6ICNENjkyOTIgO1xyXG5cclxuXHJcbiAgICAtLXRleHQtdmVyeS1kYXJrOiAjMTg0NzUzO1xyXG4gICAgLS10ZXh0LWRhcms6ICMwNzYwNzc7XHJcbiAgICAtLXRleHQtbWVkaXVtOiAjNWY3MDdhO1xyXG4gICAgLS10ZXh0LWxpZ2h0OiAjOTJBM0FDO1xyXG4gICAgLS10ZXh0LXZlcnktbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1maWx0ZXItdGV4dC1saWdodDogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNjklKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDI5MCUpIGh1ZS1yb3RhdGUoMTU2ZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoODIlKTtcclxuICAgIC0tZmlsdGVyLXRleHQtbWVkaXVtOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg0NSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoNDY1JSkgaHVlLXJvdGF0ZSgxNTVkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NyUpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXBhcnRuZXJzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcnRuZXJzLWRlZmF1bHQuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0uc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtMi5zdmcnKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZC1ob21lLXRlc3RpbW9uaWFsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3Rlc3RpbW9uaWFsLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1iYWJ5OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItY2xvdWRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2Nsb3Vkcy1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm86IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2hvbWUwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ibG9nOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Jsb2cwMS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ibG9nLXNtYWxsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Jsb2cwMi5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLW1vYmlsZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLW1vYmlsZS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1jb25zdHJ1Y3Rpb246IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29uc3RydWN0aW9uLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXBhcmVudHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFyZW50czAxLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXBhcmVudHMtc21hbGw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFyZW50czAyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwZWVjaC1idWJibGUtbGVmdC10b3A6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtbGVmdC10b3AucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1sZWZ0LWJvdHRvbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9wYXJlbnRzLXNwZWVjaC1sZWZ0LWJvdHRvbS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1zcGVlY2gtYnViYmxlLXJpZ2h0LXRvcDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9wYXJlbnRzLXNwZWVjaC1yaWdodC10b3AucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtc3BlZWNoLWJ1YmJsZS1yaWdodC1ib3R0b206IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvcGFyZW50cy1zcGVlY2gtcmlnaHQtYm90dG9tLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNwYWNlcjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9zcGFjZXIucG5nJyk7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWJlbmVmaXRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2JlbmVmaXRzLWJrZy5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L2ZlYXR1cmUtcGtnLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQxOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kMS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1mZWF0dXJlLXJvdW5kMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9jaGVja291dC9yb3VuZDIuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtZmVhdHVyZS1yb3VuZDM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2hlY2tvdXQvcm91bmQzLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZlYXR1cmUtcm91bmQ0OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NoZWNrb3V0L3JvdW5kNC5zdmcnKTtcclxuXHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnRhY3QwMTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb250YWN0MDEuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtbG9naW46IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbG9naW4uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4udGVybXMtb2YtdXNlIHtcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcblxyXG4gIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICB1bD5saXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIGgze1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIC5vdXRsaW5le1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5cclxuICAucG9pbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use.component.ts ***!
  \**************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var TermsOfUseComponent = /** @class */ (function () {
    function TermsOfUseComponent(translate) {
        this.translate = translate;
        this.bError = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
        this.points = [{
                MAIN_POINT: 'Loading...',
                DESCRIPTION: {
                    PARAGRAPH: ''
                }
            }];
    }
    TermsOfUseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.TERMS-OF-USE.OUTLINE.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
        this.translate.get('PAGES.TERMS-OF-USE.OUTLINE').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.points = [{
                        MAIN_POINT: 'An error occured',
                        DESCRIPTION: {
                            PARAGRAPH: ''
                        }
                    }];
            }
            else {
                _this.points = res;
            }
        });
    };
    TermsOfUseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-of-use',
            template: __webpack_require__(/*! ./terms-of-use.component.html */ "./src/app/pages/terms-of-use/terms-of-use.component.html"),
            styles: [__webpack_require__(/*! ./terms-of-use.component.scss */ "./src/app/pages/terms-of-use/terms-of-use.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TermsOfUseComponent);
    return TermsOfUseComponent;
}());



/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\r\n  <div class=\"thanks-bg\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"thanks-section\">\r\n          <div>\r\n            <img src=\"assets/images/thank-you.png\" class=\"img-fluid downlod-img\" alt=\"\">\r\n            <div class=\"col-lg-8 offset-lg-2\">\r\n              <h2>Thank You</h2>\r\n            </div>\r\n            <h3>If it doesn’t start automatically, <a href=\"#\" class=\"manual-down\">please click here to downlaod manually.</a></h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- copy-right-section -->\r\n  <footer class=\"bg-thanks\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"copyright-section\">\r\n            <p>2018-19 Copyright &copy; By Themeforest Powered By Pixel Strap</p>\r\n            <div class=\"mt-3 text-center\">\r\n              <a [routerLink]=\"'/demo'\" class=\"btn btn-custom theme-color theme-color pt-2 pb-2\">BACK TO HOME PAGE</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n<!--end copy right section-->\r\n"

/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.component.ts ***!
  \********************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/pages/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.scss */ "./src/app/pages/thank-you/thank-you.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map