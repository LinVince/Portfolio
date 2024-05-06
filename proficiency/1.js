Section = document.querySelector('section')

/*Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p1.jpg')*/

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="Data Interaction Development & Design"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="With Django as the backend and React the frontend, we can dynamically process and visualize data. Through deck.gl, a comprehensive range of data visualization can be fulfilled. "
Container.appendChild(DescText)


ClientLabel = document.createElement('div')
ClientLabel.setAttribute('class' , 'label')
ClientLabel.textContent="client"
Container.appendChild(ClientLabel)

ClientText = document.createElement('div')
ClientText.setAttribute('class' , 'paragraph-light')
ClientText.textContent="UCL (London), TiiQu (London)"
Container.appendChild(ClientText)


text = [
  {
  'tag':'div',
  'class':'title',
  'text':"Skills"},
   {'tag':'div', 'class':'text','text':"1. Python Pandas: Data cleaning, processing and shaping"},
   {'tag':'div', 'class':'text','text':"2. Django: API, database control, backend service"},
   {'tag':'div', 'class':'text','text':"3. React (Typescript): frontend interaction design and development"},
   {'tag':'div', 'class':'text','text':"4. deck.gl: frontend data visualization development "},
   {'tag':'div', 'class':'text','text':"5. OpenAI: Backend AI service"},
  
  
  {
  'tag':'div',
  'class':'title',
  'text':"Expertise"},
  {'tag':'div',
   'class':'boldText',
   'text':"Mathematical Calculation and Computation"},
   {'tag':'div',
   'class':'text',
   'text':"Designing user-data interaction requires the application of mathematical formulas to ensure an intuitive and engaging user experience. For example, the assignment of coordinates for network graph nodes involves sophisticated calculations to maintain clarity and avoid overlap. Similarly, setting the geospatial scale for zoom features in map-based applications requires precise scaling to balance detail with overall context. These adjustments are crucial in creating seamless, dynamic interactions that respond fluidly to user input while presenting data in an accessible and informative manner."},
   {'tag':'div',
   'class':'boldText',
   'text':"User-centred Information Architecture"},
   {'tag':'div',
   'class':'text',
   'text':"When designing user interactions, our focus is on creating a user-centric experience rather than solely on presenting data. A robust information architecture is essential to facilitate a seamless flow that guides users from surface-level data to deeper insights. Through comprehensive user research, we establish an intuitive journey that helps users uncover unknown areas of knowledge. For example, in a knowledge map project, our design strategy channels users' cognitive flow from a broad overview to more specialized topics, mirroring the progression of a funnel. By steering users through this journey, we ensure that the technology supports human-centered objectives, providing meaningful and actionable outcomes."},
   {'tag':'div',
   'class':'boldText',
   'text':"GenerativeAI Integration"},
   {'tag':'div',
   'class':'text',
   'text':"In today's technological landscape, AI has become a foundational element across a multitude of tools and applications. Our backend services are deeply integrated with advanced Generative AI, enabling us to enhance user interactions with intelligent and dynamic responses. From data visualization to the extraction of nuanced insights and detailed information, our systems leverage AI to generate precise, context-sensitive outputs based on user prompts."},
   {'tag':'div',
   'class':'text',
   'text':"Our integration of Generative AI allows us to offer real-time, adaptive responses that cater to the specific needs and expectations of each user. This tailored approach ensures that the data presented aligns with the user's queries, facilitating a seamless and efficient experience. By combining robust backend systems with state-of-the-art AI, we are able to deliver personalized insights and enhanced data engagement, making our services not only efficient but also insightful and user-centric."},
   {
    'tag':'div',
    'class':'title',
    'text':"Products"},
    {
    'tag':'div',
    'class':'boldText',
    'text':"TiiQu Knowledge Map"},
    {'tag':'img','src':"../image/tiiqu_knowledgeMap2.jpg"},
    {
    'tag':'div',
    'class':'text',
    'text':"TiiQu Knowledge Map is a product I designed and developed with TiiQu, a green technology startup based in London. We combine the concepts of network graph and map to visualize knowledge and even make knowledge interactive. Refer to Portfolio for more information."},
    {'tag':'a','href':'../portfolio/6.html','text':'Go to this Portfolio'},

      {
      'tag':'div',
      'class':'title',
      'text':"Energy Scenario Explorer"},
      {'tag':'img','src':"../image/energy_sidebar.gif"},
      {'tag':'div',
      'class':'text',
      'text':"Energy Scenario Explorer is a digital data interactive web application I developed with a research fellow in University College London. We visualize energy scenario data with respective charts and maps. The web application allows users to interact with the data by adjusting the levers for different scenario and results. Refer to Portfolio for more information."},
      {'tag':'a','href':'../portfolio/5.html','text':'Go to this Portfolio'},
        
]

 
for (let i = 0; i < text.length; i++){
  if(text[i]['tag'] == 'img'){
    let Element = document.createElement(text[i]['tag']);
    Element.setAttribute('src',text[i]['src']);
    Container.appendChild(Element);
  }
  else if(text[i]['tag'] == 'a'){
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

