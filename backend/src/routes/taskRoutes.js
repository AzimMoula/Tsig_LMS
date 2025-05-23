import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

// Create a new task
router.post('/', TaskController.create);

// Get all tasks
router.get('/', TaskController.getAll);

// Get global tasks
router.get('/global', TaskController.getGlobalTasks);

// Get tasks by user ID
router.get('/user/:userId', TaskController.getByUserId);

// Get task by ID
router.get('/:id', TaskController.getById);

// Update task
router.put('/:id', TaskController.update);

router.delete('/delete', TaskController.deleteAll);
// Delete task
router.delete('/:id', TaskController.delete);


// Submit task
router.post('/submit', TaskController.submitTask);

// Add to your routes file
router.get('/tasks/:taskId/submission', TaskController.getSubmissionFile);

// Get file by ID
router.get('/files/:fileId', TaskController.getFileById);

// Add this route with your other task routes
router.delete('/files/all', TaskController.deleteAllFiles);

export default router;