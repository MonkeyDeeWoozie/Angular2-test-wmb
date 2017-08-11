import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { DoctorDetailComponent } from './doctor-detail.component';
import { DoctorsComponent }     from './doctors.component';
import { DoctorService }         from './doctor.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, DoctorDetailComponent, DoctorsComponent ],
    providers: [ DoctorService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
