<script setup lang="ts">
import { ref, computed } from 'vue'

import CSIcon from '@/components/Icon/CSIcon.vue'

interface TableHeader {
	label: string
	value: string
	align?: string
	sortable?: boolean
	filterable?: boolean
	groupable?: boolean
	divider?: boolean
	class?: string | string[]
	cellClass?: string | string[]
	width?: string | number
	filter?: (value: any, search: string, item: any) => boolean
	sort?: (a: any, b: any) => number
}

interface Props {
	headers?: TableHeader[]
	items?: any[]
	itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
	itemsPerPage: 10
})

const rowsPerPageOptions = [5, 10, 50, 100]
const rowsPerPage = ref(props.itemsPerPage)

const filteredItems = computed(() => {
	return props.items?.slice(0, rowsPerPage.value)
})
</script>

<template>
	<div class="CSTable__filter">
		<slot name="filter">
			<CSIcon name="filter_list"></CSIcon>
		</slot>
	</div>
	<table class="CSTable">
		<thead class="CSTable__header">
			<tr class="CSTable__header__tr">
				<th v-for="header in headers" :key="header.value" :id="header.value">
					{{ header.label }}
				</th>
			</tr>
		</thead>
		<tbody class="CSTable__body">
			<tr v-for="item in filteredItems" :key="item.value" class="CSTable__body__tr">
				<td v-for="column in headers" :key="column.value">
					{{ item[column.value] }}
				</td>
			</tr>
		</tbody>
		<tfoot class="CSTable__footer">
			<tr class="CSTable__footer__tr">
				<td colspan="100%">
					<label for="rows-per-page">Rows per page: </label>
					<select v-model="rowsPerPage" name="pagination" id="rows-per-page">
						<option disabled value="">Please select one</option>
						<option v-for="option in rowsPerPageOptions" :value="option" :key="option">
							{{ option }}
						</option>
					</select>
				</td>
			</tr>
		</tfoot>
	</table>
</template>

<style lang="scss" scoped>
.CSTable {
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	border: 1px solid black;

	&__header {
		background-color: #f2f2f2;
	}

	&__header__tr {
		border-bottom: 1px solid #ddd;
	}

	&__header__th {
		padding: 8px;
		text-align: left;
	}

	&__body {
		&__tr {
			border-bottom: 1px solid #ddd;
		}

		&__td {
			padding: 8px;
			text-align: left;
		}
	}

	&__footer {
		&__tr {
			border-bottom: 1px solid #ddd;
		}

		&__td {
			padding: 8px;
			text-align: left;
		}
	}

	&__pagination {
		display: flex;
		justify-content: flex-end;
	}

	&__pagination__select {
		width: 100px;
	}

	&__pagination__option {
		width: 100px;
	}

	&__pagination__label {
		margin-right: 10px;
	}
}
</style>
