import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import YouTubeCount from '@/components/system/YouTubeCount';
import InstagramFollowers from '@/components/system/InstagramFollowers';

export default function Home() {
  function ChevronUpIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  }
  return (
    <main className="flex min-h-screen flex-col gap-5 p-3 w-full">
      <h1 className="md:text-2xl font-bold">Hey There, I'm Arshcode 👋</h1>
      <p className="text-gray-700 mb-6">
        Hello there! I am Arshahdul Ahmed, commonly known as <span className='p-1 rounded-md bg-slate-200 mr-1'>Arshcode</span> in the tech world. I am a passionate and seasoned full-stack website and mobile application developer, specializing in the MERN stack, Next.js, Postgres, SQL, React Native, Python, and Tailwind CSS.
        With a diverse skill set, I seamlessly navigate through the intricacies of web and mobile development, always staying on the cutting edge of technology.
      </p>

      <p className="text-gray-700 mb-6">
        As the Founder and CTO of <span className='p-1 rounded-md bg-slate-200 mr-1'>Locknotes.in</span>, I lead a dynamic team in creating innovative solutions and pushing the boundaries of what's possible in the digital realm. Our commitment to excellence drives us to explore and implement a wide array of technologies, from PHP and Laravel to WordPress, Sanity.io, Firebase, Supabase, AWS, Render, Hostinger, and more.
      </p>
      <div className="w-full mx-auto">
        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img alt="gallery" className="w-full object-cover h-full object-center block border border-slate-200 rounded-lg absolute inset-0" src="/Arshcode-banner.png" />
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img alt="gallery" className="w-full object-cover h-full object-center block border border-slate-200 rounded-lg absolute inset-0" src="https://placehold.co/600x400?text=No+memories" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img alt="gallery" className="w-full object-cover h-full object-center block border border-slate-200 rounded-lg absolute inset-0" src="https://placehold.co/600x400?text=No+memories" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        My interest in AI and ML adds an exciting dimension to my work, enabling me to infuse intelligent features into applications. I have hands-on experience with diverse tools and frameworks, including GraphQL, Razorpay, PayPal, Stripe, React Native, Flutter, Spring Boot, GSAP, and more.
      </p>

      <p className="text-gray-700 mb-6">
        Beyond coding, I am well-versed in UI/UX design principles, ensuring that the applications I develop not only function flawlessly but also provide a delightful user experience. My proficiency extends to domain and hosting management, Figma for design collaboration, and Docker for seamless deployment.
      </p>
      <div className="justify-center items-center p-0 flex space-x-4 w-full mb-6">
        <a href='https://www.youtube.com/channel/UCntvVtj1IihyJSgI7nKyhyw' className="bg-slate-100 hover:bg-slate-200 rounded-lg w-full flex items-center p-4 justify-between">
          <div className='flex gap-4 items-center'>
          <Avatar>
            <AvatarImage src="https://yt3.googleusercontent.com/Xxvlg3ghyQcyJJ2JloHtgqqFkFwMF7KPnV4eQaEVuR-NXjbIystj75Qu-Bk31eP0rVxKhWAMqfc=s176-c-k-c0x00ffffff-no-rj" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-slate-700 font-semibold">@Arshahdul_Ahmed</span>
            <span className="text-slate-500"><YouTubeCount/> subscribers</span>
          </div>
          </div>
          <ChevronUpIcon className="text-slate-700" />
        </a>
        <a href='https://www.instagram.com/Arshahdul_ahmed/' className="bg-slate-100 hover:bg-slate-200 rounded-lg w-full flex items-center p-4 justify-between">
          <div className='flex gap-4 items-center'>
          <Avatar>
            <AvatarImage src="https://yt3.googleusercontent.com/Xxvlg3ghyQcyJJ2JloHtgqqFkFwMF7KPnV4eQaEVuR-NXjbIystj75Qu-Bk31eP0rVxKhWAMqfc=s176-c-k-c0x00ffffff-no-rj" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-slate-700 font-semibold">@Arshahdul_Ahmed</span>
            <span className="text-slate-500">1,246 followers</span>
          </div>
          </div>
          <ChevronUpIcon className="text-slate-700" />
        </a>
      </div>
      <p className="text-gray-700 mb-6">
        In the ever-evolving landscape of technology, I am committed to staying ahead of the curve. My journey involves continuous learning and exploration, with a keen eye on emerging trends and technologies. I take pride in transforming ideas into robust, scalable, and aesthetically pleasing digital solutions.
      </p>

      <p className="text-gray-700 mb-6">
        Whether it's crafting efficient backend systems or designing intuitive user interfaces, I approach each project with a blend of creativity, precision, and a relentless pursuit of excellence. With a track record that spans PHP, Ruby on Rails, and headless CMS like Sanity.io, I bring a holistic perspective to development.
      </p>

      <p className="text-gray-700 mb-6">
        As I navigate the world of tech, I remain open to collaboration, new challenges, and opportunities to contribute to the ever-evolving landscape of web and mobile development. Join me on this exciting journey where code meets creativity, and innovation knows no bounds.
      </p>
    </main>
  )
}
