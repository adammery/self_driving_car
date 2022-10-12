class Controls {
	constructor(type) {
		this.fowrad = false;
		this.left = false;
		this.right = false;
		this.reverse = false;

		switch (type) {
			case "KEYS":
				this.#addKeyboardListeners();
				break;
			case "DUMMY":
				this.fowrad = true;
				break;
		}

	}

	#addKeyboardListeners () {
		document.onkeydown = (event) => {
			switch (event.key) {
				case "ArrowLeft":
					this.left = true;
					break;

				case "ArrowRight":
					this.right = true;
					break;

				case "ArrowUp":
					this.fowrad = true;
					break;

				case "ArrowDown":
					this.reverse = true;
					break;
			}
		}

		document.onkeyup = (event) => {
			switch (event.key) {
				case "ArrowLeft":
					this.left = false;
					break;

				case "ArrowRight":
					this.right = false;
					break;

				case "ArrowUp":
					this.fowrad = false;
					break;

				case "ArrowDown":
					this.reverse = false;
					break;
			}
		}
	}
}
