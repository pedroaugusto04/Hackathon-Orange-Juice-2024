import { Component, Input } from '@angular/core';
import { IProjects } from 'src/app/screens/profile/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projects: IProjects[] = [];
  @Input() userName: string = '';
  @Input() userImg: string = '';
}