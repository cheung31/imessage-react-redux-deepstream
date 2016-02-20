module.exports = {
    name: (process.env.NODE_ENV === 'test' ? 'iMsgTest' : 'iMsg'),
    host: 'localhost:27017',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
};
