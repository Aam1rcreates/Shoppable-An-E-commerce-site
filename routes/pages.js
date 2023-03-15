const express = require('express');
const router = express.Router();
const catchAsyncError = require('../utils/catchAsync');
const { home, getPage, contactUs, contact_Us } = require('../controllers/pages');

router.get('/', catchAsyncError(home));

router.get('/contact', catchAsyncError(contactUs)); 

router.post('/contact', catchAsyncError(contact_Us)); 

router.get('/:slug', catchAsyncError(getPage));

module.exports = router;