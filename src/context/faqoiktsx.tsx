import { useState } from "react";
import { useFAQ } from "../api/use";

export default function FAQone() {
  const { faq, loading, error } = useFAQ();
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!faq || faq.length === 0) return <p>No frequently Asked Questions</p>;

  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {faq.map(({ content, id }, index) => (
            <div
              key={id}
              className="rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onClick={() => toggle(index)}
                aria-expanded={selected === index}
                aria-controls={`faq-answer-${index}`}
              >
                {content.questions}
                <span className="text-xl">
                  {selected === index ? "−" : "+"}
                </span>
              </button>
              {selected === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-gray-600"
                >
                  {content.answers}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
