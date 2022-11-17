import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(state);
        console.log(action);
        const { name } = action.payload;
        console.log(name);

        const isDublicate = name => {
          return state.contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
          );
        };

        isDublicate(name)
          ? Notify.info(`${name} is already in contacts.`)
          : state.contacts.push(action.payload);
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
      console.log('!!!!');
      return state.contacts.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

// const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

Notify.init({
  position: 'center-top',
  fontSize: '16px',
  timeout: 4000,
  width: '400px',
});
