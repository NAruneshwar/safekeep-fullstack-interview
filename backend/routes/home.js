const { pool } = require('../db')

const router = require('express').Router();

router.route('/').get(async(req,res) =>{
    try{
        const userDetails = await pool.query("SELECT users.*, sum(no_of_hours.no_of_hours) FROM users, no_of_hours where users.id = no_of_hours.user_id group by(users.id)");
        // console.log(userDetails.rows)
        res.json(userDetails.rows)

    }
    catch(err){
        console.error(err.message)
    }
});

router.route('/all').get(async(req,res) =>{
    try{
        const userDetails = await pool.query("SELECT no_of_hours.id, users.first_name,users.last_name,  no_of_hours.no_of_hours FROM users, no_of_hours where users.id = no_of_hours.user_id");
        // console.log(userDetails.rows)
        res.json(userDetails.rows)
    }
    catch(err){
        console.error(err.message)
    }
});

router.route('/').post(async(req,res) =>{
    try {
        const existingUserDetails = await pool.query("SELECT users.id FROM users where users.first_name = ($1) and users.last_name = ($2)",[req.body.first_name, req.body.last_name]);
        // console.log(existingUserDetails)
        if(existingUserDetails.rowCount>0){
            user = existingUserDetails.rows[0]['id']
        }
        else{
            const newUser = await pool.query("INSERT INTO users (first_name, last_name) VALUES($1,$2) RETURNING *",
            [req.body.first_name, req.body.last_name])
            // console.log(newUser);
            user = newUser.rows[0]['id']
        }
        const newHours = await pool.query("INSERT INTO no_of_hours (user_id, no_of_hours) VALUES($1,$2) RETURNING *",
        [parseInt(user), req.body.no_of_hours])
        res.json(newHours.rows);

       
    } catch(err) {
        console.error(err.message)
}
});


router.route('/:id').get(async(req,res) =>{
    try{
        const { id } = req.params;
        const userDetails = await pool.query("SELECT users.*, no_of_hours.no_of_hours FROM users, no_of_hours where users.id = no_of_hours.user_id and users.id = $1", [id]);
        // console.log(userDetails.rows)
        res.json(userDetails.rows)
    }
    catch(err){
        console.error(err.message)
    }
});

router.route('/:id').delete(async(req,res) =>{
    // console.log("HERE");
    try{
        // console.log("HERE");
        const { id } = req.params;
        const userDetails = await pool.query("DELETE FROM no_of_hours WHERE id = $1", [id]);
        // console.log(userDetails.rows)
        res.json("Entry Deleted");
    }
    catch(err){
        console.error(err.message)
    }
});


module.exports = router;