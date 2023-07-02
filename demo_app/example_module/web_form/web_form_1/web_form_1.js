frappe.ready(function() {
	
	frappe.web_form.on('enable',(field,value)=>{
		frappe.msgprint("Checkbox is changed")
	})

	frappe.web_form.on('date_of_birth',(field,value)=>{
		if(value){
			let dob = new Date(value)
			let todayDate = new Date()
			let age = Math.floor((todayDate - dob)/(365.25*24*60*60*1000))
			frappe.web_form.set_value('age',age)
		}
	})

	frappe.web_form.validate = () =>{
		let contact = frappe.web_form.get_value('contact_number')
		let pattern = /^\d*(?:\.\d{1,2})?$/
		if(!pattern.test(contact)){
			frappe.msgprint("Enter a valid contact number")
			return false;
		}

		return true;
	}
})