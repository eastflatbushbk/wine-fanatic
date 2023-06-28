class CreateJoinTableUsersWines < ActiveRecord::Migration[6.1]
  def change
    # create_join_table :users, :wines do |t|
    #   t.integer :quantity
    #   t.index [:user_id, :wine_id]
    #   t.index [:wine_id, :user_id]
    # end
    create_table :users_wines, id: :integer do |t|
      t.integer :user_id
      t.integer :wine_id
      t.integer :quantity
    
      t.timestamps
    end
  end
end
