# joint-expenses-calculator

#### This is an incredibly basic MVP implementation. Don't expect anything fancy.

A simple calculator for joint household expenses, based on each person's income.

This provides a percentage-based approach to expense contribution, rather than the more common 50:50 split, which does not account fairly for disproportional differences in income.

Formulas are as follows, and based on yearly gross (pre-tax) income:

`(a / (a + b))` = your contribution to household income per year as a percentage.  
`(b / (a + b))` = your partner's contribution to household income per year as a percentage.

`(x * z)` = your share of the monthly expenses.  
`(z * z)` = your partner's share of the monthly expenses.

Where:  

a = your yearly gross salary.  
b = your partner's yearly gross salary. 

x = Your percentage of household income.  
y = Your partners percentage of household income.  
z = Total monthly household expenses.  
