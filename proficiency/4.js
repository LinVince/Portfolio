/*Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p3.jpg')*/

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="User-centred Technical Design"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent=" I excel in strengthening user-centered technical design by prioritizing the needs and experiences of users throughout the development process. My approach begins with in-depth user research, including qualitative interviews and observations, to gain a comprehensive understanding of users' goals, challenges, and preferences. This insight guides my design decisions and ensures that the technical solutions I create align closely with user requirements."

Container.appendChild(DescText)

/*TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="April 2023"
Container.appendChild(TimeText)*/

ClientLabel = document.createElement('div')
ClientLabel.setAttribute('class' , 'label')
ClientLabel.textContent="client"
Container.appendChild(ClientLabel)

ClientText = document.createElement('div')
ClientText.setAttribute('class' , 'paragraph-light')
ClientText.textContent="LITE English School"
Container.appendChild(ClientText)

/*AuthorLabel = document.createElement('div')
AuthorLabel.setAttribute('class' , 'label')
AuthorLabel.textContent="who"
Container.appendChild(AuthorLabel)

AuthorText = document.createElement('div')
AuthorText.setAttribute('class' , 'paragraph-light')
AuthorText.textContent="YUEH LIN"
Container.appendChild(AuthorText)*/

text = [
  {'tag':'div','class':'title','text':'Domain Model - Informing Data Structure'},
  {'tag':'img','src':"../image/LITE_domain_model_1.jpg"},
  {'tag':'div','class':'text','text':"I employ domain modeling to gain a comprehensive understanding of customers' professions and areas of expertise. By developing two types of domain models, I effectively bridge the gap between user needs and technical requirements. The first type, a user-centered domain model, captures domain knowledge and insights into the specific context and challenges faced by users. This allows me to design solutions that are aligned with users' workflows and goals."},
  {'tag':'img','src':"../image/LITE_domain_model_2.jpg"},
  {'tag':'div','class':'text','text':"The second type of model, a technical domain model, provides valuable input for database design and overall information architecture. By structuring the data in a way that supports efficient and flexible access to information, I ensure that the technical implementation aligns with user needs and supports robust, scalable systems."},
  {'tag':'div','class':'title','text':'Sitemap - Shaping Data for Frontend and Backend'},
  {'tag':'img','src':"../image/LITE_sitemap.jpg"},
  {'tag':'div','class':'text','text':"The sitemap includes the data structure necessary to inform both the backend and frontend of the system, serving as a blueprint for how information is organized and accessed. By outlining the relationships and hierarchies between different types of data and content, the sitemap helps guide the design of the database schema and API endpoints in the backend. This ensures efficient data retrieval and manipulation while maintaining data integrity and security."},
  {'tag':'div','class':'text','text':"For the frontend, the sitemap provides a clear structure for navigation and user interaction, enabling intuitive pathways through the system's content and functionalities. By aligning the backend and frontend data structures, the sitemap ensures a seamless flow of information across the system, facilitating a cohesive user experience and efficient system performance. Let me know if there's anything else I can do for you."},
  {'tag':'div','class':'title','text':'User Journey - Shortcut for Use Cases'},
  {'tag':'img','src':"../image/LITE_userJourney2.jpg"},
  {'tag':'div','class':'text','text':"After conducting interviews with users and employing card sorting exercises, I ensured that the sitemap aligns with users' mental models, reflecting their natural understanding of how information should be organized and accessed. Building upon this foundation, I explored users' daily tasks and use cases to gain a deeper understanding of their workflows and objectives."},
  {'tag':'div','class':'text','text':"By mapping out the user journey, I was able to visualize the information pathways and identify key touchpoints and interactions. This process helped me ensure that the design provides shortcuts and streamlined processes for users to complete their most frequently executed tasks efficiently. By optimizing the user journey, I enhanced the overall user experience, allowing users to navigate the system with ease and achieve their goals more quickly and effectively."},
  {'tag':'div','class':'title','text':'Prototyping with API and Data Integration'},
  {'tag':'img','src':"../image/LITE_designDoc.jpg"},
  {'tag':'div','class':'text','text':"In my design process, I create detailed prototypes that explicitly illustrate the API and data flow, serving as a guide for both frontend and backend development. These prototypes demonstrate the interactions between the user interface and the underlying data, showcasing how data is fetched, manipulated, and presented to users. I focus on aligning the data structure and API endpoints with user needs and business requirements, ensuring efficient and secure data handling. Additionally, I consider technical aspects such as error handling, performance optimization, and scalability to deliver robust and reliable solutions. By providing clear prototypes, I facilitate seamless collaboration between design and development teams, ultimately leading to cohesive and effective system architecture."},

]


for (let i = 0; i < text.length; i++){
  if(text[i]['tag'] == 'img'){
    let Element = document.createElement(text[i]['tag']);
    Element.setAttribute('src',text[i]['src']);
    Container.appendChild(Element);
  }else if(text[i]['tag'] == 'a'){
    let Element = document.createElement(text[i]['tag']);
    Element.setAttribute('href',text[i]['href']);
    Element.setAttribute('target','_blank');
    Element.textContent = text[i].text
    Container.appendChild(Element);
  }else{
  let Element = document.createElement(text[i]['tag'])
  Element.classList.add(text[i].class)
  Element.textContent = text[i].text
Container.appendChild(Element)
}}

