---
title: "Testing and Monitoring in React Native"
description: "How to ensure quality and stability in mobile apps with Jest, React Native Testing Library, and structured logging"
authors:
    - rosinni
tags: [ "react-native", "testing", "jest", "monitoring", "logging", "mobile-development", "quality-assurance"]
---

When building a mobile application, the real challenge is not writing code, **it's making sure it works well today, tomorrow, and after future changes**. Without testing or monitoring, every code change is a risk, bugs reach production unnoticed, and you rely on the end user to find out if something broke.

On the other hand, with a proper testing and monitoring strategy, we can detect errors before they reach the user, reduce maintenance and support costs, and make informed decisions with real data about the app's behavior.

Testing = prevention  
Monitoring = detection and analysis

And both are complementary.

## Testing in React Native: What does it mean to test an app?
Testing means **verifying that the code does what it should**, consistently and without unexpected side effects. When there are no automated tests, the only way to validate changes is to open the app, navigate, tap buttons, and hope nothing breaks.
This is costly, slow, and unreliable.

With automated testing:
- Every time you make a change, tests validate that you haven't broken previous functionality.
- You can refactor code without fear.
- Quality goes up and development time goes down.

### Types of testing in React Native
| Test type      | Objective                      | Tool                        | Example use case                                 |
|----------------|-------------------------------|-----------------------------|--------------------------------------------------|
| **Unit**       | Validate pure logic            | Jest                        | check calculations, validations, data formatting |
| **Component (UI)** | Validate screen behaviors | React Native Testing Library | check that a button increments a counter         |
| **Integration**| Validate interaction between modules | Jest + mocks           | check that a component correctly calls a service |

> *Key rule: tests should validate behaviors, not implementations*.

## Example: Unit test with Jest
First, something simple: a function that calculates the total of a purchase.

```ts
// utils/calculateTotal.ts
export const calculateTotal = (price: number, qty: number) => price * qty;
```

Let's create a test to validate that behavior:

```ts
// __tests__/calculateTotal.test.ts
import { calculateTotal } from "../utils/calculateTotal";

test("correctly calculates the total", () => {
    expect(calculateTotal(10, 3)).toBe(30);
});
```

With this test, you ensure that if someone changes that function or its behavior, you'll be alerted immediately.

## Example: Component test with React Native Testing Library
Here we don't test *how* the component is built, but *what it does* when the user interacts.

```tsx
// components/Counter.tsx
import React, { useState } from "react";
import { Button, Text } from "react-native";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Text testID="count-label">{count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </>
    );
};
```

Test:

```tsx
// __tests__/Counter.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Counter } from "../components/Counter";

test("increments the counter when pressed", () => {
    const { getByText, getByTestId } = render(<Counter />);

    fireEvent.press(getByText("Increment"));

    expect(getByTestId("count-label").props.children).toBe(1);
});
```

**What we're validating:**
- that the button is visible
- that pressing it causes a real change in the UI
- that the change is the expected one

## Monitoring in production: structured logging
Although tests prevent errors, **no system is free from failures in production**. Therefore, you need to know which screen was being used when it failed, what action the user performed, what data was involved; that's where structured logging comes in.

### ❌ Traditional logging
```js
console.log("User logged in", user);
```
Problems:
- produces messy messages
- doesn't allow pattern or event analysis
- hard to filter

### ✅ Structured logging (recommended)
```ts
console.log(JSON.stringify({
    event: "USER_LOGIN",
    userId: user.id,
    timestamp: Date.now(),
}));
```
Advantages:
- each log has structure and context
- easy to filter by event type

### Logging wrapper
```ts
// utils/logger.ts
export const logEvent = (event: string, payload = {}) => {
    console.log(JSON.stringify({ event, payload, timestamp: Date.now() }));
};
```

Usage:
```ts
logEvent("API_REQUEST", { endpoint: "/products" });
```

This pattern centralizes logging responsibility.

## Best practices

One of the most frequent questions when starting to test in React Native is: **“Should I test all my code?”** The answer is no; testing doesn't mean replicating every component or line of code, it means protecting the parts of the system that, if they fail, directly affect the user or the business.

Here are four essential best practices specifically for React Native CLI projects.

1. **Test logic that could break the app**: In React Native, most important decisions aren't made in components, but in:

        - helper functions (utils/)
        - business hooks (hooks/)
        - services and controllers (services/)

This logic is usually independent of the UI, making it easier to test without rendering a screen.

```tsx
// utils/formatCurrency.ts
export const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
```

Unit test:

```tsx
test("formats a number as currency", () => {
    expect(formatCurrency(10)).toBe("$10.00");
});
```

**Why does it matter?** If someone modifies this function in the future (for example, to support another currency), a test will prevent them from introducing an error by accident.

2. **Start with critical user flow cases**: Don't start with simple components like buttons or styles. Begin with what affects business goals or blocks app usage.

Typical cases in a mobile app:

| Critical case             | Risk if it fails                 | What to test                                      |
|--------------------------|----------------------------------|---------------------------------------------------|
| Login                    | User can't use the app           | Form validation, backend calls                    |
| Purchase/payment process | Economic losses                   | Calculations, totals, payment methods             |
| Forms with rules         | Broken user flow                  | Error messages and button states                  |

This gives you **80% risk coverage with 20% effort.**

3. **Use *structured logging* to monitor in production**: In development (`__DEV__`) you see the console, but in production the app runs on a device you can't access. That's why logs must be **structured, consistent, and contextual.**

#### ❌ Incorrect example:
```js
console.log("Login error");
```

#### Recommended example (structured JSON):

```tsx
logEvent("LOGIN_FAILED", {
    email,
    reason: error.message,
});
```

This format allows you to:

- send logs to services like Sentry, Datadog, or Firebase Crashlytics,
- filter by event,
- understand what the user did when the error occurred.

Minimal implementation in React Native CLI:

```tsx
// utils/logger.ts
export const logEvent = (event: string, payload = {}) => {
    const log = { event, payload, timestamp: Date.now() };

    if (__DEV__) {
        console.log(JSON.stringify(log, null, 2));
    } else {
        // production → send to an external provider
        // Sentry.captureMessage(JSON.stringify(log));
    }
};
```

4. **Avoid using `console.log` without structure**

In React Native CLI, app quality doesn't just depend on how well it's developed, but on how well you can know when something stops working. Testing ensures your app works as it should, and monitoring ensures you'll know when it doesn't. A professional app requires both.

