import React, {
  useState,
  useEffect,
} from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url =
  "https://course-api.netlify.app/api/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(
    true
  );
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchjJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setJobs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchjJobs();
  }, []);
  if (isLoading) {
    return (
      <div className='title'>
        <h2>Loading...</h2>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[
    value
  ];
  return (
    <main>
      <section className='tabs-section'>
        <div className='title'>
          <h2>Tabs</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                type='button'
                className={
                  index === value
                    ? "active"
                    : "btn"
                }
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className='jobs'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='date'>{dates}</p>
          {duties.map((item, index) => {
            return (
              <div
                key={index}
                className='job-desc'
              >
                <FaAngleDoubleRight className='icon' />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <button className='btn-end' type='button'>
          More info
        </button>
      </section>
    </main>
  );
}

export default App;
