const jwt = require('jsonwebtoken');

/** jwt.sign(
 * { userid: 123456, name: 'John', email: jjj@gmail.com } -> payload,
 * SECRET / PASSWORD,
 * { expiresIn: "60s" }
)
*/
const token = jwt.sign(
    {
        userid: '101',
        username: 'johnjohn',
        email: 'john@gmail.com'
    },
    '123abc456def',
    {
        expiresIn: '3d'
    },
);

// console.log(token);

const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMDEiLCJ1c2VybmFtZSI6ImpvaG5qb2huIiwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsImlhdCI6MTczMDAxNTU3MywiZXhwIjoxNzMwMDE1NjkzfQ.VaIp5GeI-_VA-c5mUVWCUQsd_-E5E_oaqMH9esxwFyA';

/**
 * jwt.verify(
 * token,
 * secret,
 * (error, decoded) => {})
 */

jwt.verify(token, '123abc456def', (err, decoded) => {
    if(err) {
        return console.log(err.message);
    }
    console.log(decoded);
});

