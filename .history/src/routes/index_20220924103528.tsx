import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 className="bg-pink-400">
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <Link>sdf</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome",
};
