function ExperienceDetails() {
  const detailHeaders = ["Description", "Skills and Tools", "Responsibilities"];
  return (
    <>
      <div className="grid grid-flow-col border-t-2">
        {detailHeaders.map((detailHeader) => (
          <div
            key={detailHeader}
            className="p-2 text-xs text-slate-400 tracking-wider text-center hover:bg-sky-100"
          >
            {detailHeader}
          </div>
        ))}
      </div>
    </>
  );
}

function ExperienceEntry(props) {
  const { position, organization, period } = props;
  return (
    <>
      <div className="relative space-y-2">
        <h4 className="text-2xl">{position}</h4>
        <p>{organization}</p>
        <p className="md:absolute md:inset-y-0 md:right-0">{period}</p>
        <ExperienceDetails />
      </div>
    </>
  );
}

export default function Experience() {
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
          />
          <ExperienceEntry
            position="Project Engineer"
            organization="Wipro Limited"
            period="July 2021 - April 2022"
          />
        </div>
      </div>
    </>
  );
}
