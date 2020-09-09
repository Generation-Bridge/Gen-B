const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'Specifies particular tasks',
  fields: {
    id: {type: GraphQLNonNull(GraphQLInt)},
    seniorID: {type: GraphQLNonNull(GraphQLInt)},
    helperIDs: {type: GraphQLList(GraphQLInt)},
    taskType: {type: GraphQLString},
    taskDescription: {type: GraphQLString},
    location: {type: GraphQLString},
    completed: {type: GraphQLBoolean},
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
    password: {type: GraphQLNonNull(GraphQLString)},
    // tasks: {
    //   type: GraphQLList(TaskType),
    //   resolve: (helper: any) =>
    //     taskData.filter(task => task.helperIDs.includes(helper.id)),
    // },
  },
});

const SeniorType = new GraphQLObjectType({
  name: 'Seniors',
  description: 'Specifies particular seniors',
  fields: {
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    phone: {type: GraphQLNonNull(GraphQLInt)},
    password: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLString},
    ZIPCode: {type: GraphQLInt},
    // tasks: {
    //   type: GraphQLList(TaskType),
    //   resolve: (senior: any) =>
    //     taskData.filter(task => task.seniorID === senior.id),
    // },
  },
});

module.exports = {TaskType, HelperType, SeniorType};
