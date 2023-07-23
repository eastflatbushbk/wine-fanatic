class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :location, :favorite_varietal, :password_digest
  # has_many :users_wines
end
