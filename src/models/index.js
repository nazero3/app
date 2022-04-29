// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, CommentTodo, Todo } = initSchema(schema);

export {
  Comment,
  CommentTodo,
  Todo
};