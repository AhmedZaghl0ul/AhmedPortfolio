import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Real Time Drowsiness Detection",
      description:
        "A real-time computer vision system that detects driver drowsiness by analyzing eye behavior using facial landmarks and deep learning.",
      image: "\Drowsiness.jpg",
      link: "https://github.com/AhmedZaghl0ul/Real_time_Drowsiness_Detection",
      tags: [
        "TensorFlow",
        "Keras",
        "MediaPipe",
        "OpenCV",
        "Scikit Learn",
        "Python",
      ],
    },
    {
      title: "Food 101 Classification",
      description:
        "A deep learning image classification model trained on the Food-101 dataset to identify 101 food categories. Achieved high accuracy using transfer learning with fine-tuned convolutional neural networks.",
      image: "/food.jfif",
      link: "https://github.com/AhmedZaghl0ul/Machine-Learning/blob/main/Food_101_(Classification).ipynb",
      tags: [
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Scikit Learn",
        "Pandas",
        "Python",
      ],
    },
    {
      title: "Sign Language Detection",
      description:
        "A project on Sign Language Detection for only three gestures: (Hello, Thanks, I love you).\n It used several techniques such as LSTM and others.\n The results showed an 88% accuracy rate in testing.",
      image: "\Sign.jpg",
      link: "https://www.linkedin.com/posts/ahmedalaazaghloul_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85-%D8%B9%D9%84%D9%8A%D9%83%D9%85-%D8%AD%D8%A7%D8%A8%D8%A8-%D8%A7%D8%B4%D8%A7%D8%B1%D9%83-%D9%87%D9%86%D8%A7-%D8%A7%D8%AE%D8%B1-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%B9%D9%85%D9%84%D8%AA%D9%87-ugcPost-7405462881107877889-w4p_",
      tags: [
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Scikit Learn",
        "Pandas",
        "Python",
        "Mediapipe",
      ],
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100vw)] bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}{" "}
                        <span className="inline-block">
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
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.tags.map((tag) => (
                      <li key={tag} className="mr-1.5 mt-2">
                        <Badge
                          variant="secondary"
                          className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-none rounded-full px-3 py-1 text-xs font-medium leading-5 font-mono tracking-tight"
                        >
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={200}
                  height={48}
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight font-semibold text-slate-200 group"
            aria-label="View All Projects on GitHub"
            href="https://github.com/AhmedZaghl0ul"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View All Projects on GitHub
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
