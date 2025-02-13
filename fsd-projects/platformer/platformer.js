$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
        createPlatform(300, 650, 25, 50);
        createPlatform(500, 650, 25, 50);
        createPlatform(700, 650, 25, 50);
        createPlatform(900, 650, 25, 50);
        createPlatform(1100, 650, 25, 50);
        createPlatform(1300, 650, 25, 50);
        createPlatform(1500, 650, 25, 50);
        createPlatform(1200, 520, 25, 50);
        createPlatform(970, 500, 100, 20);
        createPlatform(960, 400, 20, 100);
        createPlatform(970, 500, 100, 20);
        createPlatform(960, 1, 20, 300);
        createPlatform(770, 500, 27, 10);
        createPlatform(500, 450, 150, 10);
        createPlatform(400, 350, 27, 10)
        createPlatform(300, 240, 27, 10)
        createPlatform(250, 200, 27, 10)
        createPlatform(300, 100, 670, 10)



    // TODO 3 - Create Collectables
    createCollectable("steve", 970, 450);
    createCollectable("diamond", 400, 345);
    createCollectable("database", 900, 70);


    
    // TODO 4 - Create Cannons
    createCannon("right", 700, 1200);
    createCannon("top", 1310, 1);
    createCannon("right", 400, 1500);
   

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
