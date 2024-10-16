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

// the autocommit can be controlled using "rollback"/"commit" (more in Transactions)

const test = async () => {
    try {
        const trx = await db.transaction();

        const product3 = await db('products')
        .insert({name: 'proudct 3', price: 12345}, ['id'])
        .transacting(trx)

        console.log('proudct 3=>', product3);
        
        const product4 = await db('products')
        .insert({name: 'proudct 4', price: 54321}, ['id'])
        .transacting(trx)

        console.log('proudct 4=>', product4);

        await trx.commit();

    } catch (e) {
        console.log(e);
        await trx.rollback();
    }
}

test();