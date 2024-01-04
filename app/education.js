export default function Education() {
  return (
    <>
      <div className="min-h-dvh">
        <div className="mx-auto max-w-4xl lg:max-w-6xl py-24 px-8 space-y-4">
          <h2 className="text-4xl pb-2 border-b-2 border-b-sky-600">
            Education
          </h2>
          <div className="md:flex">
            <div className="min-w-80 md:w-1/2 p-4 border-b-2 md:border-b-0 md:border-r-2 hover:bg-sky-50">
              <div>
                <h4>National Institute of Technology</h4>
                <p className="italic font-light">Silchar, Assam, India</p>
                <p>Bachelor of Technology</p>
                <p>Electronics and Communication</p>
                <p>GPA 7.70</p>
              </div>
            </div>
            <div className="min-w-80 md:w-1/2 p-4 hover:bg-sky-50">
              <h4>Delhi Public School</h4>
              <p className="italic font-light">R. K. Puram, New Delhi, India</p>
              <p>High school, Grade XII</p>
              <p>Science with Mathematics</p>
              <p>95.2%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
