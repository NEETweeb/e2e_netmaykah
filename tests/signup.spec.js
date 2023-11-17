import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login_page';
import { SignupPage } from './pages/signup_page';
import { SignupModel } from './model/signup_model';


test('can signup', async ({ page }) => {
  const login_pom = new LoginPage(page)
  const signup_pom = new SignupPage(page)
  const signup = new SignupModel(page, 'dentestb2@yopmail.com', 'Pass@123')

  await login_pom.visit()
  await login_pom.navigateToSignUp()

  await signup.filloutForm()
  await signup_pom.signupButton.click()
});