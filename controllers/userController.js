// controllers.js

// GET all items
const getAllItems = (req, res) => {
    res.send("Get all items");
};

// GET single item
const getItemById = (req, res) => {
    const id = req.params.id;
    res.send(`Get item with ID: ${id}`);
};

// CREATE item
const createItem = (req, res) => {
    const data = req.body;
    res.send("Item created");
};

// UPDATE item
const updateItem = (req, res) => {
    const id = req.params.id;
    res.send(`Item ${id} updated`);
};

// DELETE item
const deleteItem = (req, res) => {
    const id = req.params.id;
    res.send(`Item ${id} deleted`);
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};