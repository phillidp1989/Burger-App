const orm = require("../config/orm");

const burger = {
    all: async () => await orm.selectAll("burgers"),
    create: value => orm.insertOne("burgers", "burger_name", value),
    update: (newVal, referenceVal) => orm.updateOne("burgers", "devoured", newVal, "id", referenceVal)
    
};

module.exports = burger;