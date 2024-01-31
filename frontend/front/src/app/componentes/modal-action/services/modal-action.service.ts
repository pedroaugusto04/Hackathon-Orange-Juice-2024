import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalActionComponent } from "../modal-action.component";
import { IProject, IProjectEvent, ProjecEventEnum } from "src/app/models/iProject";
import { ProjectService } from "src/app/appServices/project.service";
import { Subject, Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ModalActionService {
  private emitter: Subject<IProjectEvent<ProjecEventEnum, IProject>> = new Subject<
    IProjectEvent<ProjecEventEnum, IProject>
  >();

  private updateProject: Observable<IProjectEvent<ProjecEventEnum, IProject>> =
    this.emitter.asObservable();

  currentProject: IProjectEvent<ProjecEventEnum, IProject> | null = null;

  constructor(private dialog: MatDialog, private projectService: ProjectService) {
    this.updateProject.subscribe({
      next: (project) => (this.currentProject = project),
    });
  }

  openDialog(name: string) {
    const dialogRef = this.dialog.open(ModalActionComponent, {
      position: { top: "9.25rem" },
      data: { name: name },
    });
  }

  public dispatch(action: IProjectEvent<ProjecEventEnum, IProject>) {
    this.emitter.next({ ...action });
  }

  clearProjectInfo(): void {
    this.currentProject = null;
  }

  createProjectModal(params: FormData): Observable<IProject> {
    return this.projectService.createProject(params);
  }

  putProjectModal(params: FormData, id: string): Observable<IProject> {
    return this.projectService.putProject(params,id);
  }
}
