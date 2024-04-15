// Initialize WebGL
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

// Create a vertex shader
var vertexShaderSource = `
  attribute vec4 aVertexPosition;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  }
`;
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

// Create a fragment shader
var fragmentShaderSource = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
  }
`;
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// Create a program
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// Get the storage location of attribute variable
var aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');

// Create a buffer object
var vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

// Write date into the buffer object
var vertices = [
   // Ground
   -0.5, -0.5, 0.0, 1.0,
   0.5, -0.5, 0.0, 1.0,
   -0.5, 0.0, 0.0, 1.0,
   0.5, 0.0, 0.0, 1.0,

   // Sky
   -0.5, 0.0, 0.0, 1.0,
   0.5, 0.0, 0.0, 1.0,
   -0.5, 0.5, 0.0, 1.0,
   0.5, 0.5, 0.0, 1.0,

   // Sun
   0.0, 0.4, 0.0, 1.0,
   0.1, 0.4, 0.0, 1.0,
   0.0, 0.5, 0.0, 1.0,
   0.1, 0.5, 0.0, 1.0,

   // Tree 1
   -0.4, -0.2, 0.0, 1.0,
   -0.3, -0.2, 0.0, 1.0,
   -0.4, -0.1, 0.0, 1.0,
   -0.3, -0.1, 0.0, 1.0,

   // Tree 2
   -0.2, -0.2, 0.0, 1.0,
   -0.1, -0.2, 0.0, 1.0,
   -0.2, -0.1, 0.0, 1.0,
   -0.1, -0.1, 0.0, 1.0,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Specify the color for clearing <canvas>
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear <canvas>
gl.clear(gl.COLOR_BUFFER_BIT);

// Draw every shape that is suppose to be in the canvas
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 20);

function drawPicture() {
    // Set the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
  
    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    // Draw every shape that is supposed to be in the canvas
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 20);
  }
