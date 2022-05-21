import express from 'express';
import { register ,login, scheduleTherapist, editScheduleTherapist} from '../controllers/auth';
import { therapist } from '../controllers/auth';
const router = express.Router();

// router.get("/:message",showMessage)
router.post("/register",register)

router.post("/login",login)

router.get("/therapist",therapist)

router.get("/schedule-therapist",scheduleTherapist)


router.post("/update-schedule-therapist",editScheduleTherapist)


module.exports = router;