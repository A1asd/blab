console.log('init skillcomponent');
const SkillComponent = {
	props: ['skill'],
	methods: {
		uncheck: function(event) {
			if (this.$parent.activeSkill === this.skill) {
				event.target.checked = false;
				this.$parent.setSkill(undefined);
			} else {
				this.$parent.setSkill(this.skill);
			}
		}
	},
	template: `
		<input :id="skill.name" type="radio" name="skill-accordion" @click="uncheck">
		<label :for="skill.name">
			<div class="accordion">
				<div class="accordion-header">
					{{skill.name}}
				</div>
				<div class="accordion-content">
					{{skill.effect}}
				</div>
			</div>
		</label>
	`
}
