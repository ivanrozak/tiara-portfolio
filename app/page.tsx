import React from "react";
import Navigation from "@/components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";
import { Button, Divider, Input, Link, Textarea } from "@nextui-org/react";
import { EmailIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h4 className="text-2xl font-medium leading-9 mb-14">
          <b>Mission :</b> crafting experiences that resonate deeply with your
          audience while propelling your business forward. My services lie four
          pillars that form the foundation of exceptional user experiences :
        </h4>
        <div>
          <h4 className="text-2xl font-semibold bg-[#009379] py-1 text-white">
            <span className="text-[#F6DCE9]">Service 1 :</span> User or Customer
            Research
          </h4>
          <p className="py-2">
            <b>
              Uncover deep insights into your audience's needs and behaviors
            </b>{" "}
            through meticulous user and customer research. Discover what
            motivates and challenges your users, guiding informed decisions and
            strategies to tailor your offerings precisely to their preferences.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold bg-[#009379] py-1 text-white">
            <span className="text-[#F6DCE9]">Service 2 :</span> User Interface
            (Low Fidelity - High Fidelity Design Development)
          </h4>
          <p className="py-2">
            <b>Craft visually engaging and functional user interfaces</b> from
            low fidelity sketches to high fidelity designs. From the conceptual
            stage to the final product, the journey involves translating ideas
            into intuitive and aesthetically pleasing designs, ensuring a
            seamless user experience.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold bg-[#009379] py-1 text-white">
            <span className="text-[#F6DCE9]">Service 3 :</span> Usability
            Testing
          </h4>
          <p className="py-2">
            <b>Evaluate the usability of your product or service</b> through
            comprehensive testing methodologies. Identify potential pain points,
            streamline workflows, and optimize user interactions by gathering
            real-time feedback, allowing for iterative improvements that enhance
            overall usability.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold bg-[#009379] py-1 text-white">
            <span className="text-[#F6DCE9]">Service 4 :</span> Heuristic
            Evaluation
          </h4>
          <p className="py-2">
            Conduct thorough heuristic evaluations to{" "}
            <b>assess the compliance of your designs</b> with established
            usability principles. Identify areas for enhancement, focusing on
            aspects like learnability, efficiency, and user satisfaction, thus
            refining your product's overall user experience.
          </p>
        </div>
        <div className="mt-14 flex items-center gap-4">
          <Image
            src="/static/rate_card.png"
            width={60}
            height={60}
            alt="rate card"
          />
          <a
            href="https://drive.google.com/file/d/1z0Rf__TzwlQoyDJV7rFep-nNWOE3zOqE/view"
            target="_blank"
            className="text-2xl font-medium hover:underline"
          >
            Checkout My Ratecard
          </a>
        </div>
      </section>
      <Divider />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          <div className="md:col-span-3">
            <h4 className="text-2xl font-bold mb-5">
              <span className="text-[#4047FC]">Latest Work</span> : Eiger Mobile
              Application
            </h4>
            <p>
              In collaborating with Eiger, I provided a comprehensive suite of
              services geared towards optimizing their mobile-commerce
              application for enhanced user engagement and streamlined
              experiences.
            </p>
            <div className="block md:hidden">
              <Image
                src="/static/figure1.png"
                width={521}
                height={743}
                alt="figure1"
              />
              <div className="flex gap-4 justify-center">
                <Link
                  className="cursor-pointer"
                  href="https://play.google.com/store/apps/details?id=com.eiger.eigeradventureapp&pcampaignid=web_share"
                  target="_blank"
                >
                  <Image
                    src="/static/Google_Play.png"
                    width={167}
                    height={46}
                    alt="figure2"
                  />
                </Link>
                <Link
                  className="cursor-pointer"
                  href="https://apps.apple.com/id/app/eiger-adventure/id6460640350"
                  target="_blank"
                >
                  <Image
                    src="/static/App_Store.png"
                    width={167}
                    height={46}
                    alt="figure2"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-16">
              <h4 className="test-2xl font-semibold py-1 bg-[#F2BD65] text-[#4B4B4B]">
                1. Brandsite Style Adaptation :
              </h4>
              <p className="my-2">
                Employing an astute understanding of Eiger's brand essence, I
                seamlessly{" "}
                <b>adapted their style onto the mobile-commerce platform.</b>{" "}
                This involved meticulously aligning visual elements, colors, and
                design aesthetics to ensure a harmonious and consistent brand
                experience across every touchpoint.
              </p>
              <h4 className="test-2xl font-semibold py-1 bg-[#F2BD65] text-[#4B4B4B]">
                2. Product Detail Page Design Decision and Reasoning :
              </h4>
              <p className="my-2">
                Within the mobile-commerce application,{" "}
                <b>
                  strategic decisions regarding product detail page design were
                  made
                </b>
                . Each design choice was meticulously grounded in user-centric
                principles and in-depth research insights. Every element
                placement, visual hierarchy, and interaction was crafted to
                optimize user engagement and drive conversions, fostering a
                seamless shopping experience.
              </p>
              <h4 className="test-2xl font-semibold py-1 bg-[#F2BD65] text-[#4B4B4B]">
                3. Usability Testing:
              </h4>
              <p className="my-2">
                By conducting comprehensive tests, I validate the efficacy of
                the design decisions made.{" "}
                <b>
                  User behaviors and feedback were analyzed to fine-tune the
                  application
                </b>
                , ensuring its usability and functionality met the highest
                standards.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2">
            <Image
              src="/static/figure1.png"
              width={521}
              height={743}
              alt="figure1"
            />
            <div className="flex gap-4 justify-center">
              <Link
                className="cursor-pointer"
                href="https://play.google.com/store/apps/details?id=com.eiger.eigeradventureapp&pcampaignid=web_share"
                target="_blank"
              >
                <Image
                  src="/static/Google_Play.png"
                  width={167}
                  height={46}
                  alt="figure2"
                />
              </Link>
              <Link
                className="cursor-pointer"
                href="https://apps.apple.com/id/app/eiger-adventure/id6460640350"
                target="_blank"
              >
                <Image
                  src="/static/App_Store.png"
                  width={167}
                  height={46}
                  alt="figure2"
                />
              </Link>
            </div>
          </div>
        </div>
        <Slider />
        <Divider className="my-16" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-3xl font-semibold">Let’s craft together!</h4>
            <p className="max-w-[360px] py-8">
              Discover what your customers truly want and design experiences
              that keep them coming back for more.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="#">
                <LinkedinIcon />
              </Link>
              <Link href="mailto:tbisfir@gmail.com">
                <EmailIcon />
              </Link>
              <Link href="https://wa.me/6281379163839">
                <WhatsAppIcon />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Input label="Name" radius="none" />
            <Input label="Email" radius="none" />
            <Textarea
              placeholder="Type your message here"
              radius="none"
              minRows={6}
            />
            <Button
              className="mr-auto bg-[#2D2D2D] mt-6"
              radius="none"
              size="lg"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
