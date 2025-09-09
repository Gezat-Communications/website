import Messages from "@/components/Messages";
import SecondSection from "@/components/secondSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">

      <div className="text-center">
        <div className="max-w-lg py-8 mx-auto bg-white relative">

          <div className="mb-4 w-full flex justify-center">
            <Image src="/Img/geza.png" alt="Logo" width={64} height={64} />
          </div>

          <h1 className="text-6xl font-black mb-4" style={{ fontFamily: 'Sora, Arial, sans-serif' }}>
            <span className="text-black">HAPPY</span>
            <br />
            <span className="text-primary">NEW YEAR</span>
          </h1>

          <p className="text-lg md:text-xl text-black mb-4 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Sora, Arial, sans-serif' }}>
            Get your personalized<br />
            New Year wish from our<br />
            creative agency.
          </p>

          <Messages />

          <p className="mt-4 text-gray-400 text-lg" style={{ fontFamily: 'Sora, Arial, sans-serif' }}>
            Scan • Laugh • Share
          </p>
        </div>
      </div>

      <SecondSection />
    </div>
  );
}
