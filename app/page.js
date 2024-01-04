// import LikeButton from './like-button';
import "tailwindcss/tailwind.css";
import About from './about'
import Education from "./education";
import Experience from "./experience";
import Test, { TabsCustomAnimation } from "./test";


function Header({ title }) {
  return (
    <div className="flex h-dvh w-full justify-center items-center">
      <div className="p-8 border-cyan-600 border-4 space-y-4">
        <h1 className="text-6xl">Hi. I'm Saransh.</h1>
        <h2 className="tracking-widest">
          Programmer. Developer. Engineer. Designer.
        </h2>
      </div>
      {/* <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul> */}

      {/* <LikeButton /> */}
    </div>
  );
}

function SpaceDiv() {
  return (
    <>
      <div className="flex h-dvh w-full justify-center bg-slate-100">
        <div className="w-10 h-1/2 border-b-8 border-dotted border-b-sky-900"></div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <SpaceDiv />
      <About />
      <SpaceDiv />
      <Education />
      <SpaceDiv />
      <Experience />
      <SpaceDiv />
      <Test />
      <SpaceDiv />
      <TabsCustomAnimation />
      <SpaceDiv />
    </>
  );
}
