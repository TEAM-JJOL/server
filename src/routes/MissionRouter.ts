import { Router } from 'express';
import { body, param } from 'express-validator/check';
import MissionController from '../controllers/MissionController';

const router: Router = Router();

router.post('/', [
    body('ownerId').isEmpty(),
    body('content').isEmpty()
], MissionController.createMission)

router.get('/:id', [
    param('id').notEmpty()
], MissionController.getMissionList)

router.get('/:id/confirmed', [
    param('id').notEmpty()
], MissionController.getConfirmedMissionList)

export default router;
