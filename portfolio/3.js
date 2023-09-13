Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p3.jpg')

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="I built a website for a new English school using Wordpress. I also did some market analysis for them and integrated the key content into the website."
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="April 2023"
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
  {'tag':'div','class':'title','text':'Problem Statement'}, 
  {'tag':'div','class':'text','text':'The English school had a one-page website. However, the structure of the website deterred them from the inclusion of Goolge Search. They needed a new website with more pages and themes so that it could be included in Google Search. Also, they would like to implement Digital Marketing, tracking the flow of online visitors.'},      
  {'tag':'div','class':'title','text':'Design Concept'}, 
  {'tag':'div','class':'text','text':'The purpose of the website was quite consumer-oriented. I needed to shorten the user journey to prompt users to leave contact information in the shortest period of time possible after they skimmed through our web content. In addition, two things really matter - brand image and credibility, so we put some sections to boost them.'},
  {'tag':'div','class':'title','text':'Design Phases'}, 
  {'tag':'img','src':"../image/design_phase_3.jpg"},    
  {'tag':'div','class':'boldText','text':'1. Emphasize'},
  {'tag':'div','class':'text','text':'English teaching is a red sea market in Taiwan. What is more, now people use online platforms to learn English. It became a disadvantage for this English school since they insisted students learn English face-to-face. Therefore, I did competitive analysis and sorted out their advantages and unique selling points. I also reviewed some testimonials from students who attended the class in the headquater.'},
   {'tag':'img','src':"../image/competitive_analysis_p3.jpg"},  
   {'tag':'img','src':"../image/Testimonials_p3.jpg"},  
  {'tag':'div','class':'boldText','text':'2. Define'},
  {'tag':'div','class':'text','text':'At the stage, we discovered some problems we should prioritize in building the website. First, English learning was an extremely competitive market. For a latecomer, we should have a unique value proposition. Second, we should expose our website properly so that people could find us. Third, it matters to build credibility, especially for a new English school.'},
     {'tag':'img','src':"../image/Value_proposition_p3.jpg"}, 
  {'tag':'div','class':'boldText','text':'3. Ideate'},
  {'tag':'div','class':'text','text':"To solve the problems we've listed at the previous stage, I discussed the information architecture with the English teachers. We decided to add two sections, Teachers' Blog and Events, other than About Us and Courses. By doing so, we expected to build our brand image and enhance credibility."},
  {'tag':'img','src':"../image/information_architecture_p3.jpg"}, 
  {'tag':'div','class':'text','text':"Judging from the advantages of this English school, we highlighted some keywords for SEO and value proposition. Every banner photo we chose should also suit the brand image. This English school was not positioned purely as a cram school. Instead, it aimed to create a 0% fear 100% confidence learning environment, in hope of equipping learners with the courage to learn other new things more than just English."},
  {'tag':'div','class':'text','text':"Though they were a small company, they wanted to look like a trustworthy and credible company. Therefore, we decided that consistency should be the key to the website. The colors, fonts, layouts and contents should follow a specific design rule."},
  {'tag':'div','class':'text','text':"Finally, we expected to open an article section where they could continuously upload articles about idioms, phrases, etc. In fact, there were hundreds of people looking for a proper English word to capture the meaning of their thoughts they could only express in Chinese. With the section, we could allow this kind of audience to reach our website."},
    {'tag':'img','src':"../image/article_p3.jpg"},
  {'tag':'div','class':'boldText','text':'5. Prototype and Test'},
  {'tag':'div','class':'text','text':'I used Adobe XD to make the low-fidelity prototype in the first place. Once I made sure those English teachers were on the same page, I moved on to create high-fidelity prototype. After the functionality and design were all confirmed and tested, I used Wordpress to build the webiste.'},
  {'tag':'img','src':"../image/prototype_p3.jpg"},
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

