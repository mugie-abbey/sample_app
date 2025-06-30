// Copyright (c) 2025, ignite and contributors
// For license information, please see license.txt

frappe.ui.form.on("Tenant", {
	refresh(frm) {
        frm.add_custom_button(__("Send Message"), () => {
            frappe.call({
                method: "sample.rental.doctype.tenant.tenant.get_count",
                callback: function(r) {
                    if (r) {
                        console.log(r)
                    }
                }
            })
        })
	},
    validate(frm) {
        if (frm.doc.age > 30){
            frappe.throw("Age cannot be greater than 30 (JS)")
        }
    },
    age: function(frm) {
        if (frm.doc.age > 30){
            frappe.throw("Age cannot be greater than 30 (JS) - field")
        }

        if (frm.doc.age > 18){
            frm.set_value("adult", 1)
        }
        else {
            frm.set_value("adult", 0)
        }
    },
    has_family: function(frm) {
        if (frm.doc.has_family){
            frm.set_df_property("no_family_members", "reqd", 1)
            frm.set_df_property("no_family_members", "hidden", 0)
        }
        else {
            frm.set_df_property("no_family_members", "reqd", 0)
            frm.set_df_property("no_family_members", "hidden", 1)
        }
    }
});
