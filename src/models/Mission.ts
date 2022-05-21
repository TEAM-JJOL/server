import mongoose, { mongo } from 'mongoose';
import { MissionInfo } from '../interfaces/mission/MissionInfo';

const MissionSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: { createdAt: 'date' }, versionKey: false },
);

export default mongoose.model<MissionInfo & mongoose.Document>('Mission', MissionSchema);
