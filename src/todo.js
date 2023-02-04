/**
 * Represents a task.
 * @constructor
 * @param {number} id - The unique serial# of the task.
 * @param {string} context - The description of the task.
 * @param {boolean} isFinished - The status of the task is done or not.
 * @param {string} category - The group the task belongs to.
 * @param {Array<string>} [tags] - The labels of the task. (Optional)
 */
function Todo(id, context, isFinished, category, tags) {}

/**
 * Add a Todo task.
 * @param {string} [context] - The description of the task. (Optional)
 * @param {boolean} isFinished - The status of the task is done or not.
 * @param {string} category - The group the task belongs to.
 * @param {Array<string>} [tags] - The labels of the task. (Optional)
 */
function createTodo(context, isFinished, category, tags) {}

/**
 * Read all tasks.
 */
function readTodo() {}

/**
 * Delete all tasks.
 */
function deleteTodo() {}

/**
 * The unique serial# of the task.
 * @constructor
 * @augments Todo
 */
function Id() {}

/**
 * Read a task by id.
 * @param {number} id - The unique serial# of the task.
 * @returns {Todo} - The Todo object
 */
Id.prototype.readTodo = function (id) {
  return Todo;
};

/**
 * Update a task by id.
 * @param {number} id - The unique serial# of the task.
 * @param {string} [context] - The description of the task. (Optional)
 * @param {boolean} [isFinished] - The status of the task to be changed. (Optional)
 * @param {string} [category] - The category to be changed. (Optional)
 * @param {Array<string>} [tags] - The tags to be changed. (Optional)
 */
Id.prototype.updateTodo = function (id, context, isFinished, category, tags) {};

/**
 * Delete a task by id.
 * @param {number} id - The unique serial# of the task.
 */
Id.prototype.deleteTodo = function (id) {};

/**
 * The tag of the task.
 * @constructor
 * @augments Todo
 */
function Tag() {}

/**
 * Update a specific tag by id.
 * @param {number} id - The unique serial# of the task.
 * @param {string} asisTag - The tags as-is.
 * @param {string} tobeTag - The tags to be changed.
 */
Tag.prototype.updateTodo = function (id, asisTag, tobeTag) {};

/**
 * Delete the tag by id.
 * @param {number} id - The unique serial# of the task.
 * @param {string} tag The tag to be deleted.
 */
Tag.prototype.deleteSpecificTag = function (id, tag) {};

/**
 * Delete all tags by id.
 * @param {number} id - The unique serial# of the task.
 */
Tag.prototype.deleteTags = function (id) {};
