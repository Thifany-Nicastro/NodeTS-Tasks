import { Router, Request, Response } from 'express';
import { taskController } from "../controllers/TaskController";

const router = Router();

router.get("/", taskController.index);

// router.get('/test', (req: Request, res: Response) => {
//     res.json('test');
// });

export default router;