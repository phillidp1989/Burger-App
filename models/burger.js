const orm = require("../config/orm");

const burger = {
    all: async () => await orm.selectAll("burgers"),
    create: async value => await orm.insertOne("burgers", "burger_name", value),
    update: async (newVal, referenceVal) => await orm.updateOne("burgers", "devoured", newVal, "id", referenceVal),
    delete: async referenceVal => await orm.deleteOne("burgers", "id", referenceVal)    
};

module.exports = burger;