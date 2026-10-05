# VWO API Test Plan — RICE POT

| Field | Value |
|---|---|
| Document ID | VWO_API_RICE_POT_01 |
| Document type | API Test Plan |
| Application | VWO (`app.vwo.com`) |
| Feature under test | Login API; registration API requirements pending clarification |
| Test approach | Postman/API functional testing |
| Status | Draft — pending API contract confirmation |
| Version | 1.0 |
| Prepared on | 2026-10-03 |

## 1. Objective

Verify the VWO login API behavior for valid and invalid authentication requests. Validate the request URL, HTTP method, payload, headers, response status and body, and any documented authentication, cookie, or token behavior. Identify and track the requirements needed to test the registration API without assuming an undocumented contract.

## 2. Scope

### In scope

- Login API request using the documented `POST https://app.vwo.com/login` endpoint.
- Login request fields documented by the source requirements: `username`, `password`, `remember`, and `recaptcha_response_field`.
- Valid and invalid login outcomes, with credentials supplied only through approved test data.
- Required headers, response status/body, and session, cookie, or token behavior once confirmed against the authoritative API contract.
- Registration API coverage after its endpoint, method, payload, and expected outcomes are provided.
- Safe handling of authentication data in Postman environments, test results, and reports.

### Out of scope

- VWO web UI automation and Selenium browser checks.
- Registration API assertions that depend on undocumented behavior.
- CAPTCHA bypass, production abuse, brute-force testing, or attempts to evade rate limits.
- Tests against accounts or credentials without explicit authorization.

## 3. Test objectives and acceptance criteria

1. The login request is sent to the confirmed VWO API endpoint using the documented HTTP method and JSON request structure.
2. A valid, authorized test account is accepted and produces the documented successful response and authentication state.
3. Invalid credentials are rejected and do not establish an authenticated session.
4. Missing, blank, malformed, or incorrectly typed request fields are handled according to the agreed API contract.
5. `remember` behavior is tested for supported values and verified only against an explicit contract.
6. Authentication response data, cookies, and tokens are checked against the approved contract and are not leaked into shared logs or reports.
7. Registration tests are not considered ready until the registration API contract and test data are approved.
8. No test bypasses CAPTCHA, rate limits, or other anti-abuse controls.

## 4. Requirements traceability and open questions

The linked high-level requirements describe login and registration APIs. The login request is documented as a `POST` to `https://app.vwo.com/login` with JSON fields `username`, `password`, `remember`, and `recaptcha_response_field`. The source also requests verification of status, request/response bodies, headers, authentication, cookies, and tokens.

The requirements do not define expected status codes, response schemas, error codes/messages, token or cookie names and attributes, credential rules, or registration endpoint details. Confirm these with the API owner before making those checks pass/fail criteria.

| ID | Clarification required | Impact |
|---|---|---|
| OPEN-001 | Confirm the canonical host and base URL. The source requirements mention inconsistent host/path references. | Prevents requests to the wrong or obsolete endpoint. |
| OPEN-002 | Provide the authoritative login request schema, required/optional fields, content type, and accepted `remember` values. | Needed for valid and negative payload checks. |
| OPEN-003 | Define success and failure HTTP status codes, response schemas, and stable error identifiers. | Needed for reliable assertions. |
| OPEN-004 | Define authentication/session behavior, including token or cookie names, attributes, expiry, and logout/invalidation behavior if applicable. | Needed for auth and session checks. |
| OPEN-005 | Provide the registration endpoint, HTTP method, payload schema, validation rules, and expected success/error outcomes. | Registration API tests are blocked until specified. |
| OPEN-006 | Provide approved test accounts and a safe test strategy for CAPTCHA and any rate limits. | Prevents unauthorized or disruptive tests. |

## 5. Assumptions and dependencies

- The source is the linked `VWO Project Requirement API Testing (HLR).docx` and related VWO login API requirements in the supplied Drive folder.
- API behavior and expected values must be confirmed with the current VWO API owner; the high-level requirements are not a complete API specification.
- Tests run in an authorized environment with dedicated test accounts and approved test data.
- Secrets are injected using protected Postman variables or an approved secret store; they are never hard-coded into collections, exported environments, screenshots, or test reports.
- CAPTCHA handling is provided by an approved test configuration or test environment. Tests do not submit fabricated CAPTCHA tokens to production or attempt to bypass CAPTCHA.
- The linked source requirement document contains a plaintext credential. It is intentionally not reproduced here; treat it as exposed, revoke or rotate it, and remove it from the shared source document and any copied artifacts.

## 6. Test approach

- **Functional API:** Use Postman to send login requests with approved test data and verify HTTP status, response structure, and authentication effects against the confirmed contract.
- **Negative and boundary:** Exercise missing, blank, malformed, and invalid values only where safe and contractually defined.
- **Headers and payload:** Verify JSON content type and required request fields; avoid assertions on irrelevant browser headers unless the API specification requires them.
- **Authentication state:** Check token/cookie behavior only after the API owner defines the expected contract. Never expose token values in test output.
- **Registration:** Prepare cases from the agreed registration contract; keep them blocked until endpoint and schema details are available.
- **Environment safety:** Prefer a test/staging environment. Do not use real customer accounts or repeat requests in a way that triggers lockout or abuse controls.

## 7. Test scenarios

| ID | Scenario | Expected result | Priority | Status |
|---|---|---|---|---|
| VWO-API-001 | Send a login request with valid authorized test credentials and valid test-environment challenge data, if required | Authentication succeeds with the status, response schema, and session behavior specified by the API contract | P1 | Ready after contract confirmation |
| VWO-API-002 | Send a login request with an invalid password for a designated test account | Authentication is rejected; no authenticated session, token, or cookie is established | P1 | Ready after contract confirmation |
| VWO-API-003 | Send a login request with an unknown synthetic username | Authentication is rejected without disclosing account-sensitive information beyond the approved contract | P1 | Ready after contract confirmation |
| VWO-API-004 | Omit `username` | Request is rejected according to the documented validation contract; authentication does not occur | P1 | Pending schema |
| VWO-API-005 | Omit `password` | Request is rejected according to the documented validation contract; authentication does not occur | P1 | Pending schema |
| VWO-API-006 | Submit blank or malformed username/password values | Request is rejected or normalized as specified; no authentication occurs | P1 | Pending validation rules |
| VWO-API-007 | Submit unsupported data types or malformed JSON | Request is rejected with the documented client-error behavior and no server error leakage | P2 | Pending response contract |
| VWO-API-008 | Submit `remember` with each supported value | Persistent-session behavior matches the confirmed contract; unsupported values are handled as specified | P2 | Pending value/session contract |
| VWO-API-009 | Verify required request headers and JSON payload | Required headers and payload fields match the API contract | P1 | Pending authoritative header/schema definition |
| VWO-API-010 | Verify success and failure response status and JSON shape | Status and response schema match the documented contract without exposing secrets | P1 | Pending response contract |
| VWO-API-011 | Verify authentication token/cookie behavior after success and failure | Only successful authentication creates the documented auth state; failure creates none | P1 | Pending auth contract |
| VWO-API-012 | Submit a registration request using approved data | Registration outcome matches the confirmed endpoint, schema, status, and response contract | P1 | Blocked — registration contract missing |
| VWO-API-013 | Submit registration requests with missing/invalid fields | Field validation and error response match the confirmed registration contract | P2 | Blocked — registration contract missing |

## 8. Test data

- Dedicated authorized VWO test account with a known valid credential stored in protected variables.
- Synthetic invalid username that is not associated with a real user.
- Invalid password for the designated test account, stored and handled as a secret.
- Valid request payload variants that comply with the agreed schema.
- Approved registration test data only after the registration requirements are supplied.
- Approved CAPTCHA/challenge test mechanism for the designated environment, if applicable.

Never place actual credentials, challenge tokens, access tokens, refresh tokens, session cookies, or personal customer data in this document, collection exports, screenshots, or execution records.

## 9. Entry criteria

- The target environment, canonical base URL, and API version are identified.
- The API owner confirms the login request and response contract.
- Authorized test accounts and protected secret storage are available.
- CAPTCHA and rate-limit constraints are agreed with the service owner.
- Registration endpoint/schema details are available before registration cases are executed.

## 10. Exit criteria

- All executable P1 login scenarios have results recorded against the approved contract.
- No unresolved critical or high-severity authentication defects remain, or accepted exceptions are documented.
- Registration scenarios are either executed against an approved contract or explicitly remain blocked.
- Secrets are absent from the test plan, shared Postman collection, and published execution evidence.
- All failed, blocked, and not-run cases include a reason and a linked defect or requirement reference where applicable.

## 11. Risks and mitigations

| Risk | Mitigation |
|---|---|
| High-level requirements omit response and session details | Obtain the API owner-approved contract before asserting unspecified behavior |
| Source documents contain stale or inconsistent endpoints | Confirm the canonical host, route, and version before test execution |
| Credential exposure in shared requirements or Postman artifacts | Rotate/revoke exposed credentials; use protected variables; review exports and logs for secrets |
| CAPTCHA or rate limits block or constrain repeatable checks | Use an approved test environment/mechanism; never bypass production controls |
| Registration behavior is undocumented | Keep registration cases blocked until the API contract is approved |
| Environment or account state makes tests nondeterministic | Use dedicated test accounts, controlled setup, and cleanup approved by the service owner |

## 12. Defect reporting

Record the scenario ID, environment, API version, sanitized request method and route, preconditions, expected and actual results, status code, correlation/request ID when available, and a redacted response sample. Do not include credentials, challenge values, tokens, cookies, or personal data.

## 13. Execution record

| Scenario ID | Result (Pass/Fail/Blocked/Not Run) | Defect/reference | Notes |
|---|---|---|---|
|  |  |  |  |

## 14. Source reference

- [VWO Project Requirement API Testing (HLR)](https://drive.google.com/file/d/1ZdnB5qjJhEyRafMhpt5CrgAcbSDdRwTu/view)
- [API Testing LIVE Project with Postman - #1 folder](https://drive.google.com/drive/folders/116iv0uHaI8ZOpfYaGN_AKe77Gvk2HDUM)
