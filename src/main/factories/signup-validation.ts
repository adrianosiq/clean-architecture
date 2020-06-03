import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequireFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { CompareFieldValidation } from '../../presentation/helpers/validators/compare-field-validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequireFieldValidation(field))
  }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validations)
}