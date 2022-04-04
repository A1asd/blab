const army = [];

const UNITS = [
	Unit.RocKrieger(),
	Unit.Belagerungsgolem(),
	Unit.ZitadellenwacheBase(),
	Unit.ZitadellenwacheBase(),
	Unit.ZitadellenwacheBase(),
	Unit.ZitadellenwacheBase(),
	Unit.ZitadellenwacheBase(),
	Unit.ZitadellenwacheHernfar(),
	Unit.ZitadellenwacheHernfar(),
	Unit.ZitadellenwacheHernfar(),
	Unit.DaqanBogenschuetzen(),
	Unit.DaqanBogenschuetzen(),
	Unit.DaqanBogenschuetzen(),
	Unit.DaqanBogenschuetzen(),
	Unit.DaqanBogenschuetzen(),
	Unit.ReiterDerFlusswache(),
	Unit.ReiterDerFlusswache(),
	Unit.ReiterDerFlusswache(),
	Unit.LanzenreiterDerZitadelle(),
	Unit.LanzenreiterDerZitadelle(),
	Unit.LanzenreiterDerZitadelle(),
	Unit.Runengolem(),
	Unit.Runengolem(),
	Unit.Gepanzerte(),
	Unit.Gepanzerte(),
	Unit.KampfmagierAusGreyhaven(),
	Unit.KampfmagierAusGreyhaven(),
	Unit.KampfmagierAusGreyhaven(),
	Unit.Kristallspitze(),
	Unit.Kristallspitze(),
	Unit.BarrikadeDaqan(),
	Unit.BarrikadeDaqan(),
	
	Unit.Chaoslord(),
	Unit.Unheilbringer(),
	Unit.BerserkerBase(),
	Unit.BerserkerBase(),
	Unit.BerserkerBase(),
	Unit.BerserkerBase(),
	Unit.BerserkerBase(),
	Unit.BerserkerScorn(),
	Unit.BerserkerScorn(),
	Unit.BerserkerScorn(),
	Unit.Tobsüchtige(),
	Unit.Tobsüchtige(),
	Unit.Tobsüchtige(),
	Unit.Obszoenitaet(),
	Unit.Obszoenitaet(),
	Unit.Groteske(),
	Unit.Groteske(),
	Unit.Blutschwestern(),
	Unit.Blutschwestern(),
	Unit.Blutschwestern(),
	Unit.Vipernlegion(),
	Unit.Vipernlegion(),
	Unit.Vipernlegion(),
	Unit.Vipernlegion(),
	Unit.Vipernlegion(),
	Unit.Fleischfetzer(),
	Unit.Fleischfetzer(),
	Unit.Fleischfetzer(),
	Unit.Blutfeld(),
	Unit.Blutfeld(),
	Unit.BarrikadeUthuk(),
	Unit.BarrikadeUthuk(),

	Unit.Grabwyrm(),
	Unit.Todesfee(),
	Unit.Totengeist(),
	Unit.Totengeist(),
	Unit.Todesritter(),
	Unit.Todesritter(),
	Unit.Todesritter(),
	Unit.SkelettBogenschützen(),
	Unit.SkelettBogenschützen(),
	Unit.SkelettBogenschützen(),
	Unit.SkelettBogenschützen(),
	Unit.WiederbelebteDreadfall(),
	Unit.WiederbelebteDreadfall(),
	Unit.WiederbelebteDreadfall(),
	Unit.WiederbelebteNebel(),
	Unit.WiederbelebteNebel(),
	Unit.WiederbelebteNebel(),
	Unit.Knochenschrecken(),
	Unit.Knochenschrecken(),
	Unit.Knochenschrecken(),
	Unit.Knochenschrecken(),
	Unit.Nekromanten(),
	Unit.Nekromanten(),
	Unit.Nekromanten(),
	Unit.Barghests(),
	Unit.Barghests(),
	Unit.FriedhofDreadfall(),
	Unit.FriedhofDreadfall(),
	Unit.FriedhofNebel(),
	Unit.FriedhofNebel(),
];

const icons = {
	"base": "public/assets/img/base.png",
	"Die Wächter von Hernfar": "public/assets/img/hernfar.png",
	"Kriegsmeute von Scorn": "public/assets/img/scorn.png",
	"Die Herolde von Dreadfall": "public/assets/img/dreadfall.png",
	"Schrecken aus dem Nebel": "public/assets/img/nebel.png",
};

const app = Vue.createApp({
	data() {
		return {
			units: [],
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
			this.units = UNITS.filter(unit => unit.faction === this.faction);
			this.army = [];
			this.last = '';
			this.usedPoints = 0;
		},
		army: function() {
			this.army.sort(function(el1, el2) {
				if (el1.name < el2.name) {
					return -1;
				} else if (el1.name > el2.name) {
					return 1;
				}
				return 0;
			});
		},
		units: function() {
			this.units.sort(function(el1, el2) {
				if (el1.name < el2.name) {
					return -1;
				} else if (el1.name > el2.name) {
					return 1;
				}
				return 0;
			});
		},
	},
	methods: {
		addUnit(unit) {
			let index = this.units.findIndex(el => {return el.name === unit.name && el.expansion === unit.expansion});
			this.units.splice(index, 1);
			let tempArray = this.army.map(e => { return e });
			tempArray.push(unit);
			this.army = tempArray;
			this.usedPoints += unit.cost;
		},
		removeUnit(unit) {
			let index = this.army.findIndex(el => {return el.name === unit.name && el.expansion === unit.expansion});
			this.army.splice(index, 1);
			let tempArray = this.units.map(e => { return e });
			tempArray.push(unit);
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
