import { Router } from 'express';
import lotControler from './controler.js'

const lotRouter = new Router();

//роути 
lotRouter.get("/init", lotControler.get_byData);
lotRouter.get('/', lotControler.get);
lotRouter.post('/', lotControler.post);
lotRouter.delete('/:id', lotControler.delete_id);


export default lotRouter;