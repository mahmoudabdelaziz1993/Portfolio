import { GetStaticProps } from "next";
import { Resume } from "../../Types";
import { fetchResume } from "./api/resume";
type Props = {
  Resume: Resume;
};
export default function IndexPage({ Resume }: Props) {
  const { basics, education, work, skills } = Resume;
  const { name, label, summary } = basics;
  const { studyType, institution, area } = education["0"];

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col gap-4 justify-center  w-full h-full p-4">
        <h3 className="Text-4xl font-bold"> Hi I'm {name}</h3>
        <p> {label}</p>
        <h3 className="Text-3xl font-semibold"> summary</h3>
        <p>{summary}</p>
        <h3 className="Text-3xl font-semibold"> education</h3>
        <p>{studyType} Degree</p>
        <p>Of {area}</p>
        <p>From {institution}</p>
        <h3 className="Text-3xl font-semibold">work </h3>
        <ul className="menu bg-base-300 gap-4 p-4 rounded-xl ">
          {work.map(({ name, position, highlights, startDate, endDate }, i) => (
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
              key={name}
            >
              <div className="collapse-title text-xl font-medium">
                {position} @ {name}
                <p className="text-sm font-light">
                  {" "}
                  {startDate} - {endDate}{" "}
                </p>
              </div>
              <div className="collapse-content bg-base-300 ">
                <ul className="menu gap-2 mt-4">
                  {highlights.map((item, i) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
        <h3 className="Text-3xl font-semibold">skills </h3>
        <div className="gird">
          {skills.map(({ name, keywords, level }, i) => (
            <div key={name}>
              {name}
              {"  "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const Resume: Resume = await fetchResume();
  return { props: { Resume } };
};
