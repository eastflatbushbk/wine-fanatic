class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :location, :favorite_varietal, :password_digest
 
end
