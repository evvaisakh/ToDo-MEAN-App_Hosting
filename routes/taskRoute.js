const express = require('express');

const taskController = require('../controller/taskController');

const router = express.Router();

router.get('/', taskController.getTasks);

router.get('/notcomplete', taskController.notcomplete);

router.get('/complete', taskController.complete);

router.post('/task/delete', taskController.deleteTask);

router.post('/task/mark', taskController.markTask);

router.post('/task', taskController.postTask);

module.exports = router;