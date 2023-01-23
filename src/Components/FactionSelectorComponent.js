const FactionSelectorComponent = {
	props: ['maxPoints', 'extraPoints', 'usedPoints'],
	data() {
		return {
			faction: '',
			factions: ['daqan', 'uthuk', 'waiqar'],
		}
	},
	methods: {
		setFaction: function(faction) {
			this.$parent.setFaction(faction);
		},
		setShowSkills: function() {
			this.$parent.toggleSkills();
		},
		setShowArmy: function() {
			this.$parent.toggleArmy();
		},
		firstToUpper: function(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	},
	template: `
		<div class="faction-container" :class="{ selected: faction }">
			<template v-for="factionInput in factions">
				<input :id="'faction' + firstToUpper(factionInput)" class="faction-selector" type="radio" name="faction" v-model="faction" @input="setFaction($event.target.value)" :value="firstToUpper(factionInput)" />
				<label :for="'faction' + firstToUpper(factionInput)">
					<div class="faction-selector-label">
						<img :src="'public/assets/img/' + factionInput + '.png'" />
						<div>{{firstToUpper(factionInput)}}</div>
					</div>
				</label>
			</template>
		</div>
	`
}
