// "use client";

// import { useState } from "react";

export default function About() {
  // const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    // setIsOpen(!isOpen);
    // console.log(isOpen);
  }

  return (
    <>
      <div className="min-h-dvh">
        <div className="mx-auto max-w-4xl py-24 px-8 space-y-4">
          <h2 className="text-4xl pb-2 border-b-2 border-b-sky-600">About</h2>
          <p>
            I am a self-motivated intellectual who is passionate about his work.
            I'm receptive and it is easy for me to absorb novelty. Being a
            multipotentialite, I love expanding my knowledge while developing my
            existing skills. I have a sharp analytical mind and logical thinking
            ability is one of my core strengths. I enjoy challenges as they help
            me to push myself to perform better.
          </p>
          <p>
            I currently work as a Cloud DataOps Engineer, using tools and
            technologies like AWS, Docker, Kubernetes, Terraform, Airflow,
            Python, SQL, Jenkins, and Bash. I am acquainted with the basics of
            DevOps orchestration and deployment tools like Ansible.
            Additionally, I have professional experience working with web
            development technologies such as Java, Spring, Hybris, ReactJS, and
            Tailwind. I've also used Python and libraries like Pandas,
            Tensorflow, Keras, Scikit-learn, Matplotlib, and Seaborn working on
            personal projects in data science, machine learning, and deep
            learning.
          </p>
          <p>
            My primary interest lies in the domains of data visualization, data
            engineering, data science, big data analytics, machine learning, and
            deep learning. In a nutshell, I'm fascinated by data and mostly
            anything to do with it that may involve statistical abilities. I
            aspire to work as a Data Scientist for a company that takes
            data-driven decisions to innovate and continuously improve
            self-efficacy.
          </p>
          <p>
            I am an avid reader and I write occasionally as well, usually short
            poems. Music is an essential tool for me so I curate my playlists
            carefully. I enjoy being a humorist, I love conversations and I like
            helping people out. Feel free to reach out to me. Cheers!
          </p>
        </div>
      </div>
      {/* <div className="flex h-dvh w-full justify-center items-center" onClick={handleClick}>
        <div className={`${isOpen ? "text-2xl" : "text-md"} text-center align-middle`}>
          About
        </div>
      </div> */}
    </>
  );
}
