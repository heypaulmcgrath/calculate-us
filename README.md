# joint-expenses-calculator

A simple calculator for joint household expenses, based on each person's income.

This provides a percentage-based approach to expense contribution, rather than the more common 50:50 split, which does not account fairly for disproportional differences in income.

Formulas are as follows, and based on yearly gross (pre-tax) income:

`(a / (a + b))` = your contribution to household income per year as a percentage.  
`(b / (a + b))` = your partner's contribution to household income per year as a percentage.

Where:  
a = your yearly gross salary.  
b = your partner's yearly gross salary. 

`(x * z)` = your percentage of the monthly expenses.  
`(z * z)` = your partner's percentage of the monthly expenses.

Where:  
x = your_percentage_of_household_income.  
y = your_partners_percentage_of_household_income.
z = total_monthly_household_expenses.  
