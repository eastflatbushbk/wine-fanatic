class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :winery, :vintage, :region, :grape, :wine_type, :img_url, :user_id, :author
  has_many :reviews
  # has_many :users_wines
  def author
    {
     
      username: object.author.username,
      
    }
  end
  # def created_at
  #   object.created_at.to_i
  # end

  # def updated_at
  #   object.updated_at.to_i
  # end

  # def reviews
  #   reviews = []
  #   object.reviews.each do |review|
  #     reviews << {
  #       id: review.id,
  #       comment: review.comment,
  #       user_id: review.user_id,
  #       created_at: review.created_at.to_i,
  #       updated_at: review.updated_at.to_i,
  #     }
  #   end
  #   reviews
  # end
end
