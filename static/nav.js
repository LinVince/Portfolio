var html = 
'<style>'+
'.top{'+
'  display:flex;'+
'  width:100%;'+
'  justify-content:center;'+
'  position: fixed;'+
'  top: 0;'+
'  z-index:12;'+
'  background-color:#FFF;'+
'  box-shadow: 1px 1px 1px 1px #DDD;'+
'}'+
'.frame{'+
'  display:flex;'+
'  font-size:20px;'+
'  width:1200px; '+
'}'+
'.heading{'+
'  background-color:#FFFFFF;'+
'  flex:auto;'+
'  width:auto;'+
'  margin:8px;'+
'}'+
''+
'#top_logo {'+
'  cursor: pointer;'+
'}'+
''+
'.desktop-menu{'+
'  display:flex;'+
'  justify-content:flex-end;'+
'  align-items:center;'+
'  background-color:#FFFFFF;'+
'  flex:none;'+
'  height:50px;'+
'  width:40%;'+
'  margin:8px;'+
'}'+
'.mobile-menu{'+
'  margin:8px;'+
''+
'}'+
'.item{'+
'  background-color:#FFFFFF;'+
'  flex:none;'+
'  width:20%;'+
'  margin-right:10px;'+
'  text-align:center;'+
'  font-family: Open Sans, sans-serif;'+
'  font-size: 18px;'+
'  font-weight: 300;'+
'  color:#757575;'+
'  transition: all 0.2s ease-in-out;'+
'  cursor:pointer;'+
'}'+
''+
'.item:hover {'+
'  color:#fa4616;'+
'}'+
''+
'</style>'


document.write( '<html>\n' );
document.write( '  <head>\n' );
document.write( '    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n' );
document.write( '    <meta charset=\"utf-8\">\n' );
document.write( '    <title>VINCENTLIN</title>\n' );
//document.write( '    <link rel=\"stylesheet\" type=\"text/css\" href=\"static/index.css\">\n' );
document.write(html);
document.write( '  </head>\n' );
document.write( '  <body>\n' );
document.write( '   <div class=\"top\">\n' );
document.write( '    <div class=\"frame\">\n' );
document.write( '      <div class=\"heading\"><img id=\"top_logo\" src=\"../image/logo.png\" style=\"width:auto;height:50px;padding-top: 0px;\" ></div>\n' );
document.write( '      <div class=\"desktop-menu\">\n' );
document.write( '        <div id=\"products_nav\" class=\"item\">Products</div>\n' );
document.write( '        <div id=\"company_nav\" class=\"item\">Company</div>\n' );
document.write( '      </div>     \n' );
document.write( '    </div>\n' );
document.write( '    </div>\n' );
//document.write( ' <script src="static/index.js"></script> ');
document.write( '  </body>\n' );
document.write( '</html>' );



const top_logo = document.getElementById('top_logo')
const products_nav = document.getElementById('products_nav')
const company_nav = document.getElementById('company_nav')


// Action
// Click Company to company page
company_nav.addEventListener('click', function(){
	window.location.href = "../company/index.html";
})

// Go to the frontpage
top_logo.addEventListener('click', function(){
	window.location.href = "../index.html";
})

// Go to the product page
products_nav.addEventListener('click', function(){
	window.location.href = "../product/index.html";
})
