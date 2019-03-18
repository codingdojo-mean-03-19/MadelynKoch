<!DOCTYPE html>
<html>
<head>
	<title>Ninja Class</title>
</head>
<body>
	<script>
		function Ninja(name) {
			this.name = name;
			this.health = 100;
			var speed = 3;
			var strength = 3;

			this.sayName = function() {
				console.log("My name is " + this.name +"!");
			}

			this.showStats = function(){
				console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
			}

			this.drinkSake = function(){
				this.health += 10;
			}

			this.punch = function(ninja) {
				if(ninja instanceof Ninja) {
					ninja.health -= 5; 
					console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!")
				}	
			}

			this.kick = function(ninja) {
				if(ninja instanceof Ninja) {
					var damage = 15 * strength
					ninja.health -= damage 
					console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!" )
				}
			}
		}

		var ninja1 = new Ninja("Hyabusa");

		ninja1.sayName();

		ninja1.showStats();

		ninja1.drinkSake();

		ninja1.showStats();

		var ninja2 = new Ninja("Madonna");

		ninja1.punch({});

		ninja1.showStats();

		ninja2.showStats();

		ninja2.kick(ninja1);
	</script>
</body>
</html>

