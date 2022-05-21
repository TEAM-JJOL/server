import mongoose from 'mongoose';
import { MissionInfo } from './MissionInfo';

export interface MissionResponseDto {
  id: mongoose.Schema.Types.ObjectId;
  missions: MissionInfo[];
}
