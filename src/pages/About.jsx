/* 
 * File: About.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import profileImage from "../assets/images/MyProfileImage.jpeg"

const About = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="Office Workspace"
          src={profileImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

        <p className="mt-4 text-gray-600">
          Hello! I'm Kausar Parveen, a passionate Software Engineer dedicated to Artificial Intelligence Research. With a creative mindset and attention to detail, I aim to deliver exceptional results in every project I undertake.

          <p className="font-bold mt-4">Ready to elevate your projects? Let's get started today!</p>
        </p>

        <a
          href="https://docs.google.com/document/d/1rXBADz-eRaNkgwmRM7Jkzt89Lz3Tfzab/edit?usp=sharing&ouid=102344055918028066028&rtpof=true&sd=true"
          className="mt-8 inline-block rounded bg-blue px-12 py-3 text-sm font-medium text-kwhite transition  focus:outline-none focus:ring "
        >
          Resume
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default About