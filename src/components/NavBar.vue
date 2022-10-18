<template>
  <nav class="desktop" id="desktop" v-if="desktop">
    <div class="brand">
      <h3 id="brand">GRandomizer</h3>
    </div>
    <ul>
      <li><a id="a1" class="active" href="#" @click="changeLinks('home')">Home</a><div class="sty"></div></li>
      <li><a id="a2" href="#" @click="changeLinks('linear')">Linear</a><div class="sty"></div></li>
      <li><a id="a3" href="#" @click="changeLinks('radial')">Radial</a><div class="sty"></div></li>
      <li><a id="a4" href="#" @click="changeLinks('conic')">Conic</a><div class="sty"></div></li>
      <!-- <li><a id="b" href="#" class="bigBorder">Donate $</a></li> -->
    </ul>                                      
  </nav>

  <nav class="phone" id="phone" v-else>
    <div class="brand">
      <h3 id="brands">GRandomizer</h3>
    </div>
    <ul id="dropdown">
      <button id="ddn" @click="openMenu()">
        <svg v-if="isOpens" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
      </button>
    </ul>                                      
  </nav>
  <div class="phoneLinks" id="phoneLinks" v-if="isOpens">
    <div class="lis"><a href="#" @click="changeLinks2('home')">Home</a></div>
    <div class="lis"><a href="#" @click="changeLinks2('linear')">Linear</a></div>
    <div class="lis"><a href="#" @click="changeLinks2('radial')">Radial</a></div>
    <div class="lis"><a href="#" @click="changeLinks2('conic')">Conic</a></div>
    <!-- <div class="lis"><a href="#">Donate</a></div> -->
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data(){
    return{
      desktop : true,
      width : 0,
      height : 0,
      isOpens : false
    }
  },
  beforeMount(){
    this.width = window.innerWidth
    this.height = window.innerHeight
    if(this.width > 900) this.desktop = true
    else this.desktop = false
  },
  mounted() {
    window.addEventListener("resize", this.reSize)
  },
  unmounted() {
    window.removeEventListener("resize", this.reSize)
  },
  methods: {
    reSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      if(this.width > 900){
        this.desktop = true
        this.isOpens = false
      }
      else this.desktop = false
    },
    openMenu(){
      if(this.isOpens == false) this.isOpens = true
      else this.isOpens = false
    },
    changeLinks(links){
      let link1 = document.getElementById('a1')
      let link2 = document.getElementById('a2')
      let link3 = document.getElementById('a3')
      let link4 = document.getElementById('a4')
      if(links == 'home'){
        link1.classList.add('active')
        link2.classList.remove('active')
        link3.classList.remove('active')
        link4.classList.remove('active')
      }
      else if(links == 'linear'){
        link2.classList.add('active')
        link1.classList.remove('active')
        link3.classList.remove('active')
        link4.classList.remove('active')
      }
      else if(links == 'radial'){
        link3.classList.add('active')
        link1.classList.remove('active')
        link2.classList.remove('active')
        link4.classList.remove('active')
      }
      else if(links == 'conic'){
        link4.classList.add('active')
        link1.classList.remove('active')
        link2.classList.remove('active')
        link3.classList.remove('active')
      }
      this.$emit('change-link', links)
    },
    changeLinks2(links){
      this.$emit('change-link', links)
      this.isOpens = false
    }
  }
}

</script>

<style scoped>.phone{
    display: none;
}
.desktop{
    width: 100%;
    height: 80px;
    padding: 2px;
    display: flex;
    align-items: center;
    background: aliceblue;
    position: sticky;
    top: 0;
    z-index: 100;
}
.desktop .brand{
    width: auto;
    height: auto;
    position: absolute;
    left: 40px;
}
.desktop .brand h3{
    font-size: 30px;
    color: black;
    font-weight: bolder;
    position: relative;
    font-family: cursive;
    transition: 1s;
    background: linear-gradient(45deg, darkviolet, midnightblue);
    -webkit-background-clip: text;
    -webkit-text-fill-color : transparent;
}
.desktop .brand h3::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 6px;
}
.desktop ul{
    width: auto;
    height: auto;
    display: flex;
    position: absolute;
    right: 40px;
    gap: 20px;
}
.desktop ul li{
    list-style-type: none;
    position: relative;
}
.desktop ul li a{
    padding: 10px;
    font-size: 16px;
    text-decoration: none;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    color: black;
    font-weight: 400;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
}
.desktop ul li .active{
    font-weight: bolder;
}
.desktop ul li .sty{
    width: 0;
    height: 2px;
    background: darkviolet;
    position: absolute;
    bottom: -5px;
    border-radius: 3px;
    transition: 1s;
    z-index: -2;
    left: 10px;
}
.desktop ul li:hover .sty{
    width: 70%;
}
.desktop ul li a.bigBorder{
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    border: 1px solid darkorange;
    border-radius: 4px;
    color: darkorange;
    transition: 1s;
    font-weight: bold;
}
.desktop ul li a.bigBorder:hover{
    background: darkorange;
    color: aliceblue;
}
.phone{
    width: 100%;
    height: 60px;
    padding: 2px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    background: aliceblue;
}
.phone .brand{
    width: auto;
    height: auto;
    position: absolute;
    left: 20px;
}
.phone .brand h3{
    font-size: 20px;
    color: black;
    font-weight: bolder;
    position: relative;
    font-family: cursive;
    transition: 1s;
    background: linear-gradient(45deg, darkviolet, midnightblue);
    -webkit-background-clip: text;
    -webkit-text-fill-color : transparent;
}
.phone ul{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    overflow: hidden;
}
.phone ul button{
    width: 100%;
    height: 100%;
    padding: 0;
    outline: none;
    border: none;
    overflow: hidden;
    border-radius: 3px;
    background: transparent;
    cursor: pointer;
}
.phone ul button canvas{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
}
.phoneLinks{
    width: 100%;
    height: auto;
    position: fixed;
    top: 60px;
    display: block;
    overflow: hidden;
    background: aliceblue;
    z-index: 999;
}
.phoneLinks .lis{
    width: 100%;
    height: 100%;
    padding: 6px;
    display: flex;
    align-items: center;
    padding-left: 12px;
}
.phoneLinks .lis a{
    width: 100%;
    height: auto;
    display: block;
    text-decoration: none;
    font-size: 16px;
    padding: 5px;
    border-left: 3px solid darkorange;
    padding-left: 8px;
    color: black;
}
</style>
