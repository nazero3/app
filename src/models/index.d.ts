import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Comment {
  readonly id: string;
  readonly desc?: string;
  readonly todos?: (CommentTodo | null)[];
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class CommentTodo {
  readonly id: string;
  readonly comment: Comment;
  readonly todo: Todo;
  constructor(init: ModelInit<CommentTodo>);
  static copyOf(source: CommentTodo, mutator: (draft: MutableModel<CommentTodo>) => MutableModel<CommentTodo> | void): CommentTodo;
}

export declare class Todo {
  readonly id: string;
  readonly desc: string;
  readonly comments?: (CommentTodo | null)[];
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}