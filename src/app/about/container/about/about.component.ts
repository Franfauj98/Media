import { Component } from '@angular/core';
import { BasicComponent } from '../../../container/basic.component';
import { ComponentLoaderService } from '../../../service/component-loader.service';

@Component({
    selector: 'app-about',
    imports: [],
    providers: [ComponentLoaderService],
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent extends BasicComponent {

}
