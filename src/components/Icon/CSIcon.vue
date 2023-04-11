<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

type IconSize = 'small' | 'medium' | 'large' | 'x-large'

interface Props {
	name: string
	size?: IconSize
}

const props = withDefaults(defineProps<Props>(), {
	size: 'medium'
})

const icon = defineAsyncComponent(() => import(`../../assets/icons/${props.name}.svg?component`))

const sizeClass = computed(() => {
	const classes = {
		small: 'CSIcon--small',
		medium: 'CSIcon--medium',
		large: 'CSIcon--large',
		'x-large': 'CSIcon--x-large'
	}

	return classes[props.size]
})
</script>

<template>
	<component :is="icon" class="CSIcon" :class="[sizeClass]"></component>
</template>

<style lang="scss" scoped>
.CSIcon {
	display: inline-block;
	&--small {
		width: 1rem;
		height: 1rem;
	}

	&--medium {
		width: 1.5rem;
		height: 1.5rem;
	}

	&--large {
		width: 2rem;
		height: 2rem;
	}

	&--x-large {
		width: 3rem;
		height: 3rem;
	}
}
</style>
