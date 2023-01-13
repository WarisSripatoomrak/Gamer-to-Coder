//fetch for fetching API from URLs
fetch("https://gamertocoder.garena.co.th/api/minigames")
.then((response) => {
  if (response.status === 200) { 
      return response.json();
  }
})
.then ((data) => {
  const cards = document.querySelectorAll('.carousel__slide');
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i];
    const newListItem = document.createElement("div") //สร้างค่าคงที่ div element
    newListItem.classList.add("card") //เพิ่ม class "card" ให้ div element
    const genre_array = currentData.genre //สร้างค่าคงที่ genre_array ให้เท่ากับ genre
    let genre_string = genre_array[0] //สร้างตัวแปร genre_list ให้เท่ากับตัวแรกใน genre
    
    if (genre_array.length > 1) //ถ้าความยาวของ genre_array มันมากกว่า 1
    {
        for (let j = 1; j < genre_array.length; j++) //ให้ทำการ for loop ใน array "genre"
        {
            //for genre texts
            genre_string = genre_string + "　•　" + genre_array[j] //นำ string ใน genre มาต่อใน genre_string
        }
    }
    
    const html =
    `<div class="name" onclick="changeName" (` + currentData.name + `)">` + currentData.name + `</div>`
    + `<div class="genre">`  + genre_string            + `</div>`
    + `<a href="`            + currentData.icon        + `">` + `<img src="` + currentData.icon + `" class="icon"> </a>`
    + `<div class="detail">` + currentData.description + `</div>`
    //สร้าง html ในรูปแบบของ string

    html.trim() //ตัดช่องว่างออกจากตัวแปร html
    newListItem.innerHTML = html //ตั้งค่าให้ HTML ภายใน listItem เท่ากับตัวแปร html
    cards[i].appendChild(newListItem);
  }

  //for changing background images carousel
  const buttons = document.querySelectorAll("[data-carousel-button]") //should use data attribute instead of class to prevent classes & JS overlapping each other
  const images =[
    './Background Images/bed-wars.png',
    './Background Images/free-city.png',
    './Background Images/frontline.png',
    './Background Images/party-street.png',
    './Background Images/bullets-fly.png',
    './Background Images/rodent-evil.png',
    './Background Images/jail-break.png',
    './Background Images/build-and-shoot.png',
    './Background Images/sky-block.png',
    './Background Images/egg-war.png',
    './Background Images/district-13.png',
    './Background Images/night-at-school.png'
  ];
  const bodyElement = document.querySelector('body');
  buttons.forEach(button => {
      button.addEventListener("click", (event) => {
        const currentButton = event.target;
        const carousel__slide_text = "carousel__slide";
        const targetID = currentButton.href.substr(currentButton.href.indexOf(carousel__slide_text) + carousel__slide_text.length);
        bodyElement.style.backgroundImage = `url('${images[targetID - 1]}')`; //make <body> change css background-image accroding to images[i] variable
      })
  })
});
