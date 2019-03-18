<!DOCTYPE html>
<html>
<head>
	<title>Ninja 3</title>
</head>
<body>
	<script>

		class Ninja {
			constructor(name, health = 100, strength = 3, speed = 3){
				this.name = name;
				this.health = health;
				this.strength = strength;
				this.speed = speed;
			}

			sayName() {
				console.log(`My name is ${this.name}!`)
			}

			showStats() {
				console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
			}

			drinkSake() {
				this.health += 10
			}

		}

		class Sensei extends Ninja {
			constructor(name, wisdom = 10){
				super(name, 200, 10, 10);
				this.wisdom = wisdom;
			}

			speakWisdom() {
				this.drinkSake();
				console.log("Always run your code after writing a few lines")
			}
		}

		var ninja1 = new Ninja("Mitsubishi")

		ninja1.sayName()

		ninja1.showStats()

		ninja1.drinkSake()

		ninja1.showStats()

		var sensei1 = new Sensei("Toyota")

		sensei1.showStats()

		sensei1.speakWisdom()

		sensei1.showStats()

	</script>
</body>
</html>