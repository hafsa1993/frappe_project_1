frappe.pages['example-page-1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Example Page 1',
		single_column: true
	});

	page.set_title("My Example Page")
	page.set_indicator('Page1','green')
	page.set_primary_action('Primary Button',()=>{
		frappe.msgprint("Primary Button is clicked")
	})
	page.set_secondary_action('Secondary Button',()=>{
		frappe.msgprint("Secondary Button is clicked")
	})
	page.add_menu_item('Send Email',()=>{
		frappe.msgprint("Email sent successfully")
	})
	page.add_menu_item('Send Message',()=>{
		frappe.msgprint("Message sent successfully")
	})
	page.add_action_item('Delete Item',()=>{
		frappe.msgprint("Item is deleted")
	})
	page.add_action_item('Modify Item',()=>{
		frappe.msgprint("Item is modified")
	})
	let field = page.add_field({
		label:"Status",
		fieldtype:"Select",
		fieldname:"status",
		options:[
			'Open',
			'Close',
			'Cancelled'
		],
		change(){
			frappe.msgprint(`Selected value is ${field.get_value()}`)
		}
	})

	// $(frappe.render_template("example_page_1")).appendTo(page.body)

	$(frappe.render_template("example_page_1",{
		msg : "Hello Hafsa",
		status: page.title
	})).appendTo(page.body)
}