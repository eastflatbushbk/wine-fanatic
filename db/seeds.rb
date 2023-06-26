# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
# UsersWine.destroy_all
Wine.destroy_all
User.destroy_all

user1 = User.create(username: 'Rob_blue', password: 'goblue',  age: 33, location: 'Brooklyn',favorite_varietal: 'Pinot Noire')
user2 = User.create(username: 'Red4ever', password: 'goreds', age: 23, location: 'St Louis',favorite_varietal: 'Malbec')
user3 = User.create(username: 'Oldtimer', password: 'hoping',  age: 55, location: 'Memphis',favorite_varietal: 'petit Verdot')
user4 = User.create(username: 'meagan_ra_pinot', password: 'letsgo',  age: 22, location: 'Chicago',favorite_varietal: 'pinot Gris')
user5 = User.create(username: 'Jessie', password: 'goleeds',  age: 43, location: 'Los Angeles',favorite_varietal: 'merlot')

wine1 = Wine.create(user_id: user1.id, name: "The pinot project", winery: "The Pinot Project Winery", vintage: 2020, region: "California", grape: "Pinot Noire",
         varietal_wine: true, wine_type: "Red wine", 
         img_url: "https://images.gotoliquorstore.com/product/1000009644/693acf32-fd12-4456-a359-47d580bc206c_1000.jpg")
wine2 = Wine.create(user_id: user2.id, name: "Trivento Golden Reserve Malbec", winery: "Trivento winery", vintage: 2018, region: "Argentina", grape: "Malbec",
         varietal_wine: true, wine_type: "Red wine", 
         img_url: "https://cdn11.bigcommerce.com/s-u9ww3di/images/stencil/1280x1280/products/7321/15307/trivento_golden_reserve_malbec_2018__63815.1621895126.png?c=2?imbypass=on")
wine3 = Wine.create(user_id: user3.id, name: "Bogle Vineyards 2017 Cabernet Sauvignon", winery: "Bogle Vineyards", vintage: 2017, region: "California", grape: " Bordeaux varietals",
         varietal_wine: false, wine_type: "Red wine", 
         img_url: "https://cdn11.bigcommerce.com/s-u9ww3di/images/stencil/1280x1280/products/6847/13294/bogle_cab_2017_1__57030.1587512444.png?c=2?imbypass=on")
wine4 = Wine.create(user_id: user4.id, name: "Chateau Ste. Michelle Riesling", winery: "Chateau Ste. Michelle winery", vintage: 2021, region: "Columbia Valley, Washington", grape: "Riesling",
         varietal_wine: true, wine_type: "white", 
         img_url: "https://cdn.ct-static.com/labels/d008830e-b237-46aa-a550-945ae337e80b.jpg")
wine5 = Wine.create(user_id: user5.id, name: "Covalli Barolo", winery: "Covalli Winery", vintage: 2017, region: "Piemont, Italy", grape: "Nebbiolo",
         varietal_wine: true, wine_type: "Red wine", 
         img_url: "https://cdn.ct-static.com/labels/0e4c8d1d-bea7-4579-829e-ad4064b0623e.jpg")

review1 = Review.create(user_id: user1.id, wine_id: wine3.id, comment: "awesome wine!!! i'll a case oif these!")
review2 = Review.create(user_id: user5.id, wine_id: wine3.id, comment: "taste great !! ")
review3 = Review.create(user_id: user2.id, wine_id: wine5.id, comment: "great wine !! taste great with a nice steak!!")
review4 = Review.create(user_id: user3.id, wine_id: wine3.id, comment: "wine me please!!")
review5 = Review.create(user_id: user4.id, wine_id: wine1.id, comment: "i need me a bottle asap!!")
review6 = Review.create(user_id: user2.id, wine_id: wine2.id, comment: "You had me at malbec!")
review7 = Review.create(user_id: user1.id, wine_id: wine2.id, comment: "Studies have shown that red wine consumption seems to lower the risk of several diseases, including heart disease and break-up heartaches")
review8 = Review.create(user_id: user5.id, wine_id: wine4.id, comment: "You cant sip with us")
review9 = Review.create(user_id: user4.id, wine_id: wine4.id, comment: "Here for the right riesling.")
review10 = Review.create(user_id: user3.id, wine_id: wine4.id, comment: "Time to wine down!!")
review11 = Review.create(user_id: user1.id, wine_id: wine4.id, comment: "Sip, sip, hooray.")

# userswine1 = UsersWine.create(user_id: user1.id, wine_id: wine1.id, quantity: 3)
# userswine2 = UsersWine.create(user_id: user2.id, wine_id: wine2.id, quantity: 2)
# userswine3 = UsersWine.create(user_id: user3.id, wine_id: wine3.id, quantity: 4)
# userswine4 = UsersWine.create(user_id: user4.id, wine_id: wine4.id, quantity: 5)
# userswine5 = UsersWine.create(user_id: user5.id, wine_id: wine5.id, quantity: 8)
