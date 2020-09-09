export {};
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const {TaskType, HelperType, SeniorType} = require('./types');
const model = require('./model');

// //Sample data - to be deleted
// const helpersData = [
//   {
//     id: 1,
//     name: 'Hien',
//     phone: '123456789',
//     email: 'hien@hien.com',
//     password: 'hienhien',
//     // photo: null
//   },
//   {
//     id: 2,
//     name: 'Justin',
//     phone: '123456788',
//     email: 'justin@justin.com',
//     password: 'justinjustin',
//     // photo: null
//   },
// ];

// const seniorsData = [
//   {
//     id: 1,
//     name: 'Old Hien',
//     phone: '123456789',
//     email: 'oldhien@hien.com',
//     password: 'required',
//     ZIPCode: 90025,
//   },
//   {
//     id: 2,
//     name: 'Old Justin',
//     phone: '123456781',
//     password: 'required',
//   },
// ];

// const taskData = [
//   {
//     id: 1,
//     seniorID: 1,
//     helperIDs: [1, 2],
//     taskType: 'conversation',
//     taskDescription: 'Very lonely. Need someone to talk to!',
//     location: 'Phone call',
//   },
//   {
//     id: 2,
//     seniorID: 2,
//     helperIDs: [1, 2],
//     taskType: 'errand',
//     taskDescription: 'Need to buy rum',
//     location: "Old Justin's house",
//   },
// ];

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    helper: {
      type: HelperType,
      description: 'Returns designated helper based on ID',
      args: {
        id: {type: GraphQLInt},
      },
      resolve: (parent: any, {id}: any) => {
        const queryText = `SELECT * FROM helpers WHERE id=$1`;
        return model.query(queryText, id).catch((err: any) => console.log(err));
      },
    },
    helpers: {
      type: GraphQLList(HelperType),
      description: 'List of all helpers',
      resolve: () =>
        model
          .query(`SELECT * FROM helpers`)
          .then((data: any) => data.rows)
          .catch((err: any) => console.log(err)),
    },
    // seniors: {
    //   type: new GraphQLList(SeniorType),
    //   description: 'List of senior users',
    //   resolve: () => seniorsData,
    // },
  }),
});

// const RootMutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'Root Mutation',
//   fields: () => ({
//     addHelper: {
//       type: HelperType,
//       description: 'Add a helper',
//       args: {
//         name: {type: GraphQLNonNull(GraphQLString)},
//         phone: {type: GraphQLNonNull(GraphQLInt)},
//         email: {type: GraphQLNonNull(GraphQLString)},
//         password: {type: GraphQLNonNull(GraphQLString)},
//       },
//       resolve: (parent: any, args: any) => {
//         const {name, phone, email, password} = args;
//         const newHelper = {
//           name,
//           phone,
//           email,
//           password,
//           id: helpersData.length + 1,
//         };
//         helpersData.push(newHelper);
//         return newHelper;
//       },
//     },
//   }),
// });

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType,
});

module.exports = {schema};
