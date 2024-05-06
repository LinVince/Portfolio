//Text Value
const main_topic_txt="YUEH COLLECTION"
const slogan_txt="Programming | UX"
const first_heading_txt="7+ Years of Digital Product Development"
const first_content_txt = "Working in the realm of high-tech empowers me to envision the boundless advantages of technology, enabling me to shape a product that precisely addresses customers' needs and seek out the transformative value I must generate to truly revolutionize the world."
const second_heading_txt = "Life is short. We should not waste time on programming something useless."


//Important Elements
const main_topic = document.getElementById('main_topic')
const slogan = document.getElementById('slogan')
const first_heading = document.getElementById('first_heading')
const first_content = document.getElementById('first_content')
const second_heading = document.getElementById('second_heading')


//Render Element Values
main_topic.innerText = main_topic_txt;
slogan.innerText = slogan_txt;
first_heading.innerText = first_heading_txt;
first_content.innerText = first_content_txt;
second_heading.innerText = second_heading_txt;



//Rendering function
function render(containerID, data_array){
	for(var i = 0; i < data_array.length; i++){
	let container = document.querySelector(containerID);
	let grid_item = document.createElement('div');
	grid_item.setAttribute('class','gallery__img');
	container.appendChild(grid_item);

	let a = document.createElement('a');
	let id = data_array[i].id;
	let category = data_array[i].category;
	a.setAttribute('href',`../${category}/${id}.html`);

	let img = document.createElement('img');
	img.setAttribute('src',data_array[i].image);
	a.appendChild(img);
	grid_item.appendChild(a);

	let desc_bar = document.createElement('div');
	desc_bar.classList.add("desc_bar");
	grid_item.appendChild(desc_bar);  

	let Info = document.createElement('span');
	Info.textContent = data_array[i].info;
	desc_bar.appendChild(Info);
	Info.setAttribute('style','margin-left: 10px;');

	let name_bar = document.createElement('div');
	name_bar.classList.add("name_bar");
	grid_item.appendChild(name_bar);

	let Name = document.createElement('span');
	Name.innerText = data_array[i].name;
	Name.setAttribute('style','margin-left: 10px; font-size:18px; margin-top:3px;');
	name_bar.appendChild(Name);
}
};

//Portfolio content here
var portfolio_data_array = [
{"id":7,"category":"portfolio","image":"../image/ga_img_11.jpg","info":"React, Typescript, zustand","name":"UX, Frontend - GameHub"},
{"id":6,"category":"portfolio","image":"../image/ga_img_6.jpg","info":"UI/UX, React, Typescript, Python","name":"UX, Frontend - Knowledge Navigation Map"},
{"id":3,"category":"portfolio","image":"../image/ga_img_3.jpg","info":"UX/UI, API, React, Typescript, Django","name":"UX, Fullstack - All-in-one Business Infra"},
{"id":5,"category":"portfolio","image":"../image/ga_img_5.jpg","info":"Python Dash Plotly","name":"UX, Fullstack - Energy Scenario Explorer"},
{"id":4,"category":"portfolio","image":"../image/ga_img_4.jpg","info":"React, Typescript, Python Flask (RESTful API), Cryptography","name":"UX, Fullstack - Bitcoin Money Generator"},
{"id":2,"category":"portfolio","image":"../image/ga_img_2.jpg","info":"HTML/CSS/Javascript, Python Flask (RESTful API), SQL, AWS","name":"Fullstack - E-commerce Website"},
{"id":1,"category":"portfolio","image":"../image/ga_img_1.jpg","info":"UI/UX, Content Strategy, Graphic Design","name":"UX Design - Cybersecurity Website"},
];

//Render portfolio
render("#portfolio_container", portfolio_data_array);

//Click the portfolio block to the destination
const PortfolioGalleryItem = document.querySelectorAll('#portfolio_container .gallery__img') 

for (let i = 0; i < PortfolioGalleryItem.length; i++) {
  let index = portfolio_data_array[i]['id'];
  let category = portfolio_data_array[i]['category']
  PortfolioGalleryItem[i].addEventListener('click', () => {
  window.location.href = `../${category}/${index}.html`;
  });
}

//proficiency content here
var proficiency_data_array = [
	{"id":1,"category":"proficiency","image":"../image/ga_img_7.jpg","info":"React (Typescript), Django (Python)","name":"Data Interaction Development & Design"},
	{"id":2,"category":"proficiency","image":"../image/ga_img_8.jpg","info":"React (Typescript), Django (Python), OpenAI","name":"GenAI Interaction Development"},
	{"id":3,"category":"proficiency","image":"../image/ga_img_9.jpg","info":"Django (Python), FastAPI, Flask","name":"Backend API Design"},
	{"id":4,"category":"proficiency","image":"../image/ga_img_10.jpg","info":"User resrach, Figma, API, SQL","name":"User-centred Technical Design"},
]

//Render proficiency
render("#proficiency_container", proficiency_data_array);

//Click the proficiency block to the destination
const ProficiencyGalleryItem = document.querySelectorAll('#proficiency_container .gallery__img') 

for (let i = 0; i < ProficiencyGalleryItem.length; i++) {
  let index = proficiency_data_array[i]['id'];
  let category = proficiency_data_array[i]['category']
  ProficiencyGalleryItem[i].addEventListener('click', () => {
  window.location.href = `../${category}/${index}.html`;
  });
}