Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p5.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)

DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="Whether it's for my work or the course I taught, I needed to visualise data for stakeholders to comprehend the digital marketing performance or for students to learn what problems we can solve with data visualization. Here are the problem-solving examples and real-life use cases in terms of quantitative data processing and visualization. Some examples I showed to students were extracted from Dr. Angela Yu."
Container.appendChild(DescText)

TimeLabel = document.createElement('div')
TimeLabel.setAttribute('class' , 'label')
TimeLabel.textContent="when"
Container.appendChild(TimeLabel)

TimeText = document.createElement('div')
TimeText.setAttribute('class' , 'paragraph-light')
TimeText.textContent="2021 to present"
Container.appendChild(TimeText)

AuthorLabel = document.createElement('div')
AuthorLabel.setAttribute('class' , 'label')
AuthorLabel.textContent="who"
Container.appendChild(AuthorLabel)

AuthorText = document.createElement('div')
AuthorText.setAttribute('class' , 'paragraph-light')
AuthorText.textContent="Yueh"
Container.appendChild(AuthorText)

text = [{
  'tag':'div',
  'class':'title',
  'text':"PART I - CSV Data Processing and Visualization"},
  {'tag':'div',
   'class':'text',
   'text':"In many cases, data sets are stored in the CSV format. To visualise the data sets, we have to process the CSV format first and then retrieve what we need, either digital numbers or charts. Here are some examples of processing CSV data so as to display insights into an industry or a problem."},
  {'tag':'div','class':'title','text':'1. Correlation between Majors and Salaries'},
  {'tag':'img','src':"../image/p_5_1.jpg"},
  {'tag':'div','class':'text','text':"Here is the CSV file listing salaries of different majors right after graduation and a period of time. There’re more than 40 majors, each of which is categorized either business, STEM, or HASS."},
  {'tag':'div','class':'boldText','text':' - Critial Data Retrieval'}, 
  {'tag':'div','class':'text','text':' -  Find College Major with Highest Starting Salaries'},
  
  {'tag':'div','class':'text','text':'Here we can use a single line of code to grab the highest starting salary.'},{'tag':'img','src':"../image/p_5_2.jpg"},
   
  {'tag':'div','class':'text','text':'Then we locate the place of that number and retrieve the Major column. By doing so, we can see which department generates the highest starting salary.'},  {'tag':'img','src':"../image/p_5_3.jpg"},
    {'tag':'div','class':'text','text':'Likewise, we can also answers the questions like What college major has the highest mid-career salary? How much do graduates with this major earn? Which college major has the lowest starting salary and how much do graduates earn after university? Which college major has the lowest mid-career salary and how much can people expect to earn with this degree?'},
    {'tag':'div','class':'text','text':'The way we process and retrieve the data depends on what questions are raised and what information is needed. Next, I am going to take another use case for example.'},
  {'tag':'div','class':'title','text':'2. Popular Programming Languages over Time'},
  {'tag':'img','src':"../image/p_5_4.jpg"},
    {'tag':'div','class':'text','text':'Here is a CSV file documenting the number of posts tagged with a specific programming language on Stackflow over time. For example, according to the chart, in August 2008, there were 85 posts discussing the programming language C. Next, we are going to visualise the data. Below we can see a chart showing the popularity of Java over time.'},
        {'tag':'img','src':"../image/p_5_5.jpg"},
        {'tag':'div','class':'text','text':'And this is the popularity of Python ove time.'}, 
     {'tag':'img','src':"../image/p_5_6.jpg"},
     {'tag':'div','class':'text','text':'We can present the popularity of Python and Java in the same chart for comparision.'},   
    {'tag':'img','src':"../image/p_5_7.jpg"},
   {'tag':'div','class':'text','text':'Finally, we can visualize the popularity of every programming language.'},
   {'tag':'img','src':"../image/p_5_8.jpg"},
     {'tag':'div','class':'text','text':'Still, sometimes we do not need everything on the plate. We can just pick a few key languages to be presented on the chart. Next, I will take another use case for example.'},
     {'tag':'div','class':'title','text':'3. Number of LEGO Bricks among Themes'},
     {'tag':'div','class':'text','text':'On the LEGO official website (https://rebrickable.com/downloads/), there are CSV files sorting out the sales conditions of different themes, colors, bricks and so on. Here is a bar chart visualizing the number of sets of each theme.'},
      {'tag':'img','src':"../image/p_5_9.jpg"},
      {'tag':'div','class':'title','text':'4. Correlation between Tesla Google Search Popularity and Stock Prices'},
      {'tag':'div','class':'text','text':'This is definitely one of the most interesting data visualization cases I have ever seen. It combines Google search and the stock prices.'},{'tag':'img','src':"../image/p_5_10.jpg"},
        {'tag':'div','class':'text','text':'Though we need more information to see how Google Search and stock prices are related to each other, the chart helps us catch a glimpse of the influence of online popularity on the decision-making behaviors observed in the stock market.'},
       {'tag':'div','class':'text','text':'Other than visualizing CVS data, I also processed and visualized JSON and XML files. In the next section, I will share a real-life use case, which is analyzing statistical reports from Google Analytics. As a digital marketing person, what I need is not just the report generated by Google Analytics. Customizing the data format and visual presentation is important for me to gain additional insights.'},
       {
  'tag':'div',
  'class':'title',
  'text':"PART II - Customizing Google Analytics Data Visualization"},
   {'tag':'div','class':'text','text':'To be continued...'},

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

