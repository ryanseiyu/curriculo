window.onload = function () {
	document.getElementById("botao2").click();
};

const pronounsHeader = document.getElementById("pronounsHeader");
const pronouns = document.getElementById("pronouns").textContent;
const languages = document.getElementById("languagesHeader").textContent;
const descriptionPort = document.getElementById("description").textContent;
const header1Port = document.getElementById("header1").textContent;
const header2Port = document.getElementById("header2").textContent;
const header2_1Port = document.getElementById("header2_1").textContent;
const header2_4Port = document.getElementById("header2_4").textContent;
const description2_1Port =
	document.getElementById("description2_1").textContent;
const description2_2Port =
	document.getElementById("description2_2").textContent;
const description2_3Port =
	document.getElementById("description2_3").textContent;
const description2_4Port =
	document.getElementById("description2_4").textContent;
const header3Port = document.getElementById("header3").textContent;
const header3_1Port = document.getElementById("header3_1").textContent;
const description3_2Port =
	document.getElementById("description3_2").textContent;
const description3_3Port =
	document.getElementById("description3_3").textContent;
const header4Port = document.getElementById("header4").textContent;
const header4_1Port = document.getElementById("header4_1").textContent;
const description4_1Port =
	document.getElementById("description4_1").textContent;
const header5Port = document.getElementById("header5").textContent;
const header5_subtitle1Port =
	document.getElementById("header5_subtitle1").textContent;
const description5_1Port =
	document.getElementById("description5_1").textContent;
const header5_subtitle2Port =
	document.getElementById("header5_subtitle2").textContent;
const description5_2Port =
	document.getElementById("description5_2").textContent;
const header5_subtitle3Port =
	document.getElementById("header5_subtitle3").textContent;
const description5_3Port =
	document.getElementById("description5_3").textContent;
const header5_subtitle4Port =
	document.getElementById("header5_subtitle4").textContent;
const description5_4Port =
	document.getElementById("description5_4").textContent;
const header6Port = document.getElementById("header6").textContent;
const item6_1Port = document.getElementById("item6_1").textContent;
const item6_2Port = document.getElementById("item6_2").textContent;
const item6_3Port = document.getElementById("item6_3").textContent;
const item6_4Port = document.getElementById("item6_4").textContent;
const item6_5Port = document.getElementById("item6_5").textContent;
const item6_6Port = document.getElementById("item6_6").textContent;
const item6_7Port = document.getElementById("item6_7").textContent;
const item6_8Port = document.getElementById("item6_8").textContent;
const item6_9Port = document.getElementById("item6_9").textContent;
const item6_10Port = document.getElementById("item6_10").textContent;
const item6_11Port = document.getElementById("item6_11").textContent;
const item6_12Port = document.getElementById("item6_12").textContent;
const header7Port = document.getElementById("header7").textContent;
const header8Port = document.getElementById("header8").textContent;

function changeLanguage(lang) {
	let pronounsHeader = document.getElementById("pronounsHeader");
	let pronouns = document.getElementById("pronouns");
	let languages = document.getElementById("languagesHeader");
	let description = document.getElementById("description");
	let header1 = document.getElementById("header1");
	let header2 = document.getElementById("header2");
	let header2_1 = document.getElementById("header2_1");
	let header2_4 = document.getElementById("header2_4");
	let description2_1 = document.getElementById("description2_1");
	let description2_2 = document.getElementById("description2_2");
	let description2_3 = document.getElementById("description2_3");
	let description2_4 = document.getElementById("description2_4");
	let header3 = document.getElementById("header3");
	let header3_1 = document.getElementById("header3_1");
	let description3_2 = document.getElementById("description3_2");
	let description3_3 = document.getElementById("description3_3");
	let header4 = document.getElementById("header4");
	let header4_1 = document.getElementById("header4_1");
	let description4_1 = document.getElementById("description4_1");
	let header5 = document.getElementById("header5");
	let header5_subtitle1 = document.getElementById("header5_subtitle1");
	let description5_1 = document.getElementById("description5_1");
	let header5_subtitle2 = document.getElementById("header5_subtitle2");
	let description5_2 = document.getElementById("description5_2");
	let header5_subtitle3 = document.getElementById("header5_subtitle3");
	let description5_3 = document.getElementById("description5_3");
	let header5_subtitle4 = document.getElementById("header5_subtitle4");
	let description5_4 = document.getElementById("description5_4");
	let header6 = document.getElementById("header6");
	let item6_1 = document.getElementById("item6_1");
	let item6_2 = document.getElementById("item6_2");
	let item6_3 = document.getElementById("item6_3");
	let item6_4 = document.getElementById("item6_4");
	let item6_5 = document.getElementById("item6_5");
	let item6_6 = document.getElementById("item6_6");
	let item6_7 = document.getElementById("item6_7");
	let item6_8 = document.getElementById("item6_8");
	let item6_9 = document.getElementById("item6_9");
	let item6_10 = document.getElementById("item6_10");
	let item6_11 = document.getElementById("item6_11");
	let item6_12 = document.getElementById("item6_12");
	let header7 = document.getElementById("header7");
	let header8 = document.getElementById("header8");

	if (lang == "en") {
		pronounsHeader.innerHTML = "Pronouns:";
		pronouns.innerHTML = "He/Him";
		languages.innerHTML = "Languages:";
		description.innerHTML =
			"With a history dating back to my childhood in bustling Sao Paulo, I am an intrepid individual passionate about technology. From an early age, my fascination with computers and electronics led me to confront unknown challenges, disassembling and attempting to repair devices even without fully understanding their operation. Each failure was a step in my learning journey. Upon enrolling at UTFPR to study Electrical Engineering, I deepened my knowledge, embracing challenging projects like creating systems against static electricity and macros for spreadsheet optimization. My passion led me to software development, turning me into an experienced Full Stack Developer (React/Redux/Java/Python Developer). Today, I continue to explore the unknown with courage and determination, ready to face new challenges in my career. My name is Ryan Kimura.";
		header1.innerHTML = "Stack";
		header2.innerHTML = "Projects and Activities";
		header2_1.innerHTML = "Board Member of Democratic Elections";
		header2_4.innerHTML = "Development Projects";
		description2_1.innerHTML =
			"To provide guidance and supervision of the brazilian democratic elections, representing the regional electoral court. Exercising all functions required for the voting system to work.";
		description2_2.innerHTML =
			"Using AI to create images, with the Automatic1111 repository for local host execution, or Google Notebook for remote executions.";
		description2_3.innerHTML =
			"Development of webscraping for data collection from websites, using JavaScript and Puppeteer. More specifically, to acquire a list of doctors in the region of Toronto, Canada closest to a specific address.";
		description2_4.innerHTML =
			"Various website developments with frameworks, CI/CD integration, Git, and GitHub for automatic deployment, using SQL and NoSQL databases, in addition to implementing RESTful APIs. Other tools such as Docker, Postgres, MongoDB, AWS, and Heroku were also used. In addition to the application of unit tests, and projects developed with a microservices architecture.";
		header3.innerHTML = "Education";
		header3_1.innerHTML = "Electrical Engineering";
		description3_2.innerHTML =
			"Full scholarship to be an Exchange Student at the United States for a year. Studied at Wayne State University (Detroit, MI) and New Jersey Institute of Technology (Newark, NJ).";
		description3_3.innerHTML =
			"Full Stack Java Development course to learn Java, HTML, CSS, Javascript, Node.js, Git and React at EBAC. Dedicated 45% of my time to learning Java and the other 50% to learning React.";
		header4.innerHTML = "Certifications";
		header4_1.innerHTML = "PAN Bank Java Developer";
		description4_1.innerHTML =
			"Certificate of completion, from DIO (Java Bootcamp course). Technical and practical learning for the development of Java applications with Spring Boot.";
		header5.innerHTML = "Experience";
		header5_subtitle1.innerHTML = "Developer";
		description5_1.innerHTML =
			"Development of a comprehensive Power BI course, tailored to students' needs, with extensive instructional materials.<br>I acted as a facilitator, providing individual support and guidance.<br>The course empowered students to master Power BI and received positive feedback, reinforcing my passion for empowering others in data analysis.";
		header5_subtitle2.innerHTML = "Research Assistent";
		description5_2.innerHTML =
			"Analytical and technical research on nanowire light-emitting diodes.<br>Advanced simulations in Matlab for parameter optimization.<br>Successfully implemented software across the laboratory team in the United States, resulting in a significant cost reduction of over 80%.<br>Technical expertise in technology research and development.";
		header5_subtitle3.innerHTML = "Intern";
		description5_3.innerHTML =
			"Marketing of electric energy, including contract negotiations.<br>Effective mediation between suppliers and customers.<br>Active and analytical 	prospecting of new clients and sales strategies.<br>Technical development of a customized Excel macros to automate the company's email sending process to its employees, resulting in a reduction of over 90% in the time required to complete this task.";
		header5_subtitle4.innerHTML = "Manager";
		description5_4.innerHTML =
			"Team leadership, goal setting, and management strategy definition.<br>Experience in financial accounting and tax planning.<br>High-quality graphic design for marketing.<br>Successful technical integration with government back-end systems, ensuring tax compliance, reduzing costs to about 20%.";
		header6.innerHTML = "Soft Skills";
		item6_1.innerHTML = "Problem Solving";
		item6_2.innerHTML = "Teamwork";
		item6_3.innerHTML = "Finance";
		item6_4.innerHTML = "Communication";
		item6_5.innerHTML = "Leadership";
		item6_6.innerHTML = "Collaboration";
		item6_7.innerHTML = "Time management";
		item6_8.innerHTML = "Creativity";
		item6_9.innerHTML = "Customer Service";
		item6_10.innerHTML = "Organization";
		item6_11.innerHTML = "Attention to detail";
		item6_12.innerHTML = "Critical thinking";
		header7.innerHTML = "Contact";
		header8.innerHTML = "Social Media";
	} else if (lang == "pt-br") {
		pronounsHeader.innerHTML = "Pronomes:";
		pronouns.innerHTML = "Ele/Dele";
		languages.innerHTML = "Idiomas";
		description.innerHTML = descriptionPort;
		header1.innerHTML = header1Port;
		header2.innerHTML = header2Port;
		header2_1.innerHTML = header2_1Port;
		header2_4.innerHTML = header2_4Port;
		description2_1.innerHTML = description2_1Port;
		description2_2.innerHTML = description2_2Port;
		description2_3.innerHTML = description2_3Port;
		description2_4.innerHTML = description2_4Port;
		header3.innerHTML = header3Port;
		description3_2.innerHTML = description3_2Port;
		description3_3.innerHTML = description3_3Port;
		header4.innerHTML = header4Port;
		header4_1.innerHTML = header4_1Port;
		description4_1.innerHTML = description4_1Port;
		header5_subtitle1.innerHTML = header5_subtitle1Port;
		description5_1.innerHTML = description5_1Port;
		header5_subtitle2.innerHTML = header5_subtitle2Port;
		description5_2.innerHTML = description5_2Port;
		header5_subtitle3.innerHTML = header5_subtitle3Port;
		description5_3.innerHTML = description5_3Port;
		header5_subtitle4.innerHTML = header5_subtitle4Port;
		description5_4.innerHTML = description5_4Port;
		header6.innerHTML = header6Port;
		item6_1.innerHTML = item6_1Port;
		item6_2.innerHTML = item6_2Port;
		item6_3.innerHTML = item6_3Port;
		item6_4.innerHTML = item6_4Port;
		item6_5.innerHTML = item6_5Port;
		item6_6.innerHTML = item6_6Port;
		item6_7.innerHTML = item6_7Port;
		item6_8.innerHTML = item6_8Port;
		item6_9.innerHTML = item6_9Port;
		item6_10.innerHTML = item6_10Port;
		item6_11.innerHTML = item6_11Port;
		item6_12.innerHTML = item6_12Port;
		header7.innerHTML = header7Port;
		header8.innerHTML = header8Port;
	}
}
