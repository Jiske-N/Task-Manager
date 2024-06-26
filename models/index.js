const Board = require("./Board");
const User_s = require("./User");
const Task = require("./Task");
const Tag = require("./Tag");
const Comment = require("./Comment");
const List = require("./List");
//Each User can have many Boards
// User.hasMany(Board, {
//     foreignKey: "user_id",
//     onDelete: "CASCADE",
// });

// Board.belongsTo(User, {
//     foreignKey: "user_id",
// });

//Each User can have have many tasks
User_s.hasMany(Task, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Task.belongsTo(User_s, {
    foreignKey: "user_id",
});

//One board has many lists
Board.hasMany(List, {
    foreignKey: "board_id",
});
List.belongsTo(Board, {
    foreignKey: "board_id",
});

//One list has many tasks
List.hasMany(Task, {
    foreignKey: "list_id",
});
Task.belongsTo(List, {
    foreignKey: "list_id",
});

//One task has many comments
Task.hasMany(Comment, {
    foreignKey: "task_id",
});
Comment.belongsTo(Task, {
    foreignKey: "task_id",
});

//Each User can have have many comments
User_s.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Comment.belongsTo(User_s, {
    foreignKey: "user_id",
});

module.exports = { User_s, Board, Task, Tag, Comment, List };
