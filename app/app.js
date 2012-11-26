/**
 * This is the main code for the application
 */

Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
	name: 'App',
	requires: ['App.ux.CommentsForm'],
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			defaults: {
				xtype: 'container',
				border:false
			},
			items: [{
				xtype: 'container',
				region: 'west',
				width: 200,
				style: {
					backgroundImage: "url('images/profile.png')"
				}
			}, {
				xtype: 'container',
				region: 'east',
				width: 200,
				style: {
					backgroundImage: "url('images/chat.png')"
				}
			}, {
				xtype: 'container',
				region: 'center',
				layout: 'border',
				items: [{
					region: 'center',
					layout: 'border',
					items: [{
						xtype: 'comments',
						region: 'north',
						height: 100,
						listeners:{
							saved:function(form){
								alert('saved!!');
							},
							notsaved:function(form){
								alert('not saved');
							}
						}
					}, {
						region: 'center',
						html: 'timeline'
					}]
				}, {
					region: 'east',
					width: 200,
					html:'Adds'
				}]
			}]
		});
	}
});