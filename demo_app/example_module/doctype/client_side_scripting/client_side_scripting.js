// Copyright (c) 2023, hafsa and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	// refresh: function(frm) {
	// 	frappe.msgprint("Hello the form was refreshed!")
	// },

	// onload:function(fmr){
	// 	frappe.msgprint("Hello the form was loaded")
	// },

	// validate:function(frm){
	// 	frappe.throw("Hello from validate event")
	// },

	// before_save:function(frm){
	// 	frappe.throw("Hello from before-save event")
	// },

	// after_save:function(frm){
	// 	frappe.msgprint("Hello from after-save event")
	// },

	// enable:function(frm){
	// 	frappe.msgprint("Hello from enable event")
	// },

	// age:function(frm){
	// 	frappe.msgprint("Hello from age event")
	// },

	// family_members_on_form_rendered:function(frm){
	// 	frappe.msgprint("family_members form rendered")
	// }

	// before_submit:function(frm){
	// 	frappe.throw("Hello from before_submit event")
	// },

	// on_submit:function(frm){
	// 	frappe.msgprint("Hello from on_submit event")
	// },

	// before_cancel:function(frm){
	// 	frappe.throw("fHello from before_cancel event")
	// },

	// after_cancel:function(frm){
	// 	frappe.msgprint("Hello from after_cancel event")
	// },

	// after_save:function(frm){
	// 	frappe.msgprint(`Hello full name is ${frm.doc.first_name} ${frm.doc.middle_name} ${frm.doc.last_name}`)

	// 	for(let i of frm.doc.family_members){
	// 		frappe.msgprint(`${i.idx}. Name is ${i.full_name} and relation is ${i.relation}`)
	// 	}
	// },

	// refresh:function(frm){
	// 	if(frm.is_new()){
	// 		frm.set_intro("Now you can add new client side scripting form")
	// 	}
	// },

	// validate:function(frm){
	// 	frm.set_value('full_name',`${frm.doc.first_name} ${frm.doc.middle_name} ${frm.doc.last_name}`)

	// 	frm.add_child('family_members',{
	// 		full_name: "Thomas",
	// 		age: 24,
	// 		relation: "Brother"
	// 	})
	// }

	// enable: function(frm){
	// 	frm.set_df_property('first_name','reqd',1)
	// 	frm.set_df_property('last_name','read_only',1)
	// }

	refresh:function(frm){
		// frm.add_custom_button('Click Me',()=>{
		// 	frappe.msgprint("You clicked a button")
		// })

		frm.add_custom_button('Button1',()=>{
			frappe.msgprint("You clicked a button 1")
		},'Drop-down Button')

		frm.add_custom_button('Button2',()=>{
			frappe.msgprint("You clicked a button 2")
		},'Drop-down Button')
	}
});

frappe.ui.form.on('Family Members Doctype',{
		// full_name:function(frm){
		// 	frappe.msgprint("Hello from child doctype full_name event")
		// },

		// age:function(frm){
		// 	frappe.msgprint("Hello from child doctype age event")
		// }


});
