Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p6.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="UX, Frontend - Knowledge Navigation Map"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)


DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="The knowledge navigation map is a truth tech product I developed with TiiQu, a London-based organization devoted to green and truth technology. During my study in London, I've got the opportunity to work with them. From a UX designer in the first place, a overall product designer and then the frontend engineer, eventually the lead of the whole frontend team, I've seen the product built from scratch. As more and more people devoted their time and efforts, we finally achieved the concept of turning knowledge into a map to defeat misinformation as we aim to let people know what they don't know and show them 'what they don't know they don't know.'"
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="2023"
Container.appendChild(TimeText)

ClientLabel = document.createElement('div')
ClientLabel.setAttribute('class' , 'label')
ClientLabel.textContent="client"
Container.appendChild(ClientLabel)

ClientText = document.createElement('div')
ClientText.setAttribute('class' , 'paragraph-light')
ClientText.textContent="TiiQu"
Container.appendChild(ClientText)

AuthorLabel = document.createElement('div')
AuthorLabel.setAttribute('class' , 'label')
AuthorLabel.textContent="who"
Container.appendChild(AuthorLabel)

AuthorText = document.createElement('div')
AuthorText.setAttribute('class' , 'paragraph-light')
AuthorText.textContent="YUEH LIN"
Container.appendChild(AuthorText)

text = [
  {'tag':'div',
  'class':'title',
  'text':"Starting from a Small Idea - Network Graph"},
  {'tag':'img','src':"../image/tiiqu_gephi.jpg"},
  {'tag':'div',
    'class':'text',
    'text':"What may be the best way to present knowledge? I would say network graph is a good tool to visualize the relation between each domain or knowledge 'node'. However, network graph looks fancy but is not necessarily the best visual representation type. On one hand, users may feel lost due to its complexity. On the other hand, people may not know how the information could be leveraged."},
    {'tag':'div',
    'class':'title',
    'text':"Analogous Design - Prioritized Usability over Fancy Features"},
    {'tag':'img','src':"../image/tiiqu_navigating.gif"},
    {'tag':'div',
    'class':'text',
    'text':"Who doesn't use Google Map? I guess no one. Using navigation apps for direction has firmly formed users' behaviors. We are all used to scroll up and down for new information or target destination. It involves exploring, discovering and seeking. Rather than using network graph, we decided to lean toward navigation. We call it 'knowledge map'."},
    {'tag':'div',
    'class':'title',
    'text':"Visual Representation Incorporated with Information Architecture"},
    {'tag':'img','src':"../image/tiiqu_knowledgeMap.jpg"},
    {'tag':'div',
    'class':'text',
    'text':"We spent quite some time integrating the backend endpoints with the frontend. Whenever a topic on the map is clicked, the information on the left would fly in presenting AI generated questions and answers based on academic papers."},
    {'tag':'img','src':"../image/tiiqu_knowledgeMap2.jpg"},
    {'tag':'div',
    'class':'text',
    'text':"The project indeed involves the orchestration between the frontend and the backend. As the frontend team lead, I enjoy bridging different technologies for the benevolent purposes."},
    {'tag':'div',
    'class':'title',
    'text':"Demonstration of this Innovative Technology"},
    {'tag':'div',
    'class':'text',
    'text':"Soon the official and the latest version will be launched here."},
    {'tag':'a','href':'https://qutii.org','text':'qutii.org'},
    {'tag':'div',
    'class':'text',
    'text':"For temporary demonstration purpoes, visit"},
    {'tag':'a','href':'https://qutii.vercel.app/','text':'qutii.vercel.app'},
   
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

