import React from 'react'

const Page = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <h1 className="font-extrabold tracking-tight leading-none text-gradient text-[clamp(1.8rem,3.5vw,3.8rem)] py-2 mx-auto text-center">
                Legal
            </h1>
            <p
                className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground font-inter"
            >
                The Aspire Tech Academy logotype and logomark have been meticulously designed and are the exclusive property of Aspire Tech Educational OPC Private Limited. Their usage is restricted to official and authorised purposes only. Without explicit written consent from Aspire Tech Educational OPC Private Limited, it is strictly prohibited to employ this logotype and logomark in any commercial or marketing context.
            </p>
        </section>
    )
}

export default Page
