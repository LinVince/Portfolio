/*Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p3.jpg')*/

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="Backend API Design"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent=" I take pride in my strong capabilities in backend API design, which play a crucial role in ensuring efficient, secure, and scalable communication between the server and client applications. My experience in this area involves crafting robust APIs that adhere to industry best practices and standards, such as RESTful architecture."

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
ClientText.textContent="TiiQu (London), LITE English School"
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
  {'tag':'div','class':'title','text':'Best Practice and Informing Frontend Requirements'},
  {'tag':'div','class':'text','text':'A core aspect of my API design approach is emphasizing clarity and simplicity. I ensure that each endpoint is well-documented and follows consistent naming conventions, making it easier for developers to understand and use the APIs. Additionally, I focus on designing APIs that are intuitive and user-friendly, streamlining the integration process for front-end developers and other system components.'},

]


for (let i = 0; i < text.length; i++){
  if(text[i]['tag'] == 'img'){
    let Element = document.createElement(text[i]['tag']);
    Element.setAttribute('src',text[i]['src']);
    Container.appendChild(Element);
  }else{
  let Element = document.createElement(text[i]['tag'])
  Element.classList.add(text[i].class)
  Element.textContent = text[i].text
Container.appendChild(Element)
}}

