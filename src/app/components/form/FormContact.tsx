"use client";

import { useRef, useState } from "react";
import { sendEmail } from "@/services/contact";
import { checkEmail, checkName, checkSubject } from "@/utils/formManager";
import styles from "@/styles/form/FormContact.module.scss";

import Input from "@/app/components/form/Input";
import Submit from "@/app/components/form/Submit";
import Textarea from "@/app/components/form/Textarea";

import { VscSend } from "react-icons/vsc";

export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const [messageErr, setMessageErr] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const inputs = [
    {
      id: "name",
      name: "name",
      label: "Name",
      type: "text",
      reference: nameRef,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      reference: emailRef,
    },
    {
      id: "subject",
      name: "subject",
      label: "Subject",
      type: "text",
      reference: subjectRef,
    },
  ];

  function clearInputs() {
    if (
      !nameRef.current ||
      !subjectRef.current ||
      !emailRef.current ||
      !textRef.current
    )
      return;

    nameRef.current.value = "";
    subjectRef.current.value = "";
    emailRef.current.value = "";
    textRef.current.value = "";
  }

  async function submit() {
    if (
      !nameRef.current ||
      !subjectRef.current ||
      !emailRef.current ||
      !textRef.current
    )
      return;

    setMessageErr("");

    if (!checkName(nameRef.current.value, setMessageErr)) return;
    if (!checkEmail(emailRef.current.value, setMessageErr)) return;
    if (!checkSubject(subjectRef.current.value, setMessageErr)) return;

    setLoading(true);

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      text: textRef.current.value,
    };

    const res = await sendEmail(data);
    setLoading(false);
    console.log(res);
    if (res !== 200) return setMessageErr("An error has occured");
    clearInputs();
  }

  return (
    <form action="" className={styles.form}>
      <div className={styles.form_input}>
        {inputs.map((input) => (
          <Input
            id={input.id}
            name={input.name}
            label={input.label}
            type={input.type}
            reference={input.reference}
            key={input.id}
          />
        ))}

        <Textarea
          id="message"
          name="message"
          label="Message"
          reference={textRef}
        />
      </div>

      <p className={styles.form_err}> {messageErr && messageErr}</p>

      <div className={styles.form_button}>
        <Submit
          handleSubmit={submit}
          text={
            <>
              Send <VscSend />
            </>
          }
          loading={loading}
        />
      </div>
    </form>
  );
}
