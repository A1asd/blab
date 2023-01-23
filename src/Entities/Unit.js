class Unit {
	constructor(name, faction, cost, types, skills, move, attack, life, expansion = 'base') {
		this.name = name;
		this.faction = faction;
		this.cost = cost;
		this.types = types;
		this.skills = skills;
		this.move = move;
		this.attack = attack;
		this.life = life;
		this.expansion = expansion;
	}

	//Daqan Units
	static RocKrieger() { return new Unit('Roc-Krieger', 'Daqan', 8, ['Legende', 'Nahkampf'], [Skill.Beweglichkeit(2), Skill.Fliegen()], 3, 4, 4); }
	static Belagerungsgolem() { return new Unit('Belagerungsgolem', 'Daqan', 8, ['Legende', 'Fernkampf'], [Skill.Standhaft(1), Skill.Sperrfeuer(), Skill.Behemoth()], 1, 4, 6, 'Die Wächter von Hernfar'); }
	static ZitadellenwacheBase() { return new Unit('Zitadellenwache', 'Daqan', 4, ['Infanterie', 'Ritter', 'Nahkampf'], [Skill.ÜberlegeneTaktik(), Skill.Verfolgen(1)], 2, 3, 3); }
	static ZitadellenwacheHernfar() { return new Unit('Zitadellenwache', 'Daqan', 4, ['Infanterie', 'Ritter', 'Nahkampf'], [Skill.ÜberlegeneTaktik(), Skill.Verfolgen(1)], 2, 3, 3, 'Die Wächter von Hernfar'); }
	static ReiterDerFlusswache() { return new Unit('Reiter der Flusswache', 'Daqan', 6, ['Kavallerie', 'Nahkampf'], [Skill.Wachsam(), Skill.Flankieren()], 4, 2, 3); }
	static LanzenreiterDerZitadelle() { return new Unit('Lanzenreiter der Zitadelle', 'Daqan', 6, ['Kavallerie', 'Ritter', 'Nahkampf'], [Skill.Niedertrampeln(), Skill.Sturmangriff()], 3, 3, 3, 'Die Wächter von Hernfar'); }
	static Runengolem() { return new Unit('Runengolem', 'Daqan', 6, ['Elite', 'Nahkampf'], [Skill.Standhaft(1), Skill.BetäubenderSchlag()], 2, 3, 3); }
	static DaqanBogenschuetzen() { return new Unit('Daqan-Bogenschützen', 'Daqan', 4, ['Infanterie', 'Bogenschütze', 'Fernkampf'], [Skill.DoppelterSchuss()], 3, 2, 3); }
	static Gepanzerte() { return new Unit('Gepanzerte', 'Daqan', 6, ['Elite', 'Nahkampf'], [Skill.Rüstung(1), Skill.Autonom()], 1, 4, 3, 'Die Wächter von Hernfar'); }
	static KampfmagierAusGreyhaven() { return new Unit('Kampfmagier aus Greyhaven', 'Daqan', 5, ['Infanterie', 'Zauberer', 'Fernkampf'], [Skill.Runenschild(), Skill.Machtfluss()], 2, 3, 3, 'Die Wächter von Hernfar'); }
	static Kristallspitze() { return new Unit('Kristallspitze', 'Daqan', 2, ['Gelände'], [Skill.Kristallspitze()], 0, 0, 0, 'Die Wächter von Hernfar'); }
	static BarrikadeDaqan() { return new Unit('BarrikadeDaqan', 'Daqan', 1, ['Gelände'], [Skill.Barrikade()], 0, 0, 0, 'Die Wächter von Hernfar'); }
	static KommandozeltDaqan() { return new Unit('KommandozeltDaqan', 'Daqan', -5, ['Gelände'], [Skill.Kommandozelt()], 0, 0, 0); }
	//Uthuk Units
	static Chaoslord() { return new Unit('Chaoslord', 'Uthuk', 8, ['Legende', 'Nahkampf'], [Skill.Standhaft(1), Skill.Erschrecken(), Skill.Gewaltig()], 1, 4, 6); }
	static Unheilbringer() { return new Unit('Unheilbringer', 'Uthuk', 8, ['Legende', 'Nahkampf'], [Skill.Verschlingen(), Skill.Festsetzen(), Skill.Graben()], 3, 3, 5, 'Kriegsmeute von Scorn'); }
	static BerserkerBase() { return new Unit('Berserker', 'Uthuk', 4, ['Infanterie', 'Nahkampf'], [Skill.Wut(), Skill.Kampfrausch()], 2, 3, 3); }
	static BerserkerScorn() { return new Unit('Berserker', 'Uthuk', 4, ['Infanterie', 'Nahkampf'], [Skill.Wut(), Skill.Kampfrausch()], 2, 3, 3, 'Kriegsmeute von Scorn'); }
	static Tobsüchtige() { return new Unit('Tobsüchtige', 'Uthuk', 4, ['Infanterie', 'Nahkampf'], [Skill.TausendWunden(), Skill.Wahnsinnig()], 2, 2, 4, 'Kriegsmeute von Scorn'); }
	static Obszoenitaet() { return new Unit('Obszönität', 'Uthuk', 6, ['Elite', 'Nahkampf'], [Skill.Verlangen(), Skill.Wildheit()], 1, 4, 3); }
	static Groteske() { return new Unit('Groteske', 'Uthuk', 6, ['Elite', 'Nahkampf'], [Skill.Zerfleischen(), Skill.Knochenschuss()], 2, 3, 3, 'Kriegsmeute von Scorn'); }
	static Blutschwestern() { return new Unit('Blutschwestern', 'Uthuk', 5, ['Infanterie', 'Zauberer', 'Fernkampf'], [Skill.AussaugenLeben(), Skill.Blutmagie()], 2, 3, 3, 'Kriegsmeute von Scorn'); }
	static Vipernlegion() { return new Unit('Viperlegion', 'Uthuk', 4, ['Infanterie', 'Bogenschütze', 'Fernkampf'], [Skill.Vipernbiss()], 2, 2, 3); }
	static Fleischfetzer() { return new Unit('Fleischfetzer', 'Uthuk', 6, ['Kavallerie', 'Nahkampf'], [Skill.Blutdurst(), Skill.Verfolgen(2)], 3, 3, 3); }
	static Blutfeld() { return new Unit('Blutfeld', 'Uthuk', 2, ['Gelände'], [Skill.Blutfeld()], 0, 0, 0, 'Kriegsmeute von Scorn'); }
	static BarrikadeUthuk() { return new Unit('BarrikadeUthuk', 'Uthuk', 1, ['Gelände'], [Skill.Barrikade()], 0, 0, 0, 'Kriegsmeute von Scorn'); }
	static KommandozeltUthuk() { return new Unit('KommandozeltUthuk', 'Uthuk', -5, ['Gelände'], [Skill.Kommandozelt()], 0, 0, 0); }
	//Waiqar Units
	static Grabwyrm() { return new Unit('Grabwyrm', 'Waiqar', 10, ['Legende', 'Drache', 'Nahkampf'], [Skill.Fliegen(), Skill.Pestodem(), Skill.Ernte()], 3, 4, 6, 'Die Herolde von Dreadfall'); }
	static Totengeist() { return new Unit('Totengeist', 'Waiqar', 6, ['Elite', 'Nahkampf'], [Skill.BesitzErgreifen(), Skill.Ätherisch()], 3, 2, 3, 'Die Herolde von Dreadfall'); }
	static Todesritter() { return new Unit('Todesritter', 'Waiqar', 6, ['Kavallerie', 'Ritter', 'Nahkampf'], [Skill.Scharfrichter(), Skill.UnheiligeMacht()], 2, 4, 3, 'Die Herolde von Dreadfall'); }
	static SkelettBogenschützen() { return new Unit('Skelett-Bogenschützen', 'Waiqar', 4, ['Infanterie', 'Untergebener', 'Bogenschütze', 'Fernkampf'], [Skill.Pestpfeile()], 2, 2, 3, 'Die Herolde von Dreadfall'); }
	static WiederbelebteDreadfall() { return new Unit('Wiederbelebte', 'Waiqar', 4, ['Infanterie', 'Untergebener', 'Nahkampf'], [Skill.Regenerieren(), Skill.Legion()], 2, 1, 3, 'Die Herolde von Dreadfall'); }
	static WiederbelebteNebel() { return new Unit('Wiederbelebte', 'Waiqar', 4, ['Infanterie', 'Untergebener', 'Nahkampf'], [Skill.Regenerieren(), Skill.Legion()], 2, 1, 3, 'Schrecken aus dem Nebel'); }
	static Knochenschrecken() { return new Unit('Knochenschrecken', 'Waiqar', 3, ['Infanterie', 'Untergebener', 'Nahkampf'], [Skill.Unnachgiebig(), Skill.Erzwungen()], 1, 3, 3, 'Schrecken aus dem Nebel'); }
	static Nekromanten() { return new Unit('Nekromanten', 'Waiqar', 5, ['Infanterie', 'Zauberer', 'Fernkampf'], [Skill.Einfluss(), Skill.AussaugenMacht()], 2, 3, 3, 'Schrecken aus dem Nebel'); }
	static Barghests() { return new Unit('Barghests', 'Waiqar', 6, ['Kavallerie', 'Nahkampf'], [Skill.Pirschen(), Skill.Heulen()], 3, 3, 3, 'Schrecken aus dem Nebel'); }
	static Todesfee() { return new Unit('Todesfee', 'Waiqar', 8, ['Legende', 'Nahkampf'], [Skill.Erschreckend(), Skill.Verflucht(), Skill.AuraDerStandhaftigkeit()], 2, 4, 5, 'Schrecken aus dem Nebel'); }
	static FriedhofDreadfall() { return new Unit('Friedhof', 'Waiqar', 2, ['Gelände'], [Skill.Friedhof()], 0, 0, 0, 'Die Herolde von Dreadfall'); }
	static FriedhofNebel() { return new Unit('Friedhof', 'Waiqar', 2, ['Gelände'], [Skill.Friedhof()], 0, 0, 0, 'Schrecken aus dem Nebel'); }
	static KommandozeltWeiqarDreadfall() { return new Unit('KommandozeltWeiqar', 'Waiqar', -5, ['Gelände'], [Skill.Kommandozelt()], 0, 0, 0, 'Die Herolde von Dreadfall'); }
	static KommandozeltWeiqarNebel() { return new Unit('KommandozeltWeiqar', 'Waiqar', -5, ['Gelände'], [Skill.Kommandozelt()], 0, 0, 0, 'Schrecken aus dem Nebel'); }
}

//// moved to skillcomponent
//const SkillComponent = {
//	props: ['skill'],
//	methods: {
//		uncheck: function(event) {
//			if (this.$parent.activeSkill === this.skill) {
//				event.target.checked = false;
//				this.$parent.setSkill(undefined);
//			} else {
//				this.$parent.setSkill(this.skill);
//			}
//		}
//	},
//	template: `
//		<input :id="skill.name" type="radio" name="skill-accordion" @click="uncheck">
//		<label :for="skill.name">
//			<div class="accordion">
//				<div class="accordion-header">
//					{{skill.name}}
//				</div>
//				<div class="accordion-content">
//					{{skill.effect}}
//				</div>
//			</div>
//		</label>
//	`
//}
//
//// moved to unitcardcomponent
//const UnitCard = {
//	data: function() {
//		return {
//			margin_x: 2, // was 8
//			margin_y: 0, // was 3
//		}
//	},
//
//	props: ['unit', 'customfunc', 'index', 'packlength'],
//	template: `
//		<button class="unit-card" @click="customfunc(unit)" :style="{left: index * margin_x + 'px', top: index * margin_y + 'px', zIndex: 0 - index, marginBottom: (packlength-1) * 0 + 'px'}">
//			<div>
//				<span class="unit-prop unit-name">{{unit.name}}</span><span class="unit-prop unit-cost">({{unit.cost}})</span>
//			</div>
//			<template v-for="type in unit.types">
//				<span class="unit-prop unit-type">{{type}}</span>
//			</template>
//			<br>
//			<template v-for="skill in unit.skills">
//				<span class="unit-prop unit-skill" :title="skill.effect">{{skill.name}}</span>
//			</template>
//			<span class="unit-prop unit-stats" v-if="parseInt(unit.move)+parseInt(unit.attack)+parseInt(unit.life)>0">
//				<span class="unit-attribute unit-move">{{unit.move}}</span>
//				<span class="unit-attribute unit-attack">{{unit.attack}}</span>
//				<span class="unit-attribute unit-life">{{unit.life}}</span>
//			</span>
//			<span class="unit-prop unit-expansion"><img :src="$parent.icons[unit.expansion]" height="20" width="20" /></span>
//		</button>
//	`
//};

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
