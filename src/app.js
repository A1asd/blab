const army = [];

const UNITS = {
	//Daqan
	'Roc-Krieger': [Unit.RocKrieger()],
	'Belagerungsgolem': [Unit.Belagerungsgolem()],
	'Zitadellenwache': [
		Unit.ZitadellenwacheBase(),
		Unit.ZitadellenwacheBase(),
		Unit.ZitadellenwacheBase(),
		Unit.ZitadellenwacheBase(),
		Unit.ZitadellenwacheBase(),
		Unit.ZitadellenwacheHernfar(),
		Unit.ZitadellenwacheHernfar(),
		Unit.ZitadellenwacheHernfar(),
	],
	'Daqan-Bogenschützen': [
		Unit.DaqanBogenschuetzen(),
		Unit.DaqanBogenschuetzen(),
		Unit.DaqanBogenschuetzen(),
		Unit.DaqanBogenschuetzen(),
		Unit.DaqanBogenschuetzen(),
	],
	'Reiter der Flusswache': [
		Unit.ReiterDerFlusswache(),
		Unit.ReiterDerFlusswache(),
		Unit.ReiterDerFlusswache(),
	],
	'Lanzenreiter der Zitadelle': [
		Unit.LanzenreiterDerZitadelle(),
		Unit.LanzenreiterDerZitadelle(),
		Unit.LanzenreiterDerZitadelle(),
	],
	'Runengolem': [
		Unit.Runengolem(),
		Unit.Runengolem(),
	],
	'Gepanzerte': [
		Unit.Gepanzerte(),
		Unit.Gepanzerte(),
	],
	'Kampfmagier aus Greyhaven': [
		Unit.KampfmagierAusGreyhaven(),
		Unit.KampfmagierAusGreyhaven(),
		Unit.KampfmagierAusGreyhaven(),
	],
	'Kristallspitze': [
		Unit.Kristallspitze(),
		Unit.Kristallspitze(),
	],
	'BarrikadeDaqan': [
		Unit.BarrikadeDaqan(),
		Unit.BarrikadeDaqan(),
	],
	'KommandozeltDaqan': [Unit.KommandozeltDaqan()],
	
	//Uthuk
	'Chaoslord': [Unit.Chaoslord()],
	'Unheilbringer': [Unit.Unheilbringer()],
	'Berserker': [
		Unit.BerserkerBase(),
		Unit.BerserkerBase(),
		Unit.BerserkerBase(),
		Unit.BerserkerBase(),
		Unit.BerserkerBase(),
		Unit.BerserkerScorn(),
		Unit.BerserkerScorn(),
		Unit.BerserkerScorn(),
	],
	'Tobsüchtige': [
		Unit.Tobsüchtige(),
		Unit.Tobsüchtige(),
		Unit.Tobsüchtige(),
	],
	'Obszönität': [
		Unit.Obszoenitaet(),
		Unit.Obszoenitaet(),
	],
	'Groteske': [
		Unit.Groteske(),
		Unit.Groteske(),
	],
	'Blutschwestern': [
		Unit.Blutschwestern(),
		Unit.Blutschwestern(),
		Unit.Blutschwestern(),
	],
	'Viperlegion': [
		Unit.Vipernlegion(),
		Unit.Vipernlegion(),
		Unit.Vipernlegion(),
		Unit.Vipernlegion(),
		Unit.Vipernlegion(),
	],
	'Fleischfetzer': [
		Unit.Fleischfetzer(),
		Unit.Fleischfetzer(),
		Unit.Fleischfetzer(),
	],
	'Blutfeld': [
		Unit.Blutfeld(),
		Unit.Blutfeld(),
	],
	'BarrikadeUthuk': [
		Unit.BarrikadeUthuk(),
		Unit.BarrikadeUthuk(),
	],
	'KommandozeltUthuk': [Unit.KommandozeltUthuk()],

	//Waiqar
	'Grabwyrm': [Unit.Grabwyrm()],
	'Todesfee': [Unit.Todesfee()],
	'Totengeist': [
		Unit.Totengeist(),
		Unit.Totengeist(),
	],
	'Todesritter': [
		Unit.Todesritter(),
		Unit.Todesritter(),
		Unit.Todesritter(),
	],
	'Skelett-Bogenschützen': [
		Unit.SkelettBogenschützen(),
		Unit.SkelettBogenschützen(),
		Unit.SkelettBogenschützen(),
		Unit.SkelettBogenschützen(),
	],
	'Wiederbelebte': [
		Unit.WiederbelebteDreadfall(),
		Unit.WiederbelebteDreadfall(),
		Unit.WiederbelebteDreadfall(),
		Unit.WiederbelebteNebel(),
		Unit.WiederbelebteNebel(),
		Unit.WiederbelebteNebel(),
	],
	'Knochenschrecken': [
		Unit.Knochenschrecken(),
		Unit.Knochenschrecken(),
		Unit.Knochenschrecken(),
		Unit.Knochenschrecken(),
	],
	'Nekromanten': [
		Unit.Nekromanten(),
		Unit.Nekromanten(),
		Unit.Nekromanten(),
	],
	'Barghests': [
		Unit.Barghests(),
		Unit.Barghests(),
	],
	'Friedhof': [
		Unit.FriedhofDreadfall(),
		Unit.FriedhofDreadfall(),
		Unit.FriedhofNebel(),
		Unit.FriedhofNebel(),
	],
	'KommandozeltWeiqar': [
		Unit.KommandozeltWeiqarDreadfall(),
		Unit.KommandozeltWeiqarNebel(),
	],
};

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
			army: army,
			faction: '',
			maxPoints: 50,
			usedPoints: 0,
			extraPoints: false,
			icons: icons,
		};
	},
	watch: {
		faction: function() {
			Object.entries(UNITS).map(([key, pack]) => this.units[key] = pack.filter(unit => unit.faction === this.faction));
			this.army = [];
			this.last = '';
			this.usedPoints = 0;
		},
		army: function() {
			this.army.sort(function(el1, el2) {
				if (!el2[0] || !el1[0]) {
					return true;
				}
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
			unit = this.units[index].pop();//.splice(index, 1);
			let tempArray = this.army.map(e => { return e });
			tempArray.push(unit);
			this.army = tempArray;
			this.usedPoints += unit.cost;
		},
		removeUnit(unit) {
			let index = this.army.findIndex(el => {return el.name === unit.name && el.expansion === unit.expansion});
			this.army.splice(index, 1);
			let tempArray = this.units;
			tempArray[unit.name].push(unit);
			this.units = tempArray;
			this.usedPoints -= unit.cost;
		},
	},
});

app.component('BuilderComponent', BuilderComponent);
app.component('ArmyComponent', ArmyComponent);
app.component('UnitCard', UnitCard);

app.mount('#app');

window.app = app;
