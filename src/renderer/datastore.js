import Datastore from 'nedb';
import path from 'path';
const { remote } = require('electron');

const dbPath = remote.app.getPath('userData');
export const users = new Datastore({
  autoload: true,
  filename: path.join(dbPath, 'users.db'),
});

export const todos = new Datastore({
  autoload: true,
  filename: path.join(dbPath, 'todos.db'),
});
