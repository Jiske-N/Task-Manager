const express = require("express");
const router = express.Router();
const { Board, List, Task } = require("../models");

// Get all boards with their associated  tasks
router.get("/", async (req, res) => {

  try {
    //Get all the boards(only need 1 currently) - 
    //TODO - edit for only a single board
    //TODO - link the tasks and lists to Board so only have to call Board (include List & Task)
    const boardsData = await Board.findAll();
    const boards = boardsData.map((board) => board.get({ plain: true }));

  //Get all the lists for that board  (remove when above task completed)
    const listsData = await List.findAll({
      where: {
        board_id: boards[0].id
      }
    });
    const lists = listsData.map((list) => list.get({ plain: true }));

    const taskData = await Task.findAll({
      where: {
        board_id: boards[0].id
      }
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));


    //Get all the tasks for the board
    res.render("board", { 
   lists,
   tasks
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single board by ID with its tasks
router.get("/:id", async (req, res) => {
  try {
    const boardData = await Board.findByPk(req.params.id, {
      include: [{ model: Task }],
    });

    if (!boardData) {
      return res.status(404).json({ error: "Board not found" });
    }

    const board = boardData.get({ plain: true });
    res.json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new board
router.post("/", async (req, res) => {
  try {
    const { name, user_id } = req.body;
    const newBoard = await Board.create({ name, user_id });
    res.status(200).json(newBoard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a board by ID
router.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const board = await Board.findByPk(req.params.id);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    board.name = name;
    await board.save();
    res.json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a board by ID
router.delete("/:id", async (req, res) => {
  try {
    const board = await Board.findByPk(req.params.id);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    await board.destroy();
    res.json({ message: "Board deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
