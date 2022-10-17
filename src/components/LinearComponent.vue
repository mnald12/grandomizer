<template>
	<div class="containers">
		<div class="note"><strong>Note: </strong> Due to excessive randomness, some created gradients are not genuinely gradients.</div>
		<div class="box" v-for="(color, i) in colors" :key="i">
			<div class="content-action">
				<button @click="copy(i)" title="Copy code in RGB">copy code<svg version="1.1" id="IconChangeColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" xml:space="preserve" height="16" width="16"><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" id="mainIconPathAttribute"></path></g></svg></button>
			</div>
			<div class="content-text" :id="i">
				{{color}}
			</div>
			<div class="content-background" :style="{background : color}"></div>
		</div>
		<div class="box ">
			<div class="content-action">
				<div class="panel">Color Count : {{colorCount}}</div>
				<button class="minus" @click="minus()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button>
				<button class="plus" @click="plus()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
			</div>
			<div class="content-background add" title="load more" @click="setData()">
				<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'LinearComponent',
	props : {
		linearData : {
			type : Array,
			required : true
		}
	},
	data(){
		return{
			colors : this.linearData,
			colorCount : 2,
			linearTypes : [' ', 'to left, ', 'to top, ', 'to right, ', 'to bottom, ', 'to top left, ', 'to top right, ', 'to bottom left, ', 'to bottom right, '],
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
		}
	},
	methods : {
		setData(){
			let color = []
			for(let i = 0; i < 19; i++){
				let fclr = []
				let clr = []
				let percent = []
				let rn = this.colorCount
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
			this.$emit('set-data', color)
		},
		minus(){
			if(this.colorCount > 2) this.colorCount--
		},
		plus(){
			if(this.colorCount < 100) this.colorCount++
		},
		copy(id){
			let panel = document.getElementById(id)
			navigator.clipboard.writeText(panel.innerText)
			panel.style.color = 'green'
			let clears = setInterval(() => {
				panel.style.color = 'black'
				clearInterval(clears)
			}, 1000)
		}
	}
}
</script>
<style scoped>
	.containers{
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: left;
		gap: 12px;
	}
	.note{
		width: 100%;
		min-width: 100%;
		height: auto;
		padding: 10px;
		font-size: 22px;
		color: aliceblue;
	}
	.box{
		width: 100%;
		height: auto;
		min-width: 260px;
		box-shadow: 0 0 3px 0 black;
		border-radius: 5px;
		background: aliceblue;
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 10px;
	}
	.box.add svg{
		color: aliceblue;
	}
	.box.add:hover{
		box-shadow: 0 0 3px 0 black;
		transform: translateY(-3px);
	}
	.box .content-action{
		width: 100%;
		height: auto;
		padding-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	.box .content-action button{
		width: 100%;
		height: auto;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		cursor: pointer;
		color: black;
		border: none;
		outline: none;
		box-shadow: 0 0 3px 0 black;
		border-radius: 3px;
	}
	.box .content-action .panel{
		width: 100%;
		height: auto;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		color: black;
		border: none;
		outline: none;
		box-shadow: 0 0 3px 0 black;
		border-radius: 3px;
	}
	.box .content-action .minus{
		width: auto;
		height: auto;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
		border: none;
		outline: none;
		box-shadow: 0 0 3px 0 black;
		border-radius: 3px;
	}
	.box .content-action .plus{
		width: auto;
		height: auto;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
		border: none;
		outline: none;
		box-shadow: 0 0 3px 0 black;
		border-radius: 3px;
	}
	.box .content-text{
		width: 100%;
		height: auto;
		padding: 10px;
		box-shadow: 0 0 3px 0 black;
		border-radius: 3px;
		margin-bottom: 10px;
		background: aliceblue;
	}
	.box .content-background{
		width: 100%;
		height: auto;
		min-height: 260px;
		border-radius: 4px;
	}
	.box .content-background.add{
		background: blueviolet;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: 0.80s;
		color: aliceblue;
	}
	@media (max-width : 900px){
		.box{
			margin-top: 12px;
		}
	}
</style>