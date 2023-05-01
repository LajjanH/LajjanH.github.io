var cursor = {
  delay: 10,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector(".cursor-dot"),
  $outline: document.querySelector(".cursor-dot-outline"),

  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  updateCursor: function (e) {
    var self = this;

    console.log(e);

    // Show the cursor
    self.cursorVisible = true;
    self.toggleCursorVisibility();

    // Position the dot
    self.endX = e.pageX;
    self.endY = e.pageY;
    self.$dot.style.top = self.endY + "px";
    self.$dot.style.left = self.endX + "px";
  },

  setupEventListeners: function () {
    var self = this;
    // Anchor hovering
    document.querySelectorAll("a").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener("mousedown", function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener("mouseup", function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener("mousemove", function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + "px";
      self.$dot.style.left = self.endX + "px";
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener("mouseleave", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + "px";
    self.$outline.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  },
};

cursor.init();


    // Change cursor color

const navBtn = document.getElementById("navbar__btn");
const cursorColor = document.querySelector(".cursor-dot");
const cursorOutlineColor = document.querySelector(".cursor-dot-outline");
const button = document.querySelector(".button");


let currentActive = 1;

navBtn.addEventListener("click", () => {
  currentActive++; 

  if (currentActive === 4) {
    currentActive = 1;
  }

  if (currentActive === 1) {
    cursorColor.style.backgroundColor = "#A5C9FF";
    button.style.color = "#303030";
    cursorOutlineColor.style.backgroundColor = "rgb(165, 201, 255, 20%)";
  }

  if (currentActive === 2) {
    cursorColor.style.backgroundColor = "#ECFFA5";
    button.style.color = "#303030";
    cursorOutlineColor.style.backgroundColor = "rgb(236, 255, 165, 20%)";
  }

  if (currentActive === 3) {
    cursorColor.style.backgroundColor = "#FFA5A5";
    button.style.color = "#303030";
    cursorOutlineColor.style.backgroundColor = "rgb(255, 165, 165, 20%)";
  }
});

button.addEventListener("mouseover", () => {
  if (currentActive === 1) {
    button.style.color = "#ECFFA5";
  }

  if (currentActive === 2) {
    button.style.color = "#FFA5A5";
  }

  if (currentActive === 3) {
    button.style.color = "#A5C9FF";
  }
});

button.addEventListener("click", () => {
  if (currentActive === 1) {
    button.style.color = "#ECFFA5";
  }

  if (currentActive === 2) {
    button.style.color = "#FFA5A5";
  }

  if (currentActive === 3) {
    button.style.color = "#A5C9FF";
  }
});

button.addEventListener("mouseout", () => {
  if (currentActive === 1) {
    button.style.color = "#303030";
  }

  if (currentActive === 2) {
    button.style.color = "#303030";
  }

  if (currentActive === 3) {
    button.style.color = "#303030";
  }
});
