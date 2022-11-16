import { Notify } from 'notiflix';

const { createSlice, nanoid } = require('@reduxjs/toolkit');

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

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

// Генераторы экшенов
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

// const addContact = contact => {
//   const { name } = contact;
//   if (isDublicate(name)) {
//     return Notify.info(`${name} is already in contacts.`);
//   }

//   setContacts(prevState => {
//     const newContact = {
//       id: nanoid(),
//       ...contact,
//     };

//     return [...prevState, newContact];
//   });
// };

//   const deleteContact = contactId => {
//     setContacts(prevState => {
//       return prevState.filter(contact => contact.id !== contactId);
//     });
//   };

Notify.init({
  position: 'center-top',
  fontSize: '16px',
  timeout: 4000,
  width: '400px',
});
