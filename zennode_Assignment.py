product_A=20
product_B=40
product_C=50
pro_l=["product_A","product_B","product_C"]
quantity_A=int(input("enter the quantity of product A "))
quantity_B=int(input("enter the quantity of product B "))
quantity_C=int(input("enter the quantity of product C "))
q_l=[quantity_A,quantity_B,quantity_C]
final=[]
total_quantity=quantity_A+quantity_B+quantity_C
price_A=product_A*quantity_A
price_B=product_B*quantity_B
price_C=product_C*quantity_C
total=0
price_lt=[price_A,price_B,price_C]
for i in price_lt:
    total=total+i
if total_quantity>20:
    total2=total-(total)*10/100
    final.append((total2,"bulk_10_discount"))
if total>200:
    total1=total-10
    final.append((total1,"flat_10_discount"))
if total_quantity>30 and (quantity_A>15 or quantity_B>15 or quantity_C>15):
    largest_quantity=0
    for x in q_l:
        if x>15:
            largest_quantity=q_l.index(x)
    price_lt[largest_quantity]=(price_lt[largest_quantity])-price_lt[largest_quantity]*50/100
    total3=0
    for j in price_lt:
        total3=total3+j
    
    final.append((total3,"tiered_50_discount"))
bulk5 = [price * 0.95 if quantity > 10 else price for price, quantity in zip([price_A, price_B, price_C], [quantity_A, quantity_B, quantity_C])]
total4=0
for l in bulk5:
    total4=total4+l
final.append((total4,"bulk_5_discount"))
final.sort()

fin_dis_price=final[0]
final_price=fin_dis_price[0]
shipping_fee=0
shipping_pack=total_quantity/10
if shipping_pack==int(shipping_pack):
    shipping_fee=shipping_pack*5
else:
    shipping_fee=(int(shipping_pack)+1)*5
result_lines = []

for product, quantity, price in zip(pro_l, q_l, price_lt):
    result_lines.append(f"{product}, {quantity}, {price}")

result = '\n'.join(result_lines)
print(result)
wrap_fee=1
total_wrap_fee=0
wrap_list=[]
for product, quantity in zip(pro_l, q_l):
    wrap = input(f"Do you need to wrap {product}? (yes/no): ").lower()
    if wrap=="yes":
        wrap_list.append((quantity*wrap_fee))
for q in wrap_list:
    total_wrap_fee=total_wrap_fee+q

print("sub total $",total)
print("discount applied is",fin_dis_price[1],", the discount amount is",total-fin_dis_price[0],"discounted Amt of the Purchase",fin_dis_price[0])
print("the shipping fee for the product is $",shipping_fee)
print("the gift wrapping fee is $",total_wrap_fee)
total_bill=final_price+shipping_fee+total_wrap_fee
print("the total bill after discount is $",total_bill)
    
    

