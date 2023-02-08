// Importations
import { Router } from "express";
import * as authControllers from "../controllers/Auth.controllers.js";

// variables
const router = Router();

/** POST Methods */
// Ces chemins nous donne acce aux fonctions  du fichier authContoller
router.route("/api/user/register").post(authControllers.register); // register user
// router.route("/api/user/registerMail").post(registerMail); // send the email
router
  .route("/api/user/authenticate")
  .post(authControllers.verifyUser, (req, res) => res.end()); // authenticate user
router
  .route("/api/user/login")
  .post(authControllers.verifyUser, authControllers.login); // login in app

/** GET Methods */
// Ces chemins nous donne acce aux fonctions  du fichier authContoller
router.route("/api/user/:username").get(authControllers.getUser); // user with username
// router
//   .route("/api/user/generateOTP")
//   .get(authControllers.verifyUser, localVariables, authControllers.generateOTP); // generate random OTP
router
  .route("/api/user/verifyOTP")
  .get(authControllers.verifyUser, authControllers.verifyOTP); // verify generated OTP
router
  .route("/api/user/createResetSession")
  .get(authControllers.createResetSession); // reset all the variables

/** PUT Methods */
// Ces chemins nous donne acce aux fonctions  du fichier authContoller
// router.route("/api/user/updateuser").put(Auth, authControllers.updateUser); // is use to update the user profile
router
  .route("/api/user/resetPassword")
  .put(authControllers.verifyUser, authControllers.resetPassword); // use to reset password

export default router; // Disponible dans toute notre application
