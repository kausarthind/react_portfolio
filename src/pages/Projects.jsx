/* 
 * File: Projects.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */
import projectsData from "../data/projectsData";


const Projects = () => {


  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <p className="text-center text-gray mb-8">
          Explore some of the exciting projects I've had the opportunity to work on. Each project showcases my skills as a developer and designer.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="mb-4 w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-bold mb-2 text-blue">{project.title}</h3>
              <p className="text-gray mb-4">{project.description}</p>
              <p className="text-blue font-semibold">{project.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
