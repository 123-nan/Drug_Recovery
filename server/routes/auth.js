import express from 'express';
import { register ,login, scheduleTherapist, editScheduleTherapist, therapistregister, therapistlogin} from '../controllers/auth';
import { therapist } from '../controllers/auth';
const router = express.Router();

// router.get("/:message",showMessage)
router.post("/register",register)

router.post("/login",login)

router.post("/therapist-register",therapistregister)

router.post("/therapist-login",therapistlogin)

router.get("/therapist",therapist)

router.post("/schedule-therapist",scheduleTherapist)

router.post("/update-schedule-therapist",editScheduleTherapist)



module.exports = router;