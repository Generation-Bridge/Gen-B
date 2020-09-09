const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

//Sample data - to be deleted
const helpersData = [
  {id: 1, name: 'Hien', phone: '123456789', email: 'hien@hien.com'},
  {
    id: 2,
    name: 'Justin',
    phone: '123456788',
    email: 'justin@justin.com',
  },
];

const seniorsData = [
  {
    id: 1,
    name: 'Old Hien',
    phone: '123456789',
    email: 'oldhien@hien.com',
  },
  {
    id: 2,
    name: 'Old Justin',
    phone: '123456781',
    email: 'oldjustin@justin.com',
  },
];

const taskData = [
  {id: 1, seniorID: 1, helperIDs: [1, 2], taskType: 'conversation', taskDescription: 'Need someone to talk to!'},
];

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'Specifies particular tasks',
  fields: {
    id: {type: GraphQLInt!},
    seniorID: {type: GraphQLNonNull(GraphQLInt)},
    helperIDs: {type: GraphQLList(GraphQLInt)},
    taskType: {type: GraphQLString},
  },
});

const HelperType = new GraphQLObjectType({
  name: 'Helpers',
  description: 'Specifies particular helpers',
  fields: {
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    phone: {type: GraphQLNonNull(GraphQLInt)},
    email: {type: GraphQLNonNull(GraphQLString)},
    tasks: {
      type: GraphQLList(TaskType),
      resolve: (helper: any) =>
        taskData.filter(task => task.helperIDs.includes(helper.id)),
    },
  },
});

const SeniorType = new GraphQLObjectType({
  name: 'Seniors',
  description: 'Specifies particular seniors',
  fields: {
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    phone: {type: GraphQLNonNull(GraphQLInt)},
    email: {type: GraphQLString},
  },
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    helpers: {
      type: new GraphQLList(HelperType),
      description: 'List of all helpers',
      resolve: () => helpersData,
    },
    seniors: {
      type: new GraphQLList(SeniorType),
      description: 'List of senior users',
      resolve: () => seniorsData,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = {schema};
