class UsersWineSerializer < ActiveModel::Serializer
  attributes :id, :wine_id, :quantity
  belongs_to :user
  # belongs_to :wine
end
