/*Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p3.jpg')*/

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

/*titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="Titan Project - All-in-one Business Infra"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="The reason why it's called a 'Titan Project' is that I literally built everything as an all-in-one solution for my customer, a startup education institute. First, I managed to execute our content strategty and built a website from scratch. Second, I programmed a business report generator with Google Analytics API and Python, utilizing flexible GA4 API to extensively visualize the traffic data of the website. Third, to boost inbound marketing, I designed the newsletter for promotional purposes. Also, I proposed and managed to set up email auto-reply to streamline the business conversion process, creating a smoother user experience, for both students and administrators. Finally, I initiated a desgin concept of a backend student and course management system, aiming to streamline administrative work in reception, coure management and students' progress assessment."

Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="April 2023"
Container.appendChild(TimeText)

ClientLabel = document.createElement('div')
ClientLabel.setAttribute('class' , 'label')
ClientLabel.textContent="client"
Container.appendChild(ClientLabel)

ClientText = document.createElement('div')
ClientText.setAttribute('class' , 'paragraph-light')
ClientText.textContent="LITE English School"
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
  {'tag':'div','class':'title','text':'Under Construction'},

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

