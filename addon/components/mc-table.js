import Ember from 'ember';
import layout from '../templates/components/mc-table';

export default Ember.Component.extend({
  layout,
  columns: [{
			"propertyName": "iden",
			"title": "iden"
		}, {
			"propertyName": "firstName",
			"title": "firstName"
		}, {
			"propertyName": "phoneNumber",
			"title": "PhoneNumber"
		}],
	
	model: [{
			iden: "1",
			firstName: "firstaddon",
			phoneNumber: "123451245"
		}, {
			iden: "2",
			firstName: "secondaddon",
			phoneNumber: "123451245"
		}, {
			iden: "3",
			firstName: "thirdaddon",
			phoneNumber: "123451245"
		}]
});
