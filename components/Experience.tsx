export default function Experience(props: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full mb-8">
      <div className="flex flex-col gap-0 md:gap-2 mb-3">
        <h3 className="text-xl font-bold">{props.place}</h3>
        <p>{props.duration}</p>
        <p>{props.location}</p>
      </div>
      <div className="w-full md:w-[700px] bg-gray-700 md:bg-background py-3 px-4 rounded-xl">
        {props.works.map((work: any) => (
          <div key={work.id} className="mb-5">
            <h3 className="font-bold ">{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
