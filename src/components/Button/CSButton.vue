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
		padding: $spacing-2;
	}

	&--medium {
		padding: $spacing-2 $spacing-3;
	}

	&--large {
		padding: $spacing-3 $spacing-4;
	}

	&--x-large {
		padding: $spacing-4 $spacing-5;
	}
}
</style>
