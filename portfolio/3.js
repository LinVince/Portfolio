Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p3.jpg')

Section = document.querySelector('section')
Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
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
Container.appendChild(AuthorText)

text = [
  {'tag':'div','class':'title','text':'Project at A Glance'},
  {'tag':'div','class':'text','text':'1. Developing a Backend Management System to Streamline Administration'},     
  {'tag':'div','class':'text','text':'2. Automatic Traffic Report with Python and Google Analytics 4 API'}, 
  {'tag':'div','class':'text','text':'3. Optimize Customer Journey with Automation'}, 
  {'tag':'div','class':'text','text':'4. Design and Build the Website'}, 

  {'tag':'div','class':'title','text':'1. Developing a Backend Management System to Streamline Administration'}, 
  {'tag':'div','class':'text','text':"To design a intranet management system, I adopted user research and information architecture evaluation approaches. It involved qualitative research to delve into the problem space. I interviewed the stakeholdes back and forth for many times and came up with two domain models, one of which focuses on the technical aspect and the other user aspect."},
  {'tag':'img','src':"../image/LITE_domain_model_1.jpg"},
  {'tag':'div','class':'text','text':"The domain model is based on the thematic findings of the interview data. It illustrates user-centered perspectives and the relationship between each stakeholders and domains."},
  {'tag':'img','src':"../image/LITE_domain_model_2.jpg"},
  {'tag':'div','class':'text','text':"Drawing upon the thematic findings, I looked into the problem space and designed the technical domain model, which could be a reference for database design."},
  {'tag':'img','src':"../image/LITE_sitemap.jpg"},
  {'tag':'div','class':'text','text':"Considering the information the client relied on for business operation, I designed the sitemap with the database structure seamlessly taking into account. This sitemap is suitable for developers. For my client who didn't have strong technical backgrounds, I made another one to explain the concept. The one for the client is as follows."},
  {'tag':'img','src':"../image/LITE_sitemap2.jpg"},
  {'tag':'div','class':'text','text':"The same applied to user journey. I tend to make one for developers and another one for my client. In this way, I can mitigate the risk of design-development gap and streamline the development process."},
  {'tag':'img','src':"../image/LITE_userJourney.jpg"},
  {'tag':'div','class':'text','text':"The one below was for my client."},
  {'tag':'img','src':"../image/LITE_userJourney2.jpg"},
  {'tag':'div','class':'text','text':"Now it's time to sketch the wireframe and conduct user study. It was an iterative process. Every time a user study was conducted or a client was interviewed, there were new or change of features. After we came to a consensus, I combined the frontned technical requirements with the backend, composing the API documents for clearer frontend information management and integrating them into a design document. The one below is the database structure."},
  {'tag':'img','src':"../image/LITE_database.jpg"},
  {'tag':'div','class':'text','text':"The API document below was used to orchestrate with the database and the backend."},
  {'tag':'img','src':"../image/LITE_API.jpg"},
  {'tag':'div','class':'text','text':"The technical requirements for API endpoints were annotated on the wireframe. It provides a thorough and comprehensive view of the technical implementation."},
  {'tag':'img','src':"../image/LITE_designDoc.jpg"},

 
  {
  'tag':'div',
  'class':'title',
  'text':"2. Automatic Traffic Report with Python and Google Analytics 4 API"},
  {'tag':'img','src':"../image/pythonxga4.jpg"},
  {'tag':'div','class':'title','text':'Background'},
  {'tag':'div',
   'class':'text',
   'text':"Analyzing commercial data on Google Analytics may be time-consuming. Calculation requires manual work. With the use of Python, I not only generate the report with just one click, but the flexibility allows me to cross-compare different types of data and efficiently extract the types of reports I need."},
   {'tag':'div',
   'class':'text',
   'text':"Here I collaborate with an English school in Taiwan. I will showcase how the numbers of the official website visitors and conversions are visualized. I will mention the challenges I have faced and my considerations in the process of development as well."},
   {'tag':'div','class':'title','text':'Commercial Data'},
    {'tag':'div',
   'class':'text',
   'text':"It is common that enterprises or ecommerce stores use Google Analytics to track the website traffic and calculation the conversion rate. The English school also used Google Analytics to track the number of visitors. On the website, there are two conversion events. One of them is submitting the contact form, the other joining the official LINE account."},
    {'tag':'div','class':'title','text':'Integration with Google Analytics 4 API'},
    {'tag':'div',
   'class':'text',
   'text':"Google provides developers with GA4 API to play with data. According to the documentation, I can call the given function and set the parameters and metrics to retrieve the data I want."},
   {'tag':'img','src':"../image/GA4_API.jpg"},
   {'tag':'div',
   'class':'text',
   'text':"Here I use Jupyter Notebook to render the charts and tables. I also modified the function, defining one for the number of visits and the other for the number of conversions."},
   {'tag':'img','src':"../image/jupyter.jpg"},
  {'tag':'div',
   'class':'text',
   'text':"After configuring the period of time I expect to look into, I get the raw data from Google Analytics Data API. Then I have to write codes to define the data structure and extract the data I need for further analysis or presentation."},
   {'tag':'img','src':"../image/ga4_rawdata.jpg"},

  {'tag':'div',
   'class':'text',
   'text':"To organize and restructure the raw data into an ideal format, I wrote some codes and made it a stats report generator."},
   {'tag':'img','src':"../image/gen_report.gif"},
     {'tag':'div',
   'class':'text',
   'text':"Other than the report in the textual form, I also generated some charts for reference. For example, the chart below shows the numbers of visitors from four difference social media sources. Two line charts shows the trend of Facebook and Instagram visitors."},
   {'tag':'img','src':"../image/chart_1.jpg"},
    {'tag':'div',
   'class':'text',
   'text':"Also, we can put two sources together into one chart for comparison."},
   {'tag':'img','src':"../image/chart_2.jpg"},
   {'tag':'div',
   'class':'text',
   'text':"Besides the current ad performance, I display history performance as well. When we see the chart below, we notice the spike on 9/21. Then I can get back to the marketing team and show them the chart. By doing so, they can take a closer or even a qualitative look at their promotional action on 9/21."},
    {'tag':'img','src':"../image/chart_3.jpg"},
      {'tag':'div',
   'class':'text',
   'text':"More than just the number of visitors, I also calculate the number of conversions. The prerequisite condition of conversion track is the configuration and setting through Google Tag Manager. The number of people who sumbit a contact form or add our official LINE account will be recorded and counted as conversions."},
   {'tag':'div',
   'class':'text',
   'text':"As the school is still expanding and developing, the number of conversions every week isn't too magnificent. Therefore, I use dots to present the stats."},
   {'tag':'img','src':"../image/chart_4.jpg"},
  {
  'tag':'div',
  'class':'title',
  'text':"3. Optimize Customer Journey with Automation"},
  {'tag':'div','class':'title','text':'Problem Statement'}, 
  {'tag':'div','class':'text','text':'As the number of inquires gradually rose, and the fact that the founder of the school was the only person who processed these inquires, workload became quite heavy. What is worse, inquires came from different promotional channels, including Facebook, Instagram, Google Search, the official website and email, the founder needed a centralized system to handle all the inquires.'},      
  {'tag':'div','class':'title','text':'Design Concept'}, 
  {'tag':'div','class':'text','text':"To address the issue of heavy administrative workload due to the increasing inquires, I directed all inquires from all the channels to a messaging app, LINE. By doing so, the founder didn't need to switch back and forth among different platforms and interfaces. Also, I filtered the inquires by motivation and urgency. For those who just asked about course information without a strong intent to enroll, I set an auto-reply function to provide course information so that the founder only needed to handle consumers with high potential to enroll."},
  {'tag':'div','class':'title','text':'Design Phase'},
  {'tag':'div','class':'title','text':'Phase 1 - Understanding User Painpoints'}, 
  {'tag':'img','src':"../image/user_journey.jpg"},
  {'tag':'div','class':'text','text':"I sketched a brief user journey diagram to understand the painpoints. According to the paper sheet on the left, the founder needs to contact a potential consumer many times until the consumer replies. For her, it was a terrible experience. What if the person just wanted to know the teaching method? What if the person isn't interested at all. The point is that we should't let the founder waste time on this kind of inquires."},
  {'tag':'div','class':'title','text':'Phase 2 - Ideating for Solutions and implementing'}, 
  {'tag':'div','class':'text','text':"Then according to the paper sheet on the right, I proposed a solution to the founder. With the auto-reply email sent to those who fill out and submit a form on the website, receivers will be notified of the course information. Also, the message contains a QR code and a link to LINE. Only if they want to know more and book a trial class will they add LINE and directly reach the founder. By doing so, the founder no longer needs to reply via email just to provide preliminary information."},
   {'tag':'div','class':'text','text':"Lastly, in case the consumer shows willingness to enroll but forgets to add LINE, I set up LINE Notify to direct contact form messages from email to LINE. At this point, the founder could check her smartphone for inquires. If she thought the person has high potential, she could contact them directly via phone numbers. The big picture is as follows."},
   {'tag':'img','src':"../image/line_notify.jpg"},
    {'tag':'div','class':'text','text':"By doing so, the founder doesn't need to check the email to reply to inquires from time to time. The practice allows for automatical broadcast of high-potential consumer contact info to her."},
   
    {'tag':'div','class':'title','text':'4. Design and Build the Website'}, 
    {'tag':'div','class':'title','text':'Problem Statement'}, 
    {'tag':'div','class':'text','text':'The English school had a one-page website. However, the structure of the website deterred them from the inclusion of Goolge Search. They needed a new website with more pages and themes so that it could be included in Google Search. Also, they would like to implement Digital Marketing, tracking the flow of online visitors.'},      
    {'tag':'div','class':'title','text':'Design Concept'}, 
    {'tag':'div','class':'text','text':'The purpose of the website was quite consumer-oriented. I needed to shorten the user journey to prompt users to leave contact information in the shortest period of time possible after they skimmed through our web content. In addition, two things really matter - brand image and credibility, so we put some sections to boost them.'},
    {'tag':'div','class':'title','text':'Design Phases'}, 
    {'tag':'img','src':"../image/design_phase_3.jpg"},    
    {'tag':'div','class':'boldText','text':'Phase 1 - Emphasize'},
    {'tag':'div','class':'text','text':'English teaching is a red sea market in Taiwan. What is more, now people use online platforms to learn English. It became a disadvantage for this English school since they insisted students learn English face-to-face. Therefore, I did competitive analysis and sorted out their advantages and unique selling points. I also reviewed some testimonials from students who attended the class in the headquater.'},
     {'tag':'img','src':"../image/competitive_analysis_p3.jpg"},  
     {'tag':'img','src':"../image/Testimonials_p3.jpg"},  
    {'tag':'div','class':'boldText','text':'Phase 2 - Define'},
    {'tag':'div','class':'text','text':'At the stage, we discovered some problems we should prioritize in building the website. First, English learning was an extremely competitive market. For a latecomer, we should have a unique value proposition. Second, we should expose our website properly so that people could find us. Third, it matters to build credibility, especially for a new English school.'},
       {'tag':'img','src':"../image/Value_proposition_p3.jpg"}, 
    {'tag':'div','class':'boldText','text':'Phase 3 - Ideate'},
    {'tag':'div','class':'text','text':"To solve the problems we've listed at the previous stage, I discussed the information architecture with the English teachers. We decided to add two sections, Teachers' Blog and Events, other than About Us and Courses. By doing so, we expected to build our brand image and enhance credibility."},
    {'tag':'img','src':"../image/information_architecture_p3.jpg"}, 
    {'tag':'div','class':'text','text':"Judging from the advantages of this English school, we highlighted some keywords for SEO and value proposition. Every banner photo we chose should also suit the brand image. This English school was not positioned purely as a cram school. Instead, it aimed to create a 0% fear 100% confidence learning environment, in hope of equipping learners with the courage to learn other new things more than just English."},
    {'tag':'div','class':'text','text':"Though they were a small company, they wanted to look like a trustworthy and credible company. Therefore, we decided that consistency should be the key to the website. The colors, fonts, layouts and contents should follow a specific design rule."},
    {'tag':'div','class':'text','text':"Finally, we expected to open an article section where they could continuously upload articles about idioms, phrases, etc. In fact, there were hundreds of people looking for a proper English word to capture the meaning of their thoughts they could only express in Chinese. With the section, we could allow this kind of audience to reach our website."},
      {'tag':'img','src':"../image/article_p3.jpg"},
    {'tag':'div','class':'boldText','text':'Phase 4 - Prototype and Test'},
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

