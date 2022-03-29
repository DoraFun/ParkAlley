arrowLeft = document.getElementById('arrow_left')
arrowRight = document.getElementById('arrow_right')

switchImg = document.getElementById('switch_img')
switchHeader = document.getElementById('switch_header')
switchText = document.getElementById('switch_text')

backview = {
  img: './img/backview.png',
  header: 'Вид сзади',
  text: 'Открывается вид 5 жилых домов, отдельное здание паркинга, бассейн, два теннисных корта и детские площадки.'
}

pull= {
  img: './img/pull.png',
  header: 'Бассейн',
  text: 'Бассейн с подогревом,  комфортными лежаками и кофетерием.'
}

alley = {
  img: './img/alley.png',
  header: 'Прогулочная аллея',
  text: 'Парковая зеленая зона, где можно комфортно провести время или поработать.'
}

mall = {
  img: './img/mall.png',
  header: 'ТРЦ «Аллея Молл»',
  text: `Уникальный проект, который даст толчок к развитию всей инфраструктуре Дагомыса.

  Современный ТРЦ, на территории которого будут представлены известные брендовые марки, фут-корт, современные кинотеатры и фитнес залы.`
}

airview = {
  img: './img/Airview.png',
  header: 'Вид на жилой дом',
  text: `Дом бизнес-класса, материал здания: Монолит-каркас. 

  4 лифта, преддомовая парковка. `
}

switchArr = [backview, pull, alley, mall, airview]
current = 0

const updateSwitchContainer = () => {
  switchImg.src = switchArr[current].img
  switchHeader.innerHTML = switchArr[current].header
  switchText.innerHTML = switchArr[current].text
}

const toLeft = () => {
  if (current === 0) return
  current -= 1
  updateSwitchContainer()
}

const toRight = () => {
  if (current === 4) return
  current += 1
  updateSwitchContainer()
}


arrowLeft.addEventListener('click', toLeft)
arrowRight.addEventListener('click', toRight)