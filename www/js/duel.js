var app = new Vue({
			el: '#app',
			data: {
				message: 'Hello Vue!',
				lifeYou: 100,
				lifeMonster: 100,
				show: true,
				lifePoints: 0,
				message: "",
				logs:[]
			},
			methods: {
				startGame: function() {
					this.show = false;
					this.lifeYou = 100;
					this.lifeMonster = 100;
					this.logs = [];
				},
				attack: function() {
					monsterDamage = Math.floor((Math.random() * 10) + 1);
					this.lifeYou -= monsterDamage;
					this.logs.push({message:"Monster hits You for "+monsterDamage, class: "alert-danger"});
					playerDamage = Math.floor((Math.random() * 10) + 1);
					this.lifeMonster -= playerDamage;
					this.logs.push({message:"You hit Monster for "+playerDamage, class: "alert-info"});
					this.checkLifePoints();
				},
				heal: function() {
					if (this.lifeYou < 100) {
						this.lifeYou += 10;	
					}
					monsterDamage = Math.floor((Math.random() * 10) + 1);
					this.lifeYou -= monsterDamage;
					this.logs.push({message:"Monster hits You for "+monsterDamage, class: "alert-danger"});
					this.logs.push({message:"You heal for 10", class: "alert-info"});
					this.checkLifePoints();
				},
				special: function() {
					monsterDamage = Math.floor((Math.random() * 10) + 1);
					this.lifeYou -= monsterDamage;
					playerDamage = Math.floor((Math.random() * 10) + 1) + 5;
					this.lifeMonster -= playerDamage;
					this.logs.push({message:"Monster hits You for "+monsterDamage, class: "alert-danger"});
					this.logs.push({message:"You hit Monster for "+playerDamage, class: "alert-info"});					
					this.checkLifePoints();
				},
				giveUp: function() {
					alert("Te has rendido, Perdedor!");
					this.show = !this.show;
				},
				checkLifePoints: function(){
					if (this.lifeYou <= 0 ) {
						alert("Has perdido!, Patetico");
						this.show = !this.show;
					};
					if (this.lifeMonster <= 0 ) {
						alert("Has Ganado, buena la rata!")
						this.show = !this.show;
					};
				}
			}
		})