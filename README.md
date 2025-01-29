# useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common React bug where the cleanup function in `useEffect` is not called when a component unmounts prematurely.  This can lead to memory leaks or other unexpected behavior.  The solution shows how to address the problem.

## Bug
The `bug.js` file contains a component with a `useEffect` hook.  The cleanup function within `useEffect` is intended to execute when the component unmounts; however, under certain conditions (such as rapid component updates or navigation), this function may not be called.

## Solution
The `bugSolution.js` file presents a solution demonstrating how to ensure the cleanup function always executes properly, even during rapid component updates or unmounts.