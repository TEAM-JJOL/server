import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { UserCreateDto } from '../interfaces/user/UserCreateDto';
import { UserResponseDto } from '../interfaces/user/UserResponseDto';
import User from '../models/User';

const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const user = new User({
      nickname: userCreateDto.nickname,
      password: userCreateDto.password,
    });

    await user.save();

    const data = {
      id: user.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findUserById = async (userId: string): Promise<UserResponseDto | null> => {
  try {
    const user: UserResponseDto | null = await User.findById(userId);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createUser,
  findUserById,
};
