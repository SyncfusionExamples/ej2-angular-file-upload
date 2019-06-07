import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, UploaderModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}