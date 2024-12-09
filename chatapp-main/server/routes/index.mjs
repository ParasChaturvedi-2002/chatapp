import express from 'express'
import registerUser from "../controller/registerUser.mjs" // import registerUser function from controller/
import checkEmail from '../controller/checkEmail.mjs'  // import checkEmail function from controller/
import checkPassword from '../controller/checkPassword.mjs'  // import checkPassword function from controller/
import userDetails from '../controller/userDetails.mjs'  // import userDetails function from controller/
import logout from '../controller/logout.mjs'  // import logout function from controller/
import updateUserDetails from '../controller/updateUserDetails.mjs'  // import updateUserDetails function from controller/
import searchUser from '../controller/searchUser.mjs'  // import searchUser function from controller/

const router = express.Router()

//create user api
router.post('/register',registerUser)
//check user email
router.post('/email',checkEmail)
//check user password
router.post('/password',checkPassword)
//login user details
router.get('/user-details',userDetails)
//logout user
router.get('/logout',logout)
//update user details
router.post('/update-user',updateUserDetails)
//search user
router.post("/search-user",searchUser)


export default router