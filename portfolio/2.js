Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p2.jpg')

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="Fullstack - E-commerce Website"
Container.appendChild(titleText)


DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="The tourism e-commerce website was a project launched by a web development bootcamp. I built the website using HTML, CSS, Javascript and Python Flask."
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="January 2022"
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
  {'tag':'div','class':'title','text':'Project at A Glance'},
   {'tag':'div','class':'text','text':'Development Phases'},
   {'tag':'div','class':'text','text':'Phase 1 - Backend Initialization'},
   {'tag':'div','class':'text','text':'Phase 2 - Frontend Rendering'},
   {'tag':'div','class':'text','text':'Phase 3 - Membership System'},
   {'tag':'div','class':'text','text':'Phase 4 - Payment System'},
   {'tag':'div','class':'text','text':'Phase 5 - Optimization'},

  {'tag':'div','class':'title','text':'Development Phases'},  
  {'tag':'img','src':"../image/design_phase_2.jpg"},      
  {'tag':'div','class':'boldText','text':'Phase 1 - Backend Initialization'},
  {'tag':'img','src':"../image/backend_init.jpg"},      
  {'tag':'div','class':'text','text':'As I followed the practice to keep frontend and backend separate, I built a database and APIs according to the requirements in the first place. After the functionality of the APIs was tested and proved to be reliable, I deployed the project onto AMS EC2.'},
  {'tag':'div','class':'boldText','text':'Phase 2 - Frontend Rendering'},
  {'tag':'div','class':'text','text':'Given Figma prototypes, I got down to frontend development. I fetched tourism information via the APIs I baked in advance to render the tourist attraction photos. Then I embedded a search bar on the banner, enabling users to find particular sites faster.'},
  {'tag':'img','src':"../image/search_bar.gif"},      
  {'tag':'div','class':'text','text':'Next, I built a dynamically rendered page where users could book a tour. It contained a slideshow and a form for booking. The booking information was stored in the backend database.'},
  {'tag':'img','src':"../image/booking.jpg"}, 
  {'tag':'div','class':'boldText','text':'Phase 3 - Membership System'},
  {'tag':'div','class':'text','text':'The membership system allowed for registration and login. It kept track of members’ booking information and payment status. The account/password login featured cryptographic hashing to enhance security.'},
  {'tag':'img','src':"../image/registration.jpg"}, 
  {'tag':'div','class':'boldText','text':'Phase 4 - Payment System'},
  {'tag':'div','class':'text','text':'The payment system was integrated with a third-party cash flow service. It allowed consumers to pay with credit cards. The payment status was stored in the database as well.'},
  {'tag':'img','src':"../image/credit_card.jpg"}, 
  {'tag':'div','class':'boldText','text':'Phase 5 - Optimization'},
  {'tag':'div','class':'text','text':'To optimize the code structure for better maintenance, I referred to the MVC principle, keeping codes separate. Also, I reviewed and streamlined Javascript and Python codes. '},
   {'tag':'img','src':"../image/code_separation.jpg"}, 

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

