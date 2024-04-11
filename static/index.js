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



//Rendering portfolio photos
function render(){
	for(var i = 0; i < data_array.length; i++){
	let container = document.querySelector('.container');
	let grid_item = document.createElement('div');
	grid_item.setAttribute('class','gallery__img');
	container.appendChild(grid_item);

	let a = document.createElement('a');
	let id = data_array[i].id;
	a.setAttribute('href','../portfolio/' + String(id) + '.html');

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

//Content here
var data_array = [
{"id":6,"image":"../image/ga_img_6.jpg","info":"UI/UX, React, Python","name":"UX, Frontend - Knowledge Navigation Map"},
{"id":3,"image":"../image/ga_img_3.jpg","info":"UX/UI, API, Frontend","name":"UX, Fullstack - All-in-one Business Infra"},
{"id":5,"image":"../image/ga_img_5.jpg","info":"Python Dash Plotly","name":"UX, Fullstack - Energy Scenario Explorer"},
{"id":4,"image":"../image/ga_img_4.jpg","info":"React, Typescript, Python Flask (RESTful API), Cryptography","name":"UX, Fullstack - Bitcoin Money Generator"},
{"id":2,"image":"../image/ga_img_2.jpg","info":"HTML/CSS/Javascript, Python Flask (RESTful API), SQL, AWS","name":"Fullstack - E-commerce Website"},
{"id":1,"image":"../image/ga_img_1.jpg","info":"UI/UX, Content Strategy, Graphic Design","name":"UX Design - Cybersecurity Website"},

];

render();

//Click the portfolio block to the destination
const galleryItem = document.getElementsByClassName('gallery__img') 

for (let i = 0; i < galleryItem.length; i++) {
  let index = data_array[i]['id'];
  galleryItem[i].addEventListener('click', () => {
  window.location.href = `../portfolio/${index}.html`;
  });
}
