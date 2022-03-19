const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    let queryText = 'SElECT * FROM "to-do" ORDER BY "id";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('error getting to-do', err);
        res.sendStatus(500); 
    })
})
//POST
router.post('/', (req, res) => {
    let task = req.body;

    let queryText =`
        INSERT INTO "to-do" (
        "task", "completed")    
        VALUES ($1, $2);
        `
    let values = [task.task, task.completed]

    console.log('adding new task', values);
    
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('Error in router POST', err);
            res.sendStatus(500);
        })
})

//PUT

//DELETE


module.exports = router;