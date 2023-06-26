class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :age
      t.string :location
      t.string :favorite_varietal
      t.string :password_digest
      t.integer :wine_id

      t.timestamps
    end
  end
end
