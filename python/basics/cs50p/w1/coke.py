price = 50
print("You owe 50 cents")

while price > 0:
    payment = int(input("Insert Coin: "))
    if payment == 5 or payment == 10 or payment == 25 :
        price -= payment
        print(f"You paid {payment}")
        print(f"Balance: {price} cents")
    else :
        print("Enter Valid Coin")
        print(f"Amount Owed {price}")


print("You Paid off your coke")
    
