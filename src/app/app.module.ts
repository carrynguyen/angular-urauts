import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchoolfileComponentComponent } from './schoolfile-component/schoolfile-component.component';
import { SchooldetailsComponentComponent } from './schooldetails-component/schooldetails-component.component';
import { SchoolComponentComponent } from './school-component/school-component.component';
import { ClassComponent } from './class/class.component';
import { ClassserviceService } from './classservice.service';
import { SchoolserviceService } from './schoolservice.service';
import { ClassService } from './class.service';
import { SchoolService } from './school.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SchoolfileComponentComponent, SchooldetailsComponentComponent, SchoolComponentComponent, ClassComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ClassserviceService, SchoolserviceService, ClassService, SchoolService]
})
export class AppModule { }
