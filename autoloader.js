	let scripts = [
		'src/Entities/Skill.js',
		'src/Entities/Unit.js',
		'src/Components/FactionSelectorComponent.js',
		'src/Components/UnitCardComponent.js',
		'src/Components/SkillComponent.js',
	];

	let headElement = document.getElementsByTagName('head')[0];

	let scriptElement = [];

	for (let script in scripts) {
		scriptElement[script] = document.createElement('script');
		scriptElement[script].type = 'text/javascript';
		scriptElement[script].src = scripts[script];
		scriptElement[script].async = false;

		headElement.appendChild(scriptElement[script]);
	}