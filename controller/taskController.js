const Task = require('../models/taskModels');

exports.getTasks = (req, res, next) => {
    Task.find().then(
        task => {
            res.status(200).json(task);
        }).catch(err => {
            console.log(err);
        });
};

exports.postTask = (req, res, next) => {
    const taskTitle = String(req.body.task);
    console.log(taskTitle);
    const done = false;

    const task = new Task({ task: taskTitle, done: done });

    task.save().then(result => {
        res.status(201).json({
            message: 'Task creating sucessful'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
    const id = String(req.body.id);

    Task.findByIdAndRemove(id).then(result => {
        res.status(200).json({
            message: 'deleted sucessfully'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.markTask = (req, res, next) => {
    const id = req.body.id;


    Task.findById(id).then(task => {
        task.done = task.done ? false : true;
        task.save();
        res.status(202).json({
            message: 'saved sucessfully'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.complete = (req, res, next) => {
    Task.find({ done: true }).then(
        task => {
            res.status(200).json(task);
        }).catch(err => {
            console.log(err);
        });
};

exports.notcomplete = (req, res, next) => {
    Task.find({ done: false }).then(
        task => {
            res.status(200).json(task);
        }).catch(err => {
            console.log(err);
        });
};