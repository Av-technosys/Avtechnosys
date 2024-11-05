import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../Assets/Logo 1.png";
import arrow from "../Assets/rightarrow.png";
import "./Footer.css";
import { Collapse } from "antd";
import bigarrow from "../Assets/bigarrow.png";
import bigarrowup from "../Assets/bigarrowup.png";
import digital1 from "../Assets/bg11.jpg";
import Header2 from "./Header2";
import Form1 from "./Form1";
import Hero from "./Hero";
import Footer1 from "./Footer1";
import TestCard from "./TestCard";

const text = (
  <div className="">
    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-96 font-semibold">
          App Modernization
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Is your app acting like it’s still 2010? Let us bring it into the now!
          We’ll update, streamline, and supercharge it with today’s slickest
          tech, so it’s faster, more powerful, and just plain cooler. From
          adding the latest features to speeding things up, we give your app
          that “fresh out of the box” feel—no bugs, just brilliant. It’s like a
          makeover, but for your digital sidekick, ensuring it keeps up with the
          ever-demanding pace of the modern world.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact">
            {" "}
            <Link to="/contact"> Book Service</Link>
          </Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex    ">
      <div className="  ">
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Microservices
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Flexible setups that grow with you, not against you. Imagine your app
          as a city with different neighborhoods working together. That’s what
          microservices do.They break down your app into independent parts that
          can grow and evolve without dragging the whole thing down. Think of it
          as a city that can adapt on the fly—no more tech slowdowns or endless
          updates. Your app stays on top of its game, ready for anything you
          throw at it, with flexibility that keeps it as fresh as your latest
          idea.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6  ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Buisness Mobility
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8 mr-10">
          Run your business from anywhere—even your couch. With our business
          mobility solutions, work goes beyond office walls, letting you manage
          apps and data on the move. It’s the freedom to stay productive from
          anywhere, anytime. Forget “9-to-5” — we make your business a 24/7,
          worldwide operation. Empower your team to stay in sync and ready for
          action, whether they're at a desk or lounging by the beach.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6  ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Cloud & DevOps
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8 mr-10">
          Like an upgrade for your whole digital life.Our Cloud and DevOps team
          is like a backstage crew for your tech, optimizing everything to run
          like a well-oiled machine. From automating processes to keeping your
          operations smooth, we ensure your tech is a reliable, secure, and
          powerful ally. Say goodbye to tech hiccups and hello to seamless,
          secure cloud solutions that let you focus on the big picture—your
          success.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-6 ">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Managed Services
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8 mr-10">
          Tech support that just gets you. We’re your on-call team, keeping
          everything running smoothly 24/7. We monitor, troubleshoot, and fix
          things before they even become an issue. No stress, just seamless
          service to keep your digital world functioning without a hitch. It’s
          like having an invisible IT squad always at work—so you can sleep easy
          and focus on what you do best.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-6 ">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    {/* <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Continous Management Services
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8 mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima,
          nihil fugiat cumque laborum doloribus sit voluptate rerum dolore,
          mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi
          vitae adipisci accusamus quos.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-16">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div> */}
    <hr className="bg-black h-[2px]" />
    {/* <div>
      <div className="text-base font-bold absolute right-5  ">
        <img className="size-16" src={bigarrowup} alt="" />
        <button className="ml-2">Close</button>
      </div>
    </div> */}
  </div>
);

const text2 = (
  <div className="">
    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-96 font-semibold">
          UX/UI Design
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          First impressions matter—especially online. Our design team builds
          interfaces that are not only gorgeous but intuitive, keeping visitors
          engaged. Think of it as curb appeal for your website. We make sure
          your brand’s digital experience is so smooth and attractive that it
          leaves users thinking, “Yes, this is exactly what I’ve been looking
          for!” Whether it’s a website or an app, we turn it into an experience
          that feels natural, fun, and easy to navigate.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 ml-28 rounded-lg mt-6 ">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex    ">
      <div className="  ">
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Platform Selection
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Finding the right tech platform is like finding the perfect outfit—it
          needs to fit just right. We find the tech that feels like it’s made
          just for you.Think of us as your tech stylists, ensuring your digital
          look is on-point and ready to rock. The result? A tech solution that
          complements your unique needs, so you feel confident going live in the
          digital spotlight.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Headless CMS
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Manage content with no strings attached. Our headless CMS solutions
          let you edit, update, and manage content like a pro. It’s like the
          Swiss Army knife of content management—perfect for bloggers,
          e-commerce sites, and apps. You get to focus on your brand’s voice and
          vision without battling a rigid, outdated system. Just pure, flexible
          control across all platforms. Total freedom, with zero tech headaches.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-6">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          E-Commerce Setup{" "}
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          E-Commerce Setup: Ready to turn browsers into buyers? Our e-commerce
          services make online shopping easy and secure. We set up sleek
          designs, quick checkouts, and all the tech your customers need to feel
          confident shopping with you. It’s like transforming a basic storefront
          into a full-on digital shopping experience that has them coming back
          for more. Let’s make your brand their favorite online hangout.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg ml-8 mt-6">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Analytics
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Numbers that actually mean something.Our analytics and reporting take
          the guesswork out of performance, turning data into a clear action
          plan. Think of us as your digital detectives—uncovering trends,
          insights, and strategies to keep your brand ahead of the game. You’ll
          know exactly what’s working and where to focus next, with data that’s
          as insightful as it is empowering. It’s time to make numbers work for
          you.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />
    {/* 

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Continous Management Services
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima,
          nihil fugiat cumque laborum doloribus sit voluptate rerum dolore,
          mollitia nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Vel nobis distinctio ab quisquam, voluptas corporis aut, modi
          vitae adipisci accusamus quos.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-12 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />
    <div>
      <div className="text-base font-bold absolute right-5  ">
        <img className="size-16" src={bigarrowup} alt="" />
        <button className="ml-2">Close</button>
      </div>
    </div> */}
  </div>
);

const text3 = (
  <div className="">
    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-96 font-semibold">
          Digital Strategy
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Custom plans, no copy-pasting here. Our strategies are like a
          personalized game plan designed to get your brand noticed by the right
          people. We dive deep into what makes your audience tick, creating a
          path that’s tailored to win them over. It’s not just marketing; it’s a
          roadmap for your brand’s success. Think of us as your digital hype
          team, making sure every effort is on point and aimed at bringing you
          results
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg  mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex    ">
      <div className="  ">
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          SEO That Works
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Tired of feeling invisible? People find you right when they need you?
          Our SEO services bring your website into the spotlight, getting you
          noticed by people searching for exactly what you offer. We use the
          latest techniques to get you ranking high on search engines. It’s like
          giving your website a megaphone, so it gets seen (and loved) by all
          the right people.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          PPC Campaigns
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Reaching your people without burning a hole in your wallet.Our PPC
          campaigns bring you high visibility on a budget. We create ads that
          catch eyes and convert clicks, driving traffic to your site and
          turning interest into action. Every click is an opportunity, and we
          make sure it counts. It’s like having a digital billboard, but one
          that’s totally targeted to your audience.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Social Media Vibes
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Scroll-stopping content that doesn’t try too hard. From engaging posts
          to eye-catching graphics, we make sure your social feeds are buzzing
          with content people love. Your brand deserves the spotlight, and we
          create strategies that turn followers into fans. Social media
          shouldn’t be a chore; it should be where your brand shines. Get ready
          to build a community of loyal fans who love sharing your vibe.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Email & Content Marketing
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Engaging, not annoying.Our email and content marketing make sure every
          message hits home with information, offers, and stories your audience
          actually cares about. We create newsletters, blogs, and campaigns that
          people look forward to, helping you build relationships that last.
          It’s about quality over quantity—delivering messages that feel
          personal and useful, keeping your brand top of mind in all the right
          ways.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Affiliate & CRO
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          We’re not just after clicks, we’re after clicks that matter. With our
          Affiliate and Conversion Rate Optimization (CRO) expertise, we make
          sure every visitor isn’t just window-shopping—they’re buying. Picture
          us as your site’s personal shopper, guiding users straight to the
          checkout with affiliate partnerships that bring the right crowd .From
          color-popping buttons to irresistible calls-to-action, we’re turning
          “maybe later” into “take my money!”
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />
    {/* <div>
      <div className="text-base font-bold absolute right-5  ">
        <img className="size-16" src={bigarrowup} alt="" />
        <button className="ml-2">Close</button>
      </div>
    </div> */}
  </div>
);

const text4 = (
  <div className="">
    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-96 font-semibold">
          Data Science
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Data Science: Making sense of all the numbers, minus the headache.We
          turn numbers into insights that guide your business forward, helping
          you understand customer behaviors and make strategic moves. Think of
          it as having a roadmap for success, showing exactly where you’re
          thriving and where to improve. We make data fun, accessible, and
          actionable, so you can make the smartest moves in your industry.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex    ">
      <div className="  ">
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          AI & Machine Learning
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Get ready to tap into the future.Our AI and machine learning solutions
          make your business smarter, automating tasks and offering insights
          that drive better decisions. From personalization to predictive
          analytics, we put AI to work for you, so you can focus on what you do
          best. Think of it as your digital assistant, always ready to make
          things easier, faster, and more insightful.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Blockchain
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Ready for next-level security? Blockchain isn’t just for crypto—it’s
          the future of secure, transparent transactions. We bring blockchain
          solutions that ensure data integrity and trust, whether it’s for
          transactions, records, or internal processes. Think of it as the
          digital vault for your business, providing transparency, security, and
          peace of mind in one high-tech package.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <hr className="bg-black h-[2px]" />
    {/* <div>
      <div className="text-base font-bold absolute right-5  ">
        <img className="size-16" src={bigarrowup} alt="" />
        <button className="ml-2">Close</button>
      </div>
    </div> */}
  </div>
);

const text5 = (
  <div className="">
    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-96 font-semibold">
          Cloud Migration:
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          No downtime, no drama—just smooth sailing. Our cloud migration
          services make it smooth and simple, handling every detail so you’re up
          and running fast. It’s like upgrading your business to the penthouse
          suite of technology. Say goodbye to clunky servers and hello to
          flexibility, security, and a tech setup that grows with you. Let us
          handle the heavy lifting so you can enjoy the view.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex    ">
      <div className="  ">
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Cloud Native Apps:
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-28 mr-10">
          Want apps that thrive in the cloud? Our cloud-native solutions are
          designed for scalability, speed, and reliability. It’s like having a
          tech sidekick that’s always ready for action, adapting as you grow.
          These aren’t just apps; they’re high-performance tools tailored to
          meet your business’s unique needs. Let’s create something that’s as
          dynamic and forward-thinking as your brand.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-28">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Operations & Management
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Secure, stable, no nonsense.Our operations and management keep
          everything running smoothly, secure, and optimized. Think of us as the
          behind-the-scenes crew that makes sure your tech is always at its
          best. With us managing the details, you can focus on leading your
          business forward, knowing your cloud is in capable hands.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          DevOps & DevSecOps
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Agile, secure, and always ready to evolve—that’s our approach to
          DevOps and DevSecOps. We create workflows that let your team deploy
          updates quickly without sacrificing security. It’s like having a tech
          toolkit that’s always improving, ensuring your business is flexible,
          fast, and always a step ahead. With us, you get security and speed in
          one unbeatable package
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    <div className="flex  gap-20">
      <div>
        <h1 className="text-4xl mt-12 ml-12 w-[460px] font-semibold">
          Top-Tier Security
        </h1>
      </div>
      <div className="h-60">
        <h1 className="pt-10 ml-8">
          Because “relax” should be the only thing on your mind.ur cloud
          transformation services include top-tier security measures that don’t
          just protect your data—they keep it under lock, key, and digital guard
          24/7. Think of it as having an elite security team for your cloud,
          actively monitoring and defending against threats.So, while you’re
          scaling and innovating, we’re making sure your data remains private,
          compliant, and resilient—keeping both you and your customers
          confident.
        </h1>
        <button className=" border text-white bg-blue-950 p-2 px-5 rounded-lg mt-6 ml-8">
          <Link to="/contact"> Book Service</Link>
        </button>
      </div>
    </div>
    <hr className="bg-black h-[2px]" />

    {/* <div>
      <div className="text-base font-bold absolute right-5  ">
        <img className="size-16" src={bigarrowup} alt="" />
        <button className="ml-2">Close</button>
      </div>
    </div> */}
  </div>
);

const items = [
  {
    key: "1",
    label: (
      <div className="  flex lg:text-6xl text-2xl  relative font-semibold h-96 ">
        <h1 className="pt-72 absolute "> Digital Enterprise</h1>
        <div className="text-base font-bold absolute bottom-7 right-5 ">
          <button className="-ml-2">Tap for more</button>
          <img className="size-16" src={bigarrow} alt="" />
        </div>
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className=" flex lg:text-6xl text-2xl relative font-semibold h-96 ">
        <h1 className="pt-72"> Digital Experience</h1>
        <div className="text-base font-bold absolute bottom-7 right-5 ">
          <button className="-ml-2">Tap for more</button>
          <img className="size-16" src={bigarrow} alt="" />
        </div>
      </div>
    ),
    children: <p>{text2}</p>,
  },
  {
    key: "3",
    label: (
      <div className=" flex lg:text-6xl text-2xl relative font-semibold h-96 ">
        <h1 className="pt-72"> Digital Marketing</h1>
        <div className="text-base font-bold absolute bottom-7 right-5 ">
          <button className="-ml-2">Tap for more</button>
          <img className="size-16" src={bigarrow} alt="" />
        </div>
      </div>
    ),
    children: <p>{text3}</p>,
  },
  {
    key: "4",
    label: (
      <div className=" flex lg:text-6xl text-2xl relative font-semibold h-96 ">
        <h1 className="pt-72"> Digital Innovation</h1>
        <div className="text-base font-bold absolute bottom-7 right-5 ">
          <button className="-ml-2">Tap for more</button>
          <img className="size-16" src={bigarrow} alt="" />
        </div>
      </div>
    ),
    children: <p>{text4}</p>,
  },
  {
    key: "5",
    label: (
      <div className=" flex lg:text-6xl text-2xl relative font-semibold h-96 ">
        <h1 className="pt-72"> Cloud Transformation</h1>
        <div className="text-base font-bold absolute bottom-7 right-5 ">
          <button className="-ml-2">Tap for more</button>
          <img className="size-16" src={bigarrow} alt="" />
        </div>
      </div>
    ),
    children: <p>{text5}</p>,
  },
];

const ServicePage = () => {
  return (
    <>
      <Header2 />

      <hr />
      <main className=" lg:flex grid grid-cols-1  bg-[#1c1c1e] w-full h-[60vh]">
        <div>
          <h1 className="text-white lg:text-6xl text-2xl lg:mt-32 lg:ml-20 ml-36 font-bold">
            Our Company <br />
            <h1 className="mt-4">Services!</h1>
          </h1>
        </div>

        <div>
          <div className="bg-slate-200 lg:mx-0 mx-10 relative h-8 w-12 rounded-full lg:mt-48  lg:ml-44 ml-40 ">
            <div className=" absolute top-[10px] left-[13px] h-3 w-5 rounded-full bg-white">
              <div className="absolute top-[4.7px] left-[8px] w-[4px] h-[2.9px] bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="  h-full w-96">
          <div className="   lg:ml-24  lg:-mt-10 -mt-10 h-full lg:font-light font-thin lg:text-[18px] text-[10px] w-[20rem]">
            <h1 className="text-white fontTest lg:pt-40 lg:mx-0 lg:ml-0 ml-20 ">
              " Welcome to AV Technosys. We know the feeling—you need tech that
              just works, design that wows, and marketing that doesn’t feel like
              shouting into the void. We’re here to make your digital life easy,
              fun, and seriously effective. Let’s dive in. "
            </h1>
          </div>
        </div>
      </main>
      <div>
        <Collapse accordion items={items} />
      </div>

      <div className="bg-[#1c1c1e] w-full">
        <div className="fontTest text-white pt-20 lg:ml-20 ml-5">
          <h1 className="lg:text-[4rem] text-2xl  font-bold">Industries </h1>{" "}
          <br />
          <p className="font-light ">
            Discover Our Diverse Industry Partnerships
          </p>
        </div>

        <div className=" mt-10 lg:ml-20 lg: ml-10 mr-20 grid grid-cols-1 lg:grid  gap-5 lg:grid-cols-3  lg:gap-20  justify-evenly">
          <div className="bg-white text-3xl font-bold h-56 w-80 rounded-xl border">
            <img
              className="rounded-t-xl"
              src="https://unsplash.it/800/400/?random"
              alt=""
            />
            <h1 className=" ml-14 mt-3 ">Fitness solution </h1>
          </div>

          <div className="bg-white text-3xl font-bold h-56 w-80 rounded-xl border">
            <img
              className="rounded-t-xl"
              src="https://unsplash.it/800/400/?rando"
              alt=""
            />
            <h1 className=" ml-14 mt-3 ">Entertainment </h1>
          </div>

          <div className="bg-white text-3xl font-bold h-56 w-80 rounded-xl border">
            <img
              className="rounded-t-xl"
              src="https://unsplash.it/800/400/?randm"
              alt=""
            />
            <h1 className=" ml-2 mt-3 ">Banking and Finance </h1>
          </div>

          <div className="bg-white text-3xl font-bold h-56 w-80 rounded-xl border">
            <img
              className="rounded-t-xl"
              src="https://unsplash.it/800/400/?ranom"
              alt=""
            />
            <h1 className=" ml-24 mt-3 ">Healthcare </h1>
          </div>

          <div className="bg-white text-3xl font-bold h-56 w-80 rounded-xl border">
            <img
              className="rounded-t-xl"
              src="https://unsplash.it/800/400/?radom"
              alt=""
            />
            <h1 className=" ml-24 mt-3 ">Logistic </h1>
          </div>

          <div className="bg-white text-3xl font-bold h-56 w-80 rounded-xl border">
            <img
              className="rounded-t-xl"
              src="https://unsplash.it/800/400/?rndom"
              alt=""
            />
            <h1 className=" ml-24 mt-3 ">Real Estate </h1>
          </div>
        </div>
      </div>
      <Form1 />
      <Hero />
      <TestCard />
      <Footer1 />
    </>
  );
};

export default ServicePage;
