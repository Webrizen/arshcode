export async function GET() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Web App (FashionCodes)",
      description: "FashionCodes is a cutting-edge e-commerce web application that redefines the online shopping experience. With a sleek design and user-friendly interface, it offers a wide range of fashion products. The platform is built using the MERN stack, providing a seamless and secure shopping environment.",
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      completed: true,
      tags: ['E-commerce', 'MERN Stack', 'User Experience', 'Secure Transactions']
    },
    {
      id: 2,
      title: "AstroAI",
      description: "Unlock the secrets of your spiritual journey with AstroAI, a unique platform powered by AI. Receive personalized guidance based on sacred texts and ancient wisdom. AstroAI allows users to ask questions and seek enlightenment, making spirituality accessible in the digital age.",
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      completed: false,
      tags: ['Artificial Intelligence', 'Spirituality', 'Personalized Guidance']
    },
    {
      id: 3,
      title: "Sumit Ahluwalia & Associates Website",
      description: "Developed the official website for Sumit Ahluwalia & Associates, a leading Chartered Accountancy firm in Delhi. The website showcases the firm's expertise, services, and client testimonials. It reflects professionalism and establishes a strong online presence for the firm.",
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      completed: true,
      tags: ['Web Development', 'Corporate Website', 'Professional Services']
    },
    {
      id: 4,
      title: "CRPF HCM Typing Test Platform",
      description: "The CRPF HCM Typing Test Platform is a specialized web application designed to assist users in practicing typing skills for CRPF HCM typing exams. It offers a unique approach by allowing practice on printed material, enhancing the preparation process for CRPF applicants.",
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      completed: true,
      tags: ['Web Application', 'Typing Practice', 'Exam Preparation']
    },
    {
      id: 5,
      title: "Aapda: Integrated Flood Management System for Kaziranga",
      description: "Aapda is an integrated flood management system developed for Kaziranga. Leveraging advanced technologies, it provides real-time flood monitoring, early warning systems, and facilitates efficient disaster response. Aapda plays a crucial role in safeguarding the biodiversity and communities in the Kaziranga region.",
      completed: false,
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      tags: ['Flood Management', 'Disaster Response', 'Biodiversity Conservation']
    },
    {
      id: 6,
      title: "PresiSumm",
      description: "Unlock the power of concise, AI-generated summaries for your presentations with PresiSumm. This innovative platform simplifies the presentation creation process, allowing users to store, present, and summarize information effortlessly. Say goodbye to lengthy presentations and hello to impactful summaries.",
      completed: false,
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      tags: ['Artificial Intelligence', 'Presentation Summaries', 'Productivity']
    },
    {
      id: 7,
      title: "Locknote",
      description: "Locknote is a secure and user-friendly platform for sharing self-destructing notes. Built with Next.js and Firebase, Locknote ensures that sensitive information remains confidential. As the founder of Locknote, I'm dedicated to providing a seamless and secure note-sharing experience.",
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      completed: true,
      tags: ['Next.js', 'Firebase', 'Security', 'Note Sharing']
    },
    {
      id: 8,
      title: "Healthcare Biodiversity Blog",
      description: "Contributed to the healthcare biodiversity blog, sharing insights and information about the intersection of healthcare and biodiversity. The blog serves as a knowledge hub for exploring the impact of biodiversity on human health and the healthcare industry.",
      completed: true,
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      tags: ['Biodiversity', 'Healthcare', 'Blogging']
    },
    {
      id: 9,
      title: "Vijetha Software's Private Limited Website",
      description: "During my tenure as CTO at Vijetha Software's Private Limited, I played a key role in developing the company's official website. The website highlights the company's software development expertise, showcases projects, and provides a platform for potential clients to connect with the team.",
      completed: true,
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      tags: ['Web Development', 'Corporate Website', 'Software Development']
    },
    {
      id: 10,
      title: "ScreenDesk",
      description: "ScreenDesk is a web-based screen recorder designed for simplicity and efficiency. Users can easily capture their screens, making it a valuable tool for creating tutorials, presentations, and sharing information. The platform provides a seamless recording experience with a user-friendly interface.",
      completed: false,
      link: "https://github.com/Webrizen?page=1&tab=repositories",
      tags: ['Web Application', 'Screen Recording', 'User Interface']
    }
  ];

  return Response.json({ projects });
}