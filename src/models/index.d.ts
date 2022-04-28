import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class FirstModel {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<FirstModel>);
  static copyOf(source: FirstModel, mutator: (draft: MutableModel<FirstModel>) => MutableModel<FirstModel> | void): FirstModel;
}