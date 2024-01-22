# Zennode-Assignment
ZENNODE  ASSIGNMENT
STEPS TO EXECUTE :
•	Open python idle or any other editor supports python.
•	Drag the code and paste it over the code space.
•	Run the editor .
•	Enter the quantity values of product A, product B and product C.
•	The editor will display the product name ,quantity and its price .
•	The editor will ask whether gift wrap is needed for all the 3 products separately If you type yes wrap fee will be calculated.
•	Subtotals will be displayed (sum all 3 products).
•	Then it will display the discount name, which is applied ,discount amount which will be reduced from total and the reduced amount after discount.
•	The shipping fee will be displayed based on the total number of units.
•	Gift wrap fee will be displayed.
•	Then the total bill amount after adding all the charges will be displayed.
EXECUTION PROCESS:
•	Product, quantity and the price will be stored in a separate list named p_l,q_l and price_lt.
•	Price_lt contains the initial subtotal of all the 3 products(without any discount)
•	 total will be calculated from price_lt list by iterating in a for loop.
•	“Bulk_10_discount” condition is checked if satisfied a new total named “total2” is calculated and appended to the new list called final.
•	Similarly, “flat_10_discount “is calculated if satisfied a new total “total1” is appended to the list final
•	Similarly, for “tiered_50_discount” is checked and appended to the list final.
•	Then “bulk_5_discount” is checked and appended to the list final.
•	All the above discount is appended to the list in the form of tuple which contains the discount price along with its name
•	To find the most beneficial price to the customer final list is sorted and the first element is picked out and saved as fin_dis_price.
•	To get only the discount price used inbuilt slicing 
Operation with the tuple.
•	Shipping fee is calculated by using dividing it by 10 if the answer is integer multiplied it with 5 
If it is float added one to 1 then multiplied it with 5
•	Wrap is added by check yes/no question asked earlier
•	Then output is displayed in the following format
1.	Subtotal
2.	Discount applied, discount amt and the reduced amt
3.	Shipping fee
4.	Gift wrap fee
5.	Overall total included everything.

FOR JAVASCRIPT CODE:
•	Open vs code editor or any other online editor which supports JavaScript.
•	Copy and paste the snippet into the workspace.
•	In python we used list to store product ,price and quantity here we used array.
•	As we know products A,B and C we declared it as constant.
•	And we declared all the array as also constants with the keyword const.
•	Var total_price_A is declared to store the value of product A ,similarly for other two. 
•	Initial subtotal is calculated with the help of for loop.
•	All the 4 discount conditions are evaluated with if else statements.
•	And the values of total1,total2 and total3 are pushed in to the array called as final
•	Then the array is sorted with sort() fun
•	Then shipping fee and gift wrap fee are added.
•	Then output is printed as mentioned
