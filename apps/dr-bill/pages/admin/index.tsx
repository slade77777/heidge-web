import type { ReactElement } from 'react';
import { PrismaClient, Prisma, Contact } from '@prisma/client';
import { Button, Input, Loading } from '@nextui-org/react';
import { useState } from 'react';
// import PhotosUploader from '../../components/PhotosUploader';

async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact),
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export default function AdminPage({ contacts }) {
  const [loading, setLoading] = useState(false);
  const [allContacts, setAllContacts] = useState(contacts);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  });

  function handleChange(e) {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const savedCt = await saveContact(formValues);
      setAllContacts((arr) => arr.concat(savedCt));
      e.target.reset();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto pb-10">
      {allContacts.map((ct) => (
        <li key={ct.id}>
          {ct.firstName} -{ct.email}
        </li>
      ))}
      <fieldset disabled={loading}>
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto flex flex-col space-y-3"
        >
          <Input
            name="firstName"
            required
            bordered
            label="FirstName"
            onChange={handleChange}
            value={formValues.firstName}
          />
          <Input
            name="lastName"
            bordered
            label="Last name"
            onChange={handleChange}
            value={formValues.lastName}
          />
          <Input
            type="email"
            name="email"
            required
            bordered
            label="Email"
            onChange={handleChange}
            value={formValues.email}
          />
          <Input
            name="avatar"
            bordered
            label="Avatar"
            onChange={handleChange}
            value={formValues.avatar}
          />
          <Button type="submit" className="mt-3">
            Submit
            {loading && <Loading type="spinner" color="white" size="sm" />}
          </Button>
        </form>
      </fieldset>
    </div>
  );
}

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <div className="bg-white">{page}</div>;
};

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const contacts: Contact[] = await prisma.contact.findMany();
  return {
    props: {
      contacts,
    },
  };
}
