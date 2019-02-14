import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
//import { AppComponent } from './app.component';
import { CustomElementComponent } from './custom-element/custom-element.component';

@NgModule({
  declarations: [
    //AppComponent,
    CustomElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CustomElementComponent]
})
export class AppModule { 
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const customelement = createCustomElement(CustomElementComponent, {injector: this.injector});

    customElements.define('custom-element', customelement);
  }
}
