class WinesController < ApplicationController
    skip_before_action :confirm_authentication, only: [:index, :show, :create]
    before_action :find_wine, only: [:update]

    def index
        render json: Wine.all, status: :ok
    end
     
    def show
        wine = Wine.find(params[:id])
        render json: wine,  status: :ok
    end
 
    def create
         wine = current_user.wines.create!(wine_params)        
         render json: wine, status: :created
    end
   
    def update    
        @wine.update!(wine_params)
         render json: @wine, status: :accepted        
    end

     private 

    def find_wine
        @wine = current_user.wines.find_by_id(params[:id])
        if !@wine
            render json:{ error: "Not authorized" }, status: :unauthorized
        end
    end

    def wine_params
        params.permit(:name, :winery, :vintage, :region, :grape, :wine_type, :img_url)
    end
 
end
