import express from "express";
import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    /* #swagger.tags = ['Contacts']
       #swagger.summary = 'Get all contacts or a specific contact by query parameter'
       #swagger.description = 'Retrieve all contacts from the database, or filter by ID using query parameter'
       #swagger.parameters['id'] = {
         in: 'query',
         description: 'Contact ID (optional)',
         required: false,
         type: 'string',
         example: '507f1f77bcf86cd799439011'
       }
       #swagger.responses[200] = {
         description: 'Contacts retrieved successfully',
         schema: [{ $ref: '#/definitions/ContactResponse' }]
       }
       #swagger.responses[400] = {
         description: 'Invalid ID format',
         schema: { $ref: '#/definitions/Error' }
       }
       #swagger.responses[404] = {
         description: 'Contact not found',
         schema: { $ref: '#/definitions/Error' }
       }
       #swagger.responses[500] = {
         description: 'Server error',
         schema: { $ref: '#/definitions/Error' }
       }
    */
    if (req.query.id) return getContactById(req, res);
    return getAllContacts(req, res);
});

router.get('/:id', getContactById
    /* #swagger.tags = ['Contacts']
           #swagger.summary = 'Get a contact by ID'
           #swagger.description = 'Retrieve a specific contact using their ID as a path parameter'
           #swagger.parameters['id'] = {
             in: 'path',
             description: 'Contact ID',
             required: true,
             type: 'string',
             example: '507f1f77bcf86cd799439011'
           }
           #swagger.responses[200] = {
             description: 'Contact retrieved successfully',
             schema: { $ref: '#/definitions/ContactResponse' }
           }
           #swagger.responses[400] = {
             description: 'Invalid ID format',
             schema: { $ref: '#/definitions/Error' }
           }
           #swagger.responses[404] = {
             description: 'Contact not found',
             schema: { $ref: '#/definitions/Error' }
           }
           #swagger.responses[500] = {
             description: 'Server error',
             schema: { $ref: '#/definitions/Error' }
           }
        */
);


router.post('/', createContact
    /* #swagger.tags = ['Contacts']
   #swagger.summary = 'Create a new contact'
   #swagger.description = 'Add a new contact to the database'
   #swagger.parameters['body'] = {
     in: 'body',
     description: 'Contact information',
     required: true,
     schema: { $ref: '#/definitions/Contact' }
   }
   #swagger.responses[201] = {
     description: 'Contact created successfully',
     schema: { $ref: '#/definitions/CreateContactResponse' }
   }
   #swagger.responses[400] = {
     description: 'All fields are required',
     schema: { $ref: '#/definitions/Error' }
   }
   #swagger.responses[500] = {
     description: 'Server error',
     schema: { $ref: '#/definitions/Error' }
   }
*/
);

router.put('/:id', updateContact
/* #swagger.tags = ['Contacts']
   #swagger.summary = 'Update an existing contact'
   #swagger.description = 'Update contact information by ID'
   #swagger.parameters['id'] = {
     in: 'path',
     description: 'Contact ID',
     required: true,
     type: 'string',
     example: '507f1f77bcf86cd799439011'
   }
   #swagger.parameters['body'] = {
     in: 'body',
     description: 'Updated contact information (all fields optional)',
     required: true,
     schema: {
       firstName: 'John',
       lastName: 'Doe',
       email: 'john.doe@example.com',
       favoriteColor: 'Blue',
       birthday: '1990-01-01'
     }
   }
   #swagger.responses[204] = {
     description: 'Contact updated successfully (no content returned)'
   }
   #swagger.responses[400] = {
     description: 'Invalid request',
     schema: { $ref: '#/definitions/Error' }
   }
   #swagger.responses[404] = {
     description: 'Contact not found',
     schema: { $ref: '#/definitions/Error' }
   }
*/
);

router.delete('/:id', deleteContact
/* #swagger.tags = ['Contacts']
   #swagger.summary = 'Delete a contact'
   #swagger.description = 'Remove a contact from the database by ID'
   #swagger.parameters['id'] = {
     in: 'path',
     description: 'Contact ID',
     required: true,
     type: 'string',
     example: '507f1f77bcf86cd799439011'
   }
   #swagger.responses[204] = {
     description: 'Contact deleted successfully (no content returned)'
   }
   #swagger.responses[400] = {
     description: 'Invalid ID format',
     schema: { $ref: '#/definitions/Error' }
   }
   #swagger.responses[404] = {
     description: 'Contact not found',
     schema: { $ref: '#/definitions/Error' }
   }
*/
);

export default router;