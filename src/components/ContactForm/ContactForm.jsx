import React from 'react';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { FromButton, FromPhonebook, Input } from './ContactForm.styled';
import * as ContactsService from '../../redux/contacts/contactsOperations';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/getState';

const initialValues = {
  name: '',
  number: '',
};

const Schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Please check that the name you have dialed is correct'
    ),
  number: yup
    .string()
    .required()
    .trim()
    .test('noLettersInside', 'Number cannot contain letters', value => {
      return !/[a-zA-Zа-яА-Я]/.test(value);
    })
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Please check that the number you have dialed is correct'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (checkContactExist(values.name)) {
      resetForm();
      return;
    }
    const contact = {
      id: shortid.generate(),
      name: values.name,
      number: values.number,
    };

    dispatch(ContactsService.postContact(contact));
    resetForm();
  };

  const checkContactExist = newName => {
    const isNameDublicate = contacts.some(contact => contact.name === newName);

    if (isNameDublicate) {
      alert(`${newName} is alredy in contacts`);
      return true;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <FromPhonebook>
        <label>
          Name
          <Input type="text" name="name" required />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Input type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <FromButton type="submit">Add contact</FromButton>
      </FromPhonebook>
    </Formik>
  );
};
