Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="IKV-Tech is a cybersecurity solution provider in Taiwan. They specialize in cryptographic hardware implementation. In the project, I renovated their existing website to resolve some UX issues."
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="January 2020"
Container.appendChild(TimeText)

AuthorLabel = document.createElement('div')
AuthorLabel.setAttribute('class' , 'label')
AuthorLabel.textContent="who"
Container.appendChild(AuthorLabel)

AuthorText = document.createElement('div')
AuthorText.setAttribute('class' , 'paragraph-light')
AuthorText.textContent="VINCENT LIN"
Container.appendChild(AuthorText)

text = [{
  'tag':'div',
  'class':'title',
  'text':"Problem Statement"},
  {'tag':'div',
   'class':'text',
   'text':"The information architecture (IA) of their existing website didn't follow the principle of hierarchy. Every piece of information, regardless of its importance, was displayed plainly. They need a new website featuring a clear funnel-like IA because they wanted their customers to easily grasp what services or products IKV-Tech provided."},
  {'tag':'div','class':'title','text':'Design Concept'},
  {'tag':'div','class':'text','text':"Generally, we follow Emphasize, Define, Ideate, Prototype and Test to create a new application. However, the challenge of the project lied in efficient content delivery because IKV-Tech's expertise was an extreme niche. People felt lost when browsing their website. As a result, I reorganized the design phases, Emphasize, Internalize, Define, Ideate, Prototype and Test."},
  {'tag':'div','class':'title','text':'Design Phases'}, {'tag':'img','src':"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png"},      
  {'tag':'div','class':'boldText','text':'1. Emphasize'},
  {'tag':'div','class':'text','text':'I discovered their competitors put more emphasis on applications rather than expertise or know-how on their websites. Then I asked IKV-Tech to provide more information about applications so that customers could easily understand what they were doing.'},
  {'tag':'div','class':'boldText','text':'2. Internalize'},
  {'tag':'div','class':'text','text':'To design the information architecture, there was a need to understand their expertise. I spent quite some time studying cryptography, key management, hardware security, cryptocurrency and cybersecurity-related papers.'},
  {'tag':'div','class':'boldText','text':'3. Define'},
  {'tag':'div','class':'text','text':'I got down to the information architecture. First, I changed the term Product (on the original website) into Platform, onto which there were a wide range of applications to be built. By doing so, we expected to deliver a message that "customers bought a hardware platform on which they could facilitate their business" instead of "buying a hardware product the use of which was unknown.'},
  {'tag':'div','class':'text','text':'Second, I put more emphasis on the vertical applications IKV-Tech could fulfill by attaching related information to every product. With the information in sight, we expected an efficient communication about what IKV-Tech was doing.'},
  {'tag':'div','class':'text','text':'Finally, I defined the formats of information. For example, detailed product information would be presented as a brochure or whitepaper in PDF. Hardware specifications would be placed inside a drop-down text box for reference.'},
  {'tag':'div','class':'boldText','text':'4. Ideate'},
  {'tag':'div','class':'text','text':'I sketched some wire frames to test out the appearance of information. Meanwhile, I downloaded high-quality photos for banners and illustrations. For whitepapers and brochures, I looked for enterprise-grade A4 templates and duplicated some of them through Adobe Illustrator.'},
   {'tag':'div','class':'boldText','text':'5. Prototype and Test'},
   {'tag':'div','class':'text','text':'I arranged weekly meetings with C-level decision makers of IKV-Tech to test out the prototype until they were satisfied with the result.'},
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

