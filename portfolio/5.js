Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p5.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="UX, Fullstack - Energy Transition Scenario Explorer"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)


DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="The project was funded by the UK Engineering and Physical Sciences Research Council and executed by University College London (UCL). In this project, I co-worked with an outstanding research fellow who did research on energy transition. We together built an interactive web app for users to explore the energy transition scenarios so as to facilitate their policy making in relevant domains. "
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="2024 Jan - April"
Container.appendChild(TimeText)

ClientLabel = document.createElement('div')
ClientLabel.setAttribute('class' , 'label')
ClientLabel.textContent="client"
Container.appendChild(ClientLabel)

ClientText = document.createElement('div')
ClientText.setAttribute('class' , 'paragraph-light')
ClientText.textContent="University College London (UCL)"
Container.appendChild(ClientText)

AuthorLabel = document.createElement('div')
AuthorLabel.setAttribute('class' , 'label')
AuthorLabel.textContent="who"
Container.appendChild(AuthorLabel)

AuthorText = document.createElement('div')
AuthorText.setAttribute('class' , 'paragraph-light')
AuthorText.textContent="Yueh, Leo"
Container.appendChild(AuthorText)

text = [
    {
  'tag':'div',
  'class':'title',
  'text':"A Little Wit to Boost User Experience"},
  {'tag':'div',
   'class':'text',
   'text':"It's not an easy task to delve into the expertise of energy in the first place. In the development process, I got opportunities to learn the concepts from Leo. To transform the expertise into something people can play with on the website, I positioned myself as a user without any background knowledge. To start with it, I need a tutorial upon arrival, which was also the feedback from one of the local authority stakeholders."},
   {'tag':'img','src':"../image/energy_tutorial.gif"},
   {'tag':'div',
   'class':'text',
   'text':"While the data is loading, we smoothly transition users into the tutorial to keep them engaged. Once the data is fully loaded, they seamlessly finish the tutorial, ensuring they aren't left twiddling their thumbs during loading times. It's a clever UX workaround that keeps the user experience engaged."},
   {'tag':'div','class':'title','text':'Making Difficult Operation Easy and Intuitive'},
   {'tag':'img','src':"../image/energy_sidebar.gif"},
    {'tag':'div',
   'class':'text',
   'text':"Learnability is a challenge. What may be the best way to help users get into the swing of the graphs quickly? Other than the tutorial, we added validation messages on the sidebar, which is the primary tool users interact with to render the desired graphs. Also, we added tooltips. By doing so, we give users easy access to detailed information without making the interface too packed."},
    {'tag':'div','class':'title','text':'Simplify Complexity'},
    {'tag':'div',
   'class':'text',
   'text':"Given the immense amount of data we're dealing with, our filtering function is quite intricate. We offer users the option to select local authorities for data comparison. To make the interface tidy and clean, I install a expandable dropdown for users to select local authorities."},
   {'tag':'img','src':"../image/energy_local.gif"},
   {
    'tag':'div',
    'class':'title',
    'text':"Contribution to the Open Source"},
    {'tag':'div',
   'class':'text',
   'text':"The web app will soon be hosted on"},
   {'tag':'a','href':'https://energytransitionexplorer.uk','text':'energytransitionexplorer.uk'},
   {'tag':'div',
   'class':'text',
   'text':"The current version (11/4/2024) is available at"},
   {'tag':'a','href':"http://vincejim91126.pythonanywhere.com/",'text':'vincejim91126.pythonanywhere.com'},
   {'tag':'div',
   'class':'text',
   'text':"The website contains the source code. The GitHub README.md contains all the information for both users and developers."},

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

