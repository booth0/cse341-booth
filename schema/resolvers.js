import contactController from '../controllers/contactController.js';

const root = {
  // Queries
  contacts: async () => {
    return await contactController.getAllContacts();
  },
  
  contact: async ({ id }) => {
    return await contactController.getContactById(id);
  },

  // Mutations
  createContact: async ({ firstName, lastName, email, favoriteColor, birthday }) => {
    return await contactController.createContact({ firstName, lastName, email, favoriteColor, birthday });
  },

  updateContact: async ({ id, firstName, lastName, email, favoriteColor, birthday }) => {
    const updates = {};
    if (firstName) updates.firstName = firstName;
    if (lastName) updates.lastName = lastName;
    if (email) updates.email = email;
    if (favoriteColor) updates.favoriteColor = favoriteColor;
    if (birthday) updates.birthday = birthday;
    
    return await contactController.updateContact(id, updates);
  },

  deleteContact: async ({ id }) => {
    return await contactController.deleteContact(id);
  }
};

export default root;