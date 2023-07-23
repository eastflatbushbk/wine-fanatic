class UsersWinesController < ApplicationController
  skip_before_action :confirm_authentication, only: [:index, :show, :create]
  before_action :set_users_wine, only: [:update, :destroy]

  # GET /users_wines
  # read any users entire cellar contents
  def index
    @users_wines = UsersWine.all

    render json: @users_wines
  end

  # GET /users_wines/1
  # ???
  def show
    users_wine = UsersWine.find(params[:id])
    render json: users_wine,  status: :ok 
  end

  # POST /users_wines
  # add to cellar , wine's quatity will be 1
  def create
    
    if current_user.users_wines.exists?(wine_id: params[:wine_id])
      render json: { errors: "Wine already exists , check your cellar" }, status: :unprocessable_entity
    else
    @users_wine = current_user.users_wines.create!(users_wine_params.merge(quantity: 1))
    render json: @users_wine
  end
  
  end

  # PATCH/PUT /users_wines/1
  # update only wine's quantity 
  def update
    # @users_wine = current_user.users_wines.find_by_id(params[:wine_id])
      @users_wine.update!(users_wine_params)
      render json: @users_wine, status: :accepted

    end

  # DELETE /users_wines/1
  # remove wine from cellar
  def destroy
    @users_wine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_wine
      
      @users_wine = current_user.users_wines.find_by_id(params[:id])
      if !@users_wine
        render json:{ error: "Not authorized" }, status: :unauthorized
    end
    end

    # Only allow a list of trusted parameters through.
    def users_wine_params
      
      params.permit(:wine_id,:quantity)
    end
end
