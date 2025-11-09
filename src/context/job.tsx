export default function JobsVacancy() {
  const jobs = [
    {
      title: "Mechanical Engineer",
      company: "ABC Overseas Pvt. Ltd.",
      location: "Dubai, UAE",
      salary: "NPR 85,000 / month",
      type: "Full Time",
    },
    {
      title: "Electrician",
      company: "Sunera Overseas HRC",
      location: "Doha, Qatar",
      salary: "NPR 70,000 / month",
      type: "Contract",
    },
    {
      title: "Waiter / Steward",
      company: "Paradise Recruitment",
      location: "Kuwait City, Kuwait",
      salary: "NPR 60,000 / month",
      type: "Full Time",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Latest Job Vacancies
          </h2>
          <p className="text-gray-600">
            Explore new overseas opportunities and apply for your dream job.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src="https://suneranepal.com.np/public//storage/files/1/SUNERA%20NEPAL%20INCORPORATED%20PVT.%20LTD.%201Ashar%202082%20copy-1.jpg" // or job.logo from API
                alt={job.company}
                className="h-[225px] w-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {job.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{job.company}</p>

              <ul className="text-gray-600 text-sm mb-4 space-y-1">
                <li>
                  <strong>Location:</strong> {job.location}
                </li>
                <li>
                  <strong>Salary:</strong> {job.salary}
                </li>
                <li>
                  <strong>Type:</strong> {job.type}
                </li>
              </ul>

              <button className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
