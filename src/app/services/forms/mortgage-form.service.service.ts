import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MortgageFormServiceService {

    private _form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this._form = this._createForm();
    }

    getForm(): FormGroup {
        return this._form;
    }

    private _createForm() {
        return this._fb.group({
            mortgageAmount: ['', Validators.required],
            mortgageTerm: ['', Validators.required],
            interestRate: ['', Validators.required],
            mortgageType: ['Repayment', Validators.required]
        });
    }
}
