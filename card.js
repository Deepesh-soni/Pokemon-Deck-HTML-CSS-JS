var grid_container=document.getElementById('grid_container');

var main_card_body=document.createElement('div');
main_card_body.className='card-body';

grid_container.appendChild(main_card_body);

// *************** innner card ***************

var innerCard=document.createElement('div');
innerCard.className='inner-card-body';
main_card_body.appendChild(innerCard);

// ************** image-container ******************

var innerCard_article=document.createElement('article');
innerCard.appendChild(innerCard_article);


var innerCard_image_container=document.createElement('div');
innerCard_image_container.className='image-container';
innerCard_article.appendChild(innerCard_image_container);

var image_contrainer_img=document.createElement('img');
image_contrainer_img.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';
innerCard_image_container.appendChild(image_contrainer_img);

// *************************content-container*************

var contentContainer=document.createElement('div');
contentContainer.className="content-container";
innerCard_article.appendChild(contentContainer);