<template>
	<div class="card-container">
		<div class="title">
			<h2>Auto Generated Gradients</h2>
		</div>
		<div class="card">
			<div class="card-background" :style="{background : linear}"></div>
			<div class="card-text">
				<h3>Linear Gradients</h3>
				<p>A linear gradients is specified by two points, and a color at each point. The colors along the line through those points are calculated using linear interpolation, then extended perpendicular to that line. In digital imaging systems, colors are typically interpolated in an RGB color space, often using gamma compressed RGB color values, as opposed to linear. CSS and SVG both support linear gradients. - <a target="/wiki" href="https://en.wikipedia.org/wiki/Color_gradient">wikipedia</a></p>
				<button @click="changeLinks('linear')">Go now</button>
			</div>
		</div>
		<div class="card">
			<div class="card-background" :style="{background : radial}"></div>
			<div class="card-text">
				<h3>Radial Gradients</h3>
				<p>A radial gradient is specified as a circle that has one color at the edge and another at the center. Colors are calculated by linear interpolation based on distance from the center. This can be used to approximate the diffuse reflection of light from a point source by a sphere.[citation needed] Both CSS and SVG support radial gradients. - <a target="/wiki" href="https://en.wikipedia.org/wiki/Color_gradient">wikipedia</a></p>
				<button @click="changeLinks('radial')">Go now</button>
			</div>
		</div>
		<div class="card">
			<div class="card-background" :style="{background : conic}"></div>
			<div class="card-text">
				<h3>Conic Gradients</h3>
				<p>Conic or conical gradients are gradients with color transitions rotated around a center point (rather than radiating from the center). Example conic gradients include pie charts and color wheels. - <a target="/wiki" href="https://en.wikipedia.org/wiki/Color_gradient">wikipedia</a></p>
				<button @click="changeLinks('conic')">Go now</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name : 'CardsComponent',
		props : {
			gradientData : {
				type : Array,
				required : true
			}
		},
		data(){
			return{
				linear : this.gradientData[0],
				radial : this.gradientData[1],
				conic : this.gradientData[2],
			}
		},
		methods : {
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
		}
	}
	
</script>
<style scoped>
	.card-container{
		width: 100%;
		height: auto;
		background: linear-gradient(to top left, midnightblue, darkviolet);
		background-size: 100% 300px;
		background-repeat: no-repeat;
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: baseline;
		gap: 16px;
	}
	.title{
		width: 100%;
		height: auto;
		padding: 12px;
	}
	.title h2{
		color: aliceblue;
		font-size: 30px;
	}
	.card-container .card{
		width: auto;
		min-width: 32%;
		height: auto;
		border-radius: 6px;
		box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.60);
		padding: 10px;
		background: aliceblue;
	}
	.card-container .card .card-background{
		width: 100%;
		height: 220px;
		border-radius: 6px;
		background: green;
	}
	.card-container .card .card-text{
		width: 100%;
		height: 100%;
		padding: 10px;
	}
	.card-container .card .card-text h3{
		font-size: 22px;
	}
	.card-container .card .card-text p{
		font-size: 17px;
		font-family: Courier;
		margin-top: 10px;
	}
	.card-container .card .card-text button{
		width: auto;
		height: auto;
		padding: 10px 20px;
		border: none;
		outline: none;
		cursor: pointer;
		background: transparent;
		box-shadow: 0 0 3px 0 black;
		border-radius: 3px;
		margin-top: 10px;
		transition: 0.50s;
		float: right;
	}
	.card-container .card .card-text button:hover{
		background: linear-gradient(to top left, midnightblue, darkviolet);
		color: aliceblue;
	}
	@media (max-width : 900px){
		.card-container{
			flex-wrap: wrap;
		}
	}
</style>