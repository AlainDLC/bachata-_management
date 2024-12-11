import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidopanel */}
      <Sidebar />

      {/* Huvudsektion */}
      <main className="flex-1 text-center  p-4">
        <h1 className="text-2xl font-bold">Let&apos;s do it</h1>
        <p>Här kan du välja kurser och visa videor.</p>
      </main>
    </div>
  );
}
