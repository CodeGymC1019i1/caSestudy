let Impediment = function (img,x,y,width,height,speed,canvas) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.canvas = canvas;
    this.image = img;
    this.width = width;
    this.height = height;


    this.moveDown = function () {
            this.y += this.speed;
            if (this.y > this.canvas.height){
                this.y = 0;
                this.x = Math.random()*this.canvas.width;
                this.speed = Math.random()*5+2;
                let n = Math.floor(Math.random()*3);
                this.image.src = "car"+n+".png"
            }
    }
    this.drawImpediment = function () {
        this.canvas.getContext("2d").drawImage(this.image,this.x,this.y)
    }
};

let MultiImpediment = function (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.arrImpediment = [];

    this.createImpediment = function () {
        let x = Math.random()*canvas.width;
        let image = new Image();
        let n  = Math.floor(Math.random()*3);
        image.src = "car"+n+".png";
        let speed = Math.random()*3+2;
        let impediment = new Impediment(image,x,0,50,100,speed,this.canvas);
        this.arrImpediment.push(impediment);
        impediment.drawImpediment();
    };
    this.createMultiImpediment = function () {
        for (let i = 0; i < 3; i++) {
            this.createImpediment();
        }
        return this.arrImpediment;
    };

}

