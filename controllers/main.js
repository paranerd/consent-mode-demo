const express = require('express');
const router = express.Router();
const path = require('path');

router.get(['/', '/index.html'], (req, res) => {
	res.render('home')
});

router.get(['/store'], (req, res) => {
	res.render('store');
});

router.get(['/search'], (req, res) => {
	res.render('search');
});

module.exports = router;
