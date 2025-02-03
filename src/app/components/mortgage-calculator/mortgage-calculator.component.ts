import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MortgageFormServiceService } from '../../services/forms/mortgage-form.service.service';

@Component({
    selector: 'app-mortgage-calculator',
    imports: [JsonPipe],
    templateUrl: './mortgage-calculator.component.html',
    styleUrl: './mortgage-calculator.component.scss'
})
export class MortgageCalculatorComponent {

    public mortgageForm: FormGroup;

    constructor(private _mortgageFormService: MortgageFormServiceService) {
        this.mortgageForm = this._mortgageFormService.getForm();
    }

}
