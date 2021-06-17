const { Pool } = require('pg');


const connectionString = 'postgresql://trust_our_leader:in_jeff_we_trust@localhost:5432/postgres'
const pool = new Pool({
connectionString,
})

module.exports = {
    pool
}