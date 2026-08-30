'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { createBookingRequest } from '@/lib/api';
import { BiErrorCircle } from 'react-icons/bi';
import css from './BookingForm.module.css';

type BookingFormProps = {
  camperId: string;
};

type BookingFormValues = {
  name: string;
  email: string;
};

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/, 'Please enter a valid name.')
    .required('Please enter your name.'),
  email: Yup.string().email('Please enter your email.').required('Please enter your email.'),
});

const BookingForm = ({ camperId }: BookingFormProps) => {
  const initialValues: BookingFormValues = {
    name: '',
    email: '',
  };

  const handleSubmit = async (
    values: BookingFormValues,
    { resetForm, setSubmitting }: FormikHelpers<BookingFormValues>
  ) => {
    try {
      const response = await createBookingRequest(camperId, values);
      toast.success(response.message || 'Booking successful!');
      resetForm();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={true}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.form}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.description}>Stay connected! We are always ready to help you.</p>
            <div className={css.inputGroup}>
              <div className={css.fieldWrapper}>
                <div
                  className={`${css.inputContainer} ${
                    touched.name && errors.name ? css.inputError : ''
                  }`}
                >
                  {touched.name && errors.name && (
                    <label className={css.floatingLabel}>Name*</label>
                  )}
                  <Field className={css.input} type="text" name="name" placeholder="Name*" />
                  {touched.name && errors.name && (
                    <BiErrorCircle className={css.errorIcon} size={20} />
                  )}
                </div>
                <ErrorMessage name="name" component="span" className={css.errorMessage} />
              </div>
              <div className={css.fieldWrapper}>
                <div
                  className={`${css.inputContainer} ${
                    touched.email && errors.email ? css.inputError : ''
                  }`}
                >
                  {touched.email && errors.email && (
                    <label className={css.floatingLabel}>Email*</label>
                  )}
                  <Field className={css.input} type="email" name="email" placeholder="Email*" />
                  {touched.email && errors.email && (
                    <BiErrorCircle className={css.errorIcon} size={20} />
                  )}
                </div>
                <ErrorMessage name="email" component="span" className={css.errorMessage} />
              </div>
            </div>
            <button className={css.submitBtn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;
