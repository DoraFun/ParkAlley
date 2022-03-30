arrowLeft = document.getElementById('arrow_left')
arrowRight = document.getElementById('arrow_right')

switchImg = document.getElementById('switch_img')
switchHeader = document.getElementById('switch_header')
switchText = document.getElementById('switch_text')
switchNumber = document.getElementById('switch_number')


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
  switchNumber.innerHTML = `0${current + 1}`
}

const toLeft = () => {
  if (current === 0) current = switchArr.length - 1
  else current -= 1
  
  updateSwitchContainer()
}

const toRight = () => {
  if (current === 4) current = 0
  else current += 1

  updateSwitchContainer()
}


arrowLeft.addEventListener('click', toLeft)
arrowRight.addEventListener('click', toRight)


body = document.getElementById('body')
bodyWidth = body.offsetWidth
bodyHeight = body.offsetHeight

popup1 = document.getElementById('popup_1')
popup1.style.width = bodyWidth + 'px'
popup1.style.height = bodyHeight + 'px'

gallery = document.getElementById('gallery')

const galleryNewWidth = bodyWidth * 0.50 

gallery.style.width = galleryNewWidth + 'px'

popup1Block = document.getElementById('popup_1_block')
popup2Block = document.getElementById('popup_2_block')

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    popup1.style.visibility = 'hidden';
    popup1Block.style.visibility = 'hidden';
    popup2Block.style.visibility = 'hidden';
  }
})

btnMain = document.getElementById('btn_main')

btnMain.addEventListener('click', () => {
  popup1.style.visibility = 'visible';
  popup1Block.style.visibility = 'visible';
  popup2Block.style.visibility = 'hidden';
})


function childOf(c,p){while((c=c.parentNode)&&c!==p);return !!c}

popup1.addEventListener('click', (e) => {
  if (childOf(popup1Block, e.target)) {
    popup1.style.visibility = 'hidden';
    popup1Block.style.visibility = 'hidden';
    popup2Block.style.visibility = 'hidden';
  }
})



window.addEventListener('scroll', e => {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) 
  {
    popup1.style.visibility = 'visible';
    popup1Block.style.visibility = 'visible';
    popup2Block.style.visibility = 'hidden';
  }
})

num1 = document.getElementById('num1')
num2 = document.getElementById('num2')

num1.addEventListener('click', e => {
  popup1.style.visibility = 'visible';
  popup1Block.style.visibility = 'hidden';
  popup2Block.style.visibility = 'visible';
})

num2.addEventListener('click', e => {
  popup1.style.visibility = 'visible';
  popup1Block.style.visibility = 'hidden';
  popup2Block.style.visibility = 'visible';
})