import { effect, state } from "@veltra/app";
import viteLogo from "/vite.svg";
import veltraLogo from "./assets/veltra.svg";

import "./App.css";

export const App = () => {
  const count = state(0);

  effect(() => {
    console.log(count.value);
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/allenelguira16/veltra" target="_blank">
          <img src={veltraLogo} class="logo veltra" alt="Veltra logo" />
        </a>
      </div>
      <h1>Vite + Veltra</h1>
      <div class="card">
        <button onClick={() => count.value++}>count is {count.value}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Veltra logos to learn more
      </p>
    </>
  );
};
