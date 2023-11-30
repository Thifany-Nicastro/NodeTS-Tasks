import { Request, Response } from "express";

class TaskController {
  public index(req:Request, res:Response) {
    return res.json({
      response: 'Hello World'
    });
  }
}

export const taskController = new TaskController();