const { Sequelize }  = require('sequelize');
const userDB = process.env.USERDB || 'root',
    passDB = process.env.PASSDB || 'userpassword'
    nameDB = process.env.NAMEDB || 'SIADA'

const database = new Sequelize(nameDB, userDB, passDB, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false,
    },
});

const DBConnection = async() => {
    try {
        await database.authenticate();
        console.log('DB Connected');
    } catch (error) {
        console.log('Error in DB', error);
    }
};

module.exports = {
    DBConnection,
    database
};