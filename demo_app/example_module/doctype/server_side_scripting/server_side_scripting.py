# Copyright (c) 2023, hafsa and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ServerSideScripting(Document):
	pass
	# def validate(self):
	# 	frappe.msgprint("Hello from validate function")

	# def before_save(self):
	# 	frappe.throw("Hello from before_save function")
	
	# def before_insert(self):
	# 	frappe.throw("Hello from before_insert function")

	# def after_insert(self):
	# 	frappe.throw("Hello from after_insert function")

	# def on_update(self):
	# 	frappe.msgprint("Hello from on_update function")

	# def before_submit(self):
	# 	frappe.msgprint("Hello from before_submit function")

	# def on_submit(self):
	# 	frappe.msgprint("Hello from on_submit function")

	# def on_cancel(self):
	# 	frappe.msgprint("Hello from on_cancel function")

	# def on_trash(self):
	# 	frappe.msgprint("Hello from on_trash function")

	# def after_delete(self):
	# 	frappe.msgprint("Hello from after_delete function")

	# def validate(self):
	# 	frappe.msgprint(f"Hello full name is {self.first_name} {self.middle_name} {self.last_name}")

	# def validate(self):
	# 	for i in self.family_members:
	# 		frappe.msgprint(f"hello {i.full_name} {i.relation}")

	# def validate(self):
	# 	doc = frappe.get_doc('Client Side Scripting',self.client_side_document)
	# 	frappe.msgprint(f"Name is {doc.first_name} and last name is {doc.last_name}")
	# 	for i in doc.family_members:
	# 		frappe.msgprint(f"Family member {i.idx} is {i.full_name}")

	# def validate(self):
	# 	doc = frappe.new_doc('Client Side Scripting')
	# 	doc.first_name = "Grace"
	# 	doc.last_name = "George"
	# 	doc.age = 19
	# 	doc.append('family_members',{
	# 		"full_name" : "Lilly George",
	# 		"age" : 40,
	# 		"relation" : "Mother"
	# 	})
	# 	doc.insert()
	# 	doc.save()

	# def validate(self):
	# 	frappe.delete_doc('Client Side Scripting',self.client_side_document)

	#  def validate(self):
	# 	doc = frappe.get_doc('Client Side Scripting',self.client_side_document)
	# 	doc.delete()

	# def validate(self):
	# 	doc = frappe.get_doc('Client Side Scripting',self.client_side_document)
	# 	doc.db_set('age',28)
	# 	doc.db_set('email','asimd123@gmail.com')

	# def validate(self):
	# 	# frappe.db.get_list("doctype",filters,fields,order_by,group_by,start,page_length)
	# 	doc = frappe.db.get_list('Client Side Scripting',
	# 	filters = {
	# 		'enable': 1
	# 	},
	# 	fields = ['first_name','last_name','age'],
	# 	order_by = 'first_name'
	# 	)
		
	# 	for index,i in enumerate(doc):
	# 		frappe.msgprint(f"Row {index+1}.Name is {i.first_name} {i.last_name} and age is {i.age}")

	# def validate(self):
	# 	firstName,lastName = frappe.db.get_value('Client Side Scripting',self.client_side_document,['first_name','last_name'])
	# 	frappe.msgprint(f"Hello my name is {firstName} {lastName}")

	# def validate(self):
	# 	frappe.db.set_value('Client Side Scripting',self.client_side_document,'first_name','Adam')

	# def validate(self):
	# 	if frappe.db.exists('Client Side Scripting','PRE0007'):
	# 		frappe.msgprint("The document PRE0007 exists in the doctype")
	# 	else:
	# 		frappe.msgprint("The document PRE0007 exists in the doctype")

	# def validate(self):
	# 	# frappe.db.count(doctype,filters)
	# 	count = frappe.db.count('Client Side Scripting',{'enable':1})
	# 	frappe.msgprint(f"The total documents with enabled are {count}")

	# def validate(self):
	# 	data = frappe.db.sql("SELECT first_name,last_name FROM `tabClient Side Scripting` WHERE enable=1",
	# 	as_dict=1)

	# 	for i in data:
	# 		frappe.msgprint(f"My full name is {i.first_name} {i.last_name}")
