import express from 'express';
import dotenv from 'dotenv';
// import routes from './routes/index.js';
import { createHandler } from 'graphql-http/lib/use/express';
import connectDB from './db/conn.js';
import schema from './schema/schema.js';

dotenv.config();

const app = express();

await connectDB();

app.all('/graphql', createHandler({
  schema: schema
}));

// Serve GraphiQL interface
app.get('/', (_req, res) => {
  res.type('html');
  res.end(`<!DOCTYPE html>
<html>
  <head>
    <title>GraphiQL</title>
    <style>
      body {
        height: 100%;
        margin: 0;
        width: 100%;
        overflow: hidden;
      }
      #graphiql {
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="graphiql">Loading...</div>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
    ></script>
    <link rel="stylesheet" href="https://unpkg.com/graphiql@2.4.7/graphiql.min.css" />
    <script
      crossorigin
      src="https://unpkg.com/graphiql@2.4.7/graphiql.min.js"
    ></script>
    <script>
      const fetcher = GraphiQL.createFetcher({
        url: '/graphql',
      });
      
      ReactDOM.render(
        React.createElement(GraphiQL, { fetcher: fetcher }),
        document.getElementById('graphiql'),
      );
    </script>
  </body>
</html>`);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
  console.log(`GraphiQL interface at http://localhost:${PORT}/`);
});
