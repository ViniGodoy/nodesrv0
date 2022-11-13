import express from "express"

const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, _) {
  res.render('index', { title: 'Express' });
});

export default router;
