import Image from "next/image"

export default function Partner() {
    return (
        <main>
                <section>
                    <Image 
                        src="/partners.jpg"
                        alt="Partners"
                        width={1152}
                        height={600}
                    />
                    <span className="uppercase text-2xl md:text-4xl text-center block pt-8 md:pt-12">Thank to our amazing partners</span>
                </section>
                <section className="flex flex-wrap gap-16 items-center justify-center pt-20">
                    <Image 
                        src="/gitlab.png"
                        alt="Partners"
                        width={200}
                        height={100}
                    />
                    <Image 
                        src="/blender.png"
                        alt="Partners"
                        width={200}
                        height={100}
                    />
                    <Image 
                        src="/cocacola.png"
                        alt="Partners"
                        width={180}
                        height={100}
                    />
                    <Image 
                        src="/spotify.png"
                        alt="Partners"
                        width={200}
                        height={100}
                    />
                </section>
            </main>
    )
}   