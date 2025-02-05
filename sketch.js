let capture
let tracker
let mirror
let sound
let aperture
let mask
let offset_x
let offset_y
let queen = false

function preload() {

mirror = loadImage('mirror_f.png')
aperture = loadImage('aperture.png')
mask = loadImage('evilqueen.png')
myFont = loadFont('font.ttf')
smoke = loadImage('fog-lowG.png')
smoke2 = loadImage('smoke3G.png')
smoke3 = loadImage('smoke2G.png')
sound = loadSound('evil-queen.mp3')

}

function setup() {
    let canvas = createCanvas(1093, 794)
    canvas.parent('p5')
    capture = createCapture(VIDEO)
    capture.size(800, 800)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)    
}


function draw() { 

    let positions = tracker.getCurrentPosition()
    let i = 0
        while (i < positions.length - 1) {

            ellipse(positions[i][0], positions[i][1], 4, 4)
            text(i, positions[i][0], positions[i][1])
            line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1])
            i += 1
        }
    offset_x = 10
    offset_y = -50
    image(capture, offset_x, offset_y, capture.width, capture.height)

    if (positions.length > 0) {
    let noseX = positions[62][0]
    let noseY = positions[62][1]

    let face_left_x = positions[1][0]
    let face_left_y = positions[1][1]

    let face_right_x = positions[13][0]
    let face_right_y = positions[13][1]

    let face_width = dist(face_left_x, face_left_y, face_right_x, face_right_y)

    let ratio = mask.height / mask.width
    let w = (face_width * 2.75)
    let h = w * ratio


    if (queen == false) {
        image(mask, noseX - w/2 + offset_x, noseY - h/2 + offset_y, w, h)
    }
   
    }

 
    image(aperture, -155, 0, 1248, 796)
    image(smoke, -20, 640)
    image(smoke2, -20, -30, smoke2.width/6, smoke2.height/6)
    image(smoke3, 685, 100, smoke3.width/4, smoke3.height/4)

    image(mirror, 100, 0, 700, 800)

    textFont(myFont);
    stroke(71, 170, 199) 
    fill(98, 183, 208)
    textSize(45);
    text('Mirror, Mirror', 10, 45);
    // print(positions)

}

function mousePressed() {
    if (sound.isPlaying()) {
        sound.stop();
        queen = false
    } else {
        sound.play();
        sound.onended(queenSoundEnded)
    }
}

function queenSoundEnded() {
    queen = true
}

function mouseClicked() {
        print(int(mouseX), int(mouseY))

    }

