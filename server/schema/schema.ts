export {};
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const {TaskType, HelperType, SeniorType} = require('./types');
const model = require('./model');
const bcrypt = require('bcrypt');

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
        return model
          .query(queryText, [id])
          .then((data: any) => data.rows[0])
          .catch((err: any) => console.log(err));
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
    senior: {
      type: SeniorType,
      description: 'Returns senior data based on ID',
      args: {
        id: {type: GraphQLInt},
      },
      resolve: (parent: any, {id}: any) =>
        model
          .query(`SELECT * FROM seniors WHERE id=$1`, [id])
          .then((data: any) => data.rows[0])
          .catch((err: any) => console.log(err)),
    },
    seniors: {
      type: GraphQLList(SeniorType),
      description: 'List of senior users',
      resolve: () =>
        model
          .query(`SELECT * FROM seniors`)
          .then((data: any) => data.rows)
          .catch((err: any) => console.log(err)),
    },
    tasks: {
      type: GraphQLList(TaskType),
      description: 'List of all tasks',
      resolve: () =>
        model
          .query(
            `SELECT id, type as typeid, senior as seniorid, description, deadline, completed FROM tasks`,
          )
          .then((data: any) => data.rows)
          .catch((err: any) => console.log(err)),
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addHelper: {
      type: HelperType,
      description: 'Add a helper',
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        phone: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)},
        zipcode: {type: GraphQLInt},
      },
      resolve: async (parent: any, args: any) => {
        const {name, phone, email, password, zipcode} = args;
        const hashedPass = await bcrypt.hash(password, 10);
        const queryText = `INSERT INTO helpers (name, phone, email, password, zipcode)
        VALUES ($1, $2, $3, $4, $5)`;
        model
          .query(queryText, [name, phone, email, hashedPass, zipcode])
          .then((data: any) => console.log(data))
          .catch((err: any) => console.log(err));
      },
    },
    addSenior: {
      type: SeniorType,
      description: 'Add a senior',
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        phone: {type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)},
        zipcode: {type: GraphQLNonNull(GraphQLInt)},
        email: {type: GraphQLString},
      },
      resolve: async (parent: any, args: any) => {
        const {name, phone, email, password, zipcode} = args;
        const hashedPass = await bcrypt.hash(password, 10);
        const queryText = `INSERT INTO seniors (name, phone, password, zipcode, email)
        VALUES ($1, $2, $3, $4, $5)`;
        model
          .query(queryText, [name, phone, hashedPass, zipcode, email])
          .then((data: any) => console.log(data))
          .catch((err: any) => console.log(err));
      },
    },
    addTask: {
      type: SeniorType,
      description: 'Add a task',
      args: {
        senior: {type: GraphQLNonNull(GraphQLInt)},
        typeid: {type: GraphQLInt},
        description: {type: GraphQLString},
        deadline: {type: GraphQLString},
      },
      resolve: (parent: any, args: any) => {
        const {senior, typeid, description, deadline} = args;
        const queryText = `INSERT INTO tasks (senior, type, description, deadline)
        VALUES ($1, $2, $3, $4)`;
        model
          .query(queryText, [senior, typeid, description, deadline])
          .then((data: any) => data)
          .catch((err: any) => console.log(err));
      },
    },
    addHelperToTask: {
      type: TaskType,
      description: 'Add Helper to a Task',
      args: {
        helperid: {type: GraphQLNonNull(GraphQLInt)},
        taskid: {type: GraphQLNonNull(GraphQLInt)},
      },
      resolve: (parent: any, args: any) => {
        const {helperid, taskid} = args;
        const queryText = `INSERT INTO helpertask (helperid, taskid)
        VALUES ($1, $2)`;
        model
          .query(queryText, [helperid, taskid])
          .then((data: any) => console.log(data))
          .catch((err: any) => console.log(err));
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

module.exports = {schema};
