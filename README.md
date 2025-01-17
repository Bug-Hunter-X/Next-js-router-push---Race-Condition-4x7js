# Next.js router.push() Race Condition

This repository demonstrates a common issue in Next.js applications involving the `router.push()` method.  The problem arises because `router.push()` is asynchronous; it doesn't block execution while the route change occurs.  This can lead to unexpected behavior if subsequent code relies on the navigation being completed.

The `bug.js` file shows the problematic code.  Clicking the button triggers navigation, but the `console.log` statement executes immediately, before the route change is finished, which could potentially lead to data inconsistencies or errors depending on what code is run after the navigation.

The `bugSolution.js` file provides a solution using the `router.events` to ensure the navigation is complete before proceeding.