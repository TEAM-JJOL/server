import mongoose from 'mongoose';

export interface MissionCreateDto {
  ownerId: mongoose.Schema.Types.ObjectId;
  content: String;
}
