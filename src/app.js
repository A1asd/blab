const icons = {
	"base": "public/assets/img/base.png",
	"homebrew": "public/assets/img/homebrew.png",
	"Die Wächter von Hernfar": "public/assets/img/hernfar.png",
	"Kriegsmeute von Scorn": "public/assets/img/scorn.png",
	"Die Herolde von Dreadfall": "public/assets/img/dreadfall.png",
	"Schrecken aus dem Nebel": "public/assets/img/nebel.png",
};

let unitOrder = ['Legende', 'Elite', 'Infanterie', 'Kavallerie', 'Gelände'];

const app = Vue.createApp({
	data() {
		return {
			units: {},
			army: {},
			skills: [],
			faction: '',
			maxPoints: 50,
			usedPoints: 0,
			extraPoints: false,
			icons: icons,
			activeSkill: undefined,
			showSkills: false,
			showArmy: false,
		};
	},
	watch: {
		faction: function() {
			Object.entries(UNITS).map(([key, pack]) => this.units[key] = pack.filter(unit => unit.faction === this.faction));
			let skills = [];
			Object.values(this.units).map(unit => { if (unit[0]) skills = skills.concat(unit[0].skills) });
			this.skills = skills;
			Object.entries(this.army).map(([key, pack]) => delete this.army[key]);
			this.last = '';
			this.usedPoints = 0;
		},
		army: function() {
			this.army.sort(function(el1, el2) {
				if (el1[0].types[0] === el2[0].types[0]) {
					return el1[0].name > el2[0].name ? 1 : -1;
				}
				return unitOrder.indexOf(el1[0].types[0]) - unitOrder.indexOf(el2[0].types[0]);
			});
		},
		units: function() {
			this.units.sort(function(el1, el2) {
				if (el1[0].types[0] === el2[0].types[0]) {
					return el1[0].name > el2[0].name ? 1 : -1;
				}
				return unitOrder.indexOf(el1[0].types[0]) - unitOrder.indexOf(el2[0].types[0]);
			});
		},
	},
	methods: {
		addUnit(unit) {
			let index = unit.name;
			unit = this.units[index].shift();
			let tempArray = this.army;
			if (!tempArray[unit.name]) tempArray[unit.name] = [];
			tempArray[unit.name].push(unit);
			this.army = tempArray;
			this.usedPoints += unit.cost;
		},
		removeUnit(unit) {
			let index = unit.name;
			unit = this.army[index].shift();
			//if (this.army[index].length <= 0) delete tempArray[index]; //TODO: wird nicht deleted
			let tempArray = this.units;
			tempArray[unit.name].push(unit);
			this.units = tempArray;
			this.usedPoints -= unit.cost;
		},
		setSkill(skill) {
			this.activeSkill = skill;
		},
		setFaction(faction) {
			this.faction = faction;
		},
		toggleSkills() {
			console.log(this.showArmy);
			this.showSkills = !!this.showSkills;
		},
		toggleArmy() {
			this.showArmy = !!this.showArmy;
		},
	},
});

const BuilderComponent = {
	props: ['unit'],
	template: `
		<unit-card :unit="unit" :customfunc="$parent.addUnit(unit)"></unit-card>
	`,
};

const ArmyComponent = {
	props: ['unit'],
	template: `
		<unit-card :unit="unit" :customfunc="$parent.removeUnit(unit)"></unit-card>
	`
};

app.component('FactionSelectorComponent', FactionSelectorComponent);
app.component('BuilderComponent', BuilderComponent);
app.component('ArmyComponent', ArmyComponent);
app.component('UnitCard', UnitCard);
app.component('SkillComponent', SkillComponent);

app.config.globalProperties.$log = console.log;

app.mount('#app');

window.app = app;
