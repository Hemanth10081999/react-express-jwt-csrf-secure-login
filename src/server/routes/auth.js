const router = require('express').Router();

router.post('/', async function (req, res) {
  try {
    return res.status(200).json({status: 'success'});
  } catch (error) {
    return res.status(500).json('Post Request to Contact Endpoint failed');
  }
});

module.exports = router;
