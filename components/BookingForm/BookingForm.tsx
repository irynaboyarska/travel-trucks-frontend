'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { createBookingRequest } from '@/lib/api';

type BookingFormProps = {
  camperId: string;
};

const BookingForm = ({ camperId }: BookingFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await createBookingRequest(camperId, {
        name,
        email,
      });

      toast.success(response.message);

      setName('');
      setEmail('');
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  );
};

export default BookingForm;
