const express = require('express');
const router = express.Router();
const userService = require('/home/mrrobot/Desktop/Workplace/Piscine_MERN_Jour_04/atom/src/users/user.service.js');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
};

function handleRoute() {
    switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
            return register();
        case url.endsWith('/users') && method === 'GET':
            return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
            return deleteUser();
        default:
            // pass through any requests not handled above
            return realFetch(url, opts)
                .then(response => resolve(response))
                .catch(error => reject(error));
    }
}