<template>
	<div class="background-displayer" :style="{background : setBgd}"></div>
</template>

<script>
	export default {
		name: 'BgdDisplayer',
		props : {
			newBgd : {
				type : String,
				required : true
			}
		},
		computed : {
			setBgd(){
				return this.newBgd;
			}
		}
	}
</script>

<style scoped>
	.background-displayer{
		width: 60%;
		height: auto;
		max-height: 480px;
		border-radius: 6px;
	}
	@media (max-width : 900px){
		.background-displayer{
			width: 100%;
			height: 200px;
		}
	}
</style>