import express from 'express';
import { register ,login, scheduleTherapist, editScheduleTherapist, therapistregister, therapistlogin,bookingschedule, appointmentcheduleforpatient, appointmentchedulefortherapist, reportInsert, getReport, insertscheduleTherapist} from '../controllers/auth';
import { therapist } from '../controllers/auth';
const router = express.Router();

// router.get("/:message",showMessage)
router.post("/register",register)

router.post("/login",login)

router.post("/therapist-register",therapistregister)

router.post("/therapist-login",therapistlogin)

router.get("/therapist",therapist)

router.post("/schedule-therapist",scheduleTherapist)



router.post("/update-schedule-therapist",insertscheduleTherapist)

router.post("/book-schedule",bookingschedule)


router.post("/get-appointmet-patient",appointmentcheduleforpatient)

router.post("/get-appointmet-therapist",appointmentchedulefortherapist)

router.post("/upload-report",reportInsert)

router.post("/get-report",getReport)




module.exports = router;