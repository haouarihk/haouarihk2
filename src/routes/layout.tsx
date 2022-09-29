import { component$, Slot, useStore } from "@builder.io/qwik";
import Madeusing from "~/components/madeusing";
import Header from "../components/header/header";

export default component$(() => {
  const store = useStore({
    opacity: 1,
  });

  return (
    <div
      class="relative h-screen w-screen overflow-auto"
      onScroll$={(e) => {
        console.log(e.view?.scrollY);
      }}
    >
      <div
        class="fixed -z-10 w-screen h-screen"
        style={{
          background: `linear-gradient(
            rgba(0, 0, 20, 0.8),
            rgba(0, 0, 0, 0.7)
        ),  url(/bg.jpg)`,
        }}
      ></div>

      <Header />
      <Slot />
    </div>
  );
});
