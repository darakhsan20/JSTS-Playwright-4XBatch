# VWO Login UI Automation

Selenium WebDriver and TestNG tests for the VWO login page at `https://app.vwo.com/#/login`.

## Project requirements

- Java 17 or later
- Maven
- Google Chrome
- Selenium Java 4.34.0
- TestNG 7.11.0

## Test coverage

| Test | Verification |
|---|---|
| `validCredentialsAuthenticateUser` | Signs in with authorized credentials and verifies the login form is no longer visible. Skipped unless both credential environment variables are set. |
| `invalidCredentialsShowLoginError` | Submits synthetic invalid credentials, checks the expected rejection message, and verifies the login form remains visible. |
| `rememberMeCanBeEnabledAndDisabled` | Checks the default unchecked state and verifies the Remember me control can be enabled and disabled. |

Each test opens the login page before execution. The browser is closed after the test class completes. Explicit WebDriver waits are used; implicit wait is set to zero.

## Project files

- `src/test/java/com/example/vwo/LoginPage.java` — Page Object using PageFactory, XPath locators, and reusable login, wait, and Remember me actions.
- `src/test/java/com/example/vwo/VwoLoginTest.java` — TestNG setup, test cases, and teardown.
- `pom.xml` — Maven dependencies and build plugins.

## Run the tests

From the project root, set credentials for an authorized VWO test account before running Maven. The credentials are read from environment variables and should not be committed or printed in logs.

PowerShell:

```powershell
$env:VWO_TEST_EMAIL = "authorized-test-account@example.com"
$env:VWO_TEST_PASSWORD = "your-authorized-test-password"
$env:HEADLESS = "true"
mvn test
```

To run only the invalid-credentials and Remember me tests without setting valid credentials:

```powershell
mvn "-Dtest=VwoLoginTest#invalidCredentialsShowLoginError+rememberMeCanBeEnabledAndDisabled" test
```

Set `HEADLESS` to `false` or leave it unset to run Chrome with a visible browser window. If `VWO_TEST_EMAIL` or `VWO_TEST_PASSWORD` is unset or blank, TestNG reports the valid-login test as skipped; the other tests can still run.

## Notes

- Use only test accounts you are authorized to access.
- VWO's UI and authentication behavior may change; update the XPath locators and expected messages if the live page changes.
- The valid-login test verifies that the browser leaves the `#/login` route and that the login form is no longer visible. It does not verify a specific authenticated landing-page element.
