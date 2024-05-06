Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p7.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="UX, Frontend - GameHub"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)


DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="GameHub is connected with the gamehub API provided by rawg.io, showing the list of games."
Container.appendChild(DescText)

/*TimeLabel = document.createElement('div')
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
Container.appendChild(AuthorText)*/

text = [
  {'tag':'div',
  'class':'title',
  'text':"React Best Practice"},
  {'tag':'div',
    'class':'text',
    'text':"The web application utilizes zustand for state management and follows the best practices for modular structure. Click the link below for demonstration."},
    {'tag':'div',
    'class':'text',
    'text':"For  demonstration purpoes"},
    {'tag':'a','href':'https://game-hub-six-coral.vercel.app/','text':'GameHub'},
   
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

