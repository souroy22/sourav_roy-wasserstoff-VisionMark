import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export interface USER_TYPE {
  username: string;
  id: Types.ObjectId;
}

const genarateToken = async (user: USER_TYPE) => {
  const token = await jwt.sign({ user }, process.env.SECRET_KEY || "", {
    expiresIn: "7d",
  });
  return token;
};

export default genarateToken;
