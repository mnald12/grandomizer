<template>
	<div class="background-controler">
		<div class="color-type-control">
			<div class="type-controler">
				<button @click="toRgb()" id="btn1"  class="active">RGB</button>
				<button @click="toHex()" id="btn2" >HEX</button>
				<button @click="toHsl()" id="btn3" >HSL</button>
			</div>
		</div>
		<div class="space"></div>
		<label class="label-light">Background</label>
		<div class="background-displayer-panel">
			<p id="panel">{{finalizeColors}}</p>
			<button class="copy" @click="copy()">
				<svg version="1.1" id="IconChangeColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve" height="16" width="16"><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" id="mainIconPathAttribute"></path></g></svg>
			</button>
		</div>
		<div class="space"></div>
		<label class="label-light">Type</label>
		<div class="choose" id="op2"  v-on:click="chooseType(isOpen)">
			<p id="op1Pan">Linear</p>
			<button v-if="isOpen">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
			</button>
			<button v-else>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
			</button>
		</div>
		<div class="options" v-if="isOpen">
			<button @click="typeSelect(0)" class="ops">Linear</button>
			<button @click="typeSelect(1)" class="ops">Radial</button>
			<button @click="typeSelect(2)" class="ops">Conic</button>
		</div>
		<div class="space"></div>
		<label class="label-light">Color Count</label>
		<div class="color-count-controler">
			<p id="countPanel">{{colorCount}}</p>
			<button class="minus" @click="minus()">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
			</button>
			<button class="plus" @click="plus()">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
			</button>
		</div>
		<div class="space"></div>
		<label class="label-light">Color Theme</label>
		<div class="choose" id="op2" v-on:click="chooseTheme(isOpen2)">
			<p id="op2Pan">Normal</p>
			<button v-if="isOpen2">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
			</button>
			<button v-else>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
			</button>
		</div>
		<div class="options" v-if="isOpen2">
			<button @click="themeSelect(0)" class="ops">Normal</button>
			<button @click="themeSelect(1)" class="ops">Light</button>
			<button @click="themeSelect(2)" class="ops">Dark</button>
		</div>
		<div class="space"></div>
		<button class="button-randomizer" @click="randomize()">Randomize</button>
	</div>
</template>

<script>
	export default {
		name : 'BgdControler',
		props : {
			newBgd : {
				type : String,
				required : true
			}
		},
		data(){
			return {
				isOpen : false,
				isOpen2 : false,
				colorCount : 2,
				colorMode : 0,
				gradientType : 0,
				colorType : 0,
			}
		},
		methods : {
			toRgb(){
				document.getElementById('btn1').classList.add('active')
				document.getElementById('btn2').classList.remove('active')
				document.getElementById('btn3').classList.remove('active')
				this.colorMode = 0
				this.$emit('change-to-rgb', this.gradientType)
			},
			toHex(){
				document.getElementById('btn2').classList.add('active')
				document.getElementById('btn1').classList.remove('active')
				document.getElementById('btn3').classList.remove('active')
				this.colorMode = 1
				this.$emit('change-to-hex', this.gradientType)
			},
			toHsl(){
				document.getElementById('btn3').classList.add('active')
				document.getElementById('btn1').classList.remove('active')
				document.getElementById('btn2').classList.remove('active')
				this.colorMode = 2
				this.$emit('change-to-hsl', this.gradientType)
			},
			chooseType(val){
				if(val == false) this.isOpen = true
				else this.isOpen = false
			},
			chooseTheme(val){
				if(val == false) this.isOpen2 = true
				else this.isOpen2 = false
			},
			typeSelect(val){
				let name = ''
				if(val == 0){
					name = 'Linear'
					this.gradientType = 0
					this.$emit('change-gradient-type', 0, this.colorMode)
				}
				else if(val == 1){
					name = 'Radial'
					this.gradientType = 1
					this.$emit('change-gradient-type', 1, this.colorMode)
				}
				else if(val == 2){
					name = 'Conic'
					this.gradientType = 2
					this.$emit('change-gradient-type', 2, this.colorMode)
				}
				let pan1 = document.getElementById('op1Pan')
				pan1.innerText = name
				this.isOpen = false
			},
			themeSelect(val){
				let name = ''
				if(val == 0){
					name = 'Normal'
					this.colorType = 0
				}
				else if(val == 1){
					name = 'Light'
					this.colorType = 1
				}
				else if(val == 2){
					name = 'Dark'
					this.colorType = 2
				}
				let pan2 = document.getElementById('op2Pan')
				pan2.innerText = name
				this.isOpen2 = false
			},
			minus(){
				if(this.colorCount > 2) this.colorCount--
			},
			plus(){
				if(this.colorCount < 100) this.colorCount++
			},
			randomize(){
				this.$emit('change-bgd', this.colorMode, this.gradientType, this.colorCount, this.colorType)
			},
			copy(){
				let panel = document.getElementById('panel')
				navigator.clipboard.writeText(panel.innerText)
				panel.style.color = 'green'
				let clears = setInterval(() => {
					panel.style.color = 'black'
					clearInterval(clears)
				}, 1000)
			}
		},
		computed : {
			finalizeColors(){
				return this.newBgd
			}
		}
	}
</script>

<style scoped>
	.background-controler{
		width: 40%;
		height: auto;
		padding: 12px;
		background: linear-gradient(to left, #5d3af7, #bf48e2);
		border-radius: 6px;
	}
	.color-type-control{
		width: 100%;
		height: auto;
		display: flex;
	}
	.color-type-control .type-controler{
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
	}
	.color-type-control .type-controler button{
		width: auto;
		height: auto;
		font-size: 17px;
		border: none;
		outline: none;
		cursor: pointer;
		border-radius: 3px;
		font-weight: bold;
		padding: 6px 30px;
		margin: 10px auto;
	}
	.color-type-control .type-controler button.active{
		background: cyan;
		box-shadow: 0 2px 2px 0 black;
	}
	.color-type-control .history-controler button{
		outline: none;
		border: none;
		background: transparent;
		cursor: pointer;
		font-weight: bold;
		color: aliceblue;
		padding: 6px 12px;
		border-radius: 4px;
	}
	.space{
		height: 10px;
	}
	.label-light{
		font-size: 19px;
		font-weight: bold;
		color: aliceblue;
		text-align: left;
		display: flex;
		justify-content: left;
		margin-bottom: 4px;
	}
	.background-displayer-panel{
		width: 100%;
		height: auto;
		padding: 10px;
		background: aliceblue;
		color: black;
		display: flex;
		justify-content: left;
		align-items: center;
		padding-right: 40px;
		border-radius: 3px;
		position: relative;
	}
	.background-displayer-panel p{
		text-align: left;
	}
	.choose{
		width: 100%;
		height: auto;
		padding: 10px;
		background: #FFFFFF;
		border-radius: 2px;
		margin-top: 5px;
		border-radius: 3px;
		position: relative;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.choose:focus{
		border: none;
		outline: none;
	}
	.choose button{
		width: auto;
		height: auto;
		padding: 4px;
		background: transparent;
		border: none;
		outline: none;
		position: absolute;
		right: 10px;
		cursor: pointer;
	}
	.options{
		width: 100%;
		height: auto;
		padding: 12px;
		background: linear-gradient(to right, #5d3af7, #bf48e2);
		border-radius: 3px;
	}
	.options button{
		width: 100%;
		height: 40px;
		background: aliceblue;
		border-radius: 3px;
		border: none;
		outline: none;
		margin: 5px auto;
		cursor: pointer;
	}
	.color-count-controler{
		width: 100%;
		height: auto;
		padding: 10px;
		background: #FFFFFF;
		border-radius: 2px;
		margin-top: 5px;
		border-radius: 3px;
		position: relative;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.minus{
		position: absolute;
		right: 40px;
		border-radius: 50%;
		background: red;
		color: white;
		border: none;
		outline: none;
		width: 26px;
		height: 26px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.plus{
		position: absolute;
		right: 10px;
		border-radius: 50%;
		background: green;
		border: 1px solid red;
		color: white;
		border: none;
		outline: none;
		width: 26px;
		height: 26px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.minus:hover, .plus:hover{
		transition: 0.80s;
		opacity: 0.90;
	}
	.button-randomizer{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 3px 4px 0 black;
		background: linear-gradient(to top left, cyan, yellowgreen);
		border: none;
		outline: none;
		margin-top: 10px;
		border-radius: 5px;
		cursor: pointer;
	}
	.copy{
		width: auto;
		height: auto;
		padding: 4px;
		background: transparent;
		border: none;
		outline: none;
		position: absolute;
		right: 10px;
		cursor: pointer;
	}
	@media (max-width : 900px){
		.background-controler{
			width: 100%;
		}
		.color-type-control .type-controler button{
			font-size: 16px;
			border-radius: 3px;
			font-weight: bold;
			padding: 6px 15px;
			margin: 10px auto;
		}
	}
</style> 