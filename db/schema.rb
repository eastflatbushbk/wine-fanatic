# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_06_12_183845) do

  create_table "reviews", force: :cascade do |t|
    t.string "comment"
    t.integer "user_id"
    t.integer "wine_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["wine_id"], name: "index_reviews_on_wine_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "age"
    t.string "location"
    t.string "favorite_varietal"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users_wines", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "wine_id", null: false
    t.integer "quantity"
    t.index ["user_id", "wine_id"], name: "index_users_wines_on_user_id_and_wine_id"
    t.index ["wine_id", "user_id"], name: "index_users_wines_on_wine_id_and_user_id"
  end

  create_table "wines", force: :cascade do |t|
    t.string "name"
    t.string "winery"
    t.integer "vintage"
    t.string "region"
    t.string "grape"
    t.boolean "varietal_wine"
    t.string "type"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "reviews", "users"
  add_foreign_key "reviews", "wines"
end
