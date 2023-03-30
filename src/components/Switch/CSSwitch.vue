<script setup lang="ts">
type Props = {
	modelValue: boolean
	disabled?: boolean
	name: string
}

withDefaults(defineProps<Props>(), {
	modelValue: false,
	disabled: false
})

const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
	emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
	<div class="CSSwitch">
		<input
			:checked="modelValue"
			:id="name"
			:name="name"
			:disabled="disabled"
			type="checkbox"
			class="CSSwitch__checkbox"
			@input="handleInput"
		/>
		<label class="CSSwitch__label" :for="name">
			<span class="CSSwitch__inner" />
			<span class="CSSwitch__slider" />
		</label>
	</div>
</template>

<style lang="scss" scoped>
.CSSwitch {
	position: relative;
	width: 75px;
	display: inline-block;
	vertical-align: middle;
	user-select: none;
	text-align: left;
	&__checkbox {
		display: none;
	}
	&__label {
		display: block;
		overflow: hidden;
		cursor: pointer;
		border: 0 solid #bbb;
		border-radius: 20px;
		margin: 0;
	}
	&__inner {
		display: block;
		width: 200%;
		margin-left: -100%;
		transition: margin 0.3s ease-in 0s;
		&:before,
		&:after {
			display: block;
			float: left;
			width: 50%;
			height: 34px;
			padding: 0;
			line-height: 34px;
			font-size: 14px;
			color: white;
			font-weight: bold;
			box-sizing: border-box;
		}
		&:before {
			content: 'Yes';
			text-transform: uppercase;
			padding-left: 10px;
			background-color: #f90;
			color: #fff;
		}
	}
	&:disabled {
		background-color: #ddd;
		cursor: not-allowed;
		&:before {
			background-color: #ddd;
			cursor: not-allowed;
		}
	}
	&__inner:after {
		content: 'No';
		text-transform: uppercase;
		padding-right: 10px;
		background-color: #bbb;
		color: #fff;
		text-align: right;
	}
	&__slider {
		display: block;
		width: 24px;
		margin: 5px;
		background: #fff;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 40px;
		border: 0 solid #bbb;
		border-radius: 20px;
		transition: all 0.3s ease-in 0s;
	}
	&__checkbox:checked + &__label {
		.CSSwitch__inner {
			margin-left: 0;
		}
		.CSSwitch__slider {
			right: 0px;
		}
	}
}
</style>
