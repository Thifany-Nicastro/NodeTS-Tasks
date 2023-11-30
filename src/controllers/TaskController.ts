import { Request, Response } from "express";

export class TaskController {
  public index(request: Request, response: Response) {
    return response.json({
      response: 'Index'
    });
  }

  public store(request: Request, response: Response) {
    return response.json({
      response: 'Store'
    });
  }

  public show(request: Request, response: Response) {
    return response.json({
      response: 'Show'
    });
  }

  public update(request: Request, response: Response) {
    return response.json({
      response: 'Update'
    });
  }

  public delete(request: Request, response: Response) {
    return response.json({
      response: 'Delete'
    });
  }
}