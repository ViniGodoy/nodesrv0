import express from "express";

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, _) {
  res.send('respond with a resource');
});

export default router;
