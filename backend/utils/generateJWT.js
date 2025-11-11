import jwt from "jsonwebtoken";


export const generateJWT = (payload, expiresIn) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn
  });
};