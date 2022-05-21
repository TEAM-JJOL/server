import { Router } from 'express';
import { MissionController } from '../controllers';
import { body, param } from 'express-validator/check';

const router: Router = Router();

router.post('/', [
    body('ownerId').notEmpty(),
    body('content').notEmpty()
], MissionController.createMission)

router.post('/confirm', MissionController.confirmMission);

router.get('/:id', [param('id').notEmpty()], MissionController.getMissionList);

router.get('/:id/confirmed', [param('id').notEmpty()], MissionController.getConfirmedMissionList);

export default router;
