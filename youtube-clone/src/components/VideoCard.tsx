import { Line } from "./Line";


export default function VideoCard(props: any) {
  return (
    <div className="pl-2 pr-2 cursor-pointer">
      <img src={props.image} className="rounded-xl   border border-gray-300"/>
      <Line progress={10}/>

        <div className="grid grid-cols-12 pt-3">


            <div className="col-span-2 pl-3  ">
                <img className={"rounded-full w-20 h-15"} src={props.thumb} />
             
            </div>
        
        
            <div className="col-span-10 pl-3 ">
            <div>  {props.title}</div>
            <div className="text-gray-500 text-base">  {props.author}</div>
            <div className="text-gray-500 text-base">{props.views}| {props.time}</div>
            </div>
        
        </div>
    </div>
  );
}
