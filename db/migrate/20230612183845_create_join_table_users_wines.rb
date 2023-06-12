class CreateJoinTableUsersWines < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :wines do |t|
      # t.index [:user_id, :wine_id]
      # t.index [:wine_id, :user_id]
    end
  end
end
