	var starImg,bgImg;
	var fairy, fairyImg;
	var star, starBody;
	//create variable for fairy sprite and fairyImg

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		starImg = loadImage("images/star.png");
		bgImg = loadImage("images/starNight.png");
		fairyImg = loadImage("images/fairyImage1.png");
		//load animation for fairy here
	}

	function setup() {
		createCanvas(800, 750);

		//write code to play fairyVoice sound

		//create fairy sprite and add animation for fairy


		star = createSprite(650,30);
		star.addImage(starImg);
		star.scale = 0.2;
		
		fairy = createSprite(100,600);
		fairy.addImage(fairyImg);
		fairy.scale = 0.3;

		engine = Engine.create();
		world = engine.world;

		starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
		World.add(world, starBody);

		fairyBody = Bodies.rectangle(100,600,50,10,{isStatic:true});
		World.add(world,fairyBody);
		
		//fairyBody = Bodies.circle(100,600,10,50,{isStatic:true});
		//World.add(world,starBody);

		Engine.run(engine);

	}


	function draw() {
	background(bgImg);

	star.x= starBody.position.x 
	star.y= starBody.position.y 


	 if (star.y>580 && starBody.position.y>580){
		 Matter.Body.setStatic(starBody,true);
	 }

	

	
	

	console.log(star.y);
	
	keyPressed();
	//write code to stop star in the hand of fairy

	drawSprites();

	}

	function keyPressed() {

		if (keyCode === DOWN_ARROW) {
			Matter.Body.setStatic(starBody,false); 
		}

		//writw code to move fairy left and right
		//if (keyDown === LEFT_ARROW){
		//	fairy.velocity.x = 3 ;
		//	Matter.Body.setStatic(fairybody,false);
		//}
		if (keyDown("LEFT_ARROW")){

			fairy.velocity.x = -16;
		
		Matter.Body.setStatic(fairyBody,true)
	
		}
		
		if (keyDown("RIGHT_ARROW")){

			fairy.velocity.x = 16;
		
		Matter.Body.setStatic(fairyBody,true)
	
		}	
		
	}
