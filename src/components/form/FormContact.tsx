"use client";

import useForm from "@/hooks/useForm";
import { RefObject } from "react";
import { sendEmail } from "@/services/contact";
import { checkEmail, checkName, checkSubject } from "@/utils/formManager";
import styles from "@/styles/form/FormContact.module.scss";

import Input from "@/components/form/Input";
import Submit from "@/components/form/Submit";
import Textarea from "@/components/form/Textarea";

import { VscSend } from "react-icons/vsc";

export default function FormContact() {
  const fields = ["name", "email", "subject", "message"];
  const { refs, isLoading, message, handleSubmit } = useForm({
    fields,
    validators: {
      name: (val) => checkName(val),
      email: (val) => checkEmail(val),
      subject: (val) => checkSubject(val),
    },
    onSubmit: sendEmail,
  });

  return (
    <form action="" className={styles.form}>
      <div className={styles.form_input}>
        {["name", "email", "subject"].map((key) => (
          <Input
            id={key}
            name={key}
            label={`${key[0].toUpperCase()}${key.slice(1)}`}
            type={key === "email" ? "email" : "text"}
            reference={refs[key] as RefObject<HTMLInputElement | null>}
            key={key}
          />
        ))}

        <Textarea
          id="message"
          name="message"
          label="Message"
          reference={refs["message"] as RefObject<HTMLTextAreaElement | null>}
        />
      </div>

      <p className={styles.form_err}> {message && message}</p>

      <div className={styles.form_button}>
        <Submit
          loading={isLoading}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Send <VscSend />
        </Submit>
      </div>
    </form>
  );
}
