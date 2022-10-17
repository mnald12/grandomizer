<template>
	<Transition>
	<div class="containerss">
		<div class="content-display" id="displayer">
			<div class="left">
				<div v-for="(box, i) in boxs" :style="{background : box.background}" :class="box.animation" :title="box.background" :key="i"></div>
			</div>
			<div class="center">
				<div v-for="(box2, i2) in boxs2" :style="{background : box2.background}" :class="box2.animation" :title="box2.background" :key="i2"></div>
			</div>
			<div class="right">
				<div v-for="(box3, i3) in boxs3" :style="{background : box3.background}" :class="box3.animation" :title="box3.background" :key="i3"></div>
			</div>
		</div>
		<div class="content-text">
			<h1>A Gradient Tool that you will Love</h1>
		</div>
	</div>
    </Transition>
</template>
<script>
	export default {
		name : 'WelcomeComponent',
		data(){
			return {
				boxs : [],
				boxs2 : [],
				boxs3 : [],
				textColor : '',
				gradientTypes : ['linear-gradient(', 'radial-gradient(', 'conic-gradient('],
				linearTypes : ['to left, ', 'to top, ', 'to right, ', 'to bottom, ', 'to top left, ', 'to top right, ', 'to bottom left, ', 'to bottom right, '],
				radialTypes : ['circle ', 'ellipse '],
				radialSideCorner : ['farthest-corner ', 'farthest-side ', 'closest-corner ', 'closest-side '],
				radialAt : ['left, ', 'top, ', 'right, ', 'bottom, ', 'top left, ', 'top right, ', 'bottom left, ', 'bottom right, '],
				animations : ['box ani1', 'box ani2', 'box ani3', 'box ani4', 'box ani5', 'box ani6', 'box ani7', 'box ani8', 'box ani9'],
				rand : (n) => {
					return Math.floor(Math.random() * n)
				},
				randColor : () => {
					return 'rgb(' + this.rand(255) + ', ' + this.rand(255) + ', ' + this.rand(255) + ')'
				}
			}
		},
		beforeMount(){
			this.textColor = 'linear-gradient(' + this.randColor() + ', ' + this.randColor() + ')'
			this.generate()
		},
		methods : {
			generate(){
				this.boxs = []
				for(let i = 0; i < 3; i++){
					let bgd = {
						background : '',
						animation : this.animations[this.rand(this.animations.length)]
					}
					let grd = this.gradientTypes[this.rand(this.gradientTypes.length)]
					if(grd == 'linear-gradient('){
						bgd.background = grd + this.linearTypes[this.rand(this.linearTypes.length)] + this.randColor() + ', ' + this.randColor() + ')'
					}
					else if(grd == 'radial-gradient('){
						bgd.background = grd + this.radialSideCorner[this.rand(this.radialSideCorner.length)] + ', ' + this.randColor() + ', ' + this.randColor() + ')'
					}
					else if(grd == 'conic-gradient('){
						bgd.background = grd + ' from ' + this.rand(360) + 'deg, ' + this.randColor() + ', ' + this.randColor() + ')'
					}
					this.boxs.push(bgd)
				}

				this.boxs2 = []
				for(let i = 0; i < 3; i++){
					let bgd = {
						background : '',
						animation : this.animations[this.rand(this.animations.length)]
					}
					let grd = this.gradientTypes[this.rand(this.gradientTypes.length)]
					if(grd == 'linear-gradient('){
						bgd.background = grd + this.linearTypes[this.rand(this.linearTypes.length)] + this.randColor() + ', ' + this.randColor() + ')'
					}
					else if(grd == 'radial-gradient('){
						bgd.background = grd + this.radialSideCorner[this.rand(this.radialSideCorner.length)] + ', ' + this.randColor() + ', ' + this.randColor() + ')'
					}
					else if(grd == 'conic-gradient('){
						bgd.background = grd + ' from ' + this.rand(360) + 'deg, ' + this.randColor() + ', ' + this.randColor() + ')'
					}
					this.boxs2.push(bgd)
				}

				this.boxs3 = []
				for(let i = 0; i < 3; i++){
					let bgd = {
						background : '',
						animation : this.animations[this.rand(this.animations.length)]
					}
					let grd = this.gradientTypes[this.rand(this.gradientTypes.length)]
					if(grd == 'linear-gradient('){
						bgd.background = grd + this.linearTypes[this.rand(this.linearTypes.length)] + this.randColor() + ', ' + this.randColor() + ')'
					}
					else if(grd == 'radial-gradient('){
						bgd.background = grd + this.radialSideCorner[this.rand(this.radialSideCorner.length)] + ', ' + this.randColor() + ', ' + this.randColor() + ')'
					}
					else if(grd == 'conic-gradient('){
						bgd.background = grd + ' from ' + this.rand(360) + 'deg, ' + this.randColor() + ', ' + this.randColor() + ')'
					}
					this.boxs3.push(bgd)
				}
			}
		}
	}
</script>
<style scoped>
	.containerss{
		width: 100%;
		height: auto;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
	.containerss .content-display{
		width: 50%;
		height: auto;
		padding: 50px 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.containerss .content-display .left{
		width: auto;
		height: auto;
		padding: 5px;
	}
	.containerss .content-display .center{
		width: auto;
		height: auto;
		padding: 5px;
	}
	.containerss .content-display .right{
		width: auto;
		height: auto;
		padding: 5px;
	}
	.box{
		width: 8vw;
		height: 8vw;
		background: aliceblue;
		margin-bottom: 10px;
		border-radius: 3px;
		transition: 0.60s;
	}
	.box:hover{
		transform: translateY(-5px);
		box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.50);
	}
	.containerss .content-text{
		width: 50%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 0;
	}
	.containerss .content-text h1{
		font-size: 7vw;
		background: linear-gradient(45deg, darkviolet, midnightblue);
		-webkit-background-clip: text;
		-webkit-text-fill-color : transparent;
	}
	.ani1{
		animation: ani1 3s ease-in-out;
	}
	.ani2{
		animation: ani2 3s ease-in-out;
	}
	.ani3{
		animation: ani3 3s ease-in-out;
	}
	.ani4{
		animation: ani4 3s ease-in-out;
	}
	.ani5{
		animation: ani5 3s ease-in-out;
	}
	.ani5{
		animation: ani5 3s ease-in-out;
	}
	.ani6{
		animation: ani6 3s ease-in-out;
	}
	.ani7{
		animation: ani7 3s ease-in-out;
	}
	.ani8{
		animation: ani8 3s ease-in-out;
	}
	.ani9{
		animation: ani9 3s ease-in-out;
	}
	@keyframes ani1{
		from{
			transform: translateY(-50px);
		}
		to{
			transform: translateY(0);
		}
	}
	@keyframes ani2{
		from{
			transform: translateX(-50px);
		}
		to{
			transform: translateX(0);
		}
	}
	@keyframes ani3{
		from{
			transform: translateY(50px);
		}
		to{
			transform: translateY(0);
		}
	}
	@keyframes ani4{
		from{
			transform: translateX(50px);
		}
		to{
			transform: translateX(0);
		}
	}
	@keyframes ani5{
		from{
			transform: rotate(360deg);
		}
		to{
			transform: rotate(0);
		}
	}
	@keyframes ani6{
		from{
			transform: translate(50px, -50px);
		}
		to{
			transform: translate(0, 0);
		}
	}
	@keyframes ani7{
		from{
			transform: translate(-50px, 50px);
		}
		to{
			transform: translate(0, 0);
		}
	}
	@keyframes ani8{
		from{
			transform: translate(50px, 50px);
		}
		to{
			transform: translate(0, 0);
		}
	}
	@keyframes ani9{
		from{
			transform: translate(-50px, -50px);
		}
		to{
			transform: translate(0, 0);
		}
	}
	@media (max-width: 576px){
		.containerss{
			flex-wrap: wrap;
		}
		.containerss .content-display{
			width: 100%;
			padding: 0;
		}
		.containerss .content-text{
			width: 100%;
			text-align: center;
		}
	}
</style>