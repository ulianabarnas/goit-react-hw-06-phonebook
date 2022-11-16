import { Notify } from 'notiflix';

const { createSlice, nanoid } = require('@reduxjs/toolkit');

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        const { name } = action.payload;

        const isDublicate = name => {
          return state.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
          );
        };

        isDublicate(name)
          ? Notify.info(`${name} is already in contacts.`)
          : state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

Notify.init({
  position: 'center-top',
  fontSize: '16px',
  timeout: 4000,
  width: '400px',
});
