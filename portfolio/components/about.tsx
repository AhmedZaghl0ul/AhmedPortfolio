export default function About() {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I am an aspiring Artificial Intelligence engineer with a strong
          passion for building intelligent systems that solve real-world
          problems. I enjoy working on projects involving{" "}
          <span className="font-medium text-slate-200">Machine Learning</span>,{" "}
          <span className="font-medium text-slate-200">Deep Learning</span>,{" "}
          <span className="font-medium text-slate-200">Computer Vision</span>,
          and <span className="font-medium text-slate-200">Data Analysis</span>.
        </p>
        <p className="mb-4">
          My current toolkit includes{" "}
          <span className="font-medium text-slate-200">Python</span>,{" "}
          <span className="font-medium text-slate-200">TensorFlow</span>,{" "}
          <span className="font-medium text-slate-200">OpenCV</span>. I&apos;m
          particularly interested in deploying models that work reliably in
          real-world conditions — not just in notebooks.
        </p>
        <p>
          When I&apos;m not training models, I&apos;m exploring the latest
          research in computer vision and looking for open-source projects to
          contribute to.
        </p>
      </div>
    </>
  );
}
