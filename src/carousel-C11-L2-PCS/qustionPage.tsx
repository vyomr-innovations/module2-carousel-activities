import React from "react";

const QustionPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col gap-8 justify-start items-center p-5">
      <div>
        <h3 className="text-black text-3xl font-bold  text-center">
          {" "}
          My AI Invention!
        </h3>
        <p className="text-black text-lg">{`Now, let’s get creative! Imagine you are an AI inventor. Design an AI tool that solves a real problem.`}</p>
      </div>

      <div className="py-10  min-w-[800px] flex flex-col gap-8 items-center border rounded-lg shadow-black shadow-md">
        <div className="flex flex-col gap-3">
            <h3 className="text-black text-xl"><strong>Step 1:</strong> Name Your AI</h3>
            <label htmlFor="first" className="text-black text-xl "><strong>Question :</strong> What is it called?</label>
            <textarea className="border-black border rounded-lg w-[650px] min-h-[60px] p-5 text-black text-lg  placeholder:text-lg"  placeholder="Answer " id="first" />
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-black text-xl"><strong>Step 2:</strong>What Problem Does It Solve?
            </h3>
            <label htmlFor="first" className="text-black text-xl "><strong>Question :</strong> Why is this a problem? Who needs help?</label>
            <textarea className="border-black border rounded-lg w-[650px] min-h-[60px] p-5 text-black text-lg  placeholder:text-lg"  placeholder="Answer " id="first" />
        </div>

        <div className="flex flex-col gap-3">
            <h3 className="text-black text-xl"><strong>Step 3:</strong>How Does It Work?

            </h3>
            <label htmlFor="first" className="text-black text-xl "><strong>Question :</strong>  Describe how your AI invention would function.
            </label>
            <textarea className="border-black border rounded-lg w-[650px] min-h-[60px] p-5 text-black text-lg  placeholder:text-lg"  placeholder="Answer " id="first" />
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-black text-xl"><strong>Step 4:</strong>Who Would Use It?

            </h3>
            <label htmlFor="first" className="text-black text-xl "><strong>Question :</strong>   Who would benefit the most from this AI?
            </label>
            <textarea className="border-black border rounded-lg w-[650px] min-h-[60px] p-5 text-black text-lg  placeholder:text-lg"  placeholder="Answer " id="first" />
        </div>

        <div className="flex flex-col gap-3">
            <h3 className="text-black text-xl"><strong>Step 5:</strong> Design Your AI!

            </h3>
            <label htmlFor="first" className="text-black text-xl "><strong>Question :</strong>   Draw your invention on paper or a computer, and put here!

            </label>
            <textarea className="border-black border rounded-lg w-[650px] min-h-[60px] p-5 text-black text-lg  placeholder:text-lg"  placeholder="Answer " id="first" />
        </div>
      </div>
    </div>
  );
};

export default QustionPage;
