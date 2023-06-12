class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :winery, :vintage, :region, :grape, :varietal_wine, :type, :img_url
end
