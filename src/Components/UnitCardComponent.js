const UnitCard = {
	data: function() {
		return {
			margin_x: 2, // was 8
			margin_y: 0, // was 3
		}
	},

	props: ['unit', 'customfunc', 'index', 'packlength'],
	template: `
		<button class="unit-card" @click="customfunc(unit)" :style="{left: index * margin_x + 'px', top: index * margin_y + 'px', zIndex: 0 - index, marginBottom: (packlength-1) * 0 + 'px'}">
			<div>
				<span class="unit-prop unit-name">{{unit.name}}</span><span class="unit-prop unit-cost">({{unit.cost}})</span>
			</div>
			<template v-for="type in unit.types">
				<span class="unit-prop unit-type">{{type}}</span>
			</template>
			<br>
			<template v-for="skill in unit.skills">
				<span class="unit-prop unit-skill" :title="skill.effect">{{skill.name}}</span>
			</template>
			<span class="unit-prop unit-stats" v-if="parseInt(unit.move)+parseInt(unit.attack)+parseInt(unit.life)>0">
				<span class="unit-attribute unit-move">{{unit.move}}</span>
				<span class="unit-attribute unit-attack">{{unit.attack}}</span>
				<span class="unit-attribute unit-life">{{unit.life}}</span>
			</span>
			<span class="unit-prop unit-expansion"><img :src="$parent.icons[unit.expansion]" height="20" width="20" /></span>
		</button>
	`
};
