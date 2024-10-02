"use client";

import * as React from "react";
import * as Form from "@radix-ui/react-form";
import styles from "./contact-form.module.css";

function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
  const data = Object.fromEntries(new FormData(event.currentTarget));

  // TODO

  // prevent default form submission
  event.preventDefault();
}

const ContactForm = () => {
  return (
    <Form.Root className={styles.formRoot} onSubmit={handleSubmit}>
      <Form.Field name="first" className={styles.formFieldName}>
        <Form.Label className={styles.formLabel}>First Name</Form.Label>
        <Form.Message className={styles.formMessage} match="valueMissing">
          Please enter your first name.
        </Form.Message>
        <Form.Message className={styles.formMessage} match="typeMismatch">
          Please enter a valid name (text only).
        </Form.Message>
        <Form.Control asChild>
          <input className={styles.formControl} type="text" required />
        </Form.Control>
      </Form.Field>
      <Form.Field name="last" className={styles.formFieldName}>
        <Form.Label className={styles.formLabel}>Last Name</Form.Label>
        <Form.Message className={styles.formMessage} match="valueMissing">
          Please enter your last name.
        </Form.Message>
        <Form.Message className={styles.formMessage} match="typeMismatch">
          Please enter a valid name (text only).
        </Form.Message>
        <Form.Control className={styles.formControl} asChild>
          <input className={styles.formControl} type="text" required />
        </Form.Control>
      </Form.Field>
      <Form.Field name="email" className={styles.formFieldEmail}>
        <Form.Label className={styles.formLabel}>Email</Form.Label>
        <Form.Message className={styles.formMessage} match="valueMissing">
          Please enter your email address.
        </Form.Message>
        <Form.Message className={styles.formMessage} match="typeMismatch">
          Please provide a valid email address.
        </Form.Message>
        <Form.Control asChild>
          <input className={styles.formControl} type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field name="company" className={styles.formFieldCoName}>
        <Form.Label className={styles.formLabel}>Company Name</Form.Label>
        <Form.Message className={styles.formMessage} match="typeMismatch">
          Please provide a valid company name.
        </Form.Message>
        <Form.Control asChild>
          <input className={styles.formControl} type="text" />
        </Form.Control>
      </Form.Field>
      <Form.Field name="message" className={styles.formFieldInquiry}>
        <Form.Label className={styles.formLabel}>
          How can I help you?
        </Form.Label>
        <Form.Message className={styles.formMessage} match="valueMissing">
          Please provide a message.
        </Form.Message>
        <Form.Message className={styles.formMessage} match="typeMismatch">
          Please enter a valid message.
        </Form.Message>
        <Form.Control asChild>
          <textarea className={styles.formControl} required />
        </Form.Control>
      </Form.Field>
      <Form.Submit className={styles.formSubmit} asChild>
        <button>Submit</button>
      </Form.Submit>
    </Form.Root>
  );
};

export default ContactForm;
