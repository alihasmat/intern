import Image from "next/image";

export default function Hero() {
  return (
    <main>
        <section className="pb-12 relative text-white">
          <ul className="flex gap-6 uppercase items-center justify-center pb-4 text-xl md:text-2xl">
            <li><a href="/">Fri</a></li>
            <li className="p-1 bg-white text-black"><a href="/">Sat</a></li>
            <li><a href="/">Sun</a></li>
          </ul>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="uppercase text-5xl text-white font-bold z-10">Saturday</h3>
          </div>
          <Image 
            src="/settimes.jpg"
            alt="Hero"
            width={1152}
            height={600}
            className="z-0"
          />
        </section>
        <section className="uppercase text-center text-2xl md:text-4xl pt-6 pb-10 text-white">
            <p className="pb-8">Friday Bet Times Coming Soon</p>
            <p>Set Times Subject to Change</p>
            <p>Check for more updates</p>
          </section>
      </main>
  );
}