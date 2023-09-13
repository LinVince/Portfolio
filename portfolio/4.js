Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p4.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="Working in a cybersecurity-related company that specialized in cryptography, I programmed a tool for our customer, a cryptocurrency exchange. The tool was a money generator which created a QR code to be printed on a card. Those who scanned the code with the app they developed would get Bitcoin in their wallet."
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="August 2018"
Container.appendChild(TimeText)

AuthorLabel = document.createElement('div')
AuthorLabel.setAttribute('class' , 'label')
AuthorLabel.textContent="who"
Container.appendChild(AuthorLabel)

AuthorText = document.createElement('div')
AuthorText.setAttribute('class' , 'paragraph-light')
AuthorText.textContent="YUEH LIN"
Container.appendChild(AuthorText)

text = [{
  'tag':'div',
  'class':'title',
  'text':"Problem Statement"},
  {'tag':'div',
   'class':'text',
   'text':"A cryptocurrency exchange needed a way to distribute their Bitcoin values. The concept was that those who received the Bitcoin would need to download their app to store the value."},
  {'tag':'div','class':'title','text':'Design Concept'},
  {'tag':'div','class':'text','text':"I built a tool for them to generate QR codes, which represented paper money, given serial numbers, versions, values, time and reseller ID. Other than the interface, the cryptocurrency exchange could integrate the code as an engine for their own workflow. "},
  {'tag':'div','class':'title','text':'Design Phases'}, 
  {'tag':'div','class':'text','text':'As the requirements were clear, I directly moved on to the technical part of the design without the research part.'},
  {'tag':'div','class':'boldText','text':'1. Build the engine'},
  {'tag':'div','class':'text','text':'The tool involved much encoding and a complex switch between numeral systems. The function of the engine was to encode different inputs of data, concatenate these inputs, then generate a cryptgoraphic key pair and sign the concatenated data with the private key. Also, there was a function to vertify the authenticity of the paper money with a public key as well.'},  
    {'tag':'div','class':'boldText','text':'2. Build the server with Python Flask'},
    {'tag':'div','class':'text','text':'In order to make the engine available not only through integration, I built a backend server so that the frontend could communicate with the engine and make the whole process friendly with a usable browser-based interface.'},
  {'tag':'div','class':'boldText','text':'3. Build the frontend'},
    {'tag':'div','class':'text','text':'I designed the frontend so that users could interact with the engine and see the whole process. First, users can switch between the dark mode and the bright mode.'},
        {'tag':'img','src':"../image/dark_mode_p4.gif"},
        {'tag':'div','class':'text','text':'I built a form on the left-hand side. Users can enter the input data required for certificate generation. I set the default value and the validation so that users know the format of the input.'},   
     {'tag':'img','src':"../image/validation_p4.gif"},
     {'tag':'div','class':'text','text':'After the user clicks the Generate button, the input and output data will be displayed on the right hand side.'},   
    {'tag':'img','src':"../image/generation_p4.gif"},
   {'tag':'div','class':'text','text':'The project is more about the technical design in the backend server and engine. The logic and flow behind cryptography. With rich experience and strong knowledge base of cryptography, we helped customers easily implement cryptocurrency-related applications.'},
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

