require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/products`, {
  logging: false,
  native: false
});

// console.log("db-deploy",DB_DEPLOY)

// const sequelize = new Sequelize(DB_DEPLOY, {
//     logging: false,
//     native: false
// });

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Stock, User, Order, OrderProduct, Car } = sequelize.models;

// relaciones aquí
Product.hasMany(Stock, { foreignKey: 'productId' });
Stock.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(OrderProduct, { foreignKey: "productId" });
OrderProduct.belongsTo(Product, { foreignKey: "productId" });

Order.hasMany(OrderProduct, { foreignKey: "orderId" });
OrderProduct.belongsTo(Order, { foreignKey: "orderId" });

User.belongsToMany(Product, { through: 'Reviews' })
Product.belongsToMany(User, { through: 'Reviews' })

Car.hasMany(Product, { foreignKey: 'productId' });
Product.belongsTo(Car, { foreignKey: 'productId' });

User.hasMany(Car, { foreignKey: 'userId' });
Car.belongsTo(User, { foreignKey: 'userId' });




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};