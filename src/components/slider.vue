<template>
	<div class="slider col ai-fs">
		<div class="flex slider-percent flex-nowrap w-100 jc-sb row"> 
		</div>
		<div class="slider-bar" @mousedown=" e => changeRange(e)" @mousemove=" e => showPart(e)" @mouseleave="disPart()" ref="bar">
			<div class="part jc-center" :class="{'active': part_show || move}" :style="{left: part + '%'}" v-if="!steps.length">{{Math.floor(part * max / 100)}}</div>
			<label :class="{'active': move === 'left'}" :style="{left: s + '%'}" left="1" v-touch:start="e => moveSlide(e)" @mousedown="e => moveSlide(e)" v-if="ranged"></label>
			<label :class="{'active': move === 'right'}" :style="{left: e + '%'}" right="1" v-touch:start="e => moveSlide(e)" @mousedown="e => moveSlide(e)" ></label>
			<div class="bar" :style="{maxWidth: (ranged ? e - s : e) + '%', left: (ranged ? s : 0) + '%'}"></div>
			<div class="steps flex row w-100 jc-sb wrap-nowrap" v-if="steps.length">
				<div class="flex jc-center ai-center step w-auto" :style="{'left': (100 / (steps.length-1) * i) + '%'}" v-for="(step, i) in steps" v-if="!i || i === (steps.length-1) / 2 || i === steps.length-1" :key="step">{{step}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			start: {
				type: Number,
				default: 0
			},
			end: {
				type: Number,
				default: 0
			},
			min: {
				type: [Number, String],
				default: 0
			},
			max: {
				type: [Number, String],
				default: 100
			},
			value: {
				type: Object,
				default: ()=> {return {}}
			},
			steps: {
				type: Array,
				default: ()=> {return []}
			},
			ranged: {
				type: Boolean,
				default: false
			}
		},
		name: 'vSlider',
		data(){
			return{
				s: this.start ? this.start : 0,
				e: this.end ? this.end : 0,
				current_step: [
					this.start ? this.steps.indexOf(this.start) : 0,
					this.end ? this.steps.indexOf(this.end) : 0
				],
				part: 0,
				part_show: false,
				move: null
			}
		},
		watch:{
			s:{
				handler(newData){
					this.setData()
				}
			},
			e:{
				handler(newData){
					this.setData()
				}
			}
		},
		async created(){
			if(this.value.end)
				this.e = this.value.end / (this.max / 100)
			if(this.value.start)
				this.s = this.value.start / (this.max / 100)
		},
		methods: {
			disPart(){
				this.part_show = false
			},
			showPart(e){
				if(e.target.classList.value === 'slider-bar'){
					this.part_show = true
					this.part = (e.offsetX / e.target.clientWidth * 100)^0
				}else{
					this.part_show = false
				}
			},
			moveSlide(e){
				let percent = this.max / this.$refs['bar'].clientWidth
				let x = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX
				let elem = false
				if(this.ranged)
					if(e.target.attributes.left)
						elem = true
				if(e)
					e.preventDefault()
				if(this.steps.length)
          percent = this.$refs['bar'].clientWidth / (this.steps.length) 
				document.onmouseup = ev =>{ this.move = null; document.onmousemove = ev => {} }
				document.onmousemove = async ev =>{
					x = this.checkMove(ev, x, percent, elem)
				}
				document.ontouchend = ev =>{ this.move = null; document.ontouchmove = ev => {} }
				document.ontouchmove = async ev =>{
					x = this.checkMove(ev, x, percent, elem)
				}
			},
			checkMove(e, x, percent, elem){
				let ev = e.touches && e.touches.length ? e.touches[0] : e
				let abs = 0

				if(this.steps.length){
          abs = this.max / (this.steps.length-1) * (100 / (this.steps.length - 1))
				}else{
					abs = Math.abs(ev.clientX - x) * percent
				}
				if(ev.clientX < x-percent){
					if(elem){
						this.s = this.s > 0 ? this.s-abs : 0
						this.move = 'left'
					} else{
						this.e = this.e > this.s ? this.e-abs : this.s
						this.move = 'right'
					}
					x = ev.clientX
				}
				else if(ev.clientX > x+percent){
					if(elem){
						this.s = this.s < this.e ? this.s+abs : this.e
						this.move = 'left'
					} else{
						this.e = this.e < 100 ? this.e+abs : 100
						this.move = 'right'
					}
					x = ev.clientX
				}
				if(this.steps.length){
					let now = this[elem ? 's' : 'e']
					for(const step in this.steps){
						if(Math.round(now) === Math.round(step * (100/(this.steps.length-1)))){
							this.current_step[elem ? 0 : 1] = step
							break
						}
					}
				}
				this.part = elem ? this.s : this.e
				return x
			},
			changeRange(e){
				if(e.target.classList.value === 'slider-bar'){
					if(this.steps.length){
						let step = e.target.clientWidth/(this.steps.length-1),
								current = 0,
								now = e.offsetX
						while(now > (step/2)){
							now -= step
							current++
						}
						if(this.ranged){
							let abs = (this.e - this.s) / 2 
							if(((e.offsetX / e.target.clientWidth * 100)^0)-this.s > abs){
								this.current_step[1] = current
								this.e = (step * current / e.target.clientWidth * 100)
							}
							else{
								this.current_step[0] = current
								this.s = (step * current / e.target.clientWidth * 100)
							}
						}else{
							this.current_step[1] = current
							this.e = (step * current / e.target.clientWidth * 100)
						}
					}else{
						if(this.ranged){
							let abs = (this.e - this.s) / 2 
							if(((e.offsetX / e.target.clientWidth * 100)^0)-this.s > abs)
								this.e = (e.offsetX / e.target.clientWidth * 100)^0
							else
								this.s = (e.offsetX / e.target.clientWidth * 100)^0
						}else{
							this.e = (e.offsetX / e.target.clientWidth * 100)^0
						}
					}
				}
			},
			setData(){
				let data
				if(this.steps.length){
					if(this.ranged)
						data = { start: this.steps[this.current_step[0]], end: this.steps[this.current_step[1]] }
					else
						data = { end: this.steps[this.current_step[1]] }
				}else{
					if(this.ranged)
						data = { start: this.s * this.max / 100, end: this.e * this.max / 100 }
					else
						data = { end: this.e * this.max / 100 }
				}
				this.$emit('input', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	div{
		color: inherit;
	}
	canvas{
		position: absolute;
	}
	.slider{
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: calc(100% - 4px);
		padding: 0 8px;
		// max-width: 350px;
    margin: 2px;
		&-percent{
			color: #696160;
			fill: #696160;
			margin-bottom: 0.5rem;
			flex-wrap: nowrap;
			font-weight: 500;
			font-size: 12px;
			line-height: 24px;
			&>div>svg{
				margin-left: 4px;
			}
		}
		&-max{
			color: #000000d0;
			margin-bottom: 0.5rem;
			flex-wrap: nowrap;
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
		}
		&-bar{
			width: 100%;
			border-radius: 4px;
			height: 26px;
			padding: 8px 0;
			align-items: flex-start;
      justify-content: center;
      position: relative;
			cursor: pointer;
			&:before{
				content: "";
				height: calc(100% - 16px); 
				width: 100%;
				position: absolute;
				left: 0;
				background-color: white;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
				border-radius: inherit;
				z-index: 0;
			}
			&:after{
				content: "";
				height: 100%; 
				width: 100%; 
				position: absolute;
				top: 0;
				left: 0;
				background-color: transparent;
				border-radius: inherit;
				z-index: 5;
			}
			&>.part{
				position: absolute;
				width: auto;
				padding: 8px;
				color: #FFDB4D;
				background-color: white;
				transform: translate(-50%,-50%);
				border-radius: 5px;
				border: 1px solid #FFDB4D;
				opacity: 0;
				z-index: 0;
				&.active{
					transform: translate(-50%,-150%);
					opacity: 1; 
					transition: opacity 0.3s, transform 0.3s;
				}
				&:before{
					content: "";
					position: absolute;
					border-radius: inherit;
					width: 100%;
					height: 100%;
					left: 0;
					top: 0;
					border: 1px solid var(--input_border);
				}
				&:after{
					content: "";
					position: absolute;
					bottom: 0%;
					left: calc(50% - 5px);
					width: 10px;
					height: 10px;
					background-color: white;
					border-bottom: 1px solid #FFDB4D;
					border-right: 1px solid #FFDB4D;
					transform: translateY(50%) rotate(45deg);
				}
			}
			&>.bar{
				width: 100%;
				height: 10px;
				max-width: 0;
				border-radius: inherit;
				background-color: #FFDB4D;
				transition: 0s;
        z-index: 1;
        position: absolute;
			}
			&>label{
				position: absolute;
				height: 21px;
				width: 21px;
				transform: translate(-50%, calc(-50% + 3px));
				border-radius: 50%;
				background-color: #FFDB4D;
				border: 6px solid white;
				display: flex;
				align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
				transition: all 0.2s, left 0s;
				z-index: 6;
				cursor: pointer;
				&:hover, &.active{
					min-height: 15px;
					min-width: 15px;
					border: 10px solid #FFDB4D;
          background-color: white;
					&:before{
						box-shadow: 0 0 0 20px #FFDB4D;
					}
				}
				&:before{
					content: "";
					height: 10px;
					width: 5px; 
					background-color: inherit;
					border-radius: inherit;
					z-index: 1;
					position: absolute;
					opacity: 0.3;
					box-shadow: 0 0 0 0 var(--primary);
					transition: 0.3s;
				}
				&:after{
					content: "";
					height: 8px; 
					width: 8px; 
					background-color: var(--primary);
					border-radius: inherit;
					z-index: 3;
				}
			}
		}
	}
	.steps{
		transform: translateY(28px);
		z-index: 0;
		&>.step{
			position: absolute;
			transform: translateX(-50%);
      opacity: 0.5;
			&:first-child{
				// margin-left: 10px;
				justify-content: flex-start !important;
			}
			&:last-child{
				margin-left: -10px;
				justify-content: flex-end !important;
			}
		}
	}
</style>