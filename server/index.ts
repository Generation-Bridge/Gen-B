export {}; //used to bypass "cannot redeclare block-scoped variable" error
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const {schema} = require('./schema/schema');
const loginRouter = require('./routes/loginRouter');

const PORT = process.env.port || 3000;

app.use(express.json());
app.use('/graphql', graphqlHTTP({graphiql: true, schema}));
app.use('/login', loginRouter);

/* ----------------Error Handling---------------- */
app.use((err: any, req: any, res: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = {...defaultErr, err};
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
