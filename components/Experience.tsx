export default function Experience(props: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full mb-8">
      <div className="flex w-full md:w-[400px] flex-col  mb-3">
        <h3 className="text-xl font-bold mb-2">{props.place}</h3>
        <p className="text-gray-400 font-normal">{props.duration}</p>
        <p className="text-gray-400 font-normal">{props.location}</p>
      </div>
      <div className="w-full md:w-[700px] bg-gray-700 md:bg-background py-3 md:py-0 px-4 rounded-xl">
        {props.works.map((work: any) => (
          <div key={work.id} className="mb-3 ">
            <h3 className="font-bold text-base mb-1">{work.title}</h3>
            <div className="flex flex-col gap-1 text-base font-normal text-white md:text-gray-400">
              {work.description.map((desc: any) => (
                <p key={desc}>- {desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
