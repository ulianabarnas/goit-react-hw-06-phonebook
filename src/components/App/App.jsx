import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Box from 'components/Box/Box';
import { Subtitle, Title } from './App.styles';

export default function App() {
  return (
    <Box
      as="section"
      maxWidth="400px"
      width="80vw"
      textAlign="center"
      mx="auto"
      mt={5}
      pt={5}
      bg="white"
      borderRadius="normal"
      boxShadow="normal"
      overflow="hidden">
      <Box
        px={5}
      >
        <Title>Phonebook</Title>
        <ContactForm />
      </Box>
        
      <Box
        mt={5}
        py={5}
        px={5}
        bg="primary"
      >
        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};
