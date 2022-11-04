import Image from "next/image";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8">
                <div className="md:w-1/2 w-full md:mt-24 pb-8 ml-6">
                    <h1 className="text-5xl font-bold md:w-96 md:text-left text-center">Build strong digital presence!</h1>
                    <h2 className="text-4xl italic font-light pt-2 md:w-80 md:text-left text-center">Enjoy <span className="font-bold">30% OFF</span> until the end of the year!</h2>
                    <div className="pt-8 md:w-96">
                        <p className="leading-relaxed md:text-left text-center">
                            For those who want to claim a share 
                            in this ever-changing market, YELLOW CONNECT is an important part 
                            of strategy to increase your visibility.
                        </p><br/>
                        <p className="leading-relaxed md:text-left text-center">
                            With a good digital plan, your business can be on several online 
                            communication channels at the same time, facilitating your 
                            communication with your audience and achieving greater reach.
                        </p>
                    </div>
                </div>
              <div className="md:w-1/2 w-full">
                <Image src={heroImage} width={1090} height={1000} alt="" className="object-contain"/>
              </div>
             </div>
        </div>
    );
}