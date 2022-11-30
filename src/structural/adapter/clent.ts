import { EmailValidatorAdapter } from './validation/email-validator-class-adapte';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapte';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email é inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('Email é inválido (FN)');
  }
}

const email = 'raul.gomes44@hotmail.com';
validaEmailClass(new EmailValidatorAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
