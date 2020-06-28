const orm = require("../config/orm");

// Burger model which invokes ORM methods with parameters for burger db
const burger = {
    all: async () => {
        try {
            await orm.selectAll("burgers");    
        } catch (err) {
            console.error("ERROR - burger.js - all():", err);
        }        
    },
    create: async value => {
        try {
            await orm.insertOne("burgers", "burger_name", value)            
        } catch (err) {
            console.error("ERROR - burger.js - create():", err);
        }
    },
    update: async (newVal, referenceVal) => {
        try {
            await orm.updateOne("burgers", "devoured", newVal, "id", referenceVal)            
        } catch (err) {
            console.error("ERROR - burger.js - updateOne():", err);
        }
    },
    delete: async referenceVal => {
        try {
            await orm.deleteOne("burgers", "id", referenceVal)                
        } catch (err) {
            console.error("ERROR - burger.js - delete():", err);
        }
    }
};

module.exports = burger;