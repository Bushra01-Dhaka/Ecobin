import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

const faqs = [
  {
    question: "What is Smart Waste Management System?",
    answer:
      "A Smart Waste Management System is a technology-driven solution that utilizes sensors, IoT, and data analytics to optimize the collection and management of waste. It helps improve efficiency, reduce costs, and promote sustainable waste practices.",
  },
  {
    question: "Which service plans does EcoBin provide?",
    answer:
      "EcoBin offers both monthly and yearly service plans tailored to meet your needs. We provide waste disposal solutions for residential, industrial, commercial, and medical & pharmaceutical sectors—ensuring reliable and eco-friendly waste management for every type of user.",
  },
  {
    question: "How does EcoBin handle Construction & Demolition waste?",
    answer: `Building projects generate a large amount of waste, including debris, garbage, and rubble. EcoBin offers an efficient collection, separation, and recycling service to manage your construction and demolition waste responsibly.

Regular Plan: EcoBin will collect your waste, and you’ll be charged for the Construction & Demolition waste service along with a transportation fee if you request instant service within 2 days.

Mutual Benefit Plan: Book in advance—at least 15 days before your demolition or construction work. In this plan, you only pay the workers’ fee and 50% of the service charge. No transportation cost is applied under this plan.`,
  },
  {
    question: "How does EcoBin handle Land filling services?",
    answer: `EcoBin offers safe and eco-friendly land filling solutions to manage your waste responsibly.

Instant Landfilling Service: If you need landfilling within 2 days, you’ll need to pay the landfilling service charge along with the material cost (for soil, rubbish, etc.).

Mutual Benefit Plan: Book in advance—at least 15 days before your planned work or demolition. With this plan, you only pay the workers’ charge and 50% of the service charge. No extra cost for landfilling materials.`,
  },
  {
    question: "How secure is the data collected by the system?",
    answer:
      "Data security is a top priority. The system employs encryption protocols and follows industry best practices to ensure the confidentiality and integrity of the collected data. Access to the system is restricted to authorized personnel only.",
  },
  {
    question:
      "Is the system scalable for different-sized municipalities or businesses?",
    answer:
      "The system may integrate automated sorting technologies to enhance recycling efficiency. These technologies use advanced sorting mechanisms to separate different types of waste, contributing to sustainable waste management practices.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="py-4 text-[#059212] text-lg font-bold">
          frequently asked questions
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl border-[#059212]"
          >
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <p className="text-xl text-slate-800">{faq.question}</p>
              {openIndex === index ? (
                <FiMinus className="text-2xl font-light" />
              ) : (
                <HiOutlinePlus className="text-2xl font-light" />
              )}
            </div>

            {/* Animated answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="whitespace-pre-line">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
