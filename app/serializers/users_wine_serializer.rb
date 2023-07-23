class UsersWineSerializer < ActiveModel::Serializer
  attributes :id, :wine_id, :quantity, :user_id
  # belongs_to :user
  # belongs_to :wine
end
