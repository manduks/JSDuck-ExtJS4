/**
 * @class App.ux.Ball
 * @extends Ext.draw.Sprite
 * The ball definition
 */
Ext.define('App.ux.Ball', {
	extend: 'Ext.draw.Sprite',
	alias: 'widget.ball',
	requires: ['Ext.draw.Sprite'],
	type: 'circle',
	fill: 'blue',
	radius: 50,
	/**
	 * @property {Number} dx
	 * 'default to 5' the x increment each time unit
	 */
	dx: 5,
	/**
	 * @property {Number} dy
	 * 'default to 5' the y increment each time unit
	 */
	dy: 5,
	/**
	 * @cfg {Number} x Sprite position along the x-axis.
	 */
	x: 50,
	/**
	 * @cfg {Number} y Sprite position along the y-axis.
	 */
	y: 50,
	/**
	 * This method starts bouncing the ball.
	 * @param {Number} the width of the container.
	 * @param {Number} the height of the container.
	 * @return {App.ux.Ball} the ball object
	 */
	bounce: function(width, height) {
		//bouncing logic
	}
});