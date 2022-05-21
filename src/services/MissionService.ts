import mongoose from 'mongoose';
import { UserInfo } from 'os';
import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { MissionConfirmRequestDto } from '../interfaces/mission/MissionConfirmRequestDto';
import Mission from '../models/Mission';
import User from '../models/User';
import statusCode from '../modules/statusCode';

const confirmMission = async (missionConfirmDto: MissionConfirmRequestDto) => {
  try {
    // id, pw 맞는지 검사
    const user = await User.findById(missionConfirmDto._id);
    if (!user) return statusCode.NOT_FOUND;

    const isMatch = missionConfirmDto.password === user.password;
    if (!isMatch) return statusCode.UNAUTHORIZED;

    // missions-ownerId랑 id 동일한지 검사
    const isOwner = missionConfirmDto._id == user._id;
    console.log(missionConfirmDto._id, user._id, missionConfirmDto._id == user._id);
    if (!isOwner) return statusCode.FORBIDDEN;

    // mission 하나하나 찾아서 isConfirmed 바꿔주기
    missionConfirmDto.missions.map(async (missionId) => {
      await Mission.findByIdAndUpdate(missionId, { isConfirmed: true });
    });

    return statusCode.OK;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  confirmMission,
};
