"use client";

import { motion } from "framer-motion";

import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  HorizontalSeparator,
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";
import { WebDevIcon } from "@/public/assets/icons";

type Props = {
  id?: string;
  serviceIcon?: JSX.Element;
  serviceName?: string;
  serviceCategories?: string[];
  serviceHeadline?: string;
  serviceDescription1?: string;
  serviceDescription2?: string;
  serviceVideo?: HTMLVideoElement;
};

export const SingleService = ({
  id,
  serviceHeadline,
  serviceDescription1,
  serviceDescription2,
  serviceCategories,
  serviceName,
  serviceIcon,
}: Props) => {
  return (
    <motion.div id={id} className="single-service">
      <div className="left">
        <div className="left-inner">
          <div className="service-header">
            {serviceIcon}
            <h2>{serviceName}</h2>
          </div>

          <div className="service-categories">
            {serviceCategories?.map((category) => (
              <p key={category}>{category}</p>
            ))}
          </div>

          <AnimatedButton
            href="/contact"
            letters={[
              "g",
              "e",
              "t",
              "\u00a0",
              "i",
              "n",
              "\u00a0",
              "t",
              "o",
              "u",
              "c",
              "h",
            ]}
          />
        </div>
      </div>

      <VerticalSeparator />
      <HorizontalSeparator />

      <div className="right">
        <h5 className="service-headline">{serviceHeadline}</h5>

        <div className="service-description">
          <p>{serviceDescription1}</p>
          <p>{serviceDescription2}</p>
        </div>

        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          controls={false}
          preload="auto"
          src={
            "https://firebasestorage.googleapis.com/v0/b/ikaziccsv.appspot.com/o/hero.mp4?alt=media&token=455c701e-67b5-42e3-ae76-33c5e6019556"
          }
        ></video>
      </div>
    </motion.div>
  );
};
