const db = require("../db.js");


const stackPush = (model) => async (req, res) => {
  try {
    const item = await db[model].create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const stackPop = (model) => async (req, res) => {
  try {
    const item = await db[model].findOne({ order: [['id', 'DESC']] });
    if (item) {
      await db[model].destroy({ where: { id: item.id } });
      res.json(item);
    } else {
      throw new Error("Stack is empty");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const stackPeek = (model) => async (req, res) => {
  try {
    const item = await db[model].findOne({ order: [['id', 'DESC']] });
    if (item) {
      res.json(item);
    } else {
      throw new Error("Stack is empty");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const queueEnqueue = stackPush; 

const queueDequeue = (model) => async (req, res) => {
  try {
    const item = await db[model].findOne({ order: [['id', 'ASC']] });
    if (item) {
      await db[model].destroy({ where: { id: item.id } });
      res.json(item);
    } else {
      throw new Error("Queue is empty");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const queuePeek = (model) => async (req, res) => {
  try {
    const item = await db[model].findOne({ order: [['id', 'ASC']] });
    if (item) {
      res.json(item);
    } else {
      throw new Error("Queue is empty");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const arrayInsert = stackPush; 

const arrayRemove = (model) => async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db[model].destroy({ where: { id } });
    if (deleted) {
      return res.status(200).json({ message: `Deleted ${model} with id ${id}` });
    }
    throw new Error(`${model} not found`);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const arrayGet = (model) => async (req, res) => {
  try {
    const items = await db[model].findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const arrayGetAtIndex = (model) => async (req, res) => {
  try {
    const { index } = req.params;
    const item = await db[model].findOne({ where: { id: index } });
    if (item) {
      res.json(item);
    } else {
      throw new Error(`No item at index ${index}`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  stackPush,
  stackPop,
  stackPeek,
  queueEnqueue,
  queueDequeue,
  queuePeek, 
  arrayInsert,
  arrayRemove,
  arrayGet,
  arrayGetAtIndex 
};