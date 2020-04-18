import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { componentFactoryName } from '@angular/compiler';
import { SchoolComponentComponent } from './school-component/school-component.component';
import { SchoolService } from './school.service';
import { SchooldetailsComponent } from './schooldetails-component/schooldetails.component';
import { SchoolfileComponentComponent } from './schoolfile-component/schoolfile-component.component';

import { ClassService } from './class.service';
import { ClassComponent } from './class/class.component';



@NgModule({
  imports: [
    BrowserModule, FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
       {path: '', component: SchoolComponentComponent},
       {path: 'hotelsdetails/:id', component: SchooldetailsComponent},
       {path: 'addSchool', component: SchoolfileComponentComponent},
       {path: 'edit-school/:id', component: SchoolfileComponentComponent},
       {path: 'schooldetails/:id/addClass/:schoolId', component: ClassComponent}

    ])
    ],
  declarations: [ AppComponent, HelloComponent, SchoolComponentComponent,SchooldetailsComponent, SchoolfileComponentComponent, ClassComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SchoolService, ClassService]
})

export class AppModule { }
