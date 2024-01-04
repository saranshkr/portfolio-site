"use client";

import { useState } from "react";

// import { Disclosure } from "@headlessui/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function TabsCustomAnimation() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },

    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default function Test() {
  return (
    <>
      <Experience />
    </>
  );
}

function ExperienceDetails({ expKey }) {
  const [activeTab, setActiveTab] = useState("description");
  const srid = [
    {
      name: "description",
      label: "Description",
      value:
        "I currently work as a DataOps Engineer in the Cloud Department at Samsung R&D Institute Delhi",
    },
    {
      name: "skills",
      label: "Skills",
      value: "AWS, Kubernetes, Python",
    },
    {
      name: "summary",
      label: "Summary",
      value: "EKS migration",
    },
  ];
  // const detailHeaders = ["Description", "Skills and Tools", "Responsibilities"];
  return (
    <>
      {/* <div className="grid grid-flow-col border-t-2">
        {detailHeaders.map((detailHeader) => (
          <button
            key={detailHeader}
            className="p-2 text-xs text-slate-400 tracking-wider text-center hover:bg-sky-50"
          >
            {detailHeader}
          </button>
        ))}
      </div> */}
      <Tabs id="custom-animation" value={activeTab}>
        <TabsHeader
          className="p-0"
          indicatorProps={{ className: "bg-light-blue-200" }}
        >
          {srid.map(({ name, label }) => (
            <Tab
              key={name}
              value={name}
              onClick={() => setActiveTab(name)}
              className={activeTab === name ? "" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {srid.map(({ name, value }) => (
            <TabPanel className="border-2" key={name} value={name}>
              {value}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}

function ExperienceEntry(props) {
  const { position, organization, period, expKey } = props;
  // console.log(props)
  // console.log(`key: ${expKey}`);
  return (
    <>
      <div className="relative space-y-2">
        <h4 className="text-2xl">{position}</h4>
        <p>{organization}</p>
        <p className="md:absolute md:inset-y-0 md:right-0">{period}</p>
        <ExperienceDetails expKey={expKey} />
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <div className="min-h-dvh">
        <div className="mx-auto max-w-4xl py-24 px-8 space-y-16">
          <h2 className="text-4xl pb-2 border-b-2 border-b-sky-600">
            Experience
          </h2>
          <ExperienceEntry
            position="Cloud DataOps Engineer"
            organization="Samsung India Electronics Pvt Ltd"
            period="April 2022 - present"
            expKey="srid"
          />
        </div>
      </div>
    </>
  );
}
