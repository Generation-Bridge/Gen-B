const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

//Sample data - to be deleted
const sampleUsers = [
  {id: 1, name: 'Hien', phone: '123456789', email: 'hien@hien.com'},
];

const seniors = [
  {id: 1, name: 'Old Hien', phone: '123456789', email: 'oldhien@hien.com'},
];

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Specifies particular users',
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
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all users',
      resolve: () => sampleUsers,
    },
    seniors: {
      type: new GraphQLList(UserType),
      description: 'List of senior users',
      resolve: () => seniors,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = {schema};
