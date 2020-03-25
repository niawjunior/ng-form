import { Component, ElementRef } from '@angular/core';
import { GlobalVariables } from './enviroments';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customConfig: { endpoint: string; redirect: string };
  contextConfig: { language: string; country: string; path: string };

  constructor(
    public elementRef : ElementRef,
    router : Router,
    public globalVariables : GlobalVariables
  ){
    globalVariables.customConfigStr = JSON.parse(this.elementRef.nativeElement.getAttribute('customconfiguration'));
    globalVariables.contextConfigStr = JSON.parse(this.elementRef.nativeElement.getAttribute('contextconfiguration'));

    this.customConfig = globalVariables.customConfigStr; 
    this.contextConfig = globalVariables.contextConfigStr;
    
    if(this.contextConfig.path !== ''){
      // console.log(this.contextConfig);
      router.navigate([this.contextConfig.path]);
    }
  }

}
