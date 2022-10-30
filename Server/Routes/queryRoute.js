import express from 'express';

import postInfo from '../Controaller/querysFromEvangadi.js';


let forQueryPosting = express.Router();

forQueryPosting.post('/postQuery',postInfo)


export default forQueryPosting