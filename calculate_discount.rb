# Discount calculator
# This program calculates the discount based on the membership level

# Problem:
# The code uses multiple if-elsif statements, making it harder to maintain if new membership levels are added.
# It’s repetitive and could be simplified using a better data structure.

def calculate_discount(membership_level)
  if membership_level == "bronze"
    return 5
  elsif membership_level == "silver"
    return 10
  elsif membership_level == "gold"
    return 15
  elsif membership_level == "platinum"
    return 20
  else
    return 0
  end
end

puts calculate_discount("gold") # 15