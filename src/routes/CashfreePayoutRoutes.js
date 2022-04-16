const router = require('express').Router()
//Import auth controller
const Cashfree = require('../controllers/CashfreePayoutsController') 
//import validation
const check = require('../validation/CheckValidation')

 
router.get('/Authorization',Cashfree.addBenificiary)
router.get('/getBenificiary',Cashfree.getBenificiary)
router.get('/verifyAccount',Cashfree.verifyBankAccount)
router.get('/createTransaferRequest',Cashfree.createTransaferRequest)
// router.get('/:id/avatar',KYCController.retrieveProfilePic)

module.exports = router
// "Email-id : support@ludopayz.in pssword : Zaqmlp@101"

 