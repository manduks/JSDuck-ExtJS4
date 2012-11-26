/**
 * @class App.ux.CommentsForm
 * @extends Ext.form.Panel
 * This the definition of the comments form,
 * this form is use to add comments, tag users and add geolocalization
 */
Ext.define('App.ux.CommentsForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.comments',
	requires: ['Ext.form.Panel'],

	/**
	 * @property {Boolean} [readOnly=true]
	 * True to allow tagging users.
	 */
	tagUsers: true,
	/**
	 * True to allow adding Geo.
	 */
	addGeo: true,

	initComponent: function() {
		this.layout = 'fit', this.items = this.buildItems();
		this.bbar = this.buildBbar();
		this.callParent(arguments);

		this.addEvents(
		/**
		 * @event saved
		 * Triggered after the comment has been saved succesfully.
		 * @param {Ext.form.Panel} the comment form
		 */
		'saved',
		/**
		 * @event notsaved
		 * Triggered if the comment did not save.
		 * @param {Ext.form.Panel} the comment form
		 */
		'notsaved');
	},
	/**
	 * This method returns the items of the comments form
	 * @return {Array} the items in our form
	 */
	buildItems: function() {
		return [{
			xtype: 'textarea',
			blankText:'¿Qué estás pensando?'
		}];
	},
	/**
	 * This method returns the items the bottom bar will have
	 * @return {Array} the items the bottom bar will have
	 */
	buildBbar: function() {
		return [{
			iconCls: 'add_users',
			hidden: !this.tagUsers,
			handler: function() {
				alert('Tag users');
			}
		}, {
			iconCls: 'pin_map',
			hidden: !this.addGeo,
			handler: function() {
				alert('Add geo');
			}
		}, '->', {
			text: 'Publicar',
			scope: this,
			style: {
				backgroudColor: '#5F78AB'
			},
			handler: function() {
				if(Ext.Number.randomInt(0, 1)) {
					this.fireEvent('saved', this);
				} else {
					this.fireEvent('notsaved', this);
				}
			}
		}];
	}
});