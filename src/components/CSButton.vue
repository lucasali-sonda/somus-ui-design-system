<script setup lang="ts">
import { computed } from 'vue'

export type ButtonSize = 'small' | 'medium' | 'large' | 'x-large'

export type ButtonSizeClass = {
	[key in ButtonSize]: string
}

export interface Props {
	text?: string
	size?: ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
	size: 'medium'
})

const emit = defineEmits<{
	(e: 'click'): void
}>()

const buttonSize = computed(() => {
	const sizes = {
		small: 'CSButton--small',
		medium: 'CSButton--medium',
		large: 'CSButton--large',
		'x-large': 'CSButton--x-large'
	} satisfies ButtonSizeClass

	return sizes[props.size]
})
</script>

<template>
	<button class="CSButton" :class="[buttonSize]" @click="emit('click')">
		<slot>
			{{ props.text }}
		</slot>
	</button>
</template>

<style lang="scss" scoped>
.CSButton {
	display: inline-block;

	&--small {
		padding: 8px;
	}

	&--medium {
		padding: 8px 12px;
	}

	&--large {
		padding: 12px 16px;
	}

	&--x-large {
		padding: 16px 20px;
	}
}
</style>
