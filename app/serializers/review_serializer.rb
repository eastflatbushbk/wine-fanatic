class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :username
  belongs_to :wine  
  belongs_to :user  
  def username
     object.user.username
  end
end
