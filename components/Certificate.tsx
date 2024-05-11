import Link from "next/link";
import { LinkIcon } from "./icon";

export default function Certificate(props: any) {
  return (
    <Link
      href={props.link}
      className=" bg-gray-600 hover:bg-gray-700 px-3 md:px-6 py-2 md:py-3 rounded-lg"
      target="_blank"
    >
      <div className="flex flex-col justify-center h-full ">
        <h3 className="text-base md:text-xl font-bold ">{props.title}</h3>
        <div className="flex justify-between w-full items-end">
          <div>
            <p>{props.place}</p>
            <p>{props.year}</p>
          </div>
          <div className="pb-1">
            <LinkIcon width={16} height={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
