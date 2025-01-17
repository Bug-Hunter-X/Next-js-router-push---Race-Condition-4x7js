```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    (async () => {
      const routeChangeComplete = new Promise(resolve => {
        const listener = (e) => {
          if (e.type === 'routeChangeComplete') {
            router.events.off('routeChangeComplete', listener);
            resolve();
          }
        };
        router.events.on('routeChangeComplete', listener);
      });
      router.push('/another-page');
      await routeChangeComplete;
      console.log('Navigation complete!');
    })();
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent; 
```