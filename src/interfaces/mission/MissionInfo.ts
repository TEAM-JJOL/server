import mongoose from 'mongoose';

export interface MissionInfo {
  ownerId: mongoose.Schema.Types.ObjectId;
  content: String;
  isConfirmed: Boolean;
}
