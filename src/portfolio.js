/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
	enabled: true, // set false to disable splash screen
	animation: splashAnimation,
	duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
	animated: true, // Set to false to use static SVG
};

const greeting = {
	username: "Marcelo Ribero Cerro",
	title: "Hey there, I'm Marcelo",
	subTitle: emoji(
		"I consider myself determined, creative and versatile. Always trying to achieve my goals. \n\n" +
			"I believe in consistency, hard-work and teamwork. I am experienced in international environments and take pride on what I do.\n\n" +
			"Currently following a Cyber-security Master in Radboud University. Deeply interested in cyber-security and systems architecture design.\n\n" +
			"I am passionate about sports, enjoy growing plants and playing CTFs.\n"
	),
	resumeLink: "", // Set to empty to hide the button
	displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/spaghetti9000",
	linkedin: "www.linkedin.com/in/marcelo-ribero-cerro-7b56ba323",

	// gmail: "saadpasta70@gmail.com",
	// gitlab: "https://gitlab.com/saadpasta",
	// facebook: "https://www.facebook.com/saad.pasta7",
	// medium: "https://medium.com/@saadpasta",
	// stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",

	// Instagram, Twitter and Kaggle are also supported in the links!
	// To customize icons and social links, tweak src/components/SocialMedia

	display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: "My skills",
	subTitle: "Everything I have learned and consider myself familiar with",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
	softwareSkills: [
		{
			skillName: "Java",
			fontAwesomeClassname: "fab fa-java",
      category: "Programming Language",
      description: "I first learned Java on university and after that I have used it multiple projects during my career.\n\n One example is the Box-Packing Optimization project"
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "fab fa-python",
      category: "Programming Language",
      description: "I have used python for over three years now. It is my go-to language for data analytics and small-medium projects. I used it for my bachelor's thesis"
		},
		{
			skillName: "C",
			fontAwesomeClassname: "fas fa-code",
      category: "Programming Language",
      description: "Learned both C++ and C in university both for programming and for program exploittaions. Currently, I use my knowledge very often in binary explotation CTFs"
		},
		{
			skillName: "Haskell",
			fontAwesomeClassname: "fas fa-code",
      description: "Learned it as port of my functional programming course in university. While I haven't used it since, the functional programming principles have stayed with me",
      category: "Programming Language"
		},
		{
			skillName: "Assembly",
			fontAwesomeClassname: "fas fa-microchip",
      description: "Experimented with Assembly as part of a Processors course at unviersity. My current knowledge is thanks to binary explotation",
      category: "Programming Language"
		},
		{
			skillName: "Javascript",
			fontAwesomeClassname: "fab fa-js",
      description: "My only notatable experience is with creating this website :)",
      category: "Programming Language"
		},
		{
			skillName: "SQL",
			fontAwesomeClassname: "fas fa-database",
      description: "I do not ocnsider myself a wizard of SQL but I do have enough knowledge for database browsing and SQL injection attacks",
      category: "Programming Language"
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "fab fa-git-alt",
      category: "Tools",
      description: "Ever since I discovered it in university, I have not stopped using it for all my projects. I am coonsider myselft profficient with ti."

		},
		{
			skillName: "Docker",
			fontAwesomeClassname: "fab fa-docker",
      category: "Tools",
      description: "Used it for a few projects, I do not have much expertise but I can mke it work"
		},
		{
			skillName: "Latex",
			fontAwesomeClassname: "fas fa-file-alt",
      category: "Tools",
      description: "Use it for everyday document cretion"
		},
		{
			skillName: "SCRUM",
			fontAwesomeClassname: "fas fa-project-diagram",
      category: "Frameworks & Libraries",
      description:"My only experience with SCRUM was on the project Box-Packign Optimization, i was the SCRUM master. Although I consider myself very familiar with it."
		},
		{
			skillName: "CI/CD",
			fontAwesomeClassname: "fas fa-sync-alt",
      category: "Frameworks & Libraries",
      description: "I implemented a CI/CD pipeline from scracth with github actions. I am familiar with the process"
		},
		{
			skillName: "Spring Boot",
			fontAwesomeClassname: "fas fa-leaf",
      category: "Frameworks & Libraries", // generic placeholder
      description: "fsdf"
		},
		{
			skillName: "React",
			fontAwesomeClassname: "fab fa-react",
      category: "Frameworks & Libraries",
		},
		{
			skillName: "Kali Linux Toolkit",
			fontAwesomeClassname: "fas fa-terminal",
      category: "Tools",
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: "Radboud University",
			logo: require("./assets/images/radboud-logo.png"),
			subHeader: "Master's Degree in Cybersecurity",
			duration: "September 2025 - Present (Expected end date July 2027)",
			desc: "",
			descBullets: [""],
		},

		{
			schoolName: "Kansai Gaidai University",
			logo: require("./assets/images/kansai-gaidai-logo.png"),
			subHeader: "Exchange Semester, Minor on Japanese Language",
			duration: "August 2024 - December 2024",
			desc: "Studied the japanese language and culture",
			descBullets: [""],
		},
		{
			schoolName: "Radboud University",
			logo: require("./assets/images/radboud-logo.png"),
			subHeader: "Bachelor's Degree in Computing Science",
			duration: "September 2022 - July 2025",
			desc: ["Specialized in cybersecurity and software."],
			descBullets: [
				"In my thesis I explored how Large Language Models can be leverage for mass spearphishing attacks.",
				"Part of the 28% that completes the bachelor within 4 years",
			],
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend/Design", //Insert stack or technology you have experience in
			progressPercentage: "90%", //Insert relative proficiency in percentage
		},
		{
			Stack: "Backend",
			progressPercentage: "70%",
		},
		{
			Stack: "Programming",
			progressPercentage: "60%",
		},
	],
	displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: "Student assistant",
			company: "Radboud University",
			companylogo: require("./assets/images/radboud-logo.png"),
			date: "September 2024 - Present",
			desc: "Tasked with helping students through different university courses",
			descBullets: [
				"New Devices Lab: Introduces students to the engineering process of embedded systems",
				"Hacking in C: Core concepts of C language and explore possible exploitations through code vulnerabilities.",
				"Operating Systems Concepts:  Explores core OS topics such as process scheduling, memory management,and concurrency. ",
				"Object Oriented Programming: Teaches foundational programming concepts in Java, " +
					"including class design, inheritance, and exception handling.",
			],
		},
		{
			role: "Consultant",
			company: "HAN University of Applied Sciences",
			companylogo: require("./assets/images/han-logo.jpeg"),
			date: "September 2024 - Present",
			desc: "Developed software solutions for sustainability-related challenges and conducted applied research.",
			descBullets: [
				"Worked with technologies such as Python, Google Scholar, Microsoft Excel.",
			],
		},
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
	display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Projects",
	subtitle: "Software products in which I have taken part in:",
	projects: [
		{
			image: require("./assets/images/boxes.png"),
			projectName: "Box Packing Optimization",
			projectDesc:
				"As part of my bachelor's degree, I collaborated with seven other developers to create a web-based application for warehouse " +
				"object optimization. \n\n Given a specific number of boxes, the program calculates and displays the most efficient solution." +
				"Key features include file import/export, box locking, and step-by-step reconstruction of the solution. \n\n" +
				" The application was developed using Spring Boot (Java) and React." +
				" ",
			video: require("./assets/videos/box-packing-demo.mp4"),
			footerLink: [
				{
					name: "Visit Website",
					url: "http://saayahealth.com/",
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require("./assets/images/spear.png"),
			projectName: "Bachelor's Thesis: PhishGPT",
			projectDesc:
				'In my thesis, "PhishGPT: Automating HTML Phishing Emails Using ChatGPT" I investigated the potential of Large Language Models (LLMs)' +
				", particularly ChatGPT, to automate the creation of high-quality phishing emails. \n\n" +
				"The findings show that LLM-generated emails are as good as. This research highlights the feasibility of mass spear-phishing" +
				" campaigns and underscores the need for more advanced defensive measurements.",
			video: null,
			footerLink: [
				{
					name: "See my thesis",
					url: "https://www.cs.ru.nl/bachelors-theses/2025/Marcelo_Ribero_Cerro___1100744___PhishGPT_-_Automating_HTML_Phishing_Emails_Using_ChatGPT.pdf",
				},
				//  you can add extra buttons here.
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
		"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

	achievementsCards: [
		{
			title: "Google Code-In Finalist",
			subtitle:
				"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
			image: require("./assets/images/codeInLogo.webp"),
			imageAlt: "Google Code-In Logo",
			footerLink: [
				{
					name: "Certification",
					url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
				},
				{
					name: "Award Letter",
					url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
				},
				{
					name: "Google Code-in Blog",
					url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
				},
			],
		},
		{
			title: "Google Assistant Action",
			subtitle:
				"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
			image: require("./assets/images/googleAssistantLogo.webp"),
			imageAlt: "Google Assistant Action Logo",
			footerLink: [
				{
					name: "View Google Assistant Action",
					url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
				},
			],
		},

		{
			title: "PWA Web App Developer",
			subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
			image: null,
			imageAlt: "PWA Logo",
			footerLink: [
				{
					name: "Certification",
					url: "",
				},
				{
					name: "Final Project",
					url: "https://pakistan-olx-1.firebaseapp.com/",
				},
			],
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
	displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
	blogs: [
		{
			url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
		},
		{
			url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT is The Best?",
			description:
				"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		"I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
	),

	talks: [
		{
			title: "Build Actions For Google Assistant",
			subtitle: "Codelab at GDG DevFest Karachi 2019",
			slides_url: "https://bit.ly/saadpasta-slides",
			event_url: "https://www.facebook.com/events/2339906106275053/",
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
	],
	display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
	title: "Resume",
	subtitle: "Feel free to download my resume",

	// Please Provide with Your Podcast embeded Link
	display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji("Contact Me"),
	subtitle: "You can get in touch with me through email",
	email_address: "marcelo.riberocerro@protonmail.com",
};

// Twitter Section

const twitterDetails = {
	userName: "twitter", //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
	illustration,
	greeting,
	socialMediaLinks,
	splashScreen,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	isHireable,
	resumeSection,
};
