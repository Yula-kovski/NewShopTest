/*=======--------------------------menu-btn active===============*/ 

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})





//Получить все элементы внутри header__menu с тегом a
let links = document.querySelectorAll('.header__menu a');
  links.forEach(function (element) {//Взять каждый элемент отдельный
  element.addEventListener('click', function () {//при клике на него
  menu.classList.remove('active'); // удалить класс active 
  document.querySelector('.menu-btn').classList.remove('active'); 
  })
})

/*===================================================   dark =====*/ 


function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark');
  }
}
/*===========================  buttonUp  =============================*/ 
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 200px, то делаем кнопку видимой, иначе скрываем
      scrollY > 200 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// ===================================================  category====

function openCity(evt, cityName) {
  let isActive = evt.currentTarget.classList.contains("active");

  var i, categorycontent, category__name, menu__link ;
  categorycontent = document.getElementsByClassName("categorycontent");
  for (i = 0; i < categorycontent.length; i++) {
    categorycontent[i].style.display = "none";
  }
  category__name = document.getElementsByClassName("category__name");
  for (i = 0; i < category__name.length; i++) {
    category__name[i].className = category__name[i].className.replace(" active", "");
  }

  menu__link = document.getElementsByClassName("menu__link");
  for (i = 0; i < menu__link.length; i++) {
    menu__link[i].className = menu__link[i].className.replace(" active", "");
  }

  if (isActive) {
    document.getElementById(cityName).style.display = "none";
    evt.currentTarget.className.replace(" active", "");
  } else {
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
}



function openForm() {
  console.log('open form');
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// ===================================================================== date  ===

function getDayInfo(dateString) {
  const months = [
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];

  const daysOfWeek = [
    "Воскресенье", "Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота"
  ];

  const dateParts = dateString.split(".");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month, day);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const weekNumber = Math.ceil(day / 7);

  const formattedDate = `${dayOfWeek}, ${weekNumber} неделя ${months[month]} ${year} года`;

  return formattedDate;
}

document.addEventListener("DOMContentLoaded", function() {
  var dateElements = document.querySelectorAll("*[data-date]");
  dateElements.forEach(function (dateElement) {
    var currentDate = dateElement.dataset.date;
    var formattedDate = getDayInfo(currentDate);
    dateElement.textContent = formattedDate;
  })
});

function showPurchaseMessage() {
  alert("Спасибо за покупку!");
}




var buttons = document.getElementsByClassName("custom-button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Удалить класс "active" у всех кнопок
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    
    // Добавить класс "active" к нажатой кнопке
    this.classList.add("active");
  });
}
