import express, { Request, Response } from 'express';
import { UserCreateDto } from '../interfaces/user/UserCreateDto';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { UserService } from '../services';

/**
 *  @route POST /link
 *  @desc Create User
 *  @access Public
 */
const createUser = async (req: Request, res: Response) => {
  const userCreateDto: UserCreateDto = req.body; // User Create Dto 로 req.body 받아옴

  try {
    const data = await UserService.createUser(userCreateDto);

    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, message.CREATE_LINK_SUCCESS, data));
  } catch (error) {
    console.log(error);
    // 서버 내부에서 오류 발생
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createUser,
};
