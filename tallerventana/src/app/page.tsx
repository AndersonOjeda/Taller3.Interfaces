import Image from "next/image";
export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gray-300 w-screen h-screen">
      <section className="bg-white rounded-2xl shadow-xl w-2/4 p-5">
        <section>
          <h1 className="text-3xl font-extrabold">Appearence</h1>
          <p className="text-gray-400 mt-2">kdfhglkdfhgkd kdfjhgdifg doifghdoifh</p>
        </section>
        <hr className="border-b-2 mt-3"></hr>

        <section className="flex mt-9">
          <section className="flex-1">
            <h1 className="text-3xl font-normal">Language</h1>
            <p className="text-gray-400 mt-2">kdfhglkdfhgkd kdfjhgdifg doifghdoifh</p>
          </section>
          <hr className="border-b-2 mt-3"></hr>

          <select className="mt-1 w-32 p-2 border rounded-md text-gray-700">
            <option>English</option>
          </select>
        </section>
        <hr className="border-b-2 mt-3"></hr>

        <section className="flex flex-col mt-9">
          <h3 className="text-3xl font-normal">Interface theme</h3>
          <p className="text-gray-400 mt-2">kdfhglkdfhgkd kdfjhgdifg doifghdoifh</p>
          <section className="grid grid-cols-3 mt-4 gap-1 items-center">
            <span className="w-24 h-24 bg-violet-300 rounded-md justify-center"></span>
            <span className="w-24 h-24 bg-violet-400 rounded-md justify-center"></span>
            <span className="w-24 h-24 bg-purple-600 rounded-md justify-center"></span>

          </section>
        </section>

      </section>
    </main>
  )
}
