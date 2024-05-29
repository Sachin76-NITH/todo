const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.get('/', authenticateToken, getTasks);
router.post('/', authenticateToken, addTask);
router.put('/:id', authenticateToken, updateTask);
router.delete('/:id', authenticateToken, deleteTask);

module.exports = router;

