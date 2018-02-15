const express = require('express');
const router = express.Router();
const Registration = require('../../model/registration/controller');
const logger = require('../../logger');
router.post('/new', (req, res) => {

    if (!req.body.registration) {
        return res.status(500).send({status:500, message: "request does not contain a registration"});

    } else {
        Registration.create(req.body.registration)
            .then((registration) => {
                logger.info('creating registration ', registration);
                res.status(200).send({status: 200, registration})
            })
            .catch((err) => {
                logger.error(err);
                res.status(500).send({status:500, message: err}
                )})
    }

});

router.get('/all', (req, res) => {
    Registration.getAll()
        .then((registrations) => 
            res.status(200).send({status:200, registrations}))
        .catch((error) => 
            res.status(500).send({status:500, message: err}))
})

module.exports = router;