import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { validationResult } from 'express-validator';
import { MissionCreateDto } from '../interfaces/mission/MissionCreateDto';
import MissionService from '../services/MissionService';
import { missionRequestDto } from '../interfaces/mission/MissionRequestDto';

/**
 * @route POST /mission
 * @desc Create Mission
 * @access Public
 */
const createMission = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const missionCreateDto: MissionCreateDto = req.body;

    try {
        const data = await MissionService.createMission(missionCreateDto)
        console.log(data);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MISSION_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const getMissionList = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const { id } = req.params;

    try {
        const data = await MissionService.getMissionList(id)
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.READ_MISSION_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

const getConfirmedMissionList = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const { id } = req.params;

    try {
        const data = await MissionService.getConfirmedMissionList(id)
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.READ_CONFIRMED_MISSION_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }

}

export default {
    createMission,
    getMissionList,
    getConfirmedMissionList,
};
