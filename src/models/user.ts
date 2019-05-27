import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  group?: string
}

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    group: { type: String, default: 'user' }
  },
  { timestamps: true }
)

export default model<IUser>('User', UserSchema)
