import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      date: "Nov 2025 — Present",
      title: "Internship - Machine Learning Specialist",
      company: "Digital Egypt Pioneers (DEPI)",
      link: "https://depi.gov.eg/content/home",
      description:
        "In this training, I trained on how to create models related to Machine Learning,, Deep Learning, Computer Vision, NLP, and others",
      skills: [
        "Python",
        "Matplotlib",
        "Seaborn",
        "Numpy",
        "Pandas",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Mediapipe",
        "Scikit-learn",
      ],
    },
    {
      date: "Aug 2025 — Oct 2025",
      title: "Internship - Machine Learning",
      company: "National Telecommunication Institute (NTI)",
      link: "https://www.nti.sci.eg/",
      description:
        "I was trained on how to build classic machine learning models, then we moved on to the Deep Learning part, and the Transfer Learning.",
      skills: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Scikit-learn",
        "Pandas",
        "Numpy",
      ],
    },
    {
      date: "Apr 2024 — Dec 2024",
      title: "Internship - Data Analyst Specialist",
      company: "Digital Egypt Pioneers (DEPI)",
      link: "https://depi.gov.eg/content/home",
      description:
        "Completed a practical training program focused on data cleaning, analysis, and visualization using tools like Python, SQL, and Power BI.",
      skills: [
        "Python",
        "SQL",
        "Power BI",
        "Tableau",
        "Excel",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      date: "Jul 2023 — Sep 2023",
      title: "Internship - Python Training",
      company: "Thebes Academy",
      link: "https://www.thebes.edu.eg/",
      description:
        "I learned the Python language, and the course focused on it, in addition to some important libraries in the language.",
      skills: ["Python", "Pandas", "Numpy", "Matplotlib"],
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((job, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={job.date}
                >
                  {job.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${job.title} at ${job.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {job.title} ·{" "}
                          <span className="inline-block">
                            {job.company}{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {job.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <Badge
                          variant="secondary"
                          className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-none rounded-full px-3 py-1 text-xs font-medium leading-5 font-mono tracking-tight"
                        >
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Resume"
            href="https://drive.google.com/file/d/1NOmGol4pyIqAQMTgpK7716Dw8H-AbfYz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Resume
              </span>
              <span className="whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
