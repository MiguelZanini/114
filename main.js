/*variaveis x e y são usadas para colocar o nariz na pessoa */
noseX = 0;
noseY = 0;
// carrega as imagens pra cada variavel 
/*essa funçao e usada pra carrega o nariz de paiaço kkkkkkkkk*/
function preload() {
  clown_nose = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAbFBMVEX////u7u4AAADt7e339/fz8/Py8vL9/f37+/v5+fns7Ozw8PDLy8vl5eXY2NioqKhvb29paWmvr680NDTExMR7e3tBQUFjY2MWFhaYmJi5ubkuLi5cXFySkpLe3t5MTEwmJiaGhoYcHBwLCwtWRS/yAAAEtElEQVRoge1a65qjIAyNCgheW6udsWOddub933GDt6pFxQ672916fuVrD0SRnIR8AEj4FoJLi6LhEGkJB00mLVdannGiBZvvv+XbQdRMadVMD62GifCMEx3wJbiLoNIS0iLSooCWkBaTv5knuiBf3nHlwzBcCEdIi0iLSovLv/3qTTzjxL5vq8+0ZqY0RHwm33y0Qs7UlAaIwCUoQwhpEWkRaQlp0c5i5onQREQXjU4/Gp27sDVIfAZteQ5dQ+3xKibvVAg8lVz9mOgAlRAITiqLtxbh8tfb38aJYqRrniIiHJVcmSA+k7b8Ud9VNmtWCDdFvUJyKzQrhPBv28MoEcjfA4wjwrmPiMmS4GdEp/H9srrWJrub8nNvIkWYIloghqLUCRAXIynixolw2x7DiPBUoWOW+LK6NswlqopWmSJMEIF1hdV8icXNE+sHkNF4FxFTYWuK+Aza8hy+F0pfg0QLqhMhaw+MUB0didseGKm0eHWyBPPEUe3QRMRySWCA+Cza8lK+PYnKYtJqsg6iZkrL/03EGn5HotIiHYmNZjNPfBZtUTEtRpuKtnesVhDB8juiId/gRUGSJ2kUYhlE56YMy+AU56cgpIRq+57rxKW7D7vBR3EOCHEVRAJudC6+WuJhnxL6w94eh/TTHuIjD4GNiABhfhjxjgGQH/X2xN5WYBfyITHcKWmUqesWLW3xxi/T4lxvhGpKIvIJ1iGkD+ta+D0xqW1/li2RROOvcsN3RB/s7XmXyUlt+xLURJ5+zbC+SjZec8da7u1x/zgzKeIESITTPOlIHuntQTE/KzoXBNIl0l4M4luvt3ddmtW2AwiWSRlfrWvx8qz2RzAVB33EfGVvL9KY1LbftVgRXdPbI3Rui6/Fhbr6vT1BF/fZKuzrbXbX22MKbYGzUdcog6DUlkDc+57SyMeR83vfEWSxoKNOnHnX+OauNarPkwwjtAgI8K7h5nKNwG6xoHx9XHGnNS6EcHlQoDoAhuhnXFLSZKZ0xXyHcAX5GFRbXMhYizH9HHCxa1W87K5xcorPOmLR4bSk5qNHRRdJft3VPk4y5t/WjO9jj3WhsmjQwZuQujaTpWfx7lsEiJ603aNkDqC8JI+NjgQqlU42USFxq96eRbKHRkPVshOrPnmLrK1bfPLAJ4+bcsQROhlvhDfe1Uy+mC655lzXpZC7+psdSa9e0yhShghEvwzTS7gdCj7o7bmr0kfhiEF1B2zNup0xbw96ez5JdWXlPR8WdpgVmch1Y+2QKmomQvW2+76qzMdHPLfca8lE5ivrNReiZZUqAs4mjpfR8p7ZRUAna8VyPollkaxuJlt25ezKfWely+Z6e8DTTP3hL9mpadRNtuxw4yeZutI7XDFlsuXenhsmWTHIjp+7PJLHfp2WHQ/y/Wf/2x+LLAmpYJZWbw+TvO+EYRmlSR6fgqhypN26YlgIybFxjGNxMMZgvSf0z6G19mCZQasxq/prfm3JspvxSeLv7e05s8Stt/ekvb3/1/fyLbvt3t52b2+7t7fd2/tXdW27t9dGxHZvb7u3ZwQwjghnu7f3p3TN2u7tbff2tnt72729/0vXbsyF0tcgcbu398K69kq+fwGmnL1iPjyVPAAAAABJRU5ErkJggg==');
}
// prepara tudo que precisamos
function setup() {
  // cria o canvas
  canvas = createCanvas(300, 300);
  canvas.center();
  // centraliza ele
  video = createCapture(VIDEO);
  // captura a img
  video.size(300, 300);
  // define o tamanho
  video.hide();
  // e esconde da tela

  // ele é carregado usando o ml5.net
  poseNet = ml5.poseNet(video, modelLoaded);
  // define um evento para a detecção de poses
  poseNet.on('pose', gotPoses);
}
// essa funçao e chamada qnd o modelo posenet e carregado com sucesso.
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

// recebe o result das pose se existir no x e no y com a primeira pose ate a final
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x - 15;
    noseY = results[0].pose.nose.y - 15;
  }
}
// faz o nariz aparecer
function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}
// dá o download da foto ;-;
function take_snapshot() {
  save('myFilterImage.png');
}

function updateCanvas() {
  background("white");
  randomNumber = Math.floor((Math.random() *
    quickDrawDataset.length) + 1);
  console.log(quickDrawDataset[randomNumber]);
  sketch = quickDrawDataset[randomNumber];
  document.getElementById('sketchName').innerHTML = 'Sketch Tobe Drawn:' + sketch;
}
function checkSketch()
{
timerCounter++;
document.getElementById('time').innerHTML = 'Timer: ' +
timerCounter;
console.log(timerCounter)
if(timerCounter > 400)
{
timerCounter = 0;
timerCheck = "completed"
}
if(timerCheck =="completed" || answerHolder == "set")
{
timerCheck = "";
answerHolder = "";
updateCanvas();
}
}
function draw() {
  checkSketch()
  if(drawnSketch == sketch)
  {
  answerHolder = "set"
  score++;
  document.getElementById('score').innerHTML = 'Score: ' +
  score;
  }
  
  }