import Image from 'next/image'

const WhyChooseAT = () => {
    return (
        <section className='w-full h-full px-0 py-[40px] lg:px-[40px] md:py-[70px]'>
            <Image
                width={850}
                height={1000}
                src={"/whyChoose.svg"}
                alt={"Why Choose AT"}
                priority={false}
                loading="lazy"
                quality={100}
                className="w-full h-auto"
                sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
            />
        </section>
    )
}

export default WhyChooseAT