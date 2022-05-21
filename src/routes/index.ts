import { Router } from 'express';
import UserRouter from './UserRouter';
import MissionRouter from './MissionRouter';

const router: Router = Router();

router.use('/link', UserRouter);
router.use('/mission', MissionRouter);

export default router;
