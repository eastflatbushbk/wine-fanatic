class CreateWines < ActiveRecord::Migration[6.1]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :winery
      t.integer :vintage
      t.string :region
      t.string :grape
      t.string :wine_type
      t.string :img_url
      t.integer :user_id

      t.timestamps
    end
  end
end
