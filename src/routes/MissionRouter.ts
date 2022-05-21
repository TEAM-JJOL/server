import { Router } from 'express';
import { MissionController } from '../controllers';

const router: Router = Router();

router.post('/confirm', MissionController.confirmMission);

export default router;
