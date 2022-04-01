

arrowLeft = document.getElementById('arrow_left')
arrowRight = document.getElementById('arrow_right')

switchHeader = document.getElementById('switch_header')
switchText = document.getElementById('switch_text')
switchNumber = document.getElementById('switch_number')

phoneBtn1 = document.getElementById('phone_btn1')
phoneBtn2 = document.getElementById('phone_btn2')

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

switchImg1 = document.getElementById('switch_img1')
switchImg2 = document.getElementById('switch_img2')
switchImg3 = document.getElementById('switch_img3')
switchImg4 = document.getElementById('switch_img4')
switchImg5 = document.getElementById('switch_img5')

switchImg = [switchImg1, switchImg2, switchImg3, switchImg4, switchImg5]
switchArr = [backview, pull, alley, mall, airview]
current = 0

const removeImgAnim = (node, cls) => {
  node.classList.remove(cls)
}

for (i = 0; i < switchImg.length; i++) {
  switchImg[i].style.zIndex = 2
}

for (i = 1; i < switchImg.length; i++) {
  switchImg[i].style.visibility = 'hidden'
  switchImg[i].style.zIndex = 1
}

const updateSwitchContainer = (where) => {
  switchHeader.innerHTML = switchArr[current].header
  switchText.innerHTML = switchArr[current].text
  switchNumber.innerHTML = `0${current + 1}`

  currentLast = current - where
  if (currentLast === -1) currentLast = 4
  if (current === 4 && currentLast === 5) currentLast = 0

  last = switchImg[currentLast]
  next = switchImg[current]

  last.style.zIndex = 1
  next.style.zIndex = 2

  if (where === 1) {
    last.classList.add('clsGoOutRight')
    setTimeout(() => {
      removeImgAnim(last, 'clsGoOutRight')
      last.style.visibility = 'hidden'
    }, 500)
  
  
    next.classList.add('clsGoInRight')
    next.style.visibility = 'visible'
    setTimeout(() =>{
      removeImgAnim(next, 'clsGoInRight')
    }, 500)
  }

  if (where === -1) {
    last.classList.add('clsGoOutLeft')
    setTimeout(() => {
      removeImgAnim(last, 'clsGoOutLeft')
      last.style.visibility = 'hidden'
    }, 500)
  
  
    next.classList.add('clsGoInLeft')
    next.style.visibility = 'visible'
    setTimeout(() =>{
      removeImgAnim(next, 'clsGoInLeft')
    }, 500)
  }
  
}

const toLeft = () => {
  where = -1
  if (current === 0) current = switchArr.length - 1
  else current -= 1
  
  updateSwitchContainer(where)
}

const toRight = () => {
  where = 1
  if (current === 4) current = 0
  else current += 1

  updateSwitchContainer(where)
}

const handlerTo = (fun, arrow) => {
  fun()
  arrow.removeEventListener('click', fun)
  setTimeout(() => {
    arrow.addEventListener('click', fun)
  }, 500)
}

arrowLeft.addEventListener('click', () => {
  if (arrowLeft.disable === true) return
  toLeft()
  arrowLeft.disable = true
  setTimeout(() => {
    arrowLeft.disable = false
  }, 500)
})
arrowRight.addEventListener('click',() => {
  if (arrowRight.disable === true) return
  toRight()
  arrowRight.disable = true
  setTimeout(() => {
    arrowRight.disable = false
  }, 500)
})


body = document.getElementById('body')
bodyWidth = body.offsetWidth
bodyHeight = body.offsetHeight

popup1 = document.getElementById('popup_1')

gallery = document.getElementById('gallery')

const galleryNewWidth = bodyWidth * 0.50 

//gallery.style.width = galleryNewWidth + 'px'

popup1Block = document.getElementById('popup_1_block')
popup2Block = document.getElementById('popup_2_block')


const removeAnime = () => {
  setTimeout(() => popup1.classList.remove('clsFadeIn'), 1001)
}

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    popup1.style.visibility = 'hidden';
    popup1Block.style.visibility = 'hidden';
    popup2Block.style.visibility = 'hidden';

    phoneBtn1.classList.remove('popup_1-btn')
    phoneBtn2.classList.remove('popup_1-btn')
    setTimeout(() => {
      phoneBtn1.classList.add('popup_1-btn')
      phoneBtn2.classList.add('popup_1-btn')
    }, 300)
  }
})

btnMain = document.getElementById('btn_main')
btnNew1 = document.getElementById('btn_new_1')
btnNew2 = document.getElementById('btn_new_2')

const handleMainBtnClick = () => {
  popup1.style.visibility = 'visible';
  popup1Block.style.visibility = 'visible';
  popup2Block.style.visibility = 'hidden';

  popup1.classList.remove('clsFadeIn');
  popup1.classList.add('clsFadeIn');
  removeAnime();
}


btnMain.addEventListener('click', handleMainBtnClick)
btnNew2.addEventListener('click', handleMainBtnClick)


function childOf(c,p){while((c=c.parentNode)&&c!==p);return !!c}

popup1.addEventListener('click', (e) => {
  if (childOf(popup1Block, e.target)) {
    popup1.style.visibility = 'hidden';
    popup1Block.style.visibility = 'hidden';
    popup2Block.style.visibility = 'hidden';

    phoneBtn1.classList.remove('popup_1-btn')
    phoneBtn2.classList.remove('popup_1-btn')
    setTimeout(() => {
      phoneBtn1.classList.add('popup_1-btn')
      phoneBtn2.classList.add('popup_1-btn')
    }, 300)
  }
})

const show = () => {
  popup1.style.visibility = 'visible';
  popup1Block.style.visibility = 'visible';
  popup2Block.style.visibility = 'hidden';

  popup1.classList.remove('clsFadeIn');
  popup1.classList.add('clsFadeIn');
  removeAnime();
}




let checked = false

const handleScroll = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    setTimeout(show, 2000)
    checked = true
    window.removeEventListener('scroll', handleScroll)
  }
}

window.addEventListener('scroll', handleScroll)

num1 = document.getElementById('num1')
num2 = document.getElementById('num2')

const handleNumClick = () => {
  popup1.style.visibility = 'visible';
  popup1Block.style.visibility = 'hidden';
  popup2Block.style.visibility = 'visible';

  popup1.classList.remove('clsFadeIn');
  popup1.classList.add('clsFadeIn');
  removeAnime();
}

num1.addEventListener('click', handleNumClick)
num2.addEventListener('click', handleNumClick)
btnNew1.addEventListener('click', handleNumClick)

//маска телефона
document.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll('[data-mask="phone"]') // ищем все поля с атрибутом data-mask="phone"
  if (!elements) return // если таких нет, прекращаем выполнение функции
  const phoneOptions = { // создаем объект параметров
    mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
  }
  elements.forEach(el => { // для каждого найденного поля с атрибутом [data-mask="phone"]
    IMask(el, phoneOptions) // инициализируем плагин с установленными выше параметрами
  })
})

tgForm1 = document.getElementById('tg_form1')
tgName1 = document.getElementById('tg_name1')
tgPhone1 = document.getElementById('tg_phone1')
tgBtn1 = document.getElementById('tg_btn1')

tgForm2 = document.getElementById('tg_form2')
tgName2 = document.getElementById('tg_name2')
tgPhone2 = document.getElementById('tg_phone2')
tgBtn2 = document.getElementById('phone_btn1')

tgForm3 = document.getElementById('tg_form3')
tgPhone3 = document.getElementById('tg_phone3')
tgBtn3 = document.getElementById('phone_btn2')

tgForm4 = document.getElementById('tg_form4')
tgPhone4 = document.getElementById('tg_phone4')
tgBtn4 = document.getElementById('tg_btn4')


tgForm1.addEventListener('submit', (e) => {
  e.preventDefault()
  
  nameVal = tgName1.value
  phoneVal = tgPhone1.value

  if (tgBtn1.disable === true) return
  tgBtn1.disable = true

  if (phoneVal.length !== 16) {
    tgBtn1.classList.add('errorBtnAnim')

    setTimeout(() => {
      tgBtn1.classList.remove('errorBtnAnim')
      tgBtn1.disable = false
    }, 500)

    return
  }

  token = '5174707375:AAEQ6GGODXxXcCQZ3GIWxEuLF8IiC_GE87A'
  chatId = '1716833128'
  
  data = {
    name: nameVal,
    phone: phoneVal
  }

  text = `Новая заявка%0AИмя: ${nameVal}%0AНомер: ${phoneVal}`
  
  url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`

  const res = fetch(url, {
    method: 'POST',
  })

  

  tgBtn1.classList.add('successBtnAnim')

  setTimeout(() => {
    tgBtn1.classList.remove('successBtnAnim')
    tgBtn1.disable = false
  }, 800)

})

tgForm2.addEventListener('submit', (e) => {
  e.preventDefault()
  
  nameVal = tgName2.value
  phoneVal = tgPhone2.value

  if (tgBtn2.disable === true) return
  tgBtn2.disable = true

  if (phoneVal.length !== 16) {
    tgBtn2.classList.add('errorBtnAnim')

    setTimeout(() => {
      tgBtn2.classList.remove('errorBtnAnim')
      tgBtn2.disable = false
    }, 500)

    return
  }

  token = '5174707375:AAEQ6GGODXxXcCQZ3GIWxEuLF8IiC_GE87A'
  chatId = '1716833128'
  
  data = {
    name: nameVal,
    phone: phoneVal
  }

  text = `Новая заявка%0AИмя: ${nameVal}%0AНомер: ${phoneVal}`
  
  url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`

  const res = fetch(url, {
    method: 'POST',
  })

  

  tgBtn2.classList.add('successBtnAnim')

  setTimeout(() => {
    tgBtn2.classList.remove('successBtnAnim')
    tgBtn2.disable = false
  }, 800)

})

tgForm3.addEventListener('submit', (e) => {
  e.preventDefault()
  
  nameVal = 'Нет имени'
  phoneVal = tgPhone3.value

  if (tgBtn3.disable === true) return
  tgBtn3.disable = true

  if (phoneVal.length !== 16) {
    tgBtn3.classList.add('errorBtnAnim')

    setTimeout(() => {
      tgBtn3.classList.remove('errorBtnAnim')
      tgBtn3.disable = false
    }, 500)

    return
  }

  token = '5174707375:AAEQ6GGODXxXcCQZ3GIWxEuLF8IiC_GE87A'
  chatId = '1716833128'
  
  data = {
    name: nameVal,
    phone: phoneVal
  }

  text = `Новая заявка%0AИмя: ${nameVal}%0AНомер: ${phoneVal}`
  
  url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`

  const res = fetch(url, {
    method: 'POST',
  })

  

  tgBtn3.classList.add('successBtnAnim')

  setTimeout(() => {
    tgBtn3.classList.remove('successBtnAnim')
    tgBtn3.disable = false
  }, 800)

})



tgForm4.addEventListener('submit', (e) => {
  e.preventDefault()
  
  nameVal = 'Нет имени'
  phoneVal = tgPhone4.value

  if (tgBtn4.disable === true) return
  tgBtn4.disable = true

  if (phoneVal.length !== 16) {
    tgBtn4.classList.add('errorBtnAnim')

    setTimeout(() => {
      tgBtn4.classList.remove('errorBtnAnim')
      tgBtn4.disable = false
    }, 500)

    return
  }

  token = '5174707375:AAEQ6GGODXxXcCQZ3GIWxEuLF8IiC_GE87A'
  chatId = '1716833128'
  
  data = {
    name: nameVal,
    phone: phoneVal
  }

  text = `Новая заявка%0AИмя: ${nameVal}%0AНомер: ${phoneVal}`
  
  url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`

  const res = fetch(url, {
    method: 'POST',
  })

  

  tgBtn4.classList.add('successBtnAnim')

  setTimeout(() => {
    tgBtn4.classList.remove('successBtnAnim')
    tgBtn4.disable = false
  }, 800)

})
