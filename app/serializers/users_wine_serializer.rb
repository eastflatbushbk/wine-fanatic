class UsersWineSerializer < ActiveModel::Serializer
  attributes :id, :wine_id, :quantity, :user_id
 
end
