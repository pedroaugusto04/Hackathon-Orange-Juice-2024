import ProjectService from "../services/project.service";
import { Request, Response } from "express";

class ProjectController {
  public static async getAllProjects(_req: Request, res: Response) {
    const projects = await ProjectService.getAllProjects();

    if (!projects) return res.status(500);

    return res.status(200).json(projects);
  }
}

export default ProjectController;