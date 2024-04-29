/*Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p2.jpg')*/

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="GenAI Interaction Development"
Container.appendChild(titleText)


DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="As AI has become a fundamental element in almost every tool, the integration of GenAI is a norm."
Container.appendChild(DescText)


text = [
  {
    'tag':'div',
    'class':'title',
    'text':"Skills"},
     {'tag':'div', 'class':'text','text':"1. Django: API, database control, backend service"},
     {'tag':'div', 'class':'text','text':"2. React (Typescript): frontend interaction design and development"},
     {'tag':'div', 'class':'text','text':"3. OpenAI: Backend AI service"},
     {
    'tag':'div',
    'class':'title',
    'text':"Expertise"},
    {'tag':'div',
      'class':'boldText',
      'text':"Orchestration of Backend AI Service and Frontend Interaction"},
      {'tag':'div',
      'class':'text',
      'text':"Frontend development is pivotal in enabling user-AI interaction. My role involves integrating AI seamlessly into users' everyday experiences, even in the most subtle applications. By creating full-stack projects that harmonize AI services with intuitive front-end interactions, I strive to enhance the functionality and efficiency of user-facing technologies."},
    {'tag':'div',
    'class':'boldText',
    'text':"Backend Database and API Design"},
    {'tag':'div',
    'class':'text',
    'text':"Structured data management is essential for robust and consistent visualization. My expertise includes designing data architectures for both databases and APIs, ensuring seamless and efficient data flow from the backend to the frontend. This approach facilitates high-performance applications with reliable and clear data presentation."},
    {
      'tag':'div',
      'class':'title',
      'text':"Open Source Project"},
      {'tag':'div',
      'class':'boldText',
      'text':"Leximap"},
      {'tag':'img','src':"../image/Leximap.gif"},
      {'tag':'div',
      'class':'text',
      'text':"LexiMap is the integration of Generative AI and the navigation system applied in English words that originate from different corners of the world. The words that originate from different continents are assigned with respective coordinates. You can interact with these words on the map, sending prompts to OpenAI to ask for other information about the word."},
      {'tag':'div',
      'class':'text',
      'text':"The link to the project is below."},
      {'tag':'a','href':'https://github.com/LinVince/LexiMap','text':'GitHub Repo: Leximap'},
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

