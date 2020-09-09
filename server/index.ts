export {}; //used to bypass "cannot redeclare block-scoped variable" error
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const {schema} = require('./schema/schema');
const { query } = require('./schema/model');

const PORT = process.env.port || 3000;

app.use('/graphql', graphqlHTTP({graphiql: true, schema}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// id	integer	 
// type	integer	 
// description	varchar(255)	 
// senior	integer	 
// deadline	time	 
// completed	boolean