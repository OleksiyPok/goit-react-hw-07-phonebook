import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contactsList: [
    {
      name: 'Wayne Wolff',
      number: '532-501-3575',
      id: '1',
    },
    {
      name: 'Vicki Lebsack',
      number: '488-390-2211',
      id: '2',
    },
    {
      name: 'Omar Mosciski',
      number: '672-818-5368',
      id: '3',
    },
    {
      name: 'Miss Roland Goldner',
      number: '946-995-8175',
      id: '4',
    },
    {
      name: 'Erick Kirlin',
      number: '577-951-8048',
      id: '5',
    },
    {
      name: 'Benjamin Hessel',
      number: '964-241-0107',
      id: '6',
    },
    {
      name: 'Rosemary Schmitt',
      number: '991-797-4067',
      id: '7',
    },
    {
      name: 'Penny Schuppe',
      number: '648-395-1702',
      id: '8',
    },
    {
      name: 'Tyler Crooks',
      number: '428-434-3486',
      id: '9',
    },
    {
      name: 'Cassandra Hintz',
      number: '522-318-2958',
      id: '10',
    },
    {
      name: 'Wilfred Metz',
      number: '823-776-0810',
      id: '11',
    },
    {
      name: 'Regina Runolfsson',
      number: '247-314-5634',
      id: '12',
    },
    {
      name: 'Don Hagenes MD',
      number: '227-824-3085',
      id: '13',
    },
    {
      name: "Mrs. Alexis D'Amore V",
      number: '273-703-7782',
      id: '14',
    },
    {
      name: 'Harry Ondricka II',
      number: '580-989-7158',
      id: '15',
    },
    {
      name: 'Jacqueline Gulgowski',
      number: '730-624-4435',
      id: '16',
    },
    {
      name: 'Jessie Waters',
      number: '470-660-5943',
      id: '17',
    },
    {
      name: 'Zachary Gusikowski',
      number: '688-949-7951',
      id: '18',
    },
    {
      name: 'Patricia Macejkovic II',
      number: '582-230-7432',
      id: '19',
    },
    {
      name: 'Marie Medhurst',
      number: '856-202-6757',
      id: '20',
    },
    {
      name: 'Gilbert Powlowski I',
      number: '699-507-0628',
      id: '21',
    },
    {
      name: 'Shaun Rau',
      number: '606-946-4508',
      id: '22',
    },
    {
      name: 'Catherine Wisozk',
      number: '938-383-2491',
      id: '23',
    },
    {
      name: 'Lynne Larson',
      number: '258-226-2214',
      id: '24',
    },
    {
      name: 'Catherine Price',
      number: '606-328-8160',
      id: '25',
    },
    {
      name: 'Rogelio Collins',
      number: '232-644-4416',
      id: '26',
    },
    {
      name: 'Melody Miller',
      number: '596-669-5185',
      id: '27',
    },
    {
      name: 'Cornelius Jakubowski',
      number: '994-358-7937',
      id: '28',
    },
    {
      name: 'Aaron Batz III',
      number: '314-715-4978',
      id: '29',
    },
    {
      name: 'Joan Haag',
      number: '344-547-2154',
      id: '30',
    },
    {
      name: 'Lionel Moore',
      number: '852-834-5748',
      id: '31',
    },
    {
      name: 'Miss Gwendolyn Corwin',
      number: '392-972-2614',
      id: '32',
    },
    {
      name: 'Miss Johnnie Haley',
      number: '511-620-7645',
      id: '33',
    },
    {
      name: 'Don Batz',
      number: '630-340-8256',
      id: '34',
    },
    {
      name: 'Ann Ratke',
      number: '524-759-2454',
      id: '35',
    },
    {
      name: 'Ernestine Bartoletti',
      number: '873-400-0863',
      id: '36',
    },
    {
      name: 'Alison Zboncak',
      number: '322-543-6337',
      id: '37',
    },
    {
      name: 'Ella Oberbrunner',
      number: '421-913-5584',
      id: '38',
    },
    {
      name: 'Ms. Edwin Durgan',
      number: '727-546-6525',
      id: '39',
    },
    {
      name: 'Anita Hauck Sr.',
      number: '579-277-9522',
      id: '40',
    },
    {
      name: 'Leigh Kovacek',
      number: '914-474-7888',
      id: '41',
    },
    {
      name: 'Fred Pfeffer',
      number: '300-904-5992',
      id: '42',
    },
    {
      name: 'Mr. Mildred Schneider',
      number: '857-810-4787',
      id: '43',
    },
    {
      name: 'Valerie Hamill',
      number: '562-738-7956',
      id: '44',
    },
    {
      name: 'Franklin Gleichner',
      number: '479-207-2723',
      id: '45',
    },
    {
      name: 'Ralph Murray',
      number: '580-688-1748',
      id: '46',
    },
    {
      name: 'Mr. Frankie Streich',
      number: '600-250-4554',
      id: '47',
    },
    {
      name: 'Mr. Blanca Walker',
      number: '855-704-6591',
      id: '48',
    },
    {
      name: 'Miss Leticia Jacobs',
      number: '258-558-0515',
      id: '49',
    },
    {
      name: 'Louise Daniel MD',
      number: '807-302-7749',
      id: '50',
    },
  ],
};

//----------------------------------------------------

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   isLoading: false,
//   error: null,
//   reducers: {
//     addContact(state, action) {
//       state.contactsList.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return {
//         contactsList: state.contactsList.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     },
//   },
// });

//----------------------------------------------------

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        contactsList: state.contactsList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
