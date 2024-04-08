import Image from "next/image"

export default function Artist() {
    return (
        <main>
                <section>
                    <ul className="grid grid-cols-2 md:grid-cols-3 text-white">
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist1.jpg"
                                    alt="Artist 1"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Anna</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist2.jpg"
                                    alt="Artist 2"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Joe Morgan</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist3.jpg"
                                    alt="Artist 3"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Kasia</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist4.jpg"
                                    alt="Artist 4"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Enrique</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist5.jpg"
                                    alt="Artist 5"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Maria Sarapova</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist6.jpg"
                                    alt="Artist 6"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Bruno</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist7.jpg"
                                    alt="Artist 7"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Julie</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="/">
                                <Image 
                                    src="/artist8.jpg"
                                    alt="Artist 8"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute bottom-0 p-4">Mike</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
    )
}