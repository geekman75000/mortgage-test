import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MortgageFormServiceService } from '../../services/forms/mortgage-form.service.service';

@Component({
    selector: 'app-mortgage-calculator',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './mortgage-calculator.component.html',
    styleUrl: './mortgage-calculator.component.scss'
})
export class MortgageCalculatorComponent {

    public mortgageForm: FormGroup;
    public isFormSubmitted = false;

    constructor(private _mortgageFormService: MortgageFormServiceService) {
        this.mortgageForm = this._mortgageFormService.getForm();
    }

    onSubmit() {
        this.isFormSubmitted = true;

        console.log(this.mortgageForm.value)
    }

    get f() {
        return this.mortgageForm.controls;
    }
}
