import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql';
import root from './resolvers.js';


const ContactType = new GraphQLObjectType({
  name: 'Contact', 
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString)  },
    favoriteColor: { type: new GraphQLNonNull(GraphQLString)  },
    birthday: { type: new GraphQLNonNull(GraphQLString)  }
  }
});

// Build schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      contacts: {
        type: new GraphQLList(ContactType),
        resolve: root.contacts
      },
      contact: {
        type: ContactType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (_, args) => root.contact(args)
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createContact: {
        type: ContactType,
        args: {
          firstName: { type: new GraphQLNonNull(GraphQLString) },
          lastName: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString)  },
          favoriteColor: { type: new GraphQLNonNull(GraphQLString)  },
          birthday: { type: new GraphQLNonNull(GraphQLString)  }
        },
        resolve: (_, args) => root.createContact(args)
      },
      updateContact: {
        type: ContactType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
          firstName: { type: GraphQLString },
          lastName: { type: GraphQLString },
          email: { type: GraphQLString },
          favoriteColor: { type: GraphQLString },
          birthday: { type: GraphQLString }
        },
        resolve: (_, args) => root.updateContact(args)
      },
      deleteContact: {
        type: GraphQLString,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (_, args) => root.deleteContact(args)
      }
    }
  })
});

export default schema;