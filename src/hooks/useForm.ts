"use client";

import { createRef, RefObject, useMemo, useState } from "react";

type refsType = Record<
  string,
  RefObject<HTMLInputElement | HTMLTextAreaElement | null>
>;
type validatorsFun = (val: string) => string | null;

interface PropsType {
  fields: string[];
  validators: Partial<Record<string, validatorsFun>>;
  onSubmit: (data: Record<string, string>) => Promise<number>;
}

export default function useForm({
  fields,
  validators = {},
  onSubmit,
}: PropsType) {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const refs = useMemo(() => {
    return fields.reduce<refsType>((acc, key) => {
      acc[key] = createRef<HTMLInputElement | HTMLTextAreaElement>();
      return acc;
    }, {});
  }, []);

  const isValid = (): boolean => {
    for (const key of fields) {
      const value = refs[key].current?.value || "";
      const fn = validators[key];

      if (fn) {
        const message = fn(value);

        if (message) {
          setMessage(message);
          return false;
        }
      }
    }

    setMessage("");
    return true;
  };

  const getValues = (): Record<string, string> => {
    const values: Record<string, string> = {};

    for (const key of fields) {
      values[key] = refs[key].current?.value || "";
    }

    return values;
  };

  const clearInputs = (): void => {
    fields.forEach((key) => {
      const ref = refs[key];
      if (ref.current) ref.current.value = "";
    });
  };

  const handleSubmit = async (): Promise<void> => {
    if (!isValid()) return;

    setIsLoading(true);
    const values = getValues();

    const res = await onSubmit(values);

    setIsLoading(false);

    if (res !== 200) {
      setMessage("An error has ocurred.");
      return;
    }

    clearInputs();
  };

  return {
    refs,
    isLoading,
    message,
    handleSubmit,
  };
}
