import Link from "next/link";

export default function Certificate(props: any) {
  return (
    <Link
      href={props.link}
      className=" bg-gray-700 hover:bg-gray-800 px-3 md:px-6 py-2 md:py-3 rounded-lg"
    >
      <div className="flex flex-col justify-center h-full ">
        <h3 className="text-base md:text-xl font-bold ">{props.title}</h3>
        <p>{props.place}</p>
        <p>{props.year}</p>
      </div>
    </Link>
  );
}
