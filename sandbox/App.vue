<script setup lang="ts">
import { ref } from 'vue'
import CSButton from '../src/components/Button/CSButton.vue'
import CSSwitch from '../src/components/Switch/CSSwitch.vue'

const switchModel = ref(false)
</script>

<template>
	<CSButton text="Test" />
	<CSSwitch v-model="switchModel" :name="'Test'" />
</template>

<style scoped></style>
