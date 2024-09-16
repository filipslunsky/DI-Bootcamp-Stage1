const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env;

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false },
    },
});
// async function getVersion() {
//     const result = await db.raw('select version()');
//     console.log(result.rows);    
// }

// getVersion();

// db('products')
// .select('name', 'id', 'price')
// .where ({id: 1})
// // .where(id, 1) -> works the same without object
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// });

// db.raw('select id, name, price from products') -> this works exactly with the same results but the performance of cache is much more consuming here
// .then(data => {
//     console.log(data.rows);
// })
// .catch(e => {
//     console.log(e);
// });

// db('products')
// .insert([
//     {name: 'Product 600', price: 600},
//     {name: 'Product 700', price: 700}
// ],
// ['id']
// )
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// });

// db('products')
// .update({name: 'Product 222'}, ['name', 'price', 'id'])
// .where({ id: 2 })
// .then(data => {
//     console.log(data);
// })
// .catch(e => {
//     console.log(e);
// });

db('products')
.where({id:3})
.del()
.returning('id', 'name', 'price')
.then(data => {
    console.log(data);
})
.catch(e => {
    console.log(e);  
});