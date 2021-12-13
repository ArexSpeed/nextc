import React from "react";
import Image from "next/dist/client/image";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  ChatAlt2Icon,
  PaperClipIcon,
} from "@heroicons/react/outline";

function CardItem({ data, index }) {
  return (
    <div className="p-3 m-3 mt-0 bg-white rounded-md last:mb-0">
      <label
        className={`bg-gradient-to-r
              px-2 py-1 rounded text-white text-sm
              ${
                data.priority === 0
                  ? "from-blue-600 to-blue-400"
                  : data.priority === 1
                  ? "from-green-600 to-green-400"
                  : "from-red-600 to-red-400"
              }
              `}
      >
        {data.priority === 0
          ? "Low Priority"
          : data.priority === 1
          ? "Medium Priority"
          : "High Priority"}
      </label>
      <h5 className="my-3 text-lg leading-6 text-md">{data.title}</h5>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1">
            <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
            <span>{data.chat}</span>
          </span>
          <span className="flex items-center space-x-1">
            <PaperClipIcon className="w-4 h-4 text-gray-500" />
            <span>{data.attachment}</span>
          </span>
        </div>

        <ul className="flex space-x-3">
          {data.assignees.map((ass, index) => (
            <li key={index}>
              <Image
                src={ass.avt}
                width="36"
                height="36"
                objectFit="cover"
                className="rounded-full "
              />
            </li>
          ))}
          <li>
            <button className="flex items-center justify-center border border-gray-500 border-dashed rounded-full w-9 h-9">
              <PlusIcon className="w-5 h-5 text-gray-500" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
