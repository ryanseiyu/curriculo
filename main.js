const descriptionPort = document.getElementById("description").textContent;
const header1Port = document.getElementById("header1").textContent;
const header2Port = document.getElementById("header2").textContent;
const header2_1Port = document.getElementById("header2_1").textContent;
const description2_1Port = document.getElementById("description2_1").textContent;
const description2_2Port = document.getElementById("description2_2").textContent;
const header3Port = document.getElementById("header3").textContent;
const header3_1Port = document.getElementById("header3_1").textContent;
const description3_2Port = document.getElementById("description3_2").textContent;
const description3_3Port = document.getElementById("description3_3").textContent;
const header4Port = document.getElementById("header4").textContent;
const header4_1Port = document.getElementById("header4_1").textContent;
const description4_1Port = document.getElementById("description4_1").textContent;
const header5Port = document.getElementById("header5").textContent;
const header5_subtitle1Port = document.getElementById("header5_subtitle1").textContent;
const description5_1Port = document.getElementById("description5_1").textContent;
const header5_subtitle2Port = document.getElementById("header5_subtitle2").textContent;
const description5_2Port = document.getElementById("description5_2").textContent;
const header6Port = document.getElementById("header6").textContent;
const icon1Port = document.getElementById("icon1").textContent;
const icon2Port = document.getElementById("icon2").textContent;
const icon3Port = document.getElementById("icon3").textContent;
const icon4Port = document.getElementById("icon4").textContent;
const header7Port = document.getElementById("header7").textContent;
const header8Port = document.getElementById("header8").textContent;

function changeLanguage(lang) {
    let description = document.getElementById("description")
    let header1 = document.getElementById("header1")
    let header2 = document.getElementById("header2")
    let header2_1 = document.getElementById("header2_1")
    let description2_1 = document.getElementById("description2_1")
    let description2_2 = document.getElementById("description2_2")
    let header3 = document.getElementById("header3")
    let header3_1 = document.getElementById("header3_1")
    let description3_2 = document.getElementById("description3_2")
    let description3_3 = document.getElementById("description3_3")
    let header4 = document.getElementById("header4")
    let header4_1 = document.getElementById("header4_1")
    let description4_1 = document.getElementById("description4_1")
    let header5 = document.getElementById("header5")
    let header5_subtitle1 = document.getElementById("header5_subtitle1")
    let description5_1 = document.getElementById("description5_1")
    let header5_subtitle2 = document.getElementById("header5_subtitle2")
    let description5_2 = document.getElementById("description5_2")
    let header6 = document.getElementById("header6")
    let icon1 = document.getElementById("icon1")
    let icon2 = document.getElementById("icon2")
    let icon3 = document.getElementById("icon3")
    let icon4 = document.getElementById("icon4")
    let header7 = document.getElementById("header7")
    let header8 = document.getElementById("header8")

    if (lang == "en") {
        description.innerHTML = "Creative and innovative Full Stack developer, with knowledge into React, Javascript, HTML, CSS and Java. Versatible portfolio on different programming languages(low-level and high level languages) and solutions, I have great expertise with computers, from software to hardware with a Graduate Diploma of Electrical Engineering on UTFPR, located at Curitiba PR. I love to explore and embrace new cultures and to always develop myself to learn new things. I have great expectations to grow and develop whoever I'm going to work with.";
        header1.innerHTML = "Languages"
        header2.innerHTML = "Projects and Activities"
        header2_1.innerHTML = "Board Member of Democratic Elections"
        description2_1.innerHTML = "To provide guidance and supervision of the brazilian democratic elections, representing the regional electoral court. Exercising all functions required for the voting system to work."
        description2_2.innerHTML = "Using AI to create images, with the Automatic1111 repository for local host execution, or Google Notebook for remote executions."
        header3.innerHTML = "Education"
        header3_1.innerHTML = "Electrical Engineering"
        description3_2.innerHTML = "Full scholarship to be an Exchange Student at the United States for a year. Studied at Wayne State University (Detroit, MI) and New Jersey Institute of Technology (Newark, NJ)."
        description3_3.innerHTML = "Full Stack Developer course to learn HTML, CSS, Javascript, Node.js, Git and React at EBAC."
        header4.innerHTML = "Certifications"
        header4_1.innerHTML = "PAN Bank Java Developer"
        description4_1.innerHTML = "Certificate of completion, from DIO (Java Bootcamp course)." 
        header5.innerHTML = "Experience" 
        header5_subtitle1.innerHTML = "Developer"
        description5_1.innerHTML = "- I developed a comprehensive Power BI course, tailored to students' needs, with extensive instructional materials.<br>- I acted as a facilitator, providing individual support and guidance.<br>- The course empowered students to master Power BI and received positive feedback, reinforcing my passion for empowering others in data analysis."
        header5_subtitle2.innerHTML = "Research Assistent"
        description5_2.innerHTML = "- Leadership in research on nanowire light-emitting diodes.<br>- Advanced simulations in Matlab for parameter optimization.<br>- Successfully implemented software across the laboratory team in the United States, resulting in a significant cost reduction of over 80%.<br>- Proven expertise in technology research and development."
        header6.innerHTML = "Interests"
        icon1.innerHTML = "Financing"
        icon2.innerHTML = "Books"
        icon3.innerHTML = "Games"
        icon4.innerHTML = "Movies"
        header7.innerHTML = "Contact"
        header8.innerHTML = "Social Media"
    }
    
    else if (lang == "pt-br") {
        description.innerHTML = descriptionPort
        header1.innerHTML = header1Port
        header2.innerHTML = header2Port
        header2_1.innerHTML = header2_1Port
        description2_1.innerHTML = description2_1Port
        description2_2.innerHTML = description2_2Port
        header3.innerHTML = header3Port
        description3_2.innerHTML = description3_2Port
        description3_3.innerHTML = description3_3Port
        header4.innerHTML = header4Port
        header4_1.innerHTML = header4_1Port
        description4_1.innerHTML = description4_1Port
        header5_subtitle1.innerHTML = header5_subtitle1Port
        description5_1.innerHTML = description5_1Port
        header5_subtitle2.innerHTML = header5_subtitle2Port
        description5_2.innerHTML = description5_2Port
        header6.innerHTML = header6Port
        icon1.innerHTML = icon1Port
        icon2.innerHTML = icon2Port
        icon3.innerHTML = icon3Port
        icon4.innerHTML = icon4Port
        header7.innerHTML = header7Port
        header8.innerHTML = header8Port

    }
}