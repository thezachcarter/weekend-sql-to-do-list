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
        "task", "completed", "timeCreated")    
        VALUES ($1, $2, $3);
        `
    let values = [task.task, task.completed, task.timeCreated]

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
router.put('/:id', (req,res) => {
    let id = req.params.id;
    let content = req.body.completed;

    console.log('in router PUT', content, id);

    let queryText = '';

    if (content === 'true') {
        queryText =
            `UPDATE "to-do"
            SET "completed" = false
            WHERE "id" = $1;
            `
    } else if (content === 'false') {
        queryText =
            `UPDATE "to-do"
            SET "completed" = true
            WHERE "id" = $1;
            `
    } else {
        console.log('Error in server PUT');
        
    }

    pool.query(queryText, [id])
    .then (result =>{
        res.sendStatus(200);
    }).catch (err => {
        console.log('POOL BROKE:', err);
        res.sendStatus(500);
    })
    
})
//DELETE
router.delete('/:id', (req, res) => {
    console.log('in delete route', req.params.id)
  
    //sanitize SQL inputs
    const values = [req.params.id];
    
    const queryText = `
    DELETE FROM "to-do"
    WHERE "id" = $1;`
  
    pool.query(queryText, values)
    .then( result => {
        res.sendStatus(204)
    }).catch( err => {
        console.log(err);
        res.sendStatus(500)
    })
  })

module.exports = router;