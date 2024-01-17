import express from "express";

const router = express.Router();

router.post("/api/users/signout",async (req, res, next) => {
    req.session = null;
    return res.send({message: "Successfully logged out."});
});

export { router as signoutRouter };