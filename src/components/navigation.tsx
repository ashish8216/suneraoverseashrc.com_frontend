export const Navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    children: [
      { name: "Who we are", path: "/who-we-are" },
      { name: "Principles of our work", path: "/principles-of-our-work" },
      { name: "Why Work with Us", path: "/why-work-with-us" },
      { name: "OUR VISION", path: "/our-vision" },
      { name: "OUR MISSION", path: "/our-mission" },
      { name: "Our Core Values", path: "/our-core-values" },
      { name: "Quality Policy", path: "/quality-policy" },
    ],
  },
  {
    name: "WHY US?",
    children: [
      { name: "Our Strength", path: "/our-strength" },
      {
        name: "Benefits of Using Sunera Overseas (For Employer)",
        path: "/benefits-of-using-sunera-overseas-for-employer",
      },
      {
        name: "Benefits of Using Sunera Overseas (For Job Seeker)",
        path: "/benefits-of-using-sunera-overseas-for-job-seeker",
      },
      { name: "FAQs", path: "/faqs" },
    ],
  },
  { name: "Services", path: "/services" },
  { name: "Job Vacancies", path: "/job" },
  { name: "Contact", path: "/contact" },
];

export const NavigationFlooder = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/shop" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];
