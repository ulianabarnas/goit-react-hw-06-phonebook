import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {},
  },
});

// // Генераторы экшенов
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// // Редюсер слайса
// const tasksReducer = tasksSlice.reducer;

//   const changeFilter = e => {
//     setFilter(e.target.value);
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const filteredContacts = getFilteredContacts();
