import  React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = () => nanoid();

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, number };
    onSubmit(data);
    setName("");
    setNumber("");
  };

  return (
    <div className={styles.phonebook}>
      <h2>☎️ Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id={nameId}
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">
          Add contact
        </button>
        <br />
      </form>
    </div>
  );
};

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = INITIAL_STATE;

//   handleChangeForm = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     const { onAdd } = this.props;

//     const isValidatedForm = this.validateForm();

//     if (!isValidatedForm) return;
//     onAdd({ id: nanoid(), name, number });
//     this.resetForm();
//   };

//   validateForm = () => {
//     const { name, number } = this.state;
//     const { onCheckUnique } = this.props;
//     if (!name || !number) {
//       alert(`${name} is already in contacts`);
//       return false;
//     }
//     return onCheckUnique(name);
//   };

//   resetForm = () => this.setState(INITIAL_STATE);

//   render() {
//     const { name, number } = this.state;
//     return (
//       <div className={styles.phonebook}>
//         <h2>☎️ Phonebook</h2>
//         <form onSubmit={this.handleFormSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Enter name"
//             value={name}
//             onChange={this.handleChangeForm}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <br />
//           <label htmlFor="number">Number</label>
//           <input
//             type="tel"
//             id="number"
//             name="number"
//             placeholder="Enter phone number"
//             value={number}
//             onChange={this.handleChangeForm}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <button type="submit" onClick={() => {}}>
//             Add contact
//           </button>
//           <br />
//         </form>
//       </div>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };

export default ContactForm;
