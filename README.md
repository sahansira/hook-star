# Hook-star
🚀 Hook-star: The Ultimate Collection of Custom React Hooks

Are you a React developer looking to streamline your workflow and enhance your projects with reusable, efficient, and powerful hooks? Look no further than Hook-star! 🎉

Hook-star offers a comprehensive suite of custom hooks designed to simplify your development process and boost productivity. Whether you're managing state, fetching data, handling forms, or creating responsive layouts, Hook-star has got you covered.

## 🌟 Key Features:

Easy to Use: Simple and intuitive API for quick integration.
Versatile: A wide range of hooks to cover common and advanced use cases.
Lightweight: Minimal overhead to keep your projects fast and efficient.
TypeScript Support: Fully typed for a better development experience.
Community-Driven: Open-source and actively maintained.


## 📦 What's Included:

* useFetch - Simplified data fetching with loading and error states.

* useLocalStorage - Effortless localStorage management.

* useDebounce - Debounce values with ease.

* useToggle - Toggle boolean states seamlessly.

* usePrevious - Track previous state values.

* useOnClickOutside - Detect clicks outside a specified element.

* useWindowSize - Get the current window size in real-time.

* useInterval - Run intervals effortlessly.

* useTimeout - Handle timeouts like a pro.

* useClipboard - Copy text to clipboard with a single call.

## 🛠️ Installation

### Step 1: Install the Package

`npm install hook-star`

### Step 2: Usage

- Example: useFetch
````import React from 'react';
import { useFetch } from 'hook-star';

const DataFetchingComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;
````

- Example: useLocalStorage
````import React from 'react';
import { useLocalStorage } from 'hook-star';

const LocalStorageComponent = () => {
  const [value, setValue] = useLocalStorage('key', 'default value');

  return (
    <div>
      <p>Stored value: {value}</p>
      <button onClick={() => setValue('new value')}>Update Value</button>
    </div>
  );
};

export default LocalStorageComponent;
````

- Example: useDebounce
````import React, { useState } from 'react';
import { useDebounce } from 'hook-star';

const DebounceComponent = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
};

export default DebounceComponent;
````

## ✨ Contributing
Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/sahansira/hook-star.git).

## 🎫 License
This project is licensed under the MIT License.

🔗 Get Started:
Explore the documentation, installation instructions, and usage examples on our [GitHub](https://github.com/sahansira/hook-star.git) repository.

Join the Hook-star community today and take your React projects to the next level!
