```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    let cleanup = () => {
      console.log('Unmounted!');
      // Cleanup logic here
    };
    if (shouldCleanup) {
      cleanup = () => {
        console.log('Unmounted!');
        // Cleanup logic here
      };
    } else {
      cleanup = () => {};
    }
    return cleanup;
  }, [shouldCleanup]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setShouldCleanup(false)}>Prevent Cleanup</button>
      <button onClick={() => setShouldCleanup(true)}>Allow Cleanup</button>
    </div>
  );
}
```