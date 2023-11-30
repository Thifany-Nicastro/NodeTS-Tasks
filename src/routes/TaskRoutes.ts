import { Router, Request, Response } from 'express';
import { TaskController } from "../controllers/TaskController";

const router = Router();

const taskController = new TaskController()

router.get("/", taskController.index);
router.post("/", taskController.store);
router.get("/:task_id", taskController.show);
router.post("/:task_id", taskController.update);
router.delete("/:task_id", taskController.delete);

// router.get('/test', (req: Request, res: Response) => {
//     res.json('test');
// });

export default router;