import { Router } from 'express';
import  { signup,updateUser }  from '../controllers/authController'

const router = Router();

router.post('/signup', signup);
router.put("/updateUser", updateUser);

export default router;