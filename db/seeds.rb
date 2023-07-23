# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🗑️ Destroy tables..."
UsersWine.delete_all
Review.destroy_all
Wine.destroy_all
User.destroy_all

puts "🌱 Seeding users..."
user1 = User.create(username: 'Rob_blue', password: 'goblue',  age: 33, location: 'Brooklyn',favorite_varietal: 'Pinot Noire')
user2 = User.create(username: 'Red4ever', password: 'goreds', age: 23, location: 'St Louis',favorite_varietal: 'Malbec')
user3 = User.create(username: 'Oldtimer', password: 'hoping',  age: 55, location: 'Memphis',favorite_varietal: 'petit Verdot')
user4 = User.create(username: 'meagan_ra_pinot', password: 'letsgo',  age: 22, location: 'Chicago',favorite_varietal: 'pinot Gris')
user5 = User.create(username: 'Jessie', password: 'goleeds',  age: 43, location: 'Los Angeles',favorite_varietal: 'merlot')


puts "🌱 Seeding wines..."
wine1 = Wine.create(user_id: user1.id, name: "The pinot project", winery: "The Pinot Project Winery", vintage: 2020, region: "California", grape: "Pinot Noire",
         wine_type: "red", 
         img_url: "https://images.gotoliquorstore.com/product/1000009644/693acf32-fd12-4456-a359-47d580bc206c_1000.jpg")
wine2 = Wine.create(user_id: user2.id, name: "Trivento Golden Reserve Malbec", winery: "Trivento winery", vintage: 2018, region: "Argentina", grape: "Malbec",
         wine_type: "red", 
         img_url: "https://cdn11.bigcommerce.com/s-u9ww3di/images/stencil/1280x1280/products/7321/15307/trivento_golden_reserve_malbec_2018__63815.1621895126.png?c=2?imbypass=on")
wine3 = Wine.create(user_id: user3.id, name: "Bogle Vineyards 2017 Cabernet Sauvignon", winery: "Bogle Vineyards", vintage: 2017, region: "California", grape: " Bordeaux varietals",
          wine_type: "red", 
         img_url: "https://cdn11.bigcommerce.com/s-u9ww3di/images/stencil/1280x1280/products/6847/13294/bogle_cab_2017_1__57030.1587512444.png?c=2?imbypass=on")
wine4 = Wine.create(user_id: user4.id, name: "Chateau Ste. Michelle Riesling", winery: "Chateau Ste. Michelle winery", vintage: 2021, region: "Columbia Valley, Washington", grape: "Riesling",
         wine_type: "white", 
         img_url: "https://cdn.ct-static.com/labels/d008830e-b237-46aa-a550-945ae337e80b.jpg")
wine5 = Wine.create(user_id: user5.id, name: "Covalli Barolo", winery: "Covalli Winery", vintage: 2017, region: "Piemont, Italy", grape: "Nebbiolo",
          wine_type: "red", 
         img_url: "https://cdn.ct-static.com/labels/0e4c8d1d-bea7-4579-829e-ad4064b0623e.jpg")

   puts "🌱 Seeding reviews..."
review1 = Review.create(user_id: user1.id, wine_id: wine3.id, comment: "awesome wine!!! i'll a case oif these!")
review2 = Review.create(user_id: user5.id, wine_id: wine3.id, comment: "taste great !!Bogle Vineyards 2017 Cabernet Sauvignon is an exceptional wine that is sure to delight any wine lover. The wine has a deep, rich color and a complex aroma that is both fruity and spicy. On the palate, the wine is full-bodied and well-balanced with flavors of blackberry, cherry, and vanilla. The tannins are firm but not overpowering, and the finish is long and smooth. Overall, Bogle Vineyards 2017 Cabernet Sauvignon is a fantastic wine that is perfect for any occasion. ")
review3 = Review.create(user_id: user2.id, wine_id: wine5.id, comment: "great wine !! taste great with a nice steak!! Covalli Barolo is a wine that is made from Nebbiolo grapes grown in the Piedmont region of Italy. The 2017 Covalli Barolo DOCG is a classically styled wine that shows the tightrope balance of concentration and buoyancy that we love to find in a Barolo. It brings all the power and grace we expect from Piedmont’s signature wine, making it the perfect bottle for anyone who loves elegant, soulful reds1. The wine has a deep ruby color and aromas of dark fruit, leather, and spice. On the palate, it is full-bodied with flavors of black cherry, plum, and licorice. The tannins are firm but not overpowering, and the finish is long and smooth.

The 2016 Covalli Nebbiolo (Barolo) has a rating of 91 points on Wine Enthusiast. Nebbiolo produces wines with tannic and acidic qualities that can also have fairly high alcohol content. This combination makes the distinguished and cellar-worthy wines of Barolo and Barberesco some of the most sought-after.

Overall, Covalli Barolo is an excellent wine that is sure to impress even the most discerning wine connoisseur. It is perfect for pairing with hearty meat dishes or aged cheeses")
review4 = Review.create(user_id: user3.id, wine_id: wine3.id, comment: "wine me please!!Bogle Vineyards 2017 Cabernet Sauvignon is a wine that is sure to impress even the most discerning wine connoisseur. The wine has a deep, rich color and a complex aroma that is both fruity and spicy. On the palate, the wine is full-bodied and well-balanced with flavors of blackberry, cherry, and vanilla. The tannins are firm but not overpowering, and the finish is long and smooth. Overall, Bogle Vineyards 2017 Cabernet Sauvignon is a fantastic wine that is perfect for any occasion.")
review5 = Review.create(user_id: user4.id, wine_id: wine1.id, comment: "i need me a bottle asap!! The Pinot Project Pinot Noir is a California wine that is hand-crafted from grapes grown in notable AVA’s such as Sonoma County, Carneros & Monterey. It has a full and silky mouth feel, with just the right amount of acidity to complement a variety of dishes1. The Pinot Project Pinot Noir 2019 is very balanced, has a chewy fruit core and great acidity. It has all the characteristics that define the state’s broad style. Chill this bottle for twenty minutes, and sip it with a big o’l juicy burger.

According to Wine Enthusiast, the 2020 Pinot Noir from The Pinot Project is beautiful with fresh fruit flavors that light up this no-nonsense wine, delivering the varietal’s classic red and black cherries, along with light cinnamon nuances and a good, lightly tannic texture. It’s easy to quaff and interesting too")


puts "🌱 Seeding usersWines..."
userswine1 = UsersWine.create(user_id: user1.id, wine_id: wine1.id, quantity: 3)
userswine2 = UsersWine.create(user_id: user2.id, wine_id: wine2.id, quantity: 2)
userswine3 = UsersWine.create(user_id: user3.id, wine_id: wine3.id, quantity: 4)
userswine4 = UsersWine.create(user_id: user4.id, wine_id: wine4.id, quantity: 5)
userswine5 = UsersWine.create(user_id: user5.id, wine_id: wine5.id, quantity: 8)
