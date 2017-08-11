import { Component, Input } from '@angular/core';

import { Doctor } from './doctor';

@Component({
    selector: 'doctor-detail',
    template: `
    <div *ngIf="doctor">
        <h2>{{doctor.name}} details</h2>
        <div><label>id: </label>{{doctor.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="doctor.name" placeholder="name"/>
        </div>
    </div>
    `
})

export class DoctorDetailComponent
{
    @Input() doctor: Doctor;
}
