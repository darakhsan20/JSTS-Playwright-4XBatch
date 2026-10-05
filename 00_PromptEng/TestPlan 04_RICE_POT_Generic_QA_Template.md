# Test Plan: Flipkart Login

| Field | Value |
|---|---|
| Document ID | 04_RICE_POT |
| Document type | Generic QA Test Plan |
| Application | Flipkart web (`https://www.flipkart.com/`) |
| Feature under test | User login and authentication |
| Status | Draft |
| Version | 1.0 |
| Prepared on | 2026-10-02 |

## 1. Objective

Verify that a user can reach and complete the supported Flipkart login flow, that invalid or incomplete input is handled clearly, and that authentication-related states do not expose account information or leave an unintended session active.

## 2. Scope

### In scope

- Opening the login entry point from the Flipkart home page.
- Login form display, input handling, validation, and navigation.
- OTP or other verification steps presented by the current application flow.
- Successful and unsuccessful authentication outcomes using authorized test accounts.
- Session behavior, logout, and basic responsive/browser compatibility.
- User-facing error, loading, and recovery states.

### Out of scope

- Account registration, password recovery, or profile changes except where linked from the login flow.
- Checkout, payment, order, and other authenticated product features.
- Security penetration testing, load testing, and third-party identity-provider testing.
- Access to real customer accounts or testing with credentials/OTPs that the tester is not authorized to use.

## 3. Test objectives and acceptance criteria

1. The login entry point and form are reachable and usable.
2. Valid authorized test credentials can complete the currently supported authentication flow.
3. Empty, malformed, or unsupported input is rejected with an understandable response and without an unintended login.
4. Invalid, expired, or incorrect verification data does not authenticate the user; recovery or retry behavior is clear and respects any displayed limits.
5. Authenticated state is established only after successful verification and is cleared on logout.
6. No test case requires bypassing CAPTCHA, rate limits, OTP controls, or other access protections.

## 4. Assumptions and dependencies

- The target is the publicly available Flipkart website; its UI and authentication rules may change.
- Testers have written authorization and dedicated test accounts for any end-to-end authentication attempt.
- Current field labels, supported identifiers, verification steps, and error wording will be confirmed in the test environment before execution. Do not treat example data or expected labels in this plan as a guarantee of current product behavior.
- OTP delivery, CAPTCHA, account lockout, and rate limiting may depend on live services and can constrain repeatable testing.
- Use only synthetic or specifically authorized test data. Never record passwords, OTPs, session cookies, or other secrets in test results.

## 5. Test approach

- **Functional:** Execute the scenarios below manually or with approved browser automation.
- **UI and usability:** Check labels, focus, keyboard operation, feedback, loading states, and responsive layout.
- **Compatibility:** Run the critical happy path and validation checks on the supported browser/OS combinations agreed by the team.
- **Regression:** Re-run critical login, validation, and logout checks after relevant changes.
- **Environment:** Prefer an approved test/staging environment. If only production is available, restrict checks to authorized accounts and non-disruptive actions; do not repeatedly trigger OTPs or lockout protections.

## 6. Test scenarios

| ID | Scenario | Expected result | Priority |
|---|---|---|---|
| LOGIN-001 | Open the login flow from the home page | Login UI opens and is usable; no account is authenticated yet | P1 |
| LOGIN-002 | Submit the form with all required fields empty | Submission is prevented or validation feedback is shown; no authentication occurs | P1 |
| LOGIN-003 | Enter a valid-format, authorized test identifier | Input is accepted and the next step of the current login flow is offered | P1 |
| LOGIN-004 | Enter an empty, malformed, or unsupported identifier | The input is rejected with clear feedback; no verification is sent unless the current flow explicitly requires it | P1 |
| LOGIN-005 | Submit incorrect or expired verification data using approved test conditions | Authentication fails safely and a useful retry/recovery response is shown | P1 |
| LOGIN-006 | Submit correct verification data for an authorized test account | Login succeeds and the expected authenticated state is displayed | P1 |
| LOGIN-007 | Use resend/retry controls, if present | Controls follow the displayed wait/attempt rules; duplicate or excessive requests are not triggered | P1 |
| LOGIN-008 | Navigate away, refresh, or use browser back during authentication | The flow remains consistent and does not create an authenticated session before verification | P2 |
| LOGIN-009 | Log out after successful login | The session is ended; protected account state is no longer available from the current session | P1 |
| LOGIN-010 | Use keyboard-only navigation on the login flow | Inputs and controls are reachable in a logical order and can be operated with the keyboard | P2 |
| LOGIN-011 | Check login UI at agreed desktop and mobile viewport sizes | Content, inputs, and actions remain visible and usable without unintended overlap | P2 |
| LOGIN-012 | Check a slow or interrupted network during submission | Progress/failure is communicated; duplicate submission does not produce an unintended state | P2 |

## 7. Test data

Use only data provisioned and approved by the application owner:

- Authorized test account with access to the supported login flow.
- Invalid-format identifier that does not belong to a real user.
- Invalid/expired verification value only where a safe, approved test method exists.
- Browser profiles with clean and existing session state for session checks.

Do not include actual identifiers, passwords, OTP values, or session tokens in this document or test evidence.

## 8. Entry criteria

- Test environment and target build are identified.
- Test account access and permission to exercise authentication are confirmed.
- Supported browsers/devices and the expected current login flow are agreed.
- Any OTP, CAPTCHA, or rate-limit test constraints are understood.

## 9. Exit criteria

- All P1 scenarios have been executed, with results recorded.
- No unresolved critical or high-severity login defects remain, or exceptions are documented and accepted by the product owner.
- Failed, blocked, and not-run cases have clear reasons and linked defect references where applicable.

## 10. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Production authentication behavior changes during testing | Confirm the flow immediately before execution and record the tested date/build or URL context |
| OTP delivery or anti-abuse controls make repeated tests unsafe or non-repeatable | Coordinate with the owner; limit attempts; use a designated test mechanism if available |
| Testing accidentally affects a real customer account | Use only specifically authorized test accounts and synthetic invalid data |
| Authentication secrets are captured in logs or screenshots | Redact sensitive values and review evidence before sharing |
| Automated checks are blocked by CAPTCHA or other protections | Do not bypass protections; use an approved test environment or obtain an authorized test path |

## 11. Defect reporting

For each issue, record the scenario ID, environment/browser, preconditions, reproducible steps, expected and actual results, severity, and sanitized evidence. Do not attach passwords, OTPs, cookies, or personal customer data.

## 12. Execution record

| Scenario ID | Result (Pass/Fail/Blocked/Not Run) | Defect/reference | Notes |
|---|---|---|---|
|  |  |  |  |
