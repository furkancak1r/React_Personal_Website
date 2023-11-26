

import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	cssIcon,
	figmaIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	jsIcon,
	nodeIcon,
	pyIcon,
	reactIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);
import axios from 'axios';
import { GITHUB_ACCESS_TOKEN } from "./github_access_token";
function parseRepositoryName(name) {
	// Replace underscores with spaces and capitalize each word
	return name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
async function getUserRepositories(username) {
	try {
		const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
			headers: {
				Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
			},
		});

		const repositories = response.data;
		const projects = [];

		const imagePromises = repositories.map(async (repository) => {
			const repositoryName = repository.name;
			const parsedName = parseRepositoryName(repositoryName);
			const repoDetails = {
				name: parsedName,
				description: repository.description,
				source_code_link: repository.html_url,
				demo_link: repository.html_url || '',
			};

			try {
				const imagesResponse = await axios.get(`https://api.github.com/repos/${username}/${repository.name}/contents/images`, {
					headers: {
						Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
					},
				});

				if (imagesResponse.data.length > 0) {
					const firstImage = imagesResponse.data[0];
					repoDetails.image = firstImage.download_url;
					projects.unshift(repoDetails);
				} else {
					repoDetails.image = repository.owner.avatar_url;
					projects.push(repoDetails);
				}
			} catch (error) {
				if (error.response && error.response.status === 404) {
					repoDetails.image = repository.owner.avatar_url;
					console.clear();
					projects.push(repoDetails);
				} else {
					repoDetails.image = repository.owner.avatar_url;
					projects.push(repoDetails);
				}
			}
		});

		await Promise.all(imagePromises);

		return projects;
	} catch (error) {
		console.error(error);
		return [];
	}
}

const projects = await getUserRepositories('furkancak1r');
export default projects;




const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	gitIcon,
	githubIcon,
	pyIcon,
	nodeIcon,
	figmaIcon,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hey there! 😊 Delighted to have you here!",
		"I'm Furkan, a Mechatronics Engineer venturing into the dynamic world of software development. Passionate about crafting innovative solutions, I thrive in the intersection of frontend and backend technologies.",
		"Beyond coding, you'll catch me engaging in strategic chess moves and embracing downtime with a bit of drawing.",
		"Excited to collaborate with like-minded individuals and teams who appreciate the art of creating extraordinary digital experiences. Thanks for checking out my portfolio! 🚀"
	]

};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];



const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
	},

	{
		id: "figma",
		title: "Figma",
		icon: figmaIcon,
		description:
			"In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},


	{
		id: "py",
		title: "Python",
		icon: pyIcon,
		description:
			"With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
	},


];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, skills };
