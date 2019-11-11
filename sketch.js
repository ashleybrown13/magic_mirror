let capture
let tracker
let mirror
let sound
let aperture
let mask

function preload() {


mirror = loadImage('mirror_f.png')
aperture = loadImage('aperture.jpg')
mask = loadImage('evilqueen.gif')

}

function setup() {
    sound = loadSound('evil-queen.mp3')
    createCanvas(1207, 794)
    capture = createCapture(VIDEO)
    capture.size(800, 800)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)    

}


function draw() {  

    image(capture, 150, -50, capture.width, capture.height)
    image(aperture, -30, 0, 1248, 796)

    image(mirror, 250, 0, 700, 800)


    let positions = tracker.getCurrentPosition()
    //print(positions)

//face lines
    // noStroke()
    // stroke(255)
    // strokeWeight(3)
    // fill(255)
//FACE CONNECT DOTS
    // let i = 0
    // while (i < positions.length - 1) {

    //     ellipse(positions[i][0], positions[i][1], 4, 4)
    //     text(i, positions[i][0], positions[i][1])
    //      line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1])
    //     i += 1
    }

//EYE DOTS
    if (positions.length > 0) {

        push()
        image(mask, x_face, y_face)
        pop()

        let x_face = positions[23][0]
        let y_face = positions[24][1]

    }


function mousePressed() {
    if (sound.isPlaying()) {
        sound.stop();
        //mask still on;
    } else {
        sound.play();
        //background and mask go away
    }
}

function mouseClicked() {
        print(int(mouseX), int(mouseY))

    }

