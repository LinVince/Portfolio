Banner = document.getElementById('banner')
Banner.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png')

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
AuthorText.textContent="VINCENT LIN"
Container.appendChild(AuthorText)

text = [
  {'tag':'div','class':'title','text':'Design Phases'},  
  {'tag':'img','src':"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png"},      
  {'tag':'div','class':'boldText','text':'1. Backend Initialization'},
  {'tag':'div','class':'text','text':'As I followed the practice to keep frontend and backend separate, I built a database and APIs according to the requirements in the first place. After the functionality of the APIs was tested and proved to be reliable, I deployed the project onto AMS EC2.'},
  {'tag':'div','class':'boldText','text':'2. Frontend Rendering'},
  {'tag':'div','class':'text','text':'Given Figma prototypes, I got down to frontend development. I fetched tourism information via the APIs I baked in advance to render the tourist attraction photos. Then I embedded a search bar on the banner, enabling users to find particular sites faster.'},
  {'tag':'div','class':'text','text':'Next, I built a dynamically rendered page where users could book a tour. It contained a slideshow and a form for booking. The booking information was stored in the backend database.'},
  {'tag':'div','class':'boldText','text':'3. Membership System'},
  {'tag':'div','class':'text','text':'The membership system allowed for registration and login. It kept track of members’ booking information and payment status. The account/password login featured cryptographic hashing to enhance security.'},
  {'tag':'div','class':'boldText','text':'4. Payment System'},
  {'tag':'div','class':'text','text':'The payment system was integrated with a third-party cash flow service. It allowed consumers to pay with credit cards. The payment status was stored in the database as well.'},
  {'tag':'div','class':'boldText','text':'5. Optimization'},
  {'tag':'div','class':'text','text':'To optimize the code structure for better maintenance, I referred to the MVC principle, keeping codes separate. Also, I reviewed and streamlined Javascript and Python codes. '}
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

