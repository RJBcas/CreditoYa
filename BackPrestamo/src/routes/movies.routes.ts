import { Router} from 'express';
import {moviesControllers} from '../controllers/movies.controllers';


const router: Router = Router();

router.get('/', moviesControllers.getMovies );
router.get('/:id', moviesControllers.getMovie );

router.post('/', moviesControllers.createMovie);
router.put('/:id', moviesControllers.putMovie);
router.delete('/:id', moviesControllers.deleteMovie);


export default router;