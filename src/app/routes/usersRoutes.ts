import { Router } from 'express';

const usersRouter = Router();
usersRouter.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});
usersRouter.post('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

export default usersRouter;