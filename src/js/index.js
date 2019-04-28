import '../styles/index.scss';
import p5 from 'p5';


class Sketch extends p5 {
  constructor(sketch = () => {}, node = false, sync = false) {
    super(sketch, node, sync);

    this.setup = this.setup.bind(this);
    this.draw = this.draw.bind(this);
    this.windowResized = this.windowResized.bind(this);
    this.calculateSize = this.calculateSize.bind(this);
  }

  /* UTILS */
  calculateSize(scaleFactor) {
    const sideSize = (this.windowWidth < this.windowHeight
      ? this.windowWidth : this.windowHeight) * scaleFactor;
    return {
      width: sideSize,
      height: sideSize,
    };
  }

  /* p5 LIFECYCLE FUNCTIONS */
  setup() {
    const {
      width,
      height,
    } = this.calculateSize(0.75);
    const canvas = this.createCanvas(width, height);
    canvas.parent('frame');
    this.background(0);
  }

  draw() {
    this.background(0);
  }

  /* EVENTS */
  windowResized() {
    const {
      width,
      height,
    } = this.calculateSize(0.75);
    this.resizeCanvas(width, height);
  }
}

// eslint-disable-next-line no-new
new Sketch();
