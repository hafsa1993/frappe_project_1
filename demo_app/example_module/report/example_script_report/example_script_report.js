// Copyright (c) 2023, hafsa and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Example Script Report"] = {
	"filters": [
		{
			"fieldname":"name",
			"label" :_("Server Side Scripting"),
			"fieldtype":"Link",
			"options":"Server Side Scripting"
		},
		{
			"fieldname":"age",
			"label" :_("Age"),
			"fieldtype":"Data"
		}
	]
};
