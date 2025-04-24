"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { DSGuidedBySection } from "@/utils/Data";

const GuidedBy = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden padding">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row md:justify-between">
        <div className="mb-8 w-full lg:w-2/5 space-y-5">
          <Image
            width={20}
            height={20}
            className="w-12 h-12 md:w-16 md:h-16"
            src={"/trained.svg"}
            alt={"logo"}
          />
          <h2 className="font-extrabold text-foreground leading-7 md:leading-10 text-[clamp(1.4rem,2.50vw,2.6rem)] w-full md:w-3/5 lg:w-1/2">
            Trained and Guided by the only best
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-primary/50 p-2.5 md:p-4 text-xl md:text-2xl text-white transition-colors hover:bg-primary/90 cursor-pointer rounded-full"
              onClick={shiftLeft}
            >
              <FaArrowLeft />
            </button>
            <button
              className="h-fit bg-primary/50 p-2.5 md:p-4 text-xl md:text-2xl text-white transition-colors hover:bg-primary/90 cursor-pointer rounded-full"
              onClick={shiftRight}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4 w-full lg:w-3/5">
          {DSGuidedBySection.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  position,
  index,
  img,
  alt,
  customer,
  positionDetail,
  aboutCourse,
}) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className="bg-secondary p-[1.5px] rounded-xl min-h-[350px] xl:min-h-[250px] w-10/12 shrink-0 md:w-3/5 relative z-40"
    >
      <div className="relative flex h-full flex-col justify-between overflow-hidden p-8 shadow-lg bg-secondary font-inter gap-6 rounded-xl">
        <div className="relative">
          {/* first layer */}
          <div className="w-full h-56 bg-zinc-400 rounded-xl relative z-30 overflow-hidden">
            <Image
              fill
              src={img}
              alt={alt}
              className="object-cover object-top"
            />
          </div>
          {/* second layer */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4/5 bg-black/20 backdrop-blur-lg rounded-xl h-64 z-20" />
          {/* third layer */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-11/12 bg-primary/80 backdrop-blur-xl rounded-xl h-60 z-10" />
        </div>
        <div className="flex flex-col justify-between text-foreground">
          <div className="space-y-4 ">
            <div className="">
              <h5 className="text-[clamp(1rem,3vw,1.6rem)] font-bold tracking-wide">
                {customer}
              </h5>
              <p className="text-[clamp(0.7rem,1.15vw,0.9rem)] font-semibold">
                {positionDetail}
              </p>
            </div>
            <p className="font-normal text-[clamp(0.8rem,3vw,1rem)] leading-5 md:leading-7 font-inter">
              {aboutCourse}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GuidedBy;

const features = [
  {
    title: "Faster uploads",
    Icon: FiUpload,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt ipsum rerum natus fugit ex minima voluptas ratione quaerat. Ea!",
  },
  {
    title: "99.99% uptime",
    Icon: FiArrowUp,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae sed? Maxime!",
  },
  {
    title: "Unlimited requests",
    Icon: FiTarget,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab perspiciatis earum quibusdam laudantium non nihil nesciunt?",
  },
  {
    title: "500+ integrations",
    Icon: FiLink,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem explicabo nobis officia, nostrum eligendi accusamus unde ad cumque, magnam deleniti adipisci fugiat facere. Veniam?",
  },
  {
    title: "Modern tooling",
    Icon: FiTool,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
];
