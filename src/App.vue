<template>
  <NavBar @change-link="changelink"/>
  <div v-if="home">
    <WelcomeComponent/>
    <div class="container">
      <BgdDisplayer :new-bgd="background"/>
      <BgdControler :new-bgd="background" @change-bgd="randomize" @change-to-rgb="toRgb" @change-to-hex="toHex" @change-to-hsl="toHsl" @change-gradient-type="changeGradientType"/>
    </div>
    <CardsComponent :gradient-data="gradients" @change-link="changelink"/>
  </div>
  <div class="container" v-if="linear">
    <LinearComponent :linear-data="linears" @set-data="setLinear"/>
  </div>
  <div class="container" v-if="radial">
    <RadialComponent :radial-data="radials" @set-data="setRadial"/>
  </div>
  <div class="container" v-if="conic">
    <ConicComponent :conic-data="conics" @set-data="setConic"/>
  </div>
  <FooterComponent/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
import BgdDisplayer from './components/BgdDisplayer.vue'
import BgdControler from './components/BgdControler.vue'
import CardsComponent from './components/CardsComponent.vue'
import LinearComponent from './components/LinearComponent.vue'
import RadialComponent from './components/RadialComponent.vue'
import ConicComponent from './components/ConicComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    WelcomeComponent,
    BgdDisplayer,
    BgdControler,
    CardsComponent,
    LinearComponent,
    RadialComponent,
    ConicComponent,
    FooterComponent
  },
  data(){
    return{
      linears : [],
      radials : [],
      conics : [],
      home : true,
      linear : false,
      radial : false,
      conic : false,
      gradients : [],
      background : '',
      finalizeColor : [],
      colorsArray : [],
      percent : [],
      gradientTypes : ['linear-gradient(', 'radial-gradient(', 'conic-gradient('],
      linearTypes : ['to left, ', 'to top, ', 'to right, ', 'to bottom, ', 'to top left, ', 'to top right, ', 'to bottom left, ', 'to bottom right, '],
      radialTypes : ['circle ', 'ellipse '],
      radialSideCorner : ['farthest-corner ', 'farthest-side ', 'closest-corner ', 'closest-side '],
      radialAt : ['left, ', 'top, ', 'right, ', 'bottom, ', 'top left, ', 'top right, ', 'bottom left, ', 'bottom right, '],
      degs : [],
      rand : (n) => {
        return Math.floor(Math.random() * n)
      },
      getNumber : (n, limit) => {
        let newNum = 0
        let checker = 0
        while(checker == 0){
          let nn = this.rand(limit)
          if(nn != n){
            newNum = nn
            checker = 1
          }
        }
        return newNum
      },
      normalColor : () => {
        let r = this.rand(255)
        let g = this.rand(255)
        let b = this.rand(255)
        return {r : r, g : g, b : b}
      },
      lightColor : () => {
        let r = this.rand(100) + 155
        let g = this.rand(100) + 155
        let b = this.rand(100) + 155
        return {r : r, g : g, b : b}
      },
      darkColor : () => {
        let r = this.rand(125)
        let g = this.rand(125)
        let b = this.rand(125)
        return {r : r, g : g, b : b}
      },
      toRgbs : (r, g, b) => {
        return ' rgb(' + r + ', ' + g + ', ' + b + ') '
      },
      cvt : (c) => {
        let hex = c.toString(16)
        return hex.length == 1 ? "0" + hex : hex
      },
      toHexs : (r, g, b) => {
        return ' #' + this.cvt(r) + this.cvt(g) + this.cvt(b) + ' '
      },
      flr : (n) => {
        return Math.floor(n)
      },
      toHsls : (r, g, b) => {
        r /= 255
        g /= 255
        b /= 255
        let l = Math.max(r, g, b)
        let s = l - Math.min(r, g, b)
        let h = s ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s : 0
        let ch = 60 * h < 0 ? 60 * h + 360 : 60 * h
        let cs = 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
        let cl = (100 * (2 * l - s)) / 2
        return ' hsl(' + this.flr(ch) + ', ' + this.flr(cs) + '%, ' + this.flr(cl) + '%) '
      },
      chosen1 : '',
      chosen2 : '',
      chosen3 : ''
    }
  },
  methods:{
    setLinear(datas){
      for(let i of datas){
        this.linears.push(i)
      }
    },
    setRadial(datas){
      for(let i of datas){
        this.radials.push(i)
      }
    },
    setConic(datas){
      for(let i of datas){
        this.conics.push(i)
      }
    },
    changelink(link){
      if(link == 'home'){
        this.home = true
        this.linear = false
        this.radial = false
        this.conic = false
      }
      else if(link == 'linear'){
        this.home = false
        this.linear = true
        this.radial = false
        this.conic = false
      }
      else if(link == 'radial'){
        this.home = false
        this.linear = false
        this.radial = true
        this.conic = false
      }
      else if(link == 'conic'){
        this.home = false
        this.linear = false
        this.radial = false
        this.conic = true
      }
    },
    reSet(){
      this.finalizeColor = []
      this.colorsArray = []
      this.percent = []
      this.degs = []
    },
    randomize(colorMode, gradientType, colorCount, colorTheme){
      this.reSet()
      for(let i = 0; i < colorCount; i++){
        if(this.percent.length == 0){
          let no = this.rand(100)
          this.percent.push(no)
        }
        else{
          let no = this.getNumber(this.percent[this.percent.length - 1], 100)
          this.percent.push(no)
        }
        if(this.degs.length == 0){
          let no = this.rand(360)
          this.degs.push(no)
        }
        else{
          let no = this.getNumber(this.degs[this.degs.length - 1], 360)
          this.degs.push(no)
        }
        if(colorTheme == 0){
          this.colorsArray.push(this.normalColor())
        }
        else if(colorTheme == 1){
          this.colorsArray.push(this.lightColor())
        }
        else if(colorTheme == 2){
          this.colorsArray.push(this.darkColor())
        }
      }
      this.percent.sort(function(a, b) {
        if( a === Infinity ) return 1
        else if( isNaN(a)) return -1
        else return a - b
      })
      this.degs.sort(function(a, b) {
        if( a === Infinity ) return 1
        else if( isNaN(a)) return -1
        else return a - b
      })
      let index = 0
      for(let i of this.colorsArray){
        if(gradientType == 0 || gradientType == 1){
          if(colorMode == 0){
            this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.percent[index] + '%')
          }
          else if(colorMode == 1){
            this.finalizeColor.push(this.toHexs(i.r, i.g, i.b) + this.percent[index] + '%')
          }
          else if(colorMode == 2){
            this.finalizeColor.push(this.toHsls(i.r, i.g, i.b) + this.percent[index] + '%')
          }
        }
        else if(gradientType == 2){
          if(colorMode == 0){
            this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.degs[index] + 'deg')
          }
          else if(colorMode == 1){
            this.finalizeColor.push(this.toHexs(i.r, i.g, i.b) + this.degs[index] + 'deg')
          }
          else if(colorMode == 2){
            this.finalizeColor.push(this.toHsls(i.r, i.g, i.b) + this.degs[index] + 'deg')
          }
        }
        index++
      }
      if(gradientType == 0){
        let r = this.rand(10)
        this.chosen1 = ''
        if(r > 5){
          this.chosen1 = this.linearTypes[this.rand(this.linearTypes.length)]
        }
        else{
          this.chosen1 = this.rand(360) + 'deg,'
        }
        this.background = this.gradientTypes[gradientType] + this.chosen1 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 1){
        this.chosen2 = this.radialTypes[this.rand(this.radialTypes.length)] + this.radialSideCorner[this.rand(this.radialSideCorner.length)] + 'at ' + this.radialAt[this.rand(this.radialAt.length)]
        this.background = this.gradientTypes[gradientType] + this.chosen2 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 2){
        this.chosen3 = this.rand(360) + 'deg, '
        this.background = this.gradientTypes[gradientType] + 'from ' + this.chosen3 + this.finalizeColor.toString() + ')'
      }
    },
    toRgb(gradientType){
      this.finalizeColor = []
      let index = 0
      for(let i of this.colorsArray){
        if(gradientType == 0 || gradientType == 1){
          this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.percent[index] + '%')
        }
        else if(gradientType == 2){
          this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.degs[index] + 'deg')
        }
        index++
      }
      if(gradientType == 0){
        this.background = this.gradientTypes[gradientType] + this.chosen1 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 1){
        this.background = this.gradientTypes[gradientType] + this.chosen2 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 2){
        this.background = this.gradientTypes[gradientType] + 'from ' + this.chosen3 + this.finalizeColor.toString() + ')'
      }
    },
    toHex(gradientType){
      this.finalizeColor = []
      let index = 0
      for(let i of this.colorsArray){
        if(gradientType == 0 || gradientType == 1){
          this.finalizeColor.push(this.toHexs(i.r, i.g, i.b) + this.percent[index] + '%')
        }
        else if(gradientType == 2){
          this.finalizeColor.push(this.toHexs(i.r, i.g, i.b) + this.degs[index] + 'deg')
        }
        index++
      }
      if(gradientType == 0){
        this.background = this.gradientTypes[gradientType] + this.chosen1 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 1){
        this.background = this.gradientTypes[gradientType] + this.chosen2 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 2){
        this.background = this.gradientTypes[gradientType] + 'from ' + this.chosen3 + this.finalizeColor.toString() + ')'
      }
    },
    toHsl(gradientType){
      this.finalizeColor = []
      let index = 0
      for(let i of this.colorsArray){
        if(gradientType == 0 || gradientType == 1){
          this.finalizeColor.push(this.toHsls(i.r, i.g, i.b) + this.percent[index] + '%')
        }
        else if(gradientType == 2){
          this.finalizeColor.push(this.toHsls(i.r, i.g, i.b) + this.degs[index] + 'deg')
        }
        index++
      }
      if(gradientType == 0){
        this.background = this.gradientTypes[gradientType] + this.chosen1 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 1){
        this.background = this.gradientTypes[gradientType] + this.chosen2 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 2){
        this.background = this.gradientTypes[gradientType] + 'from ' + this.chosen3 + this.finalizeColor.toString() + ')'
      }
    },
    changeGradientType(gradientType, colorMode){
      this.finalizeColor = []
      let index = 0
      for(let i of this.colorsArray){
        if(gradientType == 0 || gradientType == 1){
          if(colorMode == 0){
            this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.percent[index] + '%')
          }
          else if(colorMode == 1){
            this.finalizeColor.push(this.toHexs(i.r, i.g, i.b) + this.percent[index] + '%')
          }
          else if(colorMode == 2){
            this.finalizeColor.push(this.toHsls(i.r, i.g, i.b) + this.percent[index] + '%')
          }
        }
        else if(gradientType == 2){
          if(colorMode == 0){
            this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.degs[index] + 'deg')
          }
          else if(colorMode == 1){
            this.finalizeColor.push(this.toHexs(i.r, i.g, i.b) + this.degs[index] + 'deg')
          }
          else if(colorMode == 2){
            this.finalizeColor.push(this.toHsls(i.r, i.g, i.b) + this.degs[index] + 'deg')
          }
        }
        index++
      }
      if(gradientType == 0){
        this.background = this.gradientTypes[gradientType] + this.chosen1 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 1){
        this.background = this.gradientTypes[gradientType] + this.chosen2 + this.finalizeColor.toString() + ')'
      }
      else if(gradientType == 2){
        this.background = this.gradientTypes[gradientType] + 'from ' + this.chosen3 + this.finalizeColor.toString() + ')'
      }
    }
  },
  beforeMount(){
    for(let i = 0; i < 2; i++){
      if(this.percent.length == 0){
        let no = this.rand(100)
        this.percent.push(no)
      }
      else{
        let no = this.getNumber(this.percent[this.percent.length - 1], 100)
        this.percent.push(no)
      }
      if(this.degs.length == 0){
        let no = this.rand(100)
        this.degs.push(no)
      }
      else{
        let no = this.getNumber(this.degs[this.degs.length - 1], 100)
        this.degs.push(no)
      }
      this.colorsArray.push(this.normalColor())
    }
    this.percent.sort(function(a, b) {
      if( a === Infinity ) return 1
      else if( isNaN(a)) return -1
      else return a - b
    })
    let index = 0
    for(let i of this.colorsArray){
      this.finalizeColor.push(this.toRgbs(i.r, i.g, i.b) + this.percent[index] + '%')
      index++
    }
    let r = this.rand(10)
    this.chosen1 = ''
    if(r > 5){
      this.chosen1 = this.linearTypes[this.rand(this.linearTypes.length)]
    }
    else{
      this.chosen1 = this.rand(360) + 'deg,'
    }
    this.chosen2 = this.radialTypes[this.rand(this.radialTypes.length)] + this.radialSideCorner[this.rand(this.radialSideCorner.length)] + 'at ' + this.radialAt[this.rand(this.radialAt.length)]
    this.chosen3 = this.rand(360) + 'deg, '
    this.background = this.gradientTypes[0] + this.chosen1 + this.finalizeColor.toString() + ')'
    let color = []
      for(let i = 0; i < 19; i++){
        let fclr = []
        let clr = []
        let percent = []
        let rn = 2
        let lt = this.linearTypes[this.rand(this.linearTypes.length)]
        for(let n = 0; n < rn; n++){
          let rgb = {
            r : this.rand(255),
            g : this.rand(255),
            b : this.rand(255)
          }
          if(percent.length == 0){
            let no = this.rand(100)
            percent.push(no)
          }
          else{
            let no = this.getNumber(percent[percent.length - 1], 100)
            percent.push(no)
          }
          clr.push(' rgb(' + rgb.r + ', ' + rgb.g + ', '+ rgb.b + ') ')
        }
        percent.sort(function(a, b) {
          if( a === Infinity ) return 1
          else if( isNaN(a)) return -1
          else return a - b
        })
        for(let tc = 0; tc < rn; tc++){
          fclr.push(clr[tc] + percent[tc] + '%')
        }
        color.push('linear-gradient(' + lt + fclr.toString() + ')')
      }
      this.linears = color

      let color2 = []
      for(let i = 0; i < 19; i++){
        let fclr2 = []
        let clr2 = []
        let percent2 = []
        let rn2 = 2
        let rt = this.radialTypes[this.rand(this.radialTypes.length)]
        let rsc = this.radialSideCorner[this.rand(this.radialSideCorner.length)]
        let rat = this.radialAt[this.rand(this.radialAt.length)]
        for(let n = 0; n < rn2; n++){
          let rgb = {
            r : this.rand(255),
            g : this.rand(255),
            b : this.rand(255)
          }
          if(percent2.length == 0){
            let no = this.rand(100)
            percent2.push(no)
          }
          else{
            let no = this.getNumber(percent2[percent2.length - 1], 100)
            percent2.push(no)
          }
          clr2.push(' rgb(' + rgb.r + ', ' + rgb.g + ', '+ rgb.b + ') ')
        }
        percent2.sort(function(a, b) {
          if( a === Infinity ) return 1
          else if( isNaN(a)) return -1
          else return a - b
        })
        for(let tc = 0; tc < rn2; tc++){
          fclr2.push(clr2[tc] + percent2[tc] + '%')
        }
        color2.push('radial-gradient(' + rt + rsc + 'at ' + rat + fclr2.toString() + ')')
      }
      this.radials = color2

      let color3 = []
      for(let i = 0; i < 19; i++){
        let fclr3 = []
        let clr3 = []
        let deg = []
        let rn3 = 2
        for(let n = 0; n < rn3; n++){
          let rgb = {
            r : this.rand(255),
            g : this.rand(255),
            b : this.rand(255)
          }
          if(deg.length == 0){
            let no = this.rand(360)
            deg.push(no)
          }
          else{
            let no = this.getNumber(deg[deg.length - 1], 360)
            deg.push(no)
          }
          clr3.push(' rgb(' + rgb.r + ', ' + rgb.g + ', '+ rgb.b + ') ')
        }
        deg.sort(function(a, b) {
          if( a === Infinity ) return 1
          else if( isNaN(a)) return -1
          else return a - b
        })
        for(let tc = 0; tc < rn3; tc++){
          fclr3.push(clr3[tc] + deg[tc] + 'deg')
        }
        color3.push('conic-gradient(from ' + this.rand(360) + 'deg, ' + fclr3.toString() + ')')
      }
      this.conics = color3

      this.gradients = [this.linears[0], this.radials[0], this.conics[0]]
  }
}

</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}
.container{
  width: 100%;
  height: auto;
  background: linear-gradient(to top left, midnightblue, darkviolet);
  background-size: 100% 300px;
  background-repeat: no-repeat;
  padding: 16px;
  display: flex;
  justify-content: center;
  position: relative;
  gap: 16px;
}
@media (max-width : 900px){
  .container{
    flex-wrap: wrap;
  }
}
</style>
