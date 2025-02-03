import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MortgageCalculatorComponent } from './components/mortgage-calculator/mortgage-calculator.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MortgageCalculatorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Mortgage Calculator';
}
