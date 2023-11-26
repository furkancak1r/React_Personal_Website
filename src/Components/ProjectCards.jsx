import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { githubIcon } from '../assets';
import projects from '../Constants/constants';
import { fadeIn } from '../styles';

const projectsPerPage = 8;

const Works = () => {
  const [activePage, setActivePage] = useState(1);

  const indexOfLastProject = activePage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleChange = (event, value) => {
    setActivePage(value);
  };

  return (
    <div className="mt-5 text-grayscale-50 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 justify-items-center place-content-center">
        {currentProjects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            className="p-5 rounded-lg sm:w-[280px] w-[80%] "
          >
            <Tilt
              options={{
                max: 40,
                scale: 1,
                speed: 450,
              }}
            >
              <div className="relative ">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[full] h-[full] md:h-[200px]  object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() => window.open(project.source_code_link, '_blank')}
                    className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img src={githubIcon} alt="github" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h5 style={{ wordBreak: 'break-all' }} className="text-white font-bold text-2xl">
                  {project.name}
                </h5>
                <p className="mt-2 text-secondary text-[14px] leading-snug">{project.description}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
              <div className="mt-3 flex justify-center items-center">
                <a
                  className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See on Github
                </a>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(projects.length / projectsPerPage)}
            page={activePage}
            onChange={handleChange}
            sx={{ '& .MuiPaginationItem-root': { color: '#fff' } }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Works;
