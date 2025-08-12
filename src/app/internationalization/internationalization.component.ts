import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internationalization',
  imports: [TranslateModule],
  templateUrl: './internationalization.component.html',
  styleUrl: './internationalization.component.css'
})
export class InternationalizationComponent {
   
     constructor(private translate:TranslateService){
      translate.setDefaultLang('en')
      translate.use('en')
     }
                                     
    changeLang(event:Event)
    {
      const lang = event.target as HTMLSelectElement;
      const lagnvalue = lang.value
      this.translate.use(lagnvalue)
    }
}
