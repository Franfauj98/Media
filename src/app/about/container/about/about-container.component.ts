import { Component } from '@angular/core';
import { BasicComponent } from '../../../common/model/basic';

@Component({
    selector: 'app-about',
    imports: [],
    standalone: true,
    templateUrl: './about-container.component.html',
    styleUrl: './about-container.component.scss'
})
export class AboutComponent implements BasicComponent {

}
