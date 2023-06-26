class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :winery, :vintage, :region, :grape, :varietal_wine, :wine_type, :img_url, :user_id, :author
  has_many :reviews
  has_many :users_wines
  def author
    {
     
      username: object.author.username,
      
    }
  end
end
