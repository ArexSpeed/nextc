import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/dist/client/image";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import BoardData from "../data/board.json";
import CardItem from "../components/CardItem";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col h-screen p-10">
          {/* Board header */}
          <div className="flex justify-between flex-initial">
            <div className="flex items-center">
              <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
              <ChevronDownIcon className="p-1 ml-5 text-gray-500 bg-white rounded-full shadow-xl w-9 h-9" />
            </div>

            <ul className="flex space-x-3">
              <li>
                <Image
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  width="36"
                  height="36"
                  objectFit="cover"
                  className="rounded-full "
                />
              </li>
              <li>
                <Image
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  width="36"
                  height="36"
                  objectFit="cover"
                  className="rounded-full "
                />
              </li>
              <li>
                <Image
                  src="https://randomuser.me/api/portraits/men/78.jpg"
                  width="36"
                  height="36"
                  objectFit="cover"
                  className="rounded-full "
                />
              </li>
              <li>
                <button className="flex items-center justify-center border border-gray-500 border-dashed rounded-full w-9 h-9">
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
          {/* Board columns */}
          <div className="grid grid-cols-4 gap-5 my-5">
            {BoardData.map((board, i) => (
              <div
                key={i}
                className="relative flex flex-col p-3 bg-gray-100 rounded-md shadow-md"
              >
                <span className="absolute inset-x-0 top-0 w-full h-1 bg-gradient-to-r from-pink-700 to-red-200"></span>
                <h4 className="flex justify-between mb-2 items-items-center">
                  <span className="text-2xl text-gray-600">{board.name}</span>
                  <DotsVerticalIcon className="w-5 h-5 text-gray-500" />
                </h4>
                {board.items.length > 0 &&
                  board.items.map((item, i) => (
                    <CardItem key={i} data={item} />
                  ))}
                <button
                  className="flex items-center justify-center my-3 space-x-2 text-lg"
                  onClick={() => {}}
                >
                  <span>Add task</span>
                  <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
