Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p1.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="UX Design - Cybersecurity Website"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="IKV-Tech is a cybersecurity solution provider in Taiwan. They specialize in cryptographic hardware implementation. In the project, as one of their employees, I renovated their existing website, generated technical articles, and made a video to resolve some UX and brand image issues."
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
AuthorText.textContent="YUEH LIN"
Container.appendChild(AuthorText)

text = [
  {
  'tag':'div',
  'class':'title',
  'text':"Project at A Glance"},
   {'tag':'div', 'class':'text','text':"1. Problem Space"},
   {'tag':'div', 'class':'text','text':"2. Design Concept"},
   {'tag':'div', 'class':'text','text':"3. Design Phases"},
   {'tag':'div', 'class':'text','text':"Phase 1 - Emphasize"},
   {'tag':'div', 'class':'text','text':"Phase 2 - Research and Analysis"},
   {'tag':'div', 'class':'text','text':"Phase 3 - Define"},
   {'tag':'div', 'class':'text','text':"Phase 4 - Ideate"},
   {'tag':'div', 'class':'text','text':"Phase 5 - Prototype and Test"},
  
  
  {
  'tag':'div',
  'class':'title',
  'text':"1. Problem Space"},
  {'tag':'div',
   'class':'text',
   'text':"The information architecture (IA) of their existing website didn't follow the principle of hierarchy. Every piece of information, regardless of its importance, was displayed plainly. They need a new website featuring a clear funnel-like IA because they wanted their customers to easily grasp what services or products IKV-Tech provided."},
  {'tag':'div','class':'title','text':'2. Design Concept'},
  {'tag':'div','class':'text','text':"Generally, we follow Emphasize, Define, Ideate, Prototype and Test to create a new application. However, the challenge of the project lied in efficient content delivery because IKV-Tech's expertise was an extreme niche. People felt lost when browsing their website. As a result, I reorganized the design phases into Emphasize, Research and Analysis, Define, Ideate, Prototype and Test. The main point wasn't the focus group interview or survey. It wasn't a case study. Instead, I put more efforts into figuring out their role and position in the whole supply chain. Who are their target audience? How should the content be presented? I spent lots of time studying the domain knowledge and expertise. It helped me reorganize the content better."},
  {'tag':'div','class':'title','text':'3. Design Phases'}, {'tag':'img','src':"../image/design_phase_1.jpg"},      
  {'tag':'div','class':'boldText','text':'Phase 1 - Emphasize'},
  {'tag':'div','class':'text','text':'I discovered their competitors put more emphasis on applications rather than expertise or know-how on their websites. Then I asked IKV-Tech to provide more information about applications so that customers could easily understand what they were doing. I joined weekly meetings and observed the discussion involving supply and demand. I also interviewed some people in terms of the service they provided and how customers benefited from their service. Customers feedback was collected to paint a picture of their value in the market.'},
  {'tag':'div','class':'boldText','text':'Phase 2 - Research and Analysis'},
  {'tag':'div','class':'text','text':'To design the information architecture, there was a need to understand their expertise. I spent quite some time studying cryptography, key management, hardware security, cryptocurrency and cybersecurity-related papers. It enabled me to understand all the information on their existing website so that I could deconstruct the content and then construct them again.'},
   {'tag':'div','class':'text','text':'As to target audience, I digged into the high-tech supply chain in Taiwan. How did the high-tech industry interact with the security industry? What role did security play in the market?'},
  {'tag':'div','class':'boldText','text':'Phase 3 - Define'},
  {'tag':'div','class':'text','text':'I got right down to the problems of the existing website. I thought the issue lied in the misleading information architecture. The products and services they provided were not categorized clearly. There was no hierarchy. Therefore, I thought the urgent need was to reorganize the information architecture.'},
  {'tag':'div','class':'text','text':"There were some steps I performed to pave the way for the ideation phase. First, where were they positioned in the supply chain? Who might need their products and services? What was the value proposition of their products? When did customers need them? What were the customers' requirements?"},
  {'tag':'div','class':'boldText','text':'Phase 4 - Ideate'},
    {'tag':'div','class':'text','text':"After I gathered enough information about their customers and the market, I added more content their potential customers might care about or be aware of. General speaking, the goals of the renovations included a clearer information architecture, incorporating information of applications, amplfying the impact of the products on the market, adding more detailed customer segements (fields and industries). The detailed steps were as follows."},
  {'tag':'div','class':'text','text':'First, I changed the term Product (on the original website) into Platform, onto which there were a wide range of applications to be built. By doing so, we expected to deliver a message that "customers bought a hardware platform on which they could facilitate their business" instead of "buying a hardware product the use of which was unknown.'},
     {'tag':'img','src':"../image/platform_ikvweb.jpg"}, 
    {'tag':'div','class':'text','text':'Second, I put more emphasis on the vertical applications IKV-Tech could fulfill by attaching related information to every product. With the information in sight, we expected an efficient communication about what IKV-Tech was doing.'},
      {'tag':'img','src':"../image/usecase_ikvweb.jpg"}, 
    {'tag':'div','class':'text','text':'Finally, I defined the formats of information. For example, detailed product information would be presented as a brochure or whitepaper in PDF. Hardware specifications would be placed inside a drop-down text box for reference. I sketched some wire frames to test out the appearance of information. Meanwhile, I downloaded high-quality photos for banners and illustrations. For whitepapers and brochures, I looked for enterprise-grade A4 templates and duplicated some of them through Adobe Illustrator.'},
        {'tag':'img','src':"../image/dropdown_ikvweb.gif"},
     {'tag':'img','src':"../image/brochure_ikvweb.jpg"},
   {'tag':'div','class':'boldText','text':'Phase 5 - Prototype and Test'},
   {'tag':'div','class':'text','text':'I arranged weekly meetings with C-level decision makers of IKV-Tech to test out the prototype until they were satisfied with the result.'},
   {'tag':'a','href':'https://ikv-tech.com/en-us/','text':'Check the product: https://ikv-tech.com/en-us/'},
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

