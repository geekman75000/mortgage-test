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
    public monthlyRepayment: number | null = null;
    public totalRepayment: number | null = null;

    constructor(private _mortgageFormService: MortgageFormServiceService) {
        this.mortgageForm = this._mortgageFormService.getForm();
    }

    onSubmit() {
        this.isFormSubmitted = true;

        if (this.mortgageForm.valid) {
            this._calculateMortgage();
        }
    }

    onReset() {
        this.mortgageForm.reset();
    }

    get f() {
        return this.mortgageForm.controls;
    }

    private _calculateMortgage() {
        console.log(this.mortgageForm.value);

        this.monthlyRepayment = 600;
        this.totalRepayment = 118000
    }
}
