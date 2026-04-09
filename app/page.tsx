import Countdown from "./components/Countdown";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-5">
      <div className="max-w-xl w-full text-center relative">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Coming Soon
        </h1>
        <p className="text-lg text-white/60 mb-10 leading-relaxed">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
        <Countdown />
        <SubscribeForm />
      </div>
    </div>
  );
}
