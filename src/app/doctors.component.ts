import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';

@Component(
{
    selector: 'my-doctors',
    template: `
        <h1>{{title}}</h1>
        <h2>Doctor's list</h2>
        <ul class="doctors">
            <li *ngFor="let doctor of doctors" (click)="onSelect(doctor)" [class.selected]="doctor === selectedDoctor">
                <span class="badge">{{doctor.id}}</span> {{doctor.name}}
            </li>
        </ul>
        <doctor-detail [doctor]="selectedDoctor"></doctor-detail>
        `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .doctors {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .doctors li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .doctors li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .doctors li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .doctors .text {
            position: relative;
            top: -3px;
        }
        .doctors .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    providers: [DoctorService]
})

export class DoctorsComponent implements OnInit
{
    title = 'DOCTOR WHO';
    doctors: Doctor[];
    selectedDoctor: Doctor;

    constructor(private doctorService: DoctorService) { }

    onSelect(doctor: Doctor): void
    {
        this.selectedDoctor = doctor;
    }

    getDoctors(): void
    {
        // this.doctors = this.doctorService.getDoctors();
        this.doctorService.getDoctors().then(doctors => this.doctors = doctors);
    }
    
    ngOnInit(): void
    {
        this.getDoctors();
    }

}
