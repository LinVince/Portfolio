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
DescText.textContent="The knowledge navigation map is a truth tech product I developed with TiiQu, a London-based organization devoted for green and truth technology. During my study in London, I've got the opportunity to work with them. From a UX designer in the first place, a overall product designer and then the frontend engineer, eventually the lead of the whole frontend team, I've seen the product built from scratch. As more and more people devoted their time and efforts, we finally achieved the concept of turning knowledge into a map to defeat misinformation as we aim to let people know what they don't know and show them 'what they don't know they don't know.'"
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
  {
  'tag':'div',
  'class':'title',
  'text':"....."},
  

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

