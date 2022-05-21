import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { MissionCreateDto } from '../interfaces/mission/MissionCreateDto';
import { missionRequestDto } from '../interfaces/mission/MissionRequestDto';
import Mission from '../models/Mission';
import User from '../models/User';

const createMission = async (missionCreateDto: MissionCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const mission = new Mission(missionCreateDto);

        await mission.save();

        const data = {
            id: mission._id
        }

        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getMissionList = async (id: string) => {
    try {
        const user = await User.findById(id).select('-__v -password')
        const missions = await Mission.find({
            ownerId: id
        }).select('-updatedAt -__v');

        const data = {
            user,
            missions
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getConfirmedMissionList = async (id: string) => {
    try {
        const user = await User.findById(id).select('-__v -password')
        const missions = await Mission.find({
            ownerId: id,
            isConfirmed: true,
        }).select('-updatedAt -__v');

        const data = {
            user,
            missions
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createMission,
    getMissionList,
    getConfirmedMissionList
}