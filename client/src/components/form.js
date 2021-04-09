import React from "react";
import { Label, Input, Checkbox, Span, SpanCheckbox, Button, Red } from "./admin";

export const FormEmail = () => {
  return (
    <Label>
      <Span><Red>*</Red> E-mail:</Span>
      <Input
        id="email"
        type="email"
        name="email"
        minLength="6"
        pattern="^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        placeholder="example@mail.coooom"
        required />
    </Label>
  );
}

export const FormPassword = () => {
  return (
    <Label>
      <Span><Red>*</Red> Пароль:</Span>
      <Input
        id="pswrd"
        type="password"
        minLength="8"
        maxLength="16"
        pattern="[A-Za-z0-9]{8,16}"
        placeholder="Passw0rd"
        required />
    </Label>
  );
}

export const FormRemember = () => {
  return (
    <Label>
      <Checkbox
        type="checkbox"
        id="remember" />
      <SpanCheckbox>Запомнить меня</SpanCheckbox>
    </Label>
  );
}

export const FormButton = () => {
  return (
    <Button>Login</Button>
  );
}
