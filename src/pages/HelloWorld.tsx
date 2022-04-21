export interface HelloWorldProps {
  /** username */
  user?: string;
}

export default function HelloWorld(props: HelloWorldProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl">Hello, World</h1>
      <h2 className="text-2xl">current user: {props.user}</h2>
    </div>
  );
}
