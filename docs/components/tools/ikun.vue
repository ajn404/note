<template>
	<div>
		<div class="pb">
			<p class="wow">破天下定风云，我们ikun并肩行。</p>
			<p><img src="/images/logo.jpg" alt=""></p>
			<p class="wow">披金成王，伴坤远航，我们ikun不惹事也不怕事</p>
			<p><img src="/images/logo.jpg" alt=""></p>
			<p class="wow">狮子座为王，蔡徐坤为皇。</p>
			<p><img src="/images/logo.jpg" alt=""></p>
			<p class="wow">向阳花木易为春，听说你爱蔡徐坤。</p>
			<p><img src="/images/logo.jpg" alt=""></p>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.pb {
	margin: auto;
	padding: 120px 100px;
	box-sizing: border-box;
	width: 100%;
	overflow: auto;
	height: 100vh;
	perspective: 400px;
	--height:50px;

	p {
		margin: 0;
		padding: 20px;
		transform-style: preserve-3d;

		&::before,
		&::after {
			transform-style: preserve-3d;
		}
	}

	.wow {
		position: relative;
		z-index: 1;
		transform: translate3d(0, 0, var(--height));
		background-color: #f1f1f1;

		&::before,
		&::after {
			content: "";
			display: block;
			position: absolute;
			right: 0;
			left: 0;
			height: var(--height);
			background-color: #ccc;
			backface-visibility: visible;
		}

		&::before {
			transform-origin: top center;
			top: 0;
			transform: rotateX(-90deg);
		}

		&::after {
			transform-origin: bottom center;
			bottom: 0;
			transform: rotateX(90deg);
		}
	}

	p {
		&:nth-child(2){
			img{
				filter: blur(1px);
			}
		}

		&:nth-child(4){
			img{
				filter: grayscale(1);
			}
		}

		&:nth-child(8){
			img{
				filter: grayscale(10) blur(10px);
				transition: all 5s !important;
				&:hover{
					filter: none;
				}
			}
		}
		
	}
}
</style>