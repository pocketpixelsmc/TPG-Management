import { plusJakartaSans } from "./fonts";

export default function Services() {
    return (
        <section className={`flex flex-col items-center justify-center gap-4 text-center ${plusJakartaSans.className}`}>
            <div className=" py-4 w-screen bg-blue-900 text-white">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">What we offer</h1>
            </div>
            <p className="text-sm lg:text-lg max-w-[60%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ullam odit iusto deleniti quam, error, dignissimos corrupti fugiat aperiam sit ratione quibusdam nam cumque libero? Odio suscipit error minus ratione.
                Debitis impedit laboriosam, hic, unde atque reiciendis quibusdam quaerat, placeat quos esse cumque dolorem voluptatem libero quia ullam magnam at magni veritatis soluta! Accusantium voluptate ipsam amet. Consequatur, nulla maxime!
                Quaerat est eaque ab atque! Officiis quae ipsum suscipit tempore facilis laudantium vitae cupiditate tempora dicta, aperiam reprehenderit praesentium corporis eveniet voluptatum non est harum, aliquid corrupti et tenetur sapiente.
            </p>
        </section>
    )
}