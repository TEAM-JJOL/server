import mongoose from 'mongoose';
import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { MissionCreateDto } from '../interfaces/mission/MissionCreateDto';
import { MissionConfirmRequestDto } from '../interfaces/mission/MissionConfirmRequestDto';
import { missionRequestDto } from '../interfaces/mission/MissionRequestDto';
import Mission from '../models/Mission';
import User from '../models/User';
import statusCode from '../modules/statusCode';

const createMission = async (missionCreateDto: MissionCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const mission = new Mission(missionCreateDto);

    await mission.save();

    const data = {
      id: mission._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMissionList = async (id: string) => {
  try {
    const user = await User.findById(id).select('-__v -password');
    const missions = await Mission.find({
      ownerId: id,
    }).select('-updatedAt -__v');

    const data = {
      user,
      missions,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getConfirmedMissionList = async (id: string) => {
  try {
    const user = await User.findById(id).select('-__v -password');
    const missions = await Mission.find({
      ownerId: id,
      isConfirmed: true,
    }).select('-updatedAt -__v');

    const data = {
      user,
      missions,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

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
  createMission,
  getMissionList,
  getConfirmedMissionList,
  confirmMission,
};
