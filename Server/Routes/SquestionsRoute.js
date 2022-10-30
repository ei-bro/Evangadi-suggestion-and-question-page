import express from 'express';

import questionFromStudents from '../Controaller/SquestionsController.js';


let forQueryPosting = express.Router();

forQueryPosting.post('/postQueryFromStudents',questionFromStudents)


export default forQueryPosting