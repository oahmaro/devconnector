const express = require('express');
const router = express.Router();

// @route   GET api/post/test
// @desc    Tests posts route
// @access  Public
router.get('/test', (req, res) => {
  return res.json({
    msg: "Posts Works"
  })
});

module.exports = router;