<template>
  <div class="flex flex-col" style="overflow-x: hidden;">
    <div class="menu z-50" :class="{'open': !burger}">
      <div class="content">
        <nav class="flex flex-col text-white p-4 sm:text-4xl text-xl">
          <div class="flex flex-row w-full justify-between pt-8">
            <a class="mb-4"  @click="changeBurger('#how')" href="#how">Как начать</a>
            <div class="burger justify-center flex" :class="{'close': !burger}" @click="changeBurger()">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <a class="mb-4"  @click="changeBurger('#calculator')" href="#calculator">Сколько я заработаю</a>
          <a class="mb-4"  @click="changeBurger('#edge')" href="#edge">Преимущества</a>
          <a class="mb-4"  @click="changeBurger('#sale')" href="#sale">Акции</a>
          <a class="mb-4"  @click="changeBurger('#liding')" href="#liding">Лизинг авто</a>
          <a class="mb-4"  @click="changeBurger('#form')" href="#form">Подать заявку</a>
          <a class="mb-4"  @click="changeBurger('#contacts')" href="#contacts">Контакты</a>
        </nav>
      </div>
    </div>
    <section class="first flex flex-row">
      <div class="flex justify-end w-full pt-13 pb-0 sm:py-13 bg-black text-white z-0">
        <div class="content-min flex flex-col">
          <div class="flex flex-row w-full justify-between mb-32 text-4xl sm:text-2xl">
            <span>Taxi<span class="text-yellow">Kolesa</span></span>
            <div class="burger justify-center sm:hidden flex" :class="{'close': !burger}" @click="changeBurger()">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <a href="tel:+7 (747) 094 3434" class="hidden sm:flex flex-row">
              <img class="mr-3" src="/static/phone.svg" alt="">
              +7 (747) 094 3434
            </a>
          </div>
          <div class="flec flex-col font-bold">
            <div><div class="whitespace-no-wrap text-2xl sm:block flex flex-col items-end w-auto"><span>ОТ <span class="text-6xl sm:text-8xl mx-2 sm:mx-8">350 000<span class="text-3xl"> тг</span></span></span><span class="flex sm:inline justify-end">  В МЕСЯЦ</span></div></div>
            <div class="text-4xl mt-12">Подключитесь к высокому заработку и получите <span class="text-yellow">5 000тг</span> за регистрацию</div>
            <div class="text-xl mt-4 sm:mt-2">с Taxi Kolesa - Крупнейшим партнером Яндекс-такси Казахстан</div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col w-full sm:w-3/4 items-center sm:items-start relative z-10">
              <div class="hidden sm:flex flex-col mt-16 text-gray leading-6">
                <span>- Отсутствие дополнительных платежей</span>
                <span>- Самое большое количество заказов</span>
                <span>- Выплаты 24/7</span>
                <span>- Бонусы и партнерские программы для водителей</span>
              </div>
              <div class="mt-12">
                <a href="#form" class="button bg-yellow text-black rounded-full py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-white hover:bg-black hover:border-yellow">Зарегистрироваться</a>
              </div>
            </div>
            <div class="first-auto w-full sm:w-1/4 z-0">
              <img class="auto z-0" src="/static/auto.png?1">
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-start bg-yellow" style="padding-top: 0.5rem">
        <div class="content-min flex flex-col items-end">
          <div>
            <div class="burger justify-center hidden sm:flex" :class="{'close': !burger}" @click="changeBurger()">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="how" class="second bg-yellow z-0 pt-16 pb-8 text-black-100">
      <div class="flex flex-col">
        <div class="content flex flex-row">
          <div class="flex flex-col w-full w-full sm:w-1/2">
            <div class="flex flex-col sm:flex-row w-full justify-start pr-12">
              <span class="text-4xl w-auto font-extrabold">Как начать зарабатывать?</span>
              <span class="text-lg w-full pl-0 py-4 sm:py-0 sm:pl-8 leading-7">Полностью расписанные шаги. Все проходит в <span class="text-white font-bold">онлайн-режиме.</span><br> Документы проверяются сразу!</span>
            </div>

            <div class="flex flex-row flex-wrap bg-white abouter">
              <div class="flex flex-col w-full sm:w-1/2" v-for="(abouter, i) in abouters" :key="abouter.title">
                <div class="cell bg-yellow color-black text-2xl flex justify-center items-center rounded-full">{{i + 1}}</div>
                <span class="text-lg font-bold mt-3 mb-1">{{abouter.title}}</span>
                <span class="text-sm opacity-50 pr-0 sm:pr-20 pb-12" v-html="abouter.more"></span>
              </div>
            </div>

          </div>
          <div class="flex flex-col justify-end relative w-1/2" ref="muzhik-container">
            <div class="muzhik hidden sm:block" ref="muzhik"></div>
            <img class="block sm:hidden" src="/static/muzhik_ssadi.png?3" style="min-width: 50vw; min-height: 100%">
          </div>
        </div>
        <div class="content" style="padding-right: 2rem">
          <a href="#form" class="button text-center bg-white text-black rounded-md mt-12 py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-white hover:bg-black hover:border-white" style="position: relative;margin-top: 3rem; transform: none">Зарегистрироваться</a>
        </div>
      </div>
    </section>
    <section id="calculator" class="third bg-white">
      <div class="content flex flex-col sm:flex-row">
        <div class="flex flex-col w-full border-0 sm:w-1/2">
          <h2>Сколько я заработаю?</h2>
          <span class="sm:pr-8 pr-0 pt-8 pb-16 w-full sm:w-10/12">Из расчета в среднем 3000 тенге в час. На основе данных о работе <span class="font-bold">5000 водителей!</span></span>
          <div class="calculator flex flex-col w-full sm:w-10/12 items-start sm:items-center">

            <h2 class=" mt-10">{{hours.end}} {{getHours}}</h2>
            <p>В день</p>
            <div class="flex w-full items-start">
              <v-slider min="0" max="10" v-model="hours" :end="hours.end" :steps="[0,1,2,3,4,5,6,7,8,9,10]" style="min-width: 470px" />
            </div>
            <h2 class=" mt-10">{{days.end}} {{getDays}}</h2>
            <p>в неделю</p>
            <div class="flex w-full items-start">
              <v-slider min="0" max="6" v-model="days" :end="days.end" :steps="[1,2,3,4,5,6,7]" style="max-width: 360px" />
            </div>
            <h2 class=" mt-20">{{getPrice}} тенге</h2>
            <p class=" opacity-50">В неделю</p>
            <div class="w-full flex justify-center"><a href="#form" class="button bg-black text-white rounded-full py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-black hover:bg-white hover:border-yellow">Зарегистрироваться</a></div>
          </div>
        </div>
        <div class="flex flex-col phone_hand">
          <h2 class="with-left">Вывод средств в один клик!</h2>

          <span class="mt-12 w-full sm:w-7/12" style="line-height: 36px;">
            С нами Вам не нужно ездить в таксопарк, чтобы забрать деньги, которые Вы заработали
            <br><br>
              Вы просто выбираете сумму, <br>
              которую хотите вывести,<br>
              нажимаете на кнопку, <br>
              и через 1 минуту деньги <br>
              приходят Вам на карту<br>
          </span>
        </div>
      </div>
    </section>
    <section id="edge" class="fourth">
      <div class="content flex flex-col">
        <h2 class="text-white font-semibold text-4xl ml-0 sm:ml-20">Наши преимущества</h2>
        <div class="flex flex-col sm:flex-row">
          <template v-for="(plus, i) in pluses">
            <div class="plus w-full sm:w-1/4 flex flex-col items-center bg-white px-10 pt-2 pb-6" :key="plus.title">
              <div class="img" :style="{backgroundImage: `url(/static/taxi-${i}.png)`}"></div>
              <h2>{{plus.title}}</h2>
              <span>{{plus.about}}</span>
              <div><a :href="'tel:' + plus.tel" v-if="plus.tel">{{plus.tel}}</a></div>
            </div>
          </template>
        </div>
        <div class="content flex justify-center">
          <a href="#form" class="button bg-white text-black rounded-md mt-24 py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-white hover:bg-transparent hover:border-yellow">Зарегистрироваться</a>
        </div>

      </div>
    </section>
    <section id="sale" class="fifth bg-yellow">
      <div class="content flex items-center flex-col">
        <h2 class="relative flex items-center">А еще</h2>
        <div class="flex w-full flex-col sm:flex-row">
          <div class="more f w-full sm:flex-w-1/2  mr-6">
            <div class="flex flex-col items-start justify-end w-full h-full">
              <h3>-20% скидка</h3>
              <span>на автострахование для всех наших<br> водителей по Казахстану.</span>
              <img src="/static/dogovor.png" alt="">
            </div>
          </div>
          <div class="more s w-full sm:flex-w-1/2 mt-11 sm:mt-0">
            <div class="flex flex-col items-start justify-start w-full h-full">
              <h3>-20% скидка</h3>
              <span>на ремонт авто для абсолютно всех<br> водителей по городу Алматы.</span>
              <img src="/static/auto.png?1" alt="">
            </div>
          </div>
        </div>
        <div class="more w-full t">
          <div class="flex flex-col items-start justify-center w-full h-full">
            <h3>-20% скидка</h3>
            <span>на мойку авто и химчистку салона<br> для всех водителей.</span>
            <img src="/static/avtomoyka.png" alt="">
          </div>
        </div>
        <div class="content flex justify-center">
          <a href="#form" class="button bg-white text-black rounded-md mt-4 py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-white hover:bg-transparent hover:border-white">Зарегистрироваться</a>
        </div>
      </div>
    </section>
    <section id="liding" class="sixth">
      <div class="content flex flex-col items-center text-white">
        <div><h3 class="text-center">Если у Вас <span>нет личного авто</span>, то <span>мы предоставим</span>!<br>Приглашаем <span>водителей</span> в г.Алматы на<br> <span>постоянную работу</span> в режиме такси на нашем <br>автомобиле</h3></div>
        <div class="nexia w-full bg-white flex flex-col items-center">
          <h2>Ravon <span>Nexia</span></h2>
          <span>2020 года 1.5л / Механика</span>
          <img src="/static/nexia.png?2">
        </div>
      </div>
      <div class="content flex justify-center">
        <a href="#form" class="button bg-yellow text-black rounded-md mt-16 py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-white hover:bg-transparent hover:border-yellow">Зарегистрироваться</a>
      </div>
    </section>
    <section id="form" class="seventh py-16">
      <div class="content">
        <form class="flex flex-col items-center" @submit.prevent="sendData">
          <h2>Подключись прямо сейчас!</h2>
          <span>И получи  <span class="font-bold">5000тг</span>  на свой счет за<br>регистрацию</span>
          <label>
            <span :class="{'text-red-600': checkData.indexOf('fio') > -1 && form.fio}">ФИО</span>
            <input placeholder="Введите ФИО ..." :class="{'border-red-600': checkData.indexOf('fio') > -1 && form.fio}" required minlength="3" name="name" v-model="form.fio">
          </label>
          <label>
            <span :class="{'text-red-600': checkData.indexOf('city') > -1 && form.city}">Ваш город</span>
            <input placeholder="Алматы" name="city" :class="{'border-red-600': checkData.indexOf('city') > -1 && form.city}" required minlength="3" v-model="form.city">
          </label>
          <label>
            <span :class="{'text-red-600': checkData.indexOf('phone') > -1 && form.phone}">Номер телефона</span>
            <input placeholder="8 (700) - 000 - 00 - 00" :class="{'border-red-600': checkData.indexOf('phone') > -1 && form.phone}" required name="phone" v-mask="'8 (###) - ### - ## - ##'" v-model="form.phone">
          </label>
          <div class="mt-4">
            <button class="button bg-black text-white rounded-full py-6 px-16 font-bold w-auto border-transparent border-2 hover:text-white hover:bg-transparent hover:border-white">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </section>
    <section id="contacts" class="eighth bg-white text-black">
      <div class="content flex flex-row flex-wrap">
        <template v-for="address in addresses">
          <div class="flex flex-col w-full pr-4 sm:w-1/2" :key="address.title">
            <div class="flex flex-row items-center">
              <img src="/static/arr.svg" alt="">
              <h3>{{address.title}}</h3>
              <img @click="address.show = !address.show" class="block sm:hidden cursor-pointer" :class="{'active': address.show }" src="/static/arrow.svg" alt="">
            </div>
            <div class="office" :class="{'active': address.show }">
              <template v-for="office in address.offices">
                <span :key="office">{{office}}</span>
              </template>
            </div>
          </div>
        </template>
      </div>
    </section>
    <footer class="flex flex-row">
      <div class="flex justify-end w-full bg-black text-white z-0">
        <div class="content-min flex flex-row">
          <div class="flex flex-col sm:flex-row w-full justify-between text-2xl">
            <span class="flex items-center sm:block">
              <span><span class="font-bold">Taxi</span>Kolesa</span>
              <div class="flex sm:hidden w-full flex-row justify-end">
                <div class="ml-4 cursor-pointer"><img src="/static/facebook.png" alt=""></div>
                <div class="ml-4 cursor-pointer"><img src="/static/instagram.png" alt=""></div>
                <div class="ml-4 cursor-pointer"><img src="/static/telegram.png" alt=""></div>
              </div>
            </span>
            <a href="tel:+7 (747) 094 3434" class="flex flex-row">
              <img class="mr-3" src="/static/phone.svg" alt="">
              +7 (747) 094 3434
            </a>
          </div>
        </div>
      </div>
      <div class="hidden sm:flex w-full px-8 flex-row bg-yellow">
        <div class="content-min flex flex-row justify-end">
          <div class="mr-6 cursor-pointer"><img src="/static/facebook.png" alt=""></div>
          <div class="mr-6 cursor-pointer"><img src="/static/instagram.png" alt=""></div>
          <div class="mr-6 cursor-pointer"><img src="/static/telegram.png" alt=""></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import vSlider from './components/slider'
export default {
  components: { vSlider },
  data(){
    return {
      hours: {end: 8},
      days: {end: 5},
      burger: true,
      form: {
        phone: '',
        city: '',
        fio: ''
      },
      load: false,
      error: false,
      addresses: [
        {
          title: 'Нур-Султан',
          show: false,
          offices: ['▪ ул. Брусиловского 5, (уг. ул. Иманова) +7 707 180 58 30. ПН-СБ 10:00-19:00', '▪ ул. Момышулы 15А (вход со стороны автострахования) +7 708 340 64 51. ПН-ПТ 10:00-18:00 СБ 10:00-18:00', '▪ ул. Женис 75 (напротив Аграрного Университета, вход в ломбард) +7 776 994 04 79. ПН-ПТ 10:00-18:00 СБ 10:00-18:00']
        },
        {
          title: 'Алматы',
          show: false,
          offices: ['▪ Толе би 150 (уг.ул. Исаева) +7 708 569 51 71 ПТ-СБ 10:00-19:00', '▪ Райымбека 251г. ПН-ПТ 10:00 -19:00 СБ 10:00 - 18:00']
        },
        {
          title: 'Актобе',
          show: false,
          offices: ['▪ ул. Молдагулова 54Б +7 775 828 91 51 ПН-ПТ 10:00-18:00']
        },
        {
          title: 'Уральск',
          show: false,
          offices: ['▪ ул. Курмангазы 96 (ТЦ “Кристалл” 2 этаж, 9 каб.) +7 777 515 84 02 ПН-ПТ 10:00-18:00 СБ 10:00-14:00']
        },
        {
          title: 'Семей',
          show: false,
          offices: ['▪ ул. Социалистическая 4 (2 этаж, 3 каб.) +7 705 716 25 89 ПН-ПТ 10:00-18:00 СБ 10:00-14:00', '▪ ул. Молдагулова 54Б +7 775 828 91 51 ПН-ПТ 10:00-18:00']
        },
        {
          title: 'Петропавловск',
          show: false,
          offices: ['▪ ул. Жамбыла Жабаева 161 (напротив “Айсберга”) +7 700 666 43 14 ПН-ПТ 10:00-18:00 СБ 10:00-14:00']
        },
        {
          title: 'Павлодар',
          show: false,
          offices: ['▪ ул. М. Жусупа, 40 (вход в ломбард “Паритет” со стороны ул. Истая). +7 707 559 42 38 ПН-ПТ 10:00-18:00 СБ 10:00-14:00']
        },
        {
          title: 'Кызылорда',
          show: false,
          offices: ['▪ ул. Усербаева 67А (здание Евразийского банка 3 этаж) +7 707 243 01 20 ПН-ПТ 10:00-18:00 СБ 10:00-14:00']
        },
        {
          title: 'Тараз',
          show: false,
          offices: ['▪ ул. Аль-Фараби 9 (между 4 и 5 мкр) +7 707 785 64 32 ПН-ПТ 10:00-18:00 СБ 10:00-14:00']
        },
        {
          title: 'Шымкент',
          show: false,
          offices: ['▪ ул. Тауке хана 45 (ул.ул. Ташенова) +7 705 982 76 75 ПН-ПТ 10:00-18:00 СБ 10:00-14:00']
        }
      ],
      abouters: [
        {
          title: 'Оставить заявку',
          more: 'Ввести свои контактные данные.<br> Дождаться звонка от оператора'
        },
        {
          title: 'Отправить документы',
          more: 'Водительское удостверение, Техпаспорт'
        },
        {
          title: 'Пройти фотоконтроль',
          more: 'Пройти фотоконтроль авто и водительского уодстверения'
        },
        {
          title: 'Взять первый заказ',
          more: 'Выйти на линию, взять первый заказ и начать зарабатывать!'
        }
      ],
      pluses: [
        {
          title: 'Много заказов',
          about: 'Много заказов в любое время дня и ночи',
        },
        {
          title: 'Круглосуточная поддержка',
          about: 'Круглосуточная поддержка 24/7. Отвечаем быстро!',
          tel: '+7 747 094 44 42'
        },
        {
          title: 'Гарантированные выплаты',
          about: 'Выплаты производятся автоматизированно в любое время.',
        },
        {
          title: 'Свободный график',
          about: 'Вы сами выбираете и планируете свой рабочий график',
        }
      ],
      constant_pay: 4237
    }
  },
  computed: {
    getHours(){
      let result = 'часов'
      if(this.hours.end === 1)
        result = 'час'
      else if(this.hours.end && this.hours.end < 5)
        result = 'часа'
      return result
    },
    getDays(){
      let result = 'дней'
      if(this.days.end === 1)
        result = 'день'
      else if(this.days.end && this.days.end < 5)
        result = 'дня'
      return result
    },
    getPrice(){
      let result = 0
      for(let i = 0; i < this.days.end; i++)
        result += this.hours.end *( this.constant_pay + (i**2))

      result += ''
      result = result.split('').reverse().reduce((prev, x) => {
        let now = prev
        if(now.replace(/\D+/g,"").length % 3 === 0)
          now += ' '
        return now + x
      },'').split('').reverse().reduce((prev, x) => prev + x)
      return result
    },
    checkData(){
      let result = ''
      if(this.form.fio.length < 3)
        result +=  'fio '
      if(this.form.city.length < 3)
        result +=  'city '
      let arr = [700,701,702,703,704,705,706,707,708,709,747,750,751,760,761,762,763,764,771,775,776,777,778]
      if(!arr.includes(parseInt(this.form.phone.substr(3,3))) || this.form.length < 23)
        result +=  'phone'
      return result
    }
  },
  created(){
    this.$nextTick(() => {
      // if(this.$refs['muzhik-container'].clientHeight)
      //   this.$refs['muzhik'].style.height = this.$refs['muzhik-container'].clientHeight + 'px'
    })
  },
  methods: {
    changeBurger(url){
      if(url){
        window.location.replace(url)
      }
      this.burger = !this.burger
    },
    sendData(e){
      if(!this.load && !this.checkData){
        this.error = false
        this.load = true
        let data = this.changeData(this.form)
        this.$axios
        .post(
          "mail.php",
          data
        )
        .then(res => {
          this.load = false
          window.location.replace('thankyou')
        })
        .catch(err => {
            new Error(err)
        })
      }
    },
    changeData(data){
      let formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
      return formData
    }
  }
}
</script>

<style lang="scss" scoped>
  .muzhik{
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: url("/static/muzhik.png") no-repeat;
    background-size: contain;
    background-position: left;
  }
  .menu{
    width: 100vw;
    height: 100vh;
    background-color: #212121;
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(100%);
    transition: 0.3s;
    &.open{
      transform: translateX(0)
    }
  }
  .burger{
    flex-direction: column;
    align-items: flex-end;
    height: auto;
    transform: translateX(-0%);
    cursor: pointer;
    &.flex{
      &>div{
        background-color: white;
      }
    }
    &>div{
      background-color: #2B2B2B;
      border-radius: 4px;
      width: 34px;
      margin-bottom: 7px;
      height: 4px;
      transition: 0.3s;
      &:nth-child(2){
        width: 21px;
      }
    }
    &.close{
      &>div{
        width: 34px;
        transform: rotate(-45deg) translate(-35%, 270%);
        &:nth-child(2){
          opacity: 0;
        }
        &:last-child{
          transform: rotate(45deg) translate(-15%, -80%);
        }
      }

    }
  }
  .first-auto{
    height: 0;
    position: relative;
    &:before{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100vw;
      max-width: 153px;
      height: 100vh;
      max-height: 141px;
      transform: translate(75%, 423px) scale(0.75);
      opacity:  0.5;
      background: url('/static/cyrcles-grid.svg');
      z-index: 0;
    }
  }
  button, .button {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
  }
  .abouter{
    margin-top: 44px;
    padding: 41px 61px 41px 61px; 
    position: relative;
    &::after{
      content: "";
      position: absolute;
      right: 0;
      height: 100%;
      width: 1px;
      bottom: 0;
      opacity: 0.1;
      background-color: #000000;
    }
    & .cell{
      max-width: 54px;
      max-height: 54px;
      min-width: 54px;
      min-height: 54px;
    }
    & .pr-20{
      padding-right: 5.25rem;
    }
  }
  .content{
    width: 100%;
    max-width: calc(1366px + 4rem);
    padding: 0 2rem;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
  .content-min{
    width: 100%;
    max-width: calc((1366px + 4rem) / 2);
    padding: 0 2rem;
  }
  section{
    width: 100vw;
    position: relative;
    &.first{
      height: auto;
      min-height: 968px;
      overflow: hidden;
      & .content-min{
         padding-top: 2rem;
      }
    }
    &.second{
      &:before{
        content: "";
        position: absolute;
        left: 0;
        width: 100vw;
        max-width: 555px;
        height: 100vh;
        max-height: 555px;
        transform: translateX(-75%);
        background: url('/static/symbols.png');
      }
    }
    &.third{
      &:before{
        content: "";
        position: absolute;
        left: 0;
        width: 100vw;
        max-width: 555px;
        height: 100vh;
        max-height: 555px;
        transform: translate(-50%, 40%);
        background: url('/static/symbols.png');
        z-index: 0
      }
      &:after{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100vw;
        max-width: 555px;
        height: 100vh;
        max-height: 555px;
        transform: translate(40%, 40%);
        background: url('/static/symbols.png');
        z-index: 0;
      }
      & .content{
        &>div{
          padding-top: 68px;
          padding-bottom: 68px;
          padding-left: 110px;
          position: relative;
          &:first-child{
            padding-left: 0;
            padding-right: 75px;
            border-right: 1px solid #00000010;
          }
          &:last-child{
            &:before{
              content: "";
              position: absolute;
              left: 0;
              width: 100vw;
              max-width: 153px;
              height: 100vh;
              max-height: 141px;
              transform: translate(-40%, 175%) scale(0.75);
              opacity:  0.05;
              background: url('/static/cyrcles-grid.svg');
            }
          }
          &.phone_hand{
            background-image: url('/static/phone_hand.png?2');
            background-repeat: no-repeat;
            background-position: 100% 100%;
          }
          & h2{
            font-weight: 800;
            font-size: 36px;
            line-height: 150%;
            &.with-left{
              display: flex;
              align-items: center;
              position: relative;
              &:before{
                max-width: 16px;
                max-height: 16px;
                min-width: 16px;
                min-height: 16px;
                left: -22px;
                content: "";
                position: absolute;
                background: #FFCB5B;
                border-radius: 50%;
              }
            }
          }
          & p{
            font-size: 16px;
            line-height: 26px;
            color: #212121;
            margin-bottom: 44px;
          }
          & span{
            font-size: 18px;
            line-height: 26px;
            color: #232323;
            opacity: 0.9;
            &>span{
              color: #FFDB4D;
            }
          }
        }
      }
    }
    &.fourth{
      padding-top: 64px;
      padding-bottom: 90px;
      background-color: #212121;
      &>.content{
        max-width: calc(1466px + 4rem);
      }
      &>.content>div:nth-child(2){
        position: relative;
        &:before{
          content: "";
          position: absolute;
          left: 50%;
          width: 100vw;
          max-width: 153px;
          height: 100vh;
          max-height: 141px;
          transform: translate(-40%, -10%) scale(0.75);
          opacity:  0.2;
          background: url('/static/cyrcles-grid.svg');
          z-index: 0;
        }
      }
      & .plus{
        border-radius: 23px;
        margin-right: 21px;
        margin-top: 40px;
        z-index: 1;
        position: relative;
        &:first-child{
          &:before{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100vw;
            max-width: 153px;
            height: 100vh;
            max-height: 141px;
            transform: translate(-27.5%, 50%) scale(0.75);
            opacity:  0.2;
            background: url('/static/cyrcles-grid.svg');
            z-index: 0;
          }
          &:after{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 53px;
            border-bottom-right-radius: 23px;
            border-bottom-left-radius: 23px;
            background-color: white;
            z-index: 0;
          }
        }
        &:last-child{
          margin-right: 0;
          &:before{
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 100vw;
            max-width: 153px;
            height: 100vh;
            max-height: 141px;
            transform: translate(35%, 50%) scale(0.75);
            opacity:  0.2;
            background: url('/static/cyrcles-grid.svg');
            z-index: 0;
          }
          &:after{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 53px;
            border-bottom-right-radius: 23px;
            border-bottom-left-radius: 23px;
            background-color: white;
            z-index: 0;
          }
        }
        & .img{
          width: 100%;
          max-width: 206px;
          height: 206px;
          background-repeat: no-repeat;
          background-position: 50% 50%;
        }
        & h2{
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          text-align: center;
          color: #000000;
        }
        & span{
          margin: 9px 0;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #000000;
          opacity: 0.5;
        }
        & a {
          width: auto;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #24B4E6;
          opacity: 0.9;
          cursor: pointer;
          border-bottom: 1px dashed #24B4E6;
          &:hover{
            color: #ff1d1d;
            border-color: #ff1d1d;
          }
        }
      }
    }
    &.fifth{
      padding-top: 55px;
      padding-bottom: 45px;
      padding-left: 135px;
      padding-right: 135px;
      & h2{
        font-weight: 800;
        font-size: 36px;
        line-height: 30px;
        margin-bottom: 72px;
        color: #000000;
        &:before{
          content: "";
          max-width: 16px;
          max-height: 16px;
          min-width: 16px;
          min-height: 16px;
          border-radius: 50%;
          position: absolute;
          left: -38px;
          background: #24B3E6;
        }
      }
      & .more{
        color: white;
        height: 380px;
        position: relative;
        &>div{
          border-radius: 5px;
          position: relative;
        }
        & img{
          position: absolute;
          z-index: 0;
        }
        & h3{
          font-weight: 800;
          font-size: 36px;
          line-height: 30px;
          z-index: 1;
          position: relative;
        }
        & span{
          font-size: 18px;
          line-height: 22px;
          opacity: 0.5;
          margin-top: 10px;
          z-index: 1;
          position: relative;
        }
        &.f{
          &>div{
            padding: 38px;
            background-color: #474A85;
          }
          & img{
            top: -10%;
            right: -0%;
          }
          &:before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            max-width: 153px;
            height: 100vh;
            max-height: 141px;
            transform: translate(-45%, -45%) scale(0.75);
            opacity:  0.2;
            background: url('/static/cyrcles-grid.svg');
            z-index: 0;
          }
        }
        &.s{
          &>div{
            padding: 54px;
            color: black;
            background-color: white;
            overflow: hidden;
          }
          & img{
            max-width: 150%;
            right: -45%;
            bottom: -20%;
          }
          &:before{
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100vw;
            max-width: 153px;
            height: 100vh;
            max-height: 141px;
            transform: translateY(70%) scale(0.75);
            opacity:  0.2;
            background: url('/static/cyrcles-grid.svg');
            z-index: 0;
          }
        }
        &.t{
          &>div{
            margin-top: 43px;
            height: 268px;
            padding: 80px 135px;
            background: linear-gradient(90deg, rgba(0, 87, 255, 0.7) 7.5%, rgba(253, 55, 197, 0.7) 101.61%);
          }
          & img{
            top: -15%;
            right: -5%;
          }
          &:before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100vw;
            max-width: 153px;
            height: 100vh;
            max-height: 141px;
            transform: translate(20%, -15%) scale(0.75);
            opacity:  0.2;
            background: url('/static/cyrcles-grid.svg');
            z-index: 0;
          }
        }
      }
    }
    &.sixth{
      padding-top: 85px;
      padding-bottom: 64px;
      background-color: #212121;
      padding-left: 135px;
      padding-right: 135px;
      & h3{
        font-weight: 800;
        font-size: 36px;
        line-height: 52px;
        margin-bottom: 82px;
        &>span{
          color: #FFDB4D;
        }
      }
      & .nexia{
        padding-top: 29px;
        border-radius: 5px;
        & h2, & h2>span{
          font-weight: 800;
          font-size: 36px;
          line-height: 52px;
          color: #000000;
          &>span{
            color: #24B3E6;
          }
        }
        & span{
          font-size: 18px;
          line-height: 22px;
          color: #9E9E9E;
          opacity: 0.5;
          margin-bottom: 16px;
        }
      }
    }
    &.seventh{
      padding-left: 75px;
      padding-right: 75px;
      background-color: #F9F9F9;
      & form{
        padding: 52px 2rem;
        background-color: #FFDB4D;
        & h2{
          font-weight: 800;
          font-size: 36px;
          line-height: 52px;
          text-align: center;
          color: #000000;
        }
        & span{
          font-size: 18px;
          line-height: 26px;
          text-align: center;
          color: #515151;
          margin-top: 25px;
          margin-bottom: 30px;
          &>span{
            color: white;
          }
        }
        &>label{
          width: 100%;
          max-width: 500px;
          box-sizing: border-box;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: start;
          position: relative;
          margin-bottom: 25px;
          &>span{
            margin: 0;
            left: 30px;
            top: 10px;
            position: absolute;
            font-size: 12px;
            line-height: 26px;
            &.text-red-600 {
              color: #e53e3e;
            }
            
          }
          &>input{
            padding-top: 36px;
            padding-bottom: 21px;
            padding-left: 30px;
            padding-right: 30px;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: transparent;
            outline: none;
            font-size: 16px;
            line-height: 26px;
            border: 1px solid #212121;
            color: #212121;
            &::placeholder{
              color: #212121;
            }
            &.border-red-600 {
              border-color: #e53e3e;
            }
          }
        }
      }
    }
    &.eighth{
      padding-left: 135px;
      padding-right: 135px;
      padding-top: 94px;
      padding-bottom: 94px;
      
      & h3{
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 1.5px;
      }
      & img{
        margin-right: 1rem;
        &:last-child{
          margin-left: 1rem;
          transition: 0.3s;
          &.active{
            transform: scale(1, -1);
          }
        }
      }
      & .w-full{
        margin-bottom: 22px;
      }
      & .w-full>div:first-child{
        margin-bottom: 22px;
      }
      & span{
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 1.5px;
        max-width: 400px;
        &:last-child{
          margin-bottom: 65px;
        }
      }
    }
  }
  footer{
    &>div{
      padding-top: 33px;
      padding-bottom: 33px;
    }
  }
  .auto {
    width: 100vw;
    max-width: 1883px;
    transform: translate(-10%, -50%);
  }
  @media screen and (max-width: 1386px) {
    section.third .content>div{
      padding-left: 80px;
    }
  }
  @media screen and (max-width: 1326px) {
    section.third .content>div{
      padding-left: 40px;
    }
  }
  @media screen and (max-width: 1280px) {
    .abouter{
      padding-right: 1rem;
    }
    section.second .content>*{
      &:first-child{
        z-index: 1;
        & .pr-12{
          margin-bottom: 200px;
          flex-direction: column;
        }
      }
      &:last-child{
        z-index: 0;
        position: absolute;
        margin-top: 150px;
        width: 100%;
        transform: translateX(-33%);
      }
    }
  }
  @media screen and (max-width: 1250px) {
    section.third .content>div.phone_hand{
      background-position: 150% 100%;
    }
  }
  @media screen and (max-width: 1195px) {
    section.third .content>div.phone_hand{
      background-position: 250% 100%;
    }
    section.fifth {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  @media screen and (max-width: 1150px) {
    section.third .content>div.phone_hand{
      background-position: 350% 100%;
    }
  }
  @media screen and (max-width: 1135px) {
    section.third .content>div.phone_hand{
      background-position: 200% 100%;
    }
    .calculator .flex:nth-child(3)>.slider{
      min-width: 100% !important;
    }
  }
  @media screen and (max-width: 960px) {
    .burger{
      transform: translate(-50%, -50%);
    }
    .content-min{
      max-width: 100%;
    }
    .auto {
      width: 200vw;
      max-width: 1883px;
      transform: translate(-35%, 0%);
    }
    section.first{
      height: auto;
      & .content-min{
         padding-top: 0;
         padding-bottom: 40vh;
      }
      & .burger{
        transform: translateX(0%);
      }
    }
    section.first>div {
      padding-top: 27px;
    }
    section.second{
      padding-left: 0;
      padding-right: 0;
      &>div{
        padding-left: 0;
        padding-right: 0;
        &>.content{
          padding-right: 0;
          &>*{
            &:first-child{
              & .pr-12{
                margin-bottom: 350px;
              }
            }
            &:last-child{
              margin-top: 300px;
              transform: translateX(-10%);
            }
          }
        }
      }
    }
    section.third{
      &:before{
        left: unset;
        right: 0;
        transform: translate(50%, 0%);
        z-index: 0;
      }
      &:after{
        transform: translate(40%, 0%);
      }
      & h2{
        line-height: 150%;
        &.with-left{
          padding-left: 6px;
        }
        &:before{
          top: 20px;
        }
      }
      & .content{
        position: relative;
        z-index: 1;
      }
      & .content >div.border-0{
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        border: none;
      }
      & .content>div.phone_hand{
        padding-right: 2rem;
        padding-left: 2rem;
        width: calc(100% + 4rem);
        margin-left: -2rem;
        padding-bottom: 547px;
        background-position: 50% 110%;
      }
    }
    section.fifth .more{
      height: 285px;  
      &>div{
        padding: 44px 14px 12px 24px !important;
      }
      &.f{
        & img{
          top: -30%;
          right: -10%;
        }
      }
      &.s{
        &>div{
          overflow: visible;
        }
        & img{
          max-width: 150%;
          right: -65%;
          bottom: -30%;
        }
      }
      &.t{
        margin-bottom: 2rem;
        &>div{
          justify-content: flex-start;
        }
        & img{    
          top: unset;
          bottom: 0;
          right: -35%;
        }
        
      }
    }
    section.sixth {
      padding-left: 0;
      padding-right: 0;
      & h3{
        font-size: 30px;
        line-height: 52px;
      }
      & .nexia{
        padding-left: 44px;
        align-items: flex-start;
        & span{
          margin-bottom: 0;
        }
        & img{
          margin-top: -40%;
          // height: 210px;
          max-width: 1000px;
          transform: translate(-50%, 12.5%)
        }
      }
    }
    section.seventh {
      padding: 0;
      &>.content{
        padding-left: 0;
        padding-right: 0;
      }
    }
    section.eighth  {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      & .office{
        max-height: 0;
        transition: 0.3s;
        overflow: hidden;
        &.active{
          max-height: 50vh;
        }
      }
    }
  }
</style>