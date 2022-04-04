class Unit{
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
	static RocKrieger() { return new Unit('Roc-Krieger', 'Daqan', 8, ['Legende', 'Nahkampf'], ['Beweglichkeit 2', 'Fliegen'], 3, 4, 4); }
	static Belagerungsgolem() { return new Unit('Belagerungsgolem', 'Daqan', 8, ['Legende', 'Fernkampf'], ['Standhaft 1', 'Sperrfeuer', 'Behemoth'], 1, 4, 6, 'Die Wächter von Hernfar'); }
	static ZitadellenwacheBase() { return new Unit('Zitadellenwache', 'Daqan', 4, ['Infanterie', 'Ritter', 'Nahkampf'], ['Überlegene Taktik', 'Verfolgen 1'], 2, 3, 3); }
	static ZitadellenwacheHernfar() { return new Unit('Zitadellenwache', 'Daqan', 4, ['Infanterie', 'Ritter', 'Nahkampf'], ['Überlegene Taktik', 'Verfolgen 1'], 2, 3, 3, 'Die Wächter von Hernfar'); }
	static ReiterDerFlusswache() { return new Unit('Reiter der Flusswache', 'Daqan', 6, ['Kavallerie', 'Nahkampf'], ['Wachsam', 'Flankieren'], 4, 2, 3); }
	static LanzenreiterDerZitadelle() { return new Unit('Lanzenreiter der Zitadelle', 'Daqan', 6, ['Kavallerie', 'Ritter', 'Nahkampf'], ['Niedertrampeln', 'Sturmangriff'], 3, 3, 3, 'Die Wächter von Hernfar'); }
	static Runengolem() { return new Unit('Runengolem', 'Daqan', 6, ['Elite', 'Nahkampf'], ['Standhaft 1', 'Betäubender Schlag'], 2, 3, 3); }
	static DaqanBogenschuetzen() { return new Unit('Daqan-Bogenschützen', 'Daqan', 4, ['Infanterie', 'Bogenschütze', 'Fernkampf'], ['Doppelter Schuss'], 3, 2, 3); }
	static Gepanzerte() { return new Unit('Gepanzerte', 'Daqan', 6, ['Elite', 'Nahkampf'], ['Rüstung 1', 'Autonom'], 1, 4, 3, 'Die Wächter von Hernfar'); }
	static KampfmagierAusGreyhaven() { return new Unit('Kampfmagier aus Greyhaven', 'Daqan', 5, ['Infanterie', 'Zauberer', 'Fernkampf'], ['Runenschild', 'Machtfluss'], 2, 3, 3, 'Die Wächter von Hernfar'); }
	static Kristallspitze() { return new Unit('Kristallspitze', 'Daqan', 2, ['Gelände'], ['Kristallspitze'], 0, 0, 0, 'Die Wächter von Hernfar'); }
	static BarrikadeDaqan() { return new Unit('Barrikade', 'Daqan', 1, ['Gelände'], ['Barrikade'], 0, 0, 0, 'Die Wächter von Hernfar'); }
	//Uthuk Units
	static Chaoslord() { return new Unit('Chaoslord', 'Uthuk', 8, ['Legende', 'Nahkampf'], ['Standhaft 1', 'Erschrecken', 'Gewaltig'], 1, 4, 6); }
	static Unheilbringer() { return new Unit('Unheilbringer', 'Uthuk', 8, ['Legende', 'Nahkampf'], ['Verschlingen', 'Festsetzen', 'Graben'], 3, 3, 5, 'Kriegsmeute von Scorn'); }
	static BerserkerBase() { return new Unit('Berserker', 'Uthuk', 4, ['Infanterie', 'Nahkampf'], ['Wut', 'Kampfrausch'], 2, 3, 3); }
	static BerserkerScorn() { return new Unit('Berserker', 'Uthuk', 4, ['Infanterie', 'Nahkampf'], ['Wut', 'Kampfrausch'], 2, 3, 3, 'Kriegsmeute von Scorn'); }
	static Tobsüchtige() { return new Unit('Tobsüchtige', 'Uthuk', 4, ['Infanterie', 'Nahkampf'], ['Tausend Wunden', 'Wahnsinnig'], 2, 2, 4, 'Kriegsmeute von Scorn'); }
	static Obszoenitaet() { return new Unit('Obszönität', 'Uthuk', 6, ['Elite', 'Nahkampf'], ['Verlangen', 'Wildheit'], 1, 4, 3); }
	static Groteske() { return new Unit('Groteske', 'Uthuk', 6, ['Elite', 'Nahkampf'], ['Zerfleischen', 'Knochenschuss'], 2, 3, 3, 'Kriegsmeute von Scorn'); }
	static Blutschwestern() { return new Unit('Blutschwestern', 'Uthuk', 5, ['Infanterie', 'Zauberer', 'Fernkampf'], ['Aussaugen', 'Blutmagie'], 2, 3, 3, 'Kriegsmeute von Scorn'); }
	static Vipernlegion() { return new Unit('Viperlegion', 'Uthuk', 4, ['Infanterie', 'Bogenschütze', 'Fernkampf'], ['Vipernbiss'], 2, 2, 3); }
	static Fleischfetzer() { return new Unit('Fleischfetzer', 'Uthuk', 6, ['Kavallerie', 'Nahkampf'], ['Blutdurst', 'Verfolgen 2'], 3, 3, 3); }
	static Blutfeld() { return new Unit('Blutfeld', 'Uthuk', 2, ['Gelände'], ['Blutfeld'], 0, 0, 0, 'Kriegsmeute von Scorn'); }
	static BarrikadeUthuk() { return new Unit('Barrikade', 'Uthuk', 1, ['Gelände'], ['Barrikade'], 0, 0, 0, 'Kriegsmeute von Scorn'); }
	//Legion Units
	static Grabwyrm() { return new Unit('Grabwyrm', 'Legion', 10, ['Legende', 'Drache', 'Nahkampf'], ['Fliegen', 'Pestodem', 'Ernte'], 3, 4, 6, 'Die Herolde von Dreadfall'); }
	static Totengeist() { return new Unit('Totengeist', 'Legion', 6, ['Elite', 'Nahkampf'], ['Besitz ergreifen', 'Ätherisch'], 3, 2, 3, 'Die Herolde von Dreadfall'); }
	static Todesritter() { return new Unit('Todesritter', 'Legion', 6, ['Kavallerie', 'Ritter', 'Nahkampf'], ['Scharfrichter', 'Unheilige Macht'], 2, 4, 3, 'Die Herolde von Dreadfall'); }
	static SkelettBogenschützen() { return new Unit('Skelett-Bogenschützen', 'Legion', 4, ['Infanterie', 'Untergebener', 'Bogenschütze', 'Fernkampf'], ['Pestpfeile'], 2, 2, 3, 'Die Herolde von Dreadfall'); }
	static WiederbelebteDreadfall() { return new Unit('Wiederbelebte', 'Legion', 4, ['Infanterie', 'Untergebener', 'Nahkampf'], ['Regenerieren', 'Legion'], 2, 1, 3, 'Die Herolde von Dreadfall'); }
	static WiederbelebteNebel() { return new Unit('Wiederbelebte', 'Legion', 4, ['Infanterie', 'Untergebener', 'Nahkampf'], ['Regenerieren', 'Legion'], 2, 1, 3, 'Schrecken aus dem Nebel'); }
	static Knochenschrecken() { return new Unit('Knochenschrecken', 'Legion', 3, ['Infanterie', 'Untergebener', 'Nahkampf'], ['Unnachgiebig', 'Erzwungen'], 1, 3, 3, 'Schrecken aus dem Nebel'); }
	static Nekromanten() { return new Unit('Nektromanten', 'Legion', 5, ['Infanterie', 'Zauberer', 'Fernkampf'], ['Einfluss', 'Aussaugen'], 2, 3, 3, 'Schrecken aus dem Nebel'); }
	static Barghests() { return new Unit('Barghests', 'Legion', 6, ['Kavallerie', 'Nahkampf'], ['Pirschen', 'Heulen'], 3, 3, 3, 'Schrecken aus dem Nebel'); }
	static Todesfee() { return new Unit('Todesfee', 'Legion', 8, ['Legende', 'Nahkampf'], ['Erschreckend', 'Verflucht', 'Aura der Standhaftigkeit'], 2, 4, 5, 'Schrecken aus dem Nebel'); }
	static FriedhofDreadfall() { return new Unit('Friedhof', 'Legion', 2, ['Gelände'], ['Friedhof'], 0, 0, 0, 'Die Herolde von Dreadfall'); }
	static FriedhofNebel() { return new Unit('Friedhof', 'Legion', 2, ['Gelände'], ['Friedhof'], 0, 0, 0, 'Schrecken aus dem Nebel'); }
}

const BuilderComponent = {
	props: [
		'unit',
	],
	data() {
		return {
			last: this.$parent.last,
		};
	},
	template: `
		<button class="unit-card" @click="$parent.addUnit(unit)"><unit-card :unit="unit"></unit-card></button>
	`,
};

const ArmyComponent = {
	props: ['unit'],
	template: `
		<button class="unit-card" @click="$parent.removeUnit(unit)"><unit-card :unit="unit"></unit-card></button>
	`
};

const UnitCard = {
	props: ['unit'],
	template: `
		<div>
			<span class="unit-prop unit-name">{{unit.name}}</span><span class="unit-prop unit-cost">({{unit.cost}})</span>
		</div>
		<span class="unit-prop unit-types">{{unit.types.join(' - ')}}</span>
		<span class="unit-prop unit-skills">{{unit.skills.join(', ')}}</span>
		<span class="unit-prop unit-stats" v-if="parseInt(unit.move)+parseInt(unit.attack)+parseInt(unit.life)>0">{{unit.move}} {{unit.attack}} {{unit.life}}</span>
		<span class="unit-prop unit-expansion"><img :src="$parent.$parent.icons[unit.expansion]" height="20" width="20" /></span>
	`
};
