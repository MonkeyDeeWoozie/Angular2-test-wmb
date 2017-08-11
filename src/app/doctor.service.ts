import { Injectable } from '@angular/core';

import { Doctor } from './doctor';
import { DOCTORS } from './mock-doctors';

@Injectable()
export class DoctorService
{
    getDoctors(): Promise<Doctor[]> {
        return Promise.resolve(DOCTORS);
    }
    // getDoctors(): Doctor[]
    // {
    //     return DOCTORS;
    // }
}
