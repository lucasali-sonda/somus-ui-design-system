<script setup lang="ts">
import { ref } from 'vue'
import CSTable from '../src/components/Table/CSTable.vue'
import CSIcon from '../src/components/Icon/CSIcon.vue'

const headers = ref([
	{
		label: 'Name',
		value: 'name'
	},
	{
		label: 'Age',
		value: 'age'
	},
	{
		label: 'Address',
		value: 'address'
	}
])

const items = ref([
	{
		name: 'John',
		age: 20,
		address: '123 Main St'
	},
	{
		name: 'Jane',
		age: 24,
		address: '456 Main St'
	},
	{
		name: 'Susan',
		age: 16,
		address: '789 Main St'
	},
	{
		name: 'Chris',
		age: 55,
		address: '101 Main St'
	},
	{
		name: 'Dan',
		age: 40,
		address: '102 Main St'
	},
	{
		name: 'John',
		age: 20,
		address: '123 Main St'
	},
	{
		name: 'Jane',
		age: 24,
		address: '456 Main St'
	},
	{
		name: 'Susan',
		age: 16,
		address: '789 Main St'
	},
	{
		name: 'Chris',
		age: 55,
		address: '101 Main St'
	},
	{
		name: 'Dan',
		age: 40,
		address: '102 Main St'
	},
	{
		name: 'John',
		age: 20,
		address: '123 Main St'
	},
	{
		name: 'Jane',
		age: 24,
		address: '456 Main St'
	},
	{
		name: 'Susan',
		age: 16,
		address: '789 Main St'
	},
	{
		name: 'Chris',
		age: 55,
		address: '101 Main St'
	},
	{
		name: 'Dan',
		age: 40,
		address: '102 Main St'
	}
])
</script>

<template>
	<CSTable :headers="headers" :items="items" />
	<CSIcon name="ac_unit"></CSIcon>
</template>

<style scoped></style>
