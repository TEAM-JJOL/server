import mongoose from 'mongoose';

export interface MissionConfirmRequestDto {
  _id: mongoose.Schema.Types.ObjectId;
  password: String;
  missions: String[];
}
