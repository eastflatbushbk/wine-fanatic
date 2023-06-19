class CreateWines < ActiveRecord::Migration[6.1]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :winery
      t.integer :vintage
      t.string :region
      t.string :grape
      t.boolean :varietal_wine
      t.string :type
      t.string :img_url

      t.timestamps
    end
  end
end
