class Skill {
	static DICERESULTS = {
		Schlag: 'Schlag',
		Streich: 'Streich',
		Durchbohren: 'Durchbohren',
		Heldenhaft: 'Heldenhaft',
		Macht: 'Macht',
		Moral: 'Moral',
	}

	constructor(name, effect, options = {}) {
		this.name = name;
		this.effect = effect;
		if (options.hasOwnProperty('value')) {
			this.value = options.value;
			this.name = name + ' ' + options.value;
		}
		if (options.hasOwnProperty('diceResult')) this.diceResult = options.diceResult;
	}

	static Fliegen() { return new Skill('Fliegen', 'Nicht-fliegende Nahkampf-Einheiten werfen einen Würfel weniger während Kampfwürfen gegen diese Einheit. Diese Einheit ignoriert Kampf- und Bewegungseinschränkungen durch Felder, auf die sie sich bewegt oder die sie besetzt.') }
	static Beweglichkeit(x) { return new Skill('Beweglichkeit', 'Falls diese Einheit aktiviert wurde, darf sie sich bis zu ' + x + ' Feld(er) nach deinem Angriffsschritt bewegen.', { value: x }) }
	static Standhaft(x) { return new Skill('Standhaft', 'Diese Einheit darf ' + x + ' Rückzug in jedem Kampf ignorieren', { value: x }) }
	static Sperrfeuer() { return new Skill('Sperrfeuer', 'Verursache 1 Schaden bei einer feindlichen Einheit, die angrenzend zur Zieleinheit ist.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Behemoth() { return new Skill('Behemoth', 'Falls sich diese Einheit während deines Bewegungsschrittes bewegt, kann sie in diesem Zug keinen Angriff durchführen. Diese Einheit ignoriert andere Einheiten, wenn sie ihre Sichtlinie bestimmt.') }
	static ÜberlegeneTaktik() { return new Skill('Überlegene Taktik', 'Verursache 1 Rückzug', { diceResult: Skill.DICERESULTS.Schlag }) }
	static Verfolgen(x) { return new Skill('Verfolgen', 'Statt nachzusetzen darf sich diese Einheit ' + x + ' Feld(er) bewegen und 1 zusätzlichen Angriff durchführen', { value: x }) }
	static Wachsam() { return new Skill('Wachsam', 'Feindliche Einheiten können keine Gegenschläge bei Angriffen dieser Einheit durchführen.') }
	static Flankieren() { return new Skill('Flankieren', 'Füge 1 Würfel zu jedem Kampfwurf hinzu, der durch andere eigene Einheiten gegen feindliche Einheiten auf angrenzenden Feldern zu dieser Einheit durchgeführt wird. Flankieren kann maximal 1 Würfel pro Kampfwurf hinzufügen.') }
	static Niedertrampeln() { return new Skill('Niedertrampeln', 'Verursache 1 Schaden für jeden ignorierten Rückzug, falls die Zieleinheit unterstützt wird.') }
	static Sturmangriff() { return new Skill('Sturmangriff', 'Verursache 1 Schaden während deines Zuges, falls diese Einheit zu Beginn deines Bewegungsschritts nicht angrezend zur Zieleinheit war.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static BetäubenderSchlag() { return new Skill('Betäubender Schlag', 'Betäubt die Zieleinheit. Betäubte Einheiten können sich nicht bewegen, nicht angreifen, keine Gegenschläge durchführen und sich nicht zurückziehen. Sobald ein Spieler eine betäubte Einheit aktiviert, darf er 2 Machtpunkte ausgeben um den Betäubt-Marker vom Feld dieser Einheit zu entfernen', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static DoppelterSchuss() { return new Skill('Doppelter Schuss', 'Falls sich diese Einheit während deines Bewegungsschritts nicht bewegt hat, darf sie 1 zusätzlichen Angriff während deines Angriffsschritts durchführen.') }
	//TODO: Symbol in text
	static Rüstung(x) { return new Skill('Rüstung', 'Diese Einheit darf in jedem Kampf ' + x + ' "Schlag"-Ergebnis ignorieren.', { value: x }) }
	static Autonom() { return new Skill('Autonom', 'Während deines Aktivierungsschritts darfst du 1 Machtpunkt ausgeben, um diese Einheit zu aktivieren, als wäre sie in einem beliebigen Bereich. Falls du das tust, darf sich diese Einheit während deines Bewegungsschritts um 1 zusätzliches Feld weit bewegen.') }
	static Runenschild() { return new Skill('Runenschild', 'Schütze eine eigene Einheit in 1 Feld Entfernung zu dieser Einheit. Sobald eine geschützte Einheit angegriffen wird, entferne den Schildmarker der Einheit und ignoriere 1 Schaden.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Machtfluss() { return new Skill('Machtfluss', 'Ziehe 1 Karte von deinem Machtstapel und gewinne 1 Machtpunkt', { diceResult: Skill.DICERESULTS.Macht }) }
	static Erschrecken() { return new Skill('Erschrecken', 'Verursache 2 Rückzüge', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Gewaltig() { return new Skill('Gewaltig', 'Diese Einheit kann sich nicht auf Gebäude-Felder bewegen oder sie besetzen.') }
	static Verschlingen() { return new Skill('Verschlingen', 'Verursache 1 Schaden, falls die Zieleinheit Infanterie oder Kavallerie ist.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Festsetzen() { return new Skill('Festsetzen', 'Feindliche Nicht-Legenden-Einheiten, die angrenzend zu dieser Einheit sind, können sich während des Bewegungsschritts deines Gegners nicht bewegen.') }
	static Graben() { return new Skill('Graben', 'Während deines Bewegungsschritts ignoriert diese Einheit Bewegungseinschränkungen der Felder, auf die sie sich bewegt') }
	static Wut() { return new Skill('Wut', 'Füge dieser Einheit für jede Figur die ihr fehlt, zu jedem Kampfwurf, den sie durchführt, 1 Würfel hinzu.') }
	static Kampfrausch() { return new Skill('Kampfrausch', 'Verursache 1 Schaden. Entferne 1 Figur nach diesem Kampf aus dieser Einheit.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static TausendWunden() { return new Skill('Tausend Wunden', 'Verursache bei eniner zu dieser Einheit angrenzden feindlichen Einheit 1 Schaden.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Wahnsinnig() { return new Skill('Wahnsinnig', 'Jedes Mal, wenn diese Einheit einen Kampfwurf wirft, darfst du 1 Würfel erneut werfen.') }
	static Verlangen() { return new Skill('Verlangen', 'Während deines Bewegungsschritts darf sich diese Einheit um 1 zusätzliches Geld bewegen, solange sie diese zusätzliche Bewegung angrenzend zu einem Gegner beendet.') }
	static Wildheit() { return new Skill('Wildheit', 'Falls diese Einheit während des gegnerischen Angriffsschritts zu einem Rückzug gewungen ist, darf sie einen Gegenschlag durchführen, bevor sie sich zurückzieht.') }
	static Zerfleischen() { return new Skill('Zerfleischen', 'Lasse die Zieleinheit bluten. Blutende Einheiten werfen bei Kampfwürfen 1 Würfel weniger. Sobald ein Spieler eine blutende Einheit aktiviert, darf er 2 Machtpunkte ausgeben, um den Blutmarker aus dem Feld dieser Einheit zu entfernen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Knochenschuss() { return new Skill('Knochenschuss', 'Anstatt nachzusetzen kann diese Einheit einen Fernangriff mit Kampfwert 3 und einer Reichweite von 1-2 durchführen.') }
	static AussaugenLeben() { return new Skill('Aussaugen', 'Gewinne 1 Lebenspunkt zurück, falls die Zieleinheit 1 oder mehr Schaden erlitten hat.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Blutmagie() { return new Skill('Blutmagie', 'Lasse eine eigene nicht-blutende Einheit innerhalb von 2 Feldern Entfernung zu dieser Einheit bluten, um der Zieleinheit 1 Schaden zuzufügen. Blutende Einheiten werfen bei Kampfwürfen 1 Würfel weniger. Sobald ein Spieler eine blutende Einheit aktiviert, darf er 2 Machtpunkte ausgeben, um den Blutmarker aus dem Feld dieser Einheit zu entfernen.', { diceResult: Skill.DICERESULTS.Macht }) }
	static Blutdurst() { return new Skill('Blutdurst', 'Falls dem Ziel 1 oder mehr Schaden zugefügt wurde, verursache 1 Schaden.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	//TODO: Symbol in text
	static Vipernbiss() { return new Skill('Vipernbiss', 'Vergifte die Zieleinheit. Jedes während eines Kampfwurfs gewürfelte "Macht"-Ergebnis gegen eine vergiftete Einheit darf eingesetzt werden, um 1 Schaden zu verursachen. Sobald ein Spieler eine vergiftete Einheit aktiviert, darf er 2 Machtpunkte ausgeben um den Giftmarker vom Feld dieser Einheit zu entfernen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Pestodem() { return new Skill('Pestodem', 'Die Zieleinheit oder 1 gegnerische Einheit, die angrenzend zur Zieleinheit ist, wird von der Pest befallen.', { diceResult: Skill.DICERESULTS.Macht }) }
	static Ernte() { return new Skill('Ernte', 'Sobald diese Einheit eine gegnerische Einheit eliminiert, gewinnst du 2 Machtmarker.') }
	static BesitzErgreifen() { return new Skill('Besitz ergreifen', 'Tausche die Felder mit der Zieleinheit. Die Zieleinheit kann während dieses Kampfes keinen Gegenschlag ausführen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Ätherisch() { return new Skill('Ätherisch', 'Nicht-Zauberer-Einheiten werfen bei einem Kampfwurf gegen diese Einheit 1 Würfel weniger. Diese Einheit darf sich durch Felder bewegen, die von anderen Einheiten besetzt sind.') }
	static Scharfrichter() { return new Skill('Scharfrichter', 'Die Zieleinheit kann während diese Kampfes keine Rückzugseffekte abhandeln', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static UnheiligeMacht() { return new Skill('Unheilige Macht', 'Diese Einheit kann nicht von geschwächten Einheiten angegriffen werden.') }
	static Pestpfeile() { return new Skill('Pestpfeile', 'Die Zieleinheit wird von der Pest befallen. Von der Pest befallene Einheiten haben einen Bewegungswert von 1 und sind geschwächt. Sobald ein Spieler eine von der Pest befallene Einheit aktiviert, darf er 2 Machtmarker ausgeben, um den Pestmarker von dieser Einheit zu entfernen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Regenerieren() { return new Skill('Regenerieren', 'Du gewinnst 1 Lebenspunkt zurück', { diceResult: Skill.DICERESULTS.Streich }) }
	static Legion() { return new Skill('Legion', 'Füge jedem Kampfwurf, den diese Einheit durchführt, 1 Würfel pro in dieser Einheit verbleibenden Figur hinzu.') }
	static Unnachgiebig() { return new Skill('Unnachgiebig', 'Diese Einheit kann keine Rückzugseffekte abhandeln und ist nie geschwächt.') }
	static Erzwungen() { return new Skill('Erzwungen', 'Nach deinem Bewegungsschritt darfst du 1 Machtmarker ausgeben, um diese Einheit 1 Feld weit zu bewegen.') }
	static Einfluss() { return new Skill('Einfluss', 'Wähle eine eigene Untergebener-Einheit innerhalb von 2 Feldern Entfernung zu dieser Einheit. Nach diesem Kampf darf sich die gewählte Einheit bis zu 1 Feld weit bewegen und einen Angriff durchführen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static AussaugenMacht() { return new Skill('Aussaugen', 'Dein Gegner verliert 1 Machtmarker und du gewinnst 1 Machtmarker', { diceResult: Skill.DICERESULTS.Macht }) }
	static Pirschen() { return new Skill('Pirschen', 'Falls diese Einheit zu Beginn deines Bewegungsschritts nicht angrenzend zu einer eigenen Einheit war, darf sie sich während deines Bewegungsschritts 1 zusätzliches Feld weit bewegen') }
	static Heulen() { return new Skill('Heulen', 'Versetze die Zieleinheit in Panik. Panische Einheiten müssen "Moral"-Ergebnisse bei Angriffswürfen einsetzen, um dafür nach dem Kampf jeweils 1 Schaden zu erleiden. Dieser Schaden kann nicht ignoriert werden. Sobald ein Spieler eine panische Einheit aktiviert, kann er 2 Machtmarker ausgeben um den Panikmarker vom Feld der Einheit zu entfernen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Erschreckend() { return new Skill('Erschreckend', 'Jede zu dieser Einheit angrenzende gegnerische Einheit wird zu 1 Rückzug gewungen.', { diceResult: Skill.DICERESULTS.Heldenhaft }) }
	static Verflucht() { return new Skill('Verflucht', 'Falls diese Einheit 1 oder mehr Schaden erlitten hat, gewinnst du 2 Machtmarker', { diceResult: Skill.DICERESULTS.Macht }) }
	static AuraDerStandhaftigkeit() { return new Skill('Aura der Standhaftigkeit', 'Zu dieser Einheit angrenzende eigene Einheiten sind unterstützt.') }
	static Friedhof() { return new Skill('Friedhof', 'Sobald eine eigene Untergebener-Einheit eliminiert wird, darfst du 1 Machtmarker ausgeben, um jene Einheit sofort auf diesem Feld aufzustellen. Entferne dieses Friedhofsteil dann vom Spielbrett') }
	static Kristallspitze() { return new Skill('Kristallspitze', 'Falls eine eigene Einheit dieses Feld zu Beginn deines Bewegungsschritts besetzt hält, fügt diese Einheit jedem eigenen Kampfwurf während dieses Zuges 1 Würfel hinzu.') }
	static Blutfeld() { return new Skill('Blutfeld', 'Falls eine eigene Einheit dieses Feld zu Beginn deines Spielzuges besetzt, gewinnt diese Einheit 1 Lebenspunkt zurück') }
	static Barrikade() { return new Skill('Barrikade', 'Nachdem du deine Aufstellungskarten ersetzt hast, darfst du dieses Barrikadenfeld auf ein beliebiges freies Feld deiner Spielbretthälfte bewegen. Sobald sich eine Einheit auf dieses Feld bewegt, muss sie entweder sofort ihre Bewegung beenden oder 1 Schaden erleiden, um sich weiter bewegen zu können.') }
	static Kommandozelt() { return new Skill('Kommandozelt', 'Du kannst keine Einheiten weiter entfernt von deinem Fraktionsrand aufstellen als dein Kommandozelt. Falls eine Einheit des Gegners zu Beginn seiner Runde dieses Feld besetzt, entfernt er das Kommandozelt und gewinnt 2 Siegpunkte. Sobald eine Einheit sich auf dieses Feld bewegt muss sie ihre Bewegung beenden.') }
}

const SKILLS = [
	Skill.Fliegen(),
	Skill.Beweglichkeit('X'),
	Skill.Standhaft('X'),
	Skill.Sperrfeuer(),
	Skill.Behemoth(),
	Skill.ÜberlegeneTaktik(),
	Skill.Verfolgen('X'),
	Skill.Wachsam(),
	Skill.Flankieren(),
	Skill.Niedertrampeln(),
	Skill.Sturmangriff(),
	Skill.BetäubenderSchlag(),
	Skill.DoppelterSchuss(),
	Skill.Rüstung('X'),
	Skill.Autonom(),
	Skill.Runenschild(),
	Skill.Machtfluss(),
	Skill.Erschrecken(),
	Skill.Gewaltig(),
	Skill.Verschlingen(),
	Skill.Festsetzen(),
	Skill.Graben(),
	Skill.Wut(),
	Skill.Kampfrausch(),
	Skill.TausendWunden(),
	Skill.Wahnsinnig(),
	Skill.Verlangen(),
	Skill.Wildheit(),
	Skill.Zerfleischen(),
	Skill.Knochenschuss(),
	Skill.AussaugenLeben(),
	Skill.Blutmagie(),
	Skill.Blutdurst(),
	Skill.Vipernbiss(),
	Skill.Pestodem(),
	Skill.Ernte(),
	Skill.BesitzErgreifen(),
	Skill.Ätherisch(),
	Skill.Scharfrichter(),
	Skill.Unnachgiebig(),
	Skill.Pestpfeile(),
	Skill.Regenerieren(),
	Skill.Legion(),
	Skill.Unnachgiebig(),
	Skill.Erzwungen(),
	Skill.Einfluss(),
	Skill.AussaugenMacht(),
	Skill.Pirschen(),
	Skill.Heulen(),
	Skill.Erschreckend(),
	Skill.Verflucht(),
	Skill.AuraDerStandhaftigkeit(),
	Skill.Friedhof(),
	Skill.Kristallspitze(),
	Skill.Blutfeld(),
	Skill.Barrikade(),
	Skill.Kommandozelt(),
]
