# Copyright (c) 2025, ignite and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Tenant(Document):
	def get_full_name(self):
		return f"{self.first_name} {self.last_name}"

	def validate(self):
		self.full_name = self.get_full_name()

		if self.age > 30:
			frappe.throw("Tenant age cannot be greater than 30")