import { component$, Slot, useStore } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  const store = useStore({
    opacity: 1,
  });

  return (
    <div
      class="h-screen w-screen overflow-auto"
      onScroll$={(e) => {
        console.log(e.view?.scrollY);
      }}
    >
      <div
        class="fixed w-screen h-screen"
        style={{
          background: `linear-gradient(
            rgba(0, 0, 20, 0.8),
            rgba(0, 0, 0, 0.7)
        ),  url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/619150/3bb00cbe95127f2fe36c85a33cfe69f4e5911234.jpg)`,
        }}
      ></div>
      <main class="min-h-screen">
        <Header />
        <main class="h-full">
          <Slot />
        </main>
      </main>
      <footer class="flex absolute bottom-0 w-fulla justify-evenly z-20 p-2 bg-black text-white"></footer>
    </div>
  );
});
