Section = document.querySelector('section')

Banner = document.getElementById('banner')
Banner.setAttribute('src','../image/banner_p5.jpg')

Container = document.createElement('div')
Container.setAttribute('class' , 'container')
Section.appendChild(Container)

titleText = document.createElement('div')
titleText.setAttribute('class' , 'title')
titleText.textContent="Python - Data Visualization/Processing"
Container.appendChild(titleText)

DescLabel = document.createElement('div')
DescLabel.setAttribute('class' , 'label')
DescLabel.textContent="description"
Container.appendChild(DescLabel)


DescText = document.createElement('div')
DescText.setAttribute('class' , 'paragraph-light')
DescText.textContent="Whether it's for my work or the course I taught, I needed to visualise data for stakeholders to comprehend the digital marketing performance or for students to learn what problems we can solve with data visualization. Here are the problem-solving examples and real-life use cases in terms of quantitative data processing and visualization. Some examples I showed to students were extracted from Dr. Angela Yu. And the major project is the integration of Google Analytics 4 and Python. I leveraged the API and used Python to automate the generation of commercial data reports. Here I will also show the challenges and how I ended up visualizing data in this way."
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
AuthorText.textContent="YUEH LIN"
Container.appendChild(AuthorText)

text = [
  {
  'tag':'div',
  'class':'title',
  'text':"Project at A Glance"},
  {'tag':'div',
   'class':'text',
   'text':"1. Google Analytics 4 API empowered by Python"},
   {'tag':'div',
   'class':'text',
   'text':"2. CSV Data Processing and Visualization"},
   {'tag':'div',
   'class':'text',
   'text':"3. Conclusion"},
  {
  'tag':'div',
  'class':'title',
  'text':"1. Google Analytics 4 API empowered by Python"},
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
   {'tag':'div','class':'title','text':'Future Development'},
   {'tag':'div',
   'class':'text',
   'text':"The existing design can satisfy the current needs for data visualization and the insight into promotional marketing. However, there will be more to add. I plan to integrate the frontend, build the RESTful API in the backend in order to enable my colleagues to interact with the data. That will be a different story and work in my portfolio."},

{
  'tag':'div',
  'class':'title',
  'text':"2. CSV Data Processing and Visualization"},
  {'tag':'div',
   'class':'text',
   'text':"In many cases, data sets are stored in the CSV format. To visualise the data sets, we have to process the CSV format first and then retrieve what we need, either digital numbers or charts. Here are some examples of processing CSV data so as to display insights into an industry or a problem."},
  {'tag':'div','class':'title','text':'Example 1 - Correlation between Majors and Salaries'},
  {'tag':'img','src':"../image/p_5_1.jpg"},
  {'tag':'div','class':'text','text':"Here is the CSV file listing salaries of different majors right after graduation and a period of time. There’re more than 40 majors, each of which is categorized either business, STEM, or HASS."},
  {'tag':'div','class':'boldText','text':' - Critial Data Retrieval'}, 
  {'tag':'div','class':'text','text':' -  Find College Major with Highest Starting Salaries'},
  
  {'tag':'div','class':'text','text':'Here we can use a single line of code to grab the highest starting salary.'},{'tag':'img','src':"../image/p_5_2.jpg"},
   
  {'tag':'div','class':'text','text':'Then we locate the place of that number and retrieve the Major column. By doing so, we can see which department generates the highest starting salary.'},  {'tag':'img','src':"../image/p_5_3.jpg"},
    {'tag':'div','class':'text','text':'Likewise, we can also answers the questions like What college major has the highest mid-career salary? How much do graduates with this major earn? Which college major has the lowest starting salary and how much do graduates earn after university? Which college major has the lowest mid-career salary and how much can people expect to earn with this degree?'},
    {'tag':'div','class':'text','text':'The way we process and retrieve the data depends on what questions are raised and what information is needed. Next, I am going to take another use case for example.'},
  {'tag':'div','class':'title','text':'Example 2 - Popular Programming Languages over Time'},
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
     {'tag':'div','class':'title','text':'Example 3 - Number of LEGO Bricks among Themes'},
     {'tag':'div','class':'text','text':'On the LEGO official website (https://rebrickable.com/downloads/), there are CSV files sorting out the sales conditions of different themes, colors, bricks and so on. Here is a bar chart visualizing the number of sets of each theme.'},
      {'tag':'img','src':"../image/p_5_9.jpg"},
      {'tag':'div','class':'title','text':'Example 4 - Correlation between Tesla Google Search Popularity and Stock Prices'},
      {'tag':'div','class':'text','text':'This is definitely one of the most interesting data visualization cases I have ever seen. It combines Google search and the stock prices.'},{'tag':'img','src':"../image/p_5_10.jpg"},
      {'tag':'div','class':'text','text':'Though we need more information to see how Google Search and stock prices are related to each other, the chart helps us catch a glimpse of the influence of online popularity on the decision-making behaviors observed in the stock market.'},
    {
      'tag':'div',
      'class':'title',
      'text':"3. Conclusion"},
      
    {'tag':'div','class':'text','text':'Many people think visualizing data is cool and fancy, but it all comes down to communicative strategies - the best way to deliever messages and insights to our customers. All in all, in this fast-pacing world, not only does the retrieval of priceless information make a company advantageous, but the ability to process and interpret data and information is the key to business success.'},

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

