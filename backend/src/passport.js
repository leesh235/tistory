import passport from "passport";
import {Strategy,ExtractJwt} from "passport-jwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const jwtOptions = {
    //HTTP HEADERS에서 Bearer token 찾아와 해석한다
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

//payload정보와 일치하는 정보(db)가 있으면 반환한다/콜백함수
const verifyUser = async(payload, done) => {
    try {
      //payload.id는 고정
        const user = await prisma.user.findUnique({
            where: { id: payload.id },
        });
        if (user !== null) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
}

//user정보가 있으면 req.user에 user를 넣는다.
export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

//서버보다 먼저 작동
passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();