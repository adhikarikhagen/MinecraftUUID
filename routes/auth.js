const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');
const { validateInput } = require('../middleware/validate-input');
const { login } = require('../controllers/auth');

router.get('/login', [
    check('username', 'Email is required').not().isEmpty(),
    validateInput
], login);

module.exports = router;