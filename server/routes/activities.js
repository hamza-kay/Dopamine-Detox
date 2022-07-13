import express from 'express';

import { getActivity, createActivity, updateActivitiy, deleteActivity } from '../controllers/activities.js';

const router = express.Router();

router.get('/', getActivity);
router.post('/', createActivity);
router.patch('/:id', updateActivitiy);
router.delete('/:id', deleteActivity);

export default router;
