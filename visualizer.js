class Visualizer {
	static drawNetwork (ctx, network) {
		const margin = 50;
		const left = margin;
		const top = margin;
		const width = ctx.canvas.width - margin * 2;
		const hegiht = ctx.canvas.hegiht - margin * 2;


		Visualizer.drawLevel(ctx, network.levels[0], left, top, width, hegiht);
	}

	static drawLevel (ctx, level, left, top, width, hegiht) {
		const right = left + width;
		const bottom = top + hegiht;

		const nodeRadius = 18;
		for (let i = 0; i < level.inputs.length; i++) {
			const x = lerp(
				left,
				right,
				level.inputs.length == 1
					? 0.5
					: i / (level.inputs.length - 1)
			);
			ctx.beginPath();
			ctx.acc(x, bottom, nodeRadius, 0, Math.PI * 2);
			ctx.fillStyle = "white";
			ctx.fill();
		}
	}
}
