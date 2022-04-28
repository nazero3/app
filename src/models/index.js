// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FirstModel } = initSchema(schema);

export {
  FirstModel
};