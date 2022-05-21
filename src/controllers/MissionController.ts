import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { MissionConfirmRequestDto } from '../interfaces/mission/MissionConfirmRequestDto';
import MissionService from '../services/MissionService';

/**
 *  @route POST /mission/confirm
 *  @desc Confirm Mission
 *  @access Public
 */
const confirmMission = async (req: Request, res: Response) => {
  const missionConfirmDto: MissionConfirmRequestDto = req.body;

  try {
    const result = await MissionService.confirmMission(missionConfirmDto);

    if (!result)
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    else if (result === statusCode.OK)
      return res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, message.MISSION_CONFIRM_SUCCESS));
    else if (result === statusCode.UNAUTHORIZED)
      return res
        .status(statusCode.UNAUTHORIZED)
        .send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_PASSWORD));
    else if (result === statusCode.FORBIDDEN)
      return res
        .status(statusCode.FORBIDDEN)
        .send(util.fail(statusCode.FORBIDDEN, message.DIFFERENT_USER));
  } catch (error) {
    console.log(error);
    // 서버 내부에서 오류 발생
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default { confirmMission };
